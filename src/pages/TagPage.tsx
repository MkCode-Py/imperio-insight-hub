import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { PostCard } from '@/components/blog/PostCard';
import { getTagBySlug, getPostsByTag, getCategory } from '@/lib/blog';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tag = getTagBySlug(slug || '');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  if (!tag) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Tag não encontrada</h1>
          <Link to="/"><Button>Voltar ao início</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allPosts = getPostsByTag(tag.id);
  const categoriesInPosts = [...new Set(allPosts.flatMap((p) => p.categories))];
  const posts = categoryFilter === 'all' ? allPosts : allPosts.filter((p) => p.categories.includes(categoryFilter));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container pt-10 pb-4">
        <Breadcrumbs items={[{ label: 'Tags' }, { label: tag.name }]} />
        <div className="flex items-center gap-3 mt-5 mb-2">
          <div className="h-9 w-9 rounded-md bg-accent/8 flex items-center justify-center">
            <Tag className="h-4 w-4 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">{tag.name}</h1>
            <p className="text-sm text-muted-foreground">{allPosts.length} {allPosts.length === 1 ? 'post' : 'posts'}</p>
          </div>
        </div>
      </div>

      <main className="container py-6">
        {categoriesInPosts.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              variant={categoryFilter === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setCategoryFilter('all')}
            >
              Todos ({allPosts.length})
            </Badge>
            {categoriesInPosts.map((catId) => {
              const cat = getCategory(catId);
              if (!cat) return null;
              return (
                <Badge
                  key={catId}
                  variant={categoryFilter === catId ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setCategoryFilter(catId)}
                >
                  {cat.name}
                </Badge>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-muted-foreground py-16">Nenhum post encontrado com esta tag.</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TagPage;
