import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Zap, Eye } from 'lucide-react';
import { PostCard } from '@/components/blog/PostCard';
import { SearchBar } from '@/components/blog/SearchBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getAllPosts, getFeaturedPosts, getMostViewedPosts, getAllCategories, getCategory, formatViews } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const mostViewed = getMostViewedPosts(5);
  const categories = getAllCategories();
  const recentPosts = allPosts.slice(0, 6);
  const guidePosts = allPosts.filter((p) => p.contentType === 'guide');

  const heroPost = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 imperio-gradient opacity-[0.03]" />
          <div className="container pt-8 pb-12 sm:pt-12 sm:pb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <Badge variant="secondary" className="mb-3 px-3 py-1 text-xs font-medium">
                <Zap className="h-3 w-3 mr-1" /> Editorial Premium
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
                Ciência, Performance & Saúde
              </h1>
              <p className="text-muted-foreground mt-3 text-base sm:text-lg leading-relaxed">
                Conteúdo educacional de alta qualidade sobre ergogênicos, peptídeos, emagrecimento e protocolos de ciclos.
              </p>
            </div>

            <SearchBar className="max-w-xl mx-auto mb-10" />

            {/* Featured Grid */}
            {heroPost && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-3">
                  <PostCard post={heroPost} variant="featured" />
                </div>
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {secondaryFeatured.map((post) => (
                    <PostCard key={post.id} post={post} variant="featured" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Category Highlights */}
        <section className="py-10 bg-imperio-surface">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Categorias</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/categoria/${cat.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] imperio-card-hover"
                >
                  <img
                    src={cat.coverImage}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base">{cat.name}</h3>
                    <p className="text-white/60 text-xs mt-0.5 line-clamp-1 hidden sm:block">{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" /> Recentes
              </h2>
              <Link to="/busca" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Viewed + Guides side-by-side */}
        <section className="py-12 bg-imperio-surface">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Most Viewed */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" /> Mais Vistos
                  </h2>
                  <Link to="/mais-vistos" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    Ver ranking <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {mostViewed.map((post, i) => (
                    <Link
                      key={post.id}
                      to={`/post/${post.slug}`}
                      className="group flex items-center gap-4 p-3 rounded-xl bg-card border border-border imperio-card-hover"
                    >
                      <span className="text-2xl font-black text-accent/30 w-8 text-center shrink-0">{i + 1}</span>
                      <img src={post.coverImage} alt={post.title} className="w-14 h-14 rounded-lg object-cover shrink-0" loading="lazy" />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <Eye className="h-3 w-3" />
                          <span>{formatViews(post.uniqueViews)} views</span>
                          <span>·</span>
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Guides */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Guias</h2>
                  <Link to="/guias" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    Ver todos <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="space-y-1 divide-y divide-border bg-card rounded-xl border border-border p-2">
                  {guidePosts.length > 0 ? (
                    guidePosts.slice(0, 4).map((post) => (
                      <PostCard key={post.id} post={post} variant="compact" />
                    ))
                  ) : (
                    allPosts.slice(0, 4).map((post) => (
                      <PostCard key={post.id} post={post} variant="compact" />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store CTA */}
        <section className="py-16">
          <div className="container">
            <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 imperio-gradient text-primary-foreground text-center">
              <div className="relative z-10 max-w-lg mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Visite a Loja Império Pharma
                </h2>
                <p className="text-primary-foreground/80 mb-6 text-sm sm:text-base">
                  Encontre os melhores produtos com qualidade garantida e entrega em todo o Paraguai.
                </p>
                <a
                  href="#loja"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Acessar Loja <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
