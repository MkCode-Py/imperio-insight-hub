import { useState } from 'react';
import { DashboardCards } from '@/components/admin/DashboardCards';
import { ViewsChart } from '@/components/admin/ViewsChart';
import { getMetricCards, generateDailyViews, mockCategoryMetrics } from '@/data/mockMetrics';
import { getMostViewedPosts, formatViews, getCategory } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const periodOptions = [
  { label: '7d', value: 7 },
  { label: '30d', value: 30 },
  { label: '90d', value: 90 },
];

const Metrics = () => {
  const [period, setPeriod] = useState(30);
  const chartData = generateDailyViews(period);
  const topPosts = getMostViewedPosts(10);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Métricas</h1>
          <p className="text-sm text-muted-foreground">Analytics detalhado do blog</p>
        </div>
        <div className="flex gap-1">
          {periodOptions.map((opt) => (
            <Badge key={opt.value} variant={period === opt.value ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setPeriod(opt.value)}>
              {opt.label}
            </Badge>
          ))}
        </div>
      </div>

      <DashboardCards cards={getMetricCards()} />
      <ViewsChart data={chartData} title="Views por Dia" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Top 10 Posts</CardTitle></CardHeader>
          <CardContent className="space-y-1">
            {topPosts.map((p, i) => (
              <div key={p.id} className="flex items-center gap-2 p-2">
                <span className="text-sm font-bold text-accent/30 w-5 shrink-0">{i + 1}</span>
                <p className="text-sm flex-1 truncate min-w-0">{p.title}</p>
                <span className="text-xs font-medium text-muted-foreground shrink-0">{formatViews(p.uniqueViews)}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Por Categoria</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {mockCategoryMetrics.map((cm) => {
              const cat = getCategory(cm.categoryId);
              const total = mockCategoryMetrics.reduce((s, c) => s + c.views, 0);
              const pct = Math.round((cm.views / total) * 100);
              return cat ? (
                <div key={cm.categoryId}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{cat.name}</span>
                    <span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ) : null;
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Metrics;
