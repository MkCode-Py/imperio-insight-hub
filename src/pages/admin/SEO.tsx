import { mockPosts } from '@/data/mockPosts';
import { Badge } from '@/components/ui/badge';
import { Check, AlertTriangle } from 'lucide-react';

const SEO = () => {
  const posts = mockPosts;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">SEO</h1>
        <p className="text-sm text-muted-foreground">Visão geral dos campos SEO de cada post</p>
      </div>

      {/* Mobile: cards */}
      <div className="md:hidden space-y-2">
        {posts.map((post) => {
          const hasTitle = !!post.seoTitle?.trim();
          const hasDesc = !!post.seoDescription?.trim();
          const complete = hasTitle && hasDesc;
          const titleLen = post.seoTitle?.length || 0;
          const descLen = post.seoDescription?.length || 0;

          return (
            <div key={post.id} className="p-3 rounded-xl border border-border bg-card space-y-2">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-foreground line-clamp-2">{post.title}</p>
                {complete ? (
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200 gap-1 shrink-0 text-[10px]">
                    <Check className="h-3 w-3" /> OK
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 gap-1 shrink-0 text-[10px]">
                    <AlertTriangle className="h-3 w-3" /> !
                  </Badge>
                )}
              </div>
              <div className="text-xs text-muted-foreground space-y-0.5">
                <p className="truncate">Title: {post.seoTitle || '—'} <span className={titleLen <= 60 ? 'text-emerald-500' : 'text-amber-500'}>({titleLen}/60)</span></p>
                <p className="truncate">Desc: {post.seoDescription || '—'} <span className={descLen <= 160 ? 'text-emerald-500' : 'text-amber-500'}>({descLen}/160)</span></p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block rounded-xl border border-border bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 font-medium text-muted-foreground min-w-[180px]">Post</th>
              <th className="text-left p-3 font-medium text-muted-foreground">SEO Title</th>
              <th className="text-left p-3 font-medium text-muted-foreground">Meta Description</th>
              <th className="text-center p-3 font-medium text-muted-foreground w-24">Status</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              const hasTitle = !!post.seoTitle?.trim();
              const hasDesc = !!post.seoDescription?.trim();
              const complete = hasTitle && hasDesc;
              const titleLen = post.seoTitle?.length || 0;
              const descLen = post.seoDescription?.length || 0;

              return (
                <tr key={post.id} className="border-b border-border last:border-0">
                  <td className="p-3"><p className="font-medium text-foreground truncate max-w-[200px]">{post.title}</p></td>
                  <td className="p-3">
                    <p className="text-muted-foreground truncate max-w-[200px]">{post.seoTitle || '—'}</p>
                    <span className={`text-[10px] ${titleLen > 0 && titleLen <= 60 ? 'text-emerald-500' : 'text-amber-500'}`}>{titleLen}/60</span>
                  </td>
                  <td className="p-3">
                    <p className="text-muted-foreground truncate max-w-[250px]">{post.seoDescription || '—'}</p>
                    <span className={`text-[10px] ${descLen > 0 && descLen <= 160 ? 'text-emerald-500' : 'text-amber-500'}`}>{descLen}/160</span>
                  </td>
                  <td className="p-3 text-center">
                    {complete ? (
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200 gap-1">
                        <Check className="h-3 w-3" /> OK
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 gap-1">
                        <AlertTriangle className="h-3 w-3" /> Incompleto
                      </Badge>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SEO;
