import { Alert as AlertType } from '@/lib/mock-data';
import { AlertCircle, TrendingUp, Zap } from 'lucide-react';

export function MarketAlert({ alert }: { alert: AlertType }) {
  const getAlertColor = (type: string) => {
    switch (type) {
      case 'rising_risk':
        return 'bg-[rgb(220,38,38)] text-white border-[rgb(185,28,28)] shadow-lg shadow-red-500/20';
      case 'signal_shift':
        return 'bg-blue-50 border-blue-300 dark:bg-blue-950 dark:border-blue-700';
      case 'opportunity':
        return 'bg-[rgb(250,204,21)] text-[rgb(78,22,0)] border-[rgb(217,119,6)] dark:bg-yellow-700 dark:text-yellow-50 dark:border-yellow-600 shadow-lg shadow-yellow-500/20 dark:shadow-yellow-600/30';
      default:
        return 'bg-muted border-border';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'rising_risk':
        return <AlertCircle className="h-6 w-6 flex-shrink-0 animate-pulse" />;
      case 'signal_shift':
        return <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />;
      case 'opportunity':
        return <Zap className="h-6 w-6 flex-shrink-0 animate-pulse" />;
      default:
        return <AlertCircle className="h-6 w-6 flex-shrink-0" />;
    }
  };

  const getTitleClass = (type: string) => {
    switch (type) {
      case 'rising_risk':
        return 'font-bold text-sm';
      case 'signal_shift':
        return 'font-semibold text-sm text-blue-900 dark:text-blue-100';
      case 'opportunity':
        return 'font-bold text-sm';
      default:
        return 'font-semibold text-sm text-foreground';
    }
  };

  const getDescClass = (type: string) => {
    switch (type) {
      case 'rising_risk':
        return 'text-sm mt-1 text-white/90';
      case 'signal_shift':
        return 'text-sm mt-1 text-blue-800 dark:text-blue-200';
      case 'opportunity':
        return 'text-sm mt-1 opacity-90';
      default:
        return 'text-sm text-muted-foreground mt-1';
    }
  };

  return (
    <div className={`flex gap-3 rounded-lg border-2 p-4 ${getAlertColor(alert.type)}`}>
      {getAlertIcon(alert.type)}
      <div className="flex-1 min-w-0">
        <h4 className={getTitleClass(alert.type)}>{alert.title}</h4>
        <p className={getDescClass(alert.type)}>{alert.description}</p>
        <p className="text-xs opacity-70 mt-2">{alert.timestamp}</p>
      </div>
    </div>
  );
}
