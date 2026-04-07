import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DailyViews } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ViewsChart({ data, title = 'Views por Dia' }: { data: DailyViews[]; title?: string }) {
  return (
    <Card className="border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 53%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(217, 91%, 53%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorUnique" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(215, 60%, 26%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(215, 60%, 26%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={(v) => v.slice(5)} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Area type="monotone" dataKey="views" stroke="hsl(217, 91%, 53%)" fillOpacity={1} fill="url(#colorViews)" name="Views" />
              <Area type="monotone" dataKey="uniqueViews" stroke="hsl(215, 60%, 26%)" fillOpacity={1} fill="url(#colorUnique)" name="Únicos" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
