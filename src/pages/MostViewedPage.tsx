import { Eye } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getMostViewedPosts, formatViews, getCategory } from '@/lib/blog';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const MostViewedPage = () => {
  const posts = getMostViewedPosts(12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">Mais Vistos</h1>
        <p className="text-muted-foreground text-sm mb-8">Ranking dos posts mais acessados do blog</p>

        <div className="space-y-3">
          {posts.map((post, i) => {
            const cat = post.categories[0] ? getCategory(post.categories[0]) : null;
            return (
              <Link
                key={post.id}
                to={`/post/${post.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border imperio-card-hover"
              >
                <span className="text-3xl font-black text-accent/20 w-10 text-center shrink-0">{i + 1}</span>
                <img src={post.coverImage} alt={post.title} className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {cat && <Badge variant="outline" className="text-[10px]">{cat.name}</Badge>}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{post.summary}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground shrink-0">
                  <Eye className="h-4 w-4" />
                  {formatViews(post.uniqueViews)}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MostViewedPage;
