import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { PostCard } from '@/components/blog/PostCard';
import { getCategoryBySlug, getPostsByCategory } from '@/lib/blog';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  const [contentTypeFilter, setContentTypeFilter] = useState<string>('all');

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
          <Link to="/"><Button>Voltar ao início</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allPosts = getPostsByCategory(category.id);
  const contentTypes = [...new Set(allPosts.map((p) => p.contentType))];
  const posts = contentTypeFilter === 'all' ? allPosts : allPosts.filter((p) => p.contentType === contentTypeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative h-40 sm:h-52 overflow-hidden">
        <img src={category.coverImage} alt={category.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-6">
          <Breadcrumbs items={[{ label: category.name }]} />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">{category.name}</h1>
          <p className="text-muted-foreground text-sm mt-1 max-w-lg">{category.description}</p>
        </div>
      </div>

      <main className="container py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge
            variant={contentTypeFilter === 'all' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setContentTypeFilter('all')}
          >
            Todos ({allPosts.length})
          </Badge>
          {contentTypes.map((ct) => (
            <Badge
              key={ct}
              variant={contentTypeFilter === ct ? 'default' : 'outline'}
              className="cursor-pointer capitalize"
              onClick={() => setContentTypeFilter(ct)}
            >
              {ct}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Nenhum post encontrado nesta categoria.</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
