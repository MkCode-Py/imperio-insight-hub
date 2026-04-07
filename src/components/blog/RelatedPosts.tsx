import { Post } from '@/types/blog';
import { PostCard } from './PostCard';

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="text-xl font-bold text-foreground mb-5">Posts Relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
