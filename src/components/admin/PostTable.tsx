import { Link } from 'react-router-dom';
import { Edit, Trash2, Copy, Eye } from 'lucide-react';
import { Post } from '@/types/blog';
import { getCategory, formatViews, formatDate } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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

export function PostTable({ posts, onDelete }: { posts: Post[]; onDelete?: (id: string) => void }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
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
  );
}
