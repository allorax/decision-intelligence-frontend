import { Insight } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 p-5 shadow-md hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <h3 className="font-bold text-foreground leading-tight text-blue-950 dark:text-blue-50">{insight.title}</h3>
        </div>
      </div>

      <p className="text-sm text-blue-800 dark:text-blue-200">{insight.description}</p>

      <div className="flex flex-col gap-2">
        <div>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">Recommendation</p>
          <p className="text-sm font-bold text-blue-700 dark:text-blue-300">{insight.recommendation}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-blue-200 dark:border-blue-800">
        <Badge className="text-xs bg-blue-600 text-white dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600">
          {insight.source}
        </Badge>
        <span className="text-xs text-blue-500 dark:text-blue-400">{insight.timestamp}</span>
      </div>
    </div>
  );
}
