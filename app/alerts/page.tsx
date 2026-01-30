'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Zap, TrendingUp, X } from 'lucide-react';

export default function AlertsPage() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const alerts = [
    {
      id: '1',
      title: 'Earnings miss: Major retailer below consensus',
      description: 'XYZ Corp reported Q4 EPS of $1.23 vs expected $1.45. Guidance lowered for FY26. Stock down 8% in after-hours trading.',
      timestamp: '15 min ago',
      type: 'rising_risk' as const,
      severity: 'critical' as const,
      market: 'Retail & Consumer',
      impact: 'High',
    },
    {
      id: '2',
      title: 'Fed commentary shifts tone on rate trajectory',
      description: 'FOMC minutes suggest higher-for-longer stance. Market now pricing 2 cuts in 2026 vs 4 previously. Implications for fixed income and equity valuations.',
      timestamp: '1 hour ago',
      type: 'opportunity' as const,
      severity: 'warning' as const,
      market: 'Macroeconomics',
      impact: 'Medium',
    },
    {
      id: '3',
      title: 'AI chip demand surge accelerates',
      description: 'Latest enterprise surveys show 45% YoY increase in GPU procurement plans. NVIDIA and AMD capacity utilization at all-time highs.',
      timestamp: '2 hours ago',
      type: 'opportunity' as const,
      severity: 'info' as const,
      market: 'AI Infrastructure',
      impact: 'High',
    },
    {
      id: '4',
      title: 'Biotech pipeline advances FDA review',
      description: 'Promising Phase III results for GLP-1 competitor. FDA fast-track designation granted. Could challenge current market leaders.',
      timestamp: '3 hours ago',
      type: 'opportunity' as const,
      severity: 'info' as const,
      market: 'Biotech & Genomics',
      impact: 'Medium',
    },
    {
      id: '5',
      title: 'Geopolitical tensions impact energy prices',
      description: 'Escalating tensions in key oil-producing regions. Oil prices spike 3.5% in afternoon trading. Expect volatility in energy stocks.',
      timestamp: '4 hours ago',
      type: 'rising_risk' as const,
      severity: 'warning' as const,
      market: 'Energy',
      impact: 'High',
    },
    {
      id: '6',
      title: 'Market breadth signals momentum shift',
      description: 'Declining/Advancing ratio drops below 0.8. Fewer stocks participating in recent rally. Could signal market vulnerability.',
      timestamp: '5 hours ago',
      type: 'rising_risk' as const,
      severity: 'warning' as const,
      market: 'Technical Analysis',
      impact: 'Medium',
    },
  ];

  const getAlertStyles = (type: string, severity: string) => {
    if (type === 'rising_risk' && severity === 'critical') {
      return {
        container: 'bg-red-50 dark:bg-red-950 border-2 border-red-300 dark:border-red-700',
        icon: 'text-red-600 dark:text-red-400',
        title: 'text-red-900 dark:text-red-100 font-bold',
        desc: 'text-red-800 dark:text-red-200',
        badge: 'bg-red-600 text-white',
      };
    } else if (type === 'opportunity') {
      return {
        container: 'bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-300 dark:border-yellow-700',
        icon: 'text-yellow-600 dark:text-yellow-400',
        title: 'text-yellow-900 dark:text-yellow-100 font-bold',
        desc: 'text-yellow-800 dark:text-yellow-200',
        badge: 'bg-yellow-600 text-white',
      };
    } else {
      return {
        container: 'bg-blue-50 dark:bg-blue-950 border-2 border-blue-300 dark:border-blue-700',
        icon: 'text-blue-600 dark:text-blue-400',
        title: 'text-blue-900 dark:text-blue-100 font-bold',
        desc: 'text-blue-800 dark:text-blue-200',
        badge: 'bg-blue-600 text-white',
      };
    }
  };

  const getIconForType = (type: string) => {
    if (type === 'rising_risk') {
      return <AlertCircle className="h-6 w-6 animate-pulse" />;
    } else {
      return <Zap className="h-6 w-6 animate-pulse" />;
    }
  };

  const visibleAlerts = alerts.filter((a) => !dismissedAlerts.includes(a.id));

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8 p-6 md:p-8">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Alerts</h1>
          <p className="text-muted-foreground">
            Monitor critical market events, risks, and opportunities in real-time.
          </p>
        </div>

        {/* Alert Summary */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-4 bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-slate-900 border-2 border-red-200 dark:border-red-800">
            <p className="text-sm font-medium text-muted-foreground mb-1">Critical Alerts</p>
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">
              {visibleAlerts.filter((a) => a.severity === 'critical').length}
            </p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-950 dark:to-slate-900 border-2 border-yellow-200 dark:border-yellow-800">
            <p className="text-sm font-medium text-muted-foreground mb-1">Warnings</p>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {visibleAlerts.filter((a) => a.severity === 'warning').length}
            </p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800">
            <p className="text-sm font-medium text-muted-foreground mb-1">Opportunities</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {visibleAlerts.filter((a) => a.type === 'opportunity').length}
            </p>
          </Card>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {visibleAlerts.length === 0 ? (
            <Card className="p-12 text-center border-2">
              <p className="text-muted-foreground text-lg">All alerts dismissed. Great job staying on top of things!</p>
            </Card>
          ) : (
            visibleAlerts.map((alert) => {
              const styles = getAlertStyles(alert.type, alert.severity);
              return (
                <Card key={alert.id} className={`p-6 ${styles.container} border-l-4`}>
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 mt-1 ${styles.icon}`}>
                      {getIconForType(alert.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className={`text-lg font-bold ${styles.title}`}>{alert.title}</h3>
                        <button
                          onClick={() => setDismissedAlerts([...dismissedAlerts, alert.id])}
                          className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-1"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <p className={`text-sm mb-4 ${styles.desc}`}>{alert.description}</p>

                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className={styles.badge}>{alert.severity.toUpperCase()}</Badge>
                        <Badge variant="outline" className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-slate-600">
                          {alert.market}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-slate-600">
                          Impact: {alert.impact}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-current border-opacity-20">
                        <span className="text-xs opacity-70">{alert.timestamp}</span>
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
