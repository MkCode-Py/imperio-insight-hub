import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, Eye } from 'lucide-react';
import { PostCard } from '@/components/blog/PostCard';
import { SearchBar } from '@/components/blog/SearchBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getAllPosts, getFeaturedPosts, getMostViewedPosts, getAllCategories, getPostsByCategory, formatViews } from '@/lib/blog';

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
        {/* Hero */}
        <section className="container pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-lg mx-auto text-center mb-8">
            <p className="section-label mb-2.5">Império Pharma · Editorial</p>
            <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.15] text-balance">
              Ciência, Performance<br className="hidden sm:block" /> & Saúde
            </h1>
            <p className="text-muted-foreground/80 mt-3 text-[14px] sm:text-base leading-relaxed max-w-sm mx-auto">
              Conteúdo educacional de alta qualidade sobre ergogênicos, peptídeos, emagrecimento e protocolos.
            </p>
          </div>

          <SearchBar className="max-w-lg mx-auto mb-10" />

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
        </section>

        {/* Categories */}
        <section className="py-12 sm:py-16 border-t border-border/30">
          <div className="container">
            <p className="section-label mb-2">Explore</p>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Categorias</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {categories.map((cat) => {
                const postCount = getPostsByCategory(cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    to={`/categoria/${cat.slug}`}
                    className="group relative rounded-lg overflow-hidden aspect-[3/2] sm:aspect-[4/3] imperio-card-hover"
                  >
                    <img
                      src={cat.coverImage}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-white font-bold text-base drop-shadow-sm">{cat.name}</h3>
                      <p className="text-white/60 text-[11px] mt-0.5">{postCount} {postCount === 1 ? 'post' : 'posts'}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 sm:py-16 border-t border-border/30">
          <div className="container">
            <p className="section-label mb-2">Últimas publicações</p>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">Recentes</h2>
              <Link to="/busca" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                Ver todos <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Viewed + Guides */}
        <section className="py-12 sm:py-16 border-t border-border/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <p className="section-label mb-2">Ranking</p>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4.5 w-4.5 text-accent" /> Mais Vistos
                  </h2>
                  <Link to="/mais-vistos" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    Ver ranking <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="space-y-1.5">
                  {mostViewed.map((post, i) => (
                    <Link
                      key={post.id}
                      to={`/post/${post.slug}`}
                      className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-3xl font-black text-accent/15 w-8 text-center shrink-0 tabular-nums">{i + 1}</span>
                      <img src={post.coverImage} alt={post.title} className="w-11 h-11 rounded-md object-cover shrink-0" loading="lazy" />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[13px] font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <Eye className="h-3 w-3" />
                          <span>{formatViews(post.uniqueViews)}</span>
                          <span className="text-border">·</span>
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="section-label mb-2">Conteúdo aprofundado</p>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <BookOpen className="h-4.5 w-4.5 text-accent" /> Guias
                  </h2>
                  <Link to="/guias" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    Ver todos <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="divide-y divide-border/40 bg-card rounded-lg border border-border/40 px-3">
                  {(guidePosts.length > 0 ? guidePosts.slice(0, 4) : allPosts.slice(0, 4)).map((post) => (
                    <PostCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store CTA */}
        <section className="py-12 sm:py-16 border-t border-border/30">
          <div className="container">
            <div className="relative rounded-xl overflow-hidden p-6 sm:p-10 imperio-gradient text-primary-foreground text-center">
              <div className="relative z-10 max-w-md mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  Visite a Loja Império Pharma
                </h2>
                <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
                  Encontre os melhores produtos com qualidade garantida e entrega em todo o Paraguai.
                </p>
                <a
                  href="#loja"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
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
