import { useState } from 'react';
import { DashboardCards } from '@/components/admin/DashboardCards';
import { ViewsChart } from '@/components/admin/ViewsChart';
import { getMetricCards, generateDailyViews, mockCategoryMetrics } from '@/data/mockMetrics';
import { getMostViewedPosts, formatViews, getCategory } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const periodOptions = [
  { label: '7d', value: 7 },
  { label: '30d', value: 30 },
  { label: '90d', value: 90 },
];

const Dashboard = () => {
  const [period, setPeriod] = useState(30);
  const cards = getMetricCards();
  const chartData = generateDailyViews(period);
  const topPosts = getMostViewedPosts(5);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Visão geral do blog</p>
        </div>
        <div className="flex gap-1">
          {periodOptions.map((opt) => (
            <Badge
              key={opt.value}
              variant={period === opt.value ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setPeriod(opt.value)}
            >
              {opt.label}
            </Badge>
          ))}
        </div>
      </div>

      <DashboardCards cards={cards} />
      <ViewsChart data={chartData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Top 5 Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {topPosts.map((post, i) => (
              <Link key={post.id} to={`/admin/posts/${post.id}`} className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                <span className="text-lg font-bold text-accent/30 w-5 text-center shrink-0">{i + 1}</span>
                <p className="text-sm font-medium text-foreground truncate flex-1 min-w-0">{post.title}</p>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground shrink-0">{formatViews(post.uniqueViews)}</span>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Por Categoria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockCategoryMetrics.map((cm) => {
              const cat = getCategory(cm.categoryId);
              if (!cat) return null;
              return (
                <div key={cm.categoryId} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cm.posts} posts</p>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">{formatViews(cm.views)}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
