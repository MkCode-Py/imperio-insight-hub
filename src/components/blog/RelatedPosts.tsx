import { Post } from '@/types/blog';
import { PostCard } from './PostCard';

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border/40">
      <p className="section-label mb-2">Leia também</p>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">Posts Relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
