import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { Post } from '@/types/blog';
import { getCategory, formatDate, formatViews } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  const primaryCategory = post.categories[0] ? getCategory(post.categories[0]) : null;

  if (variant === 'compact') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex items-start gap-3 py-3">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-16 h-16 rounded-lg object-cover shrink-0"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {post.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <Eye className="h-3 w-3" />
            <span>{formatViews(post.uniqueViews)}</span>
            <span>·</span>
            <Clock className="h-3 w-3" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex flex-col sm:flex-row gap-4 imperio-card-hover rounded-xl overflow-hidden bg-card border border-border">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full sm:w-48 h-40 sm:h-auto object-cover"
          loading="lazy"
        />
        <div className="flex flex-col justify-center p-4 sm:py-4 sm:pr-4 sm:pl-0 min-w-0 flex-1">
          {primaryCategory && (
            <Badge variant="secondary" className="w-fit mb-2 text-xs">
              {primaryCategory.name}
            </Badge>
          )}
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.summary}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span>{formatDate(post.publishDate)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/post/${post.slug}`} className="group relative block rounded-2xl overflow-hidden imperio-card-hover aspect-[16/10] sm:aspect-[16/9]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          {primaryCategory && (
            <Badge className="mb-2 bg-accent text-accent-foreground border-0 text-xs">
              {primaryCategory.name}
            </Badge>
          )}
          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/70 text-sm line-clamp-2 mt-1 hidden sm:block">{post.subtitle}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-white/60">
            <span>{formatDate(post.publishDate)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link to={`/post/${post.slug}`} className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border imperio-card-hover">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {post.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 text-xs">
            Destaque
          </Badge>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        {primaryCategory && (
          <span className="text-xs font-medium text-accent mb-1.5">{primaryCategory.name}</span>
        )}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1.5 flex-1">{post.summary}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min</span>
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{formatViews(post.uniqueViews)}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
