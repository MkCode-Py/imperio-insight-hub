import { DailyViews, CategoryMetric, MetricCard } from '@/types/blog';

export function generateDailyViews(days = 30): DailyViews[] {
  const data: DailyViews[] = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const views = Math.floor(Math.random() * 800) + 200;
    data.push({
      date: d.toISOString().split('T')[0],
      views,
      uniqueViews: Math.floor(views * 0.65),
    });
  }
  return data;
}

export const mockCategoryMetrics: CategoryMetric[] = [
  { categoryId: 'cat-ciclos', views: 27470, posts: 3 },
  { categoryId: 'cat-ergogenicos', views: 41900, posts: 3 },
  { categoryId: 'cat-emagrecimento', views: 42900, posts: 4 },
  { categoryId: 'cat-peptideos', views: 18700, posts: 2 },
];

export function getMetricCards(): MetricCard[] {
  return [
    { label: 'Views Totais', value: '131k', change: 12.5, icon: 'eye' },
    { label: 'Views Únicos', value: '82.3k', change: 8.2, icon: 'users' },
    { label: 'Posts Publicados', value: 12, change: 0, icon: 'file-text' },
    { label: 'Categorias Ativas', value: 4, change: 0, icon: 'folder' },
  ];
}
