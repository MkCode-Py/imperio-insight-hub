import { mockPosts } from '@/data/mockPosts';
import { mockCategories } from '@/data/mockCategories';
import { mockTags } from '@/data/mockTags';
import { Post, Category, Tag } from '@/types/blog';

export function getAllPosts(): Post[] {
  return mockPosts.filter((p) => p.status === 'published').sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return mockPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPinnedPosts(): Post[] {
  return getAllPosts().filter((p) => p.pinned);
}

export function getMostViewedPosts(limit = 5): Post[] {
  return getAllPosts().sort((a, b) => b.uniqueViews - a.uniqueViews).slice(0, limit);
}

export function getPostsByCategory(categoryId: string): Post[] {
  return getAllPosts().filter((p) => p.categories.includes(categoryId));
}

export function getPostsByTag(tagId: string): Post[] {
  return getAllPosts().filter((p) => p.tags.includes(tagId));
}

export function getCategory(id: string): Category | undefined {
  return mockCategories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return mockCategories.find((c) => c.slug === slug);
}

export function getAllCategories(): Category[] {
  return mockCategories.filter((c) => c.enabled).sort((a, b) => a.order - b.order);
}

export function getTag(id: string): Tag | undefined {
  return mockTags.find((t) => t.id === id);
}

export function getTagBySlug(slug: string): Tag | undefined {
  return mockTags.find((t) => t.slug === slug);
}

export function getAllTags(): Tag[] {
  return mockTags;
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return getAllPosts().filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => getTag(t)?.name.toLowerCase().includes(q))
  );
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  if (post.relatedPosts?.length) {
    return post.relatedPosts.map((id) => mockPosts.find((p) => p.id === id)!).filter(Boolean).slice(0, limit);
  }
  return getAllPosts()
    .filter((p) => p.id !== post.id && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1).replace('.0', '')}k`;
  return views.toString();
}
