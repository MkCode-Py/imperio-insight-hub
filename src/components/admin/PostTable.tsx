import { Link } from 'react-router-dom';
import { Edit, Trash2, Copy, Eye, MoreVertical } from 'lucide-react';
import { Post } from '@/types/blog';
import { getCategory, formatViews, formatDate } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const statusColors: Record<string, string> = {
  published: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  draft: 'bg-muted text-muted-foreground border-border',
  scheduled: 'bg-amber-500/10 text-amber-600 border-amber-200',
};

const statusLabels: Record<string, string> = {
  published: 'Publicado',
  draft: 'Rascunho',
  scheduled: 'Agendado',
};

function MobilePostCard({ post, onDelete }: { post: Post; onDelete?: (id: string) => void }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
      <img src={post.coverImage} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-foreground line-clamp-2 leading-tight">{post.title}</p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <Badge variant="outline" className={`${statusColors[post.status]} text-[10px] px-1.5 py-0`}>
            {statusLabels[post.status]}
          </Badge>
          <span className="text-[11px] text-muted-foreground">{formatViews(post.uniqueViews)} views</span>
          <span className="text-[11px] text-muted-foreground">{formatDate(post.publishDate)}</span>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link to={`/post/${post.slug}`} target="_blank" className="gap-2">
              <Eye className="h-3.5 w-3.5" /> Ver
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`/admin/posts/${post.id}`} className="gap-2">
              <Edit className="h-3.5 w-3.5" /> Editar
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast.success('Post duplicado (mock)')} className="gap-2">
            <Copy className="h-3.5 w-3.5" /> Duplicar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDelete?.(post.id)} className="gap-2 text-destructive focus:text-destructive">
            <Trash2 className="h-3.5 w-3.5" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function PostTable({ posts, onDelete }: { posts: Post[]; onDelete?: (id: string) => void }) {
  return (
    <>
      {/* Mobile: cards */}
      <div className="md:hidden space-y-2">
        {posts.map((post) => (
          <MobilePostCard key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[250px]">Título</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img src={post.coverImage} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground truncate">/{post.slug}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[post.status]}>
                    {statusLabels[post.status]}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {post.categories.map((c) => getCategory(c)?.name).filter(Boolean).join(', ')}
                </TableCell>
                <TableCell className="text-right text-sm font-medium">{formatViews(post.uniqueViews)}</TableCell>
                <TableCell className="text-sm text-muted-foreground whitespace-nowrap">{formatDate(post.publishDate)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link to={`/post/${post.slug}`} target="_blank">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-3.5 w-3.5" /></Button>
                    </Link>
                    <Link to={`/admin/posts/${post.id}`}>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-3.5 w-3.5" /></Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.success('Post duplicado (mock)')}>
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => onDelete?.(post.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
