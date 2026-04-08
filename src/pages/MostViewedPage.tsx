import { Eye } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getMostViewedPosts, formatViews, getCategory } from '@/lib/blog';
import { Link } from 'react-router-dom';

const MostViewedPage = () => {
  const posts = getMostViewedPosts(12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 sm:py-10">
        <p className="section-label mb-2">Ranking</p>
        <h1 className="text-xl sm:text-2xl font-extrabold text-foreground mb-1">Mais Vistos</h1>
        <p className="text-muted-foreground text-sm mb-8">Os posts mais acessados do blog</p>

        <div className="space-y-1.5">
          {posts.map((post, i) => {
            const cat = post.categories[0] ? getCategory(post.categories[0]) : null;
            return (
              <Link
                key={post.id}
                to={`/post/${post.slug}`}
                className="group flex items-center gap-4 p-3.5 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className={`text-2xl font-extrabold w-8 text-center shrink-0 tabular-nums ${i < 3 ? 'text-accent/40' : 'text-border'}`}>
                  {i + 1}
                </span>
                <img src={post.coverImage} alt={post.title} className="w-12 h-12 rounded-md object-cover shrink-0" loading="lazy" />
                <div className="min-w-0 flex-1">
                  {cat && <span className="section-label">{cat.name}</span>}
                  <h3 className="text-[13px] sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1 mt-0.5">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5 hidden sm:block">{post.summary}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground shrink-0">
                  <Eye className="h-3.5 w-3.5" />
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
