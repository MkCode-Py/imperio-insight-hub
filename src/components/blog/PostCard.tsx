import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';
import { Post } from '@/types/blog';
import { getCategory, getTag, formatDate, formatViews } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  const primaryCategory = post.categories[0] ? getCategory(post.categories[0]) : null;

  if (variant === 'compact') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex items-start gap-3 py-3 px-1">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-12 h-12 rounded-md object-cover shrink-0"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors leading-snug">
            {post.title}
          </h4>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className="group flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden bg-card border border-border/40 imperio-card-hover">
        <Link to={`/post/${post.slug}`} className="w-full sm:w-44 h-36 sm:h-auto shrink-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </Link>
        <div className="flex flex-col justify-center p-4 sm:py-4 sm:pr-5 sm:pl-5 min-w-0 flex-1">
          {primaryCategory && (
            <span className="section-label mb-1.5">{primaryCategory.name}</span>
          )}
          <Link to={`/post/${post.slug}`}>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors leading-snug text-[14px]">
              {post.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1.5 leading-relaxed">{post.summary}</p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {post.tags.slice(0, 3).map((tagId) => {
              const tag = getTag(tagId);
              if (!tag) return null;
              return (
                <Link key={tag.id} to={`/tag/${tag.slug}`} onClick={(e) => e.stopPropagation()}>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-border/60 hover:bg-accent/8 hover:text-accent transition-colors">
                    {tag.name}
                  </Badge>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span>{formatDate(post.publishDate)}</span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/post/${post.slug}`} className="group relative block rounded-lg overflow-hidden imperio-card-hover aspect-[3/2] sm:aspect-[16/9]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          {primaryCategory && (
            <span className="inline-block mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white bg-accent/90 px-2 py-0.5 rounded">
              {primaryCategory.name}
            </span>
          )}
          <h3 className="text-white font-bold text-base sm:text-lg leading-tight line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/60 text-sm line-clamp-2 mt-1.5 hidden sm:block leading-relaxed">{post.subtitle}</p>
          <div className="flex items-center gap-3 mt-2.5 text-[11px] text-white/50">
            <span>{formatDate(post.publishDate)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <div className="group flex flex-col rounded-lg overflow-hidden bg-card border border-border/40 imperio-card-hover">
      <Link to={`/post/${post.slug}`} className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {post.featured && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-white bg-accent/90 px-2 py-0.5 rounded">
            Destaque
          </span>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-4">
        {primaryCategory && (
          <span className="section-label mb-2">{primaryCategory.name}</span>
        )}
        <Link to={`/post/${post.slug}`}>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors leading-snug text-[14px] sm:text-[15px]">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 flex-1 leading-relaxed">{post.summary}</p>
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border/40 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
          <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
        </div>
      </div>
    </div>
  );
}
