import { mockPosts } from '@/data/mockPosts';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, AlertTriangle } from 'lucide-react';

const SEO = () => {
  const posts = mockPosts;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">SEO</h1>
        <p className="text-sm text-muted-foreground">Visão geral dos campos SEO de cada post</p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Post</TableHead>
              <TableHead>SEO Title</TableHead>
              <TableHead>Meta Description</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => {
              const hasTitle = !!post.seoTitle?.trim();
              const hasDesc = !!post.seoDescription?.trim();
              const titleLen = post.seoTitle?.length || 0;
              const descLen = post.seoDescription?.length || 0;
              const complete = hasTitle && hasDesc;
              const titleOk = titleLen > 0 && titleLen <= 60;
              const descOk = descLen > 0 && descLen <= 160;

              return (
                <TableRow key={post.id}>
                  <TableCell>
                    <p className="text-sm font-medium text-foreground truncate max-w-[200px]">{post.title}</p>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm text-muted-foreground truncate max-w-[200px]">{post.seoTitle || '—'}</p>
                      <span className={`text-[10px] ${titleOk ? 'text-emerald-500' : 'text-amber-500'}`}>
                        {titleLen}/60
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm text-muted-foreground truncate max-w-[250px]">{post.seoDescription || '—'}</p>
                      <span className={`text-[10px] ${descOk ? 'text-emerald-500' : 'text-amber-500'}`}>
                        {descLen}/160
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {complete ? (
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200 gap-1">
                        <Check className="h-3 w-3" /> OK
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 gap-1">
                        <AlertTriangle className="h-3 w-3" /> Incompleto
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SEO;
