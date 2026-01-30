import { RiskSignal } from '@/lib/mock-data';
import { AlertTriangle } from 'lucide-react';

export function RiskSignalCard({ risk }: { risk: RiskSignal }) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-danger/10 border-danger/30 text-danger';
      case 'medium':
        return 'bg-warning/10 border-warning/30 text-warning';
      case 'low':
        return 'bg-secondary/10 border-secondary/30 text-secondary-foreground';
      default:
        return 'bg-muted border-border';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-danger text-white';
      case 'medium':
        return 'bg-warning text-white';
      case 'low':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className={`flex flex-col gap-3 rounded-lg border p-5 ${getSeverityColor(risk.severity)}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold leading-tight">{risk.title}</h3>
            <span className={`text-xs px-2 py-1 rounded font-semibold ${getSeverityBadgeColor(risk.severity)}`}>
              {risk.severity.toUpperCase()}
            </span>
          </div>
          <p className="text-sm opacity-90">{risk.description}</p>
        </div>
      </div>
    </div>
  );
}
