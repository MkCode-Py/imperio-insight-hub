export type ContentType =
  | 'article'
  | 'guide'
  | 'comparison'
  | 'list'
  | 'faq'
  | 'featured'
  | 'protocol'
  | 'substance-analysis';

export type PostStatus = 'draft' | 'scheduled' | 'published';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  order: number;
  enabled: boolean;
  highlighted: boolean;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  coverImage: string;
  galleryImages?: string[];
  categories: string[]; // category ids
  tags: string[]; // tag ids
  contentType: ContentType;
  content: string; // HTML content
  seoTitle: string;
  seoDescription: string;
  metaImage?: string;
  status: PostStatus;
  publishDate: string;
  pinned: boolean;
  featured: boolean;
  readingTime: number; // minutes
  author: string;
  primaryCTA?: {
    label: string;
    url: string;
  };
  relatedLink?: {
    label: string;
    url: string;
  };
  relatedPosts?: string[]; // post ids
  views: number;
  uniqueViews: number;
}

export interface MetricCard {
  label: string;
  value: number | string;
  change?: number; // percentage
  icon?: string;
}

export interface DailyViews {
  date: string;
  views: number;
  uniqueViews: number;
}

export interface CategoryMetric {
  categoryId: string;
  views: number;
  posts: number;
}
