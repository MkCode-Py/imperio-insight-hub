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
import { getPostBySlug, getRelatedPosts, getCategory, getTag, formatDate, formatViews, getAllPosts } from '@/lib/blog';
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
      <div className="relative h-44 sm:h-56 lg:h-72 overflow-hidden">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <main className="container -mt-14 sm:-mt-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              ...(mainCategory ? [{ label: mainCategory.name, to: `/categoria/${mainCategory.slug}` }] : []),
              { label: post.title },
            ]}
          />

          <div className="mt-5 mb-10">
            <div className="flex flex-wrap gap-2 mb-3">
              {mainCategory && (
                <Link to={`/categoria/${mainCategory.slug}`}>
                  <span className="section-label hover:text-accent transition-colors">{mainCategory.name}</span>
                </Link>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-foreground leading-[1.2] mb-4">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{post.subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(post.publishDate)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingTime} min</span>
              <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" />{formatViews(post.uniqueViews + localViews)}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tagId) => {
                const tag = getTag(tagId);
                if (!tag) return null;
                return (
                  <Link key={tag.id} to={`/tag/${tag.slug}`}>
                    <Badge variant="outline" className="text-xs border-border/60 hover:bg-accent/8 hover:text-accent transition-colors">
                      {tag.name}
                    </Badge>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 mt-5">
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
        <div className="flex gap-10 max-w-5xl mx-auto">
          <article className="flex-1 min-w-0 max-w-3xl">
            <PostContent html={post.content} />
          </article>
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-20">
              <TableOfContents htmlContent={post.content} />
            </div>
          </aside>
        </div>

        {/* Prev/Next */}
        <div className="max-w-3xl mx-auto mt-14 flex items-stretch gap-3">
          {prevPost ? (
            <Link to={`/post/${prevPost.slug}`} className="flex-1 group p-4 rounded-lg border border-border/50 hover:border-accent/30 transition-colors bg-card">
              <span className="text-[11px] text-muted-foreground flex items-center gap-1 mb-1.5 uppercase tracking-wider font-medium"><ArrowLeft className="h-3 w-3" /> Anterior</span>
              <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">{prevPost.title}</p>
            </Link>
          ) : <div className="flex-1" />}
          {nextPost ? (
            <Link to={`/post/${nextPost.slug}`} className="flex-1 group p-4 rounded-lg border border-border/50 hover:border-accent/30 transition-colors bg-card text-right">
              <span className="text-[11px] text-muted-foreground flex items-center gap-1 justify-end mb-1.5 uppercase tracking-wider font-medium">Próximo <ArrowRight className="h-3 w-3" /></span>
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
