import { Eye, Users, FileText, FolderOpen, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MetricCard } from '@/types/blog';

const iconMap: Record<string, React.ElementType> = {
  eye: Eye,
  users: Users,
  'file-text': FileText,
  folder: FolderOpen,
};

export function DashboardCards({ cards }: { cards: MetricCard[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      {cards.map((card, i) => {
        const Icon = iconMap[card.icon || 'eye'] || Eye;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="border-border dark:shadow-lg dark:shadow-black/20">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                  {card.change !== undefined && card.change !== 0 && (
                    <span className={`text-[10px] sm:text-xs font-medium flex items-center gap-0.5 ${card.change > 0 ? 'text-emerald-500' : 'text-destructive'}`}>
                      {card.change > 0 ? <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> : <TrendingDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />}
                      {Math.abs(card.change)}%
                    </span>
                  )}
                </div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">{card.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 truncate">{card.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
