import { useSearchParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PostCard } from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { searchPosts, getAllPosts, getAllCategories, getCategory } from '@/lib/blog';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'views'>('recent');
  const categories = getAllCategories();

  const results = useMemo(() => {
    let posts = query.trim() ? searchPosts(query) : getAllPosts();
    if (categoryFilter !== 'all') posts = posts.filter((p) => p.categories.includes(categoryFilter));
    if (sortBy === 'views') posts = [...posts].sort((a, b) => b.uniqueViews - a.uniqueViews);
    return posts;
  }, [query, categoryFilter, sortBy]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value) setSearchParams({ q: value });
    else setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">Buscar</h1>

        <div className="relative max-w-xl mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar posts..."
            className="pl-10 h-12 text-base"
            autoFocus
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant={categoryFilter === 'all' ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setCategoryFilter('all')}>
            Todas
          </Badge>
          {categories.map((cat) => (
            <Badge key={cat.id} variant={categoryFilter === cat.id ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setCategoryFilter(cat.id)}>
              {cat.name}
            </Badge>
          ))}
          <span className="mx-2 text-border">|</span>
          <Badge variant={sortBy === 'recent' ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setSortBy('recent')}>
            Recentes
          </Badge>
          <Badge variant={sortBy === 'views' ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setSortBy('views')}>
            Mais vistos
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{results.length} resultado(s)</p>

        <div className="space-y-3">
          {results.map((post) => (
            <PostCard key={post.id} post={post} variant="horizontal" />
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">Nenhum resultado encontrado.</p>
            <p className="text-sm text-muted-foreground mb-4">Tente explorar nossas categorias:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/categoria/${cat.slug}`}>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent/10 hover:text-accent transition-colors">
                    {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
