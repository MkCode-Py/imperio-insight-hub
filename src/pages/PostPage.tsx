import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Eye, Calendar, User } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { PostContent } from '@/components/blog/PostContent';
import { ShareWhatsApp } from '@/components/blog/ShareWhatsApp';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { useViewCounter } from '@/hooks/useViewCounter';
import { getPostBySlug, getRelatedPosts, getCategory, formatDate, formatViews, getAllPosts } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  const localViews = useViewCounter(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
          <Link to="/"><Button>Voltar ao início</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedPosts(post);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const mainCategory = post.categories[0] ? getCategory(post.categories[0]) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <main className="container -mt-16 sm:-mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              ...(mainCategory ? [{ label: mainCategory.name, to: `/categoria/${mainCategory.slug}` }] : []),
              { label: post.title },
            ]}
          />

          {/* Header */}
          <div className="mt-4 mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {mainCategory && (
                <Badge className="bg-accent/10 text-accent border-accent/20">{mainCategory.name}</Badge>
              )}
              <Badge variant="outline" className="text-xs">{post.contentType}</Badge>
              {post.featured && <Badge className="bg-imperio-gold/10 text-imperio-gold border-imperio-gold/20">Destaque</Badge>}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{post.subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(post.publishDate)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readingTime} min</span>
              <span className="flex items-center gap-1.5"><Eye className="h-4 w-4" />{formatViews(post.uniqueViews + localViews)}</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <ShareWhatsApp title={post.title} slug={post.slug} />
              {post.primaryCTA && (
                <a href={post.primaryCTA.url}>
                  <Button size="sm" className="gap-2">{post.primaryCTA.label}</Button>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content + TOC */}
        <div className="flex gap-8 max-w-5xl mx-auto">
          <article className="flex-1 min-w-0 max-w-4xl">
            <PostContent html={post.content} />
          </article>
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-20">
              <TableOfContents htmlContent={post.content} />
            </div>
          </aside>
        </div>

        {/* Prev/Next */}
        <div className="max-w-4xl mx-auto mt-12 flex items-stretch gap-4">
          {prevPost ? (
            <Link to={`/post/${prevPost.slug}`} className="flex-1 group p-4 rounded-xl border border-border hover:border-accent/30 transition-colors bg-card">
              <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><ArrowLeft className="h-3 w-3" /> Anterior</span>
              <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">{prevPost.title}</p>
            </Link>
          ) : <div className="flex-1" />}
          {nextPost ? (
            <Link to={`/post/${nextPost.slug}`} className="flex-1 group p-4 rounded-xl border border-border hover:border-accent/30 transition-colors bg-card text-right">
              <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end mb-1">Próximo <ArrowRight className="h-3 w-3" /></span>
              <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">{nextPost.title}</p>
            </Link>
          ) : <div className="flex-1" />}
        </div>

        <RelatedPosts posts={related} />
      </main>

      <Footer />
    </div>
  );
};

export default PostPage;
