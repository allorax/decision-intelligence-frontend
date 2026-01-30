'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    {
      id: '1',
      title: 'Weekly Market Intelligence Report',
      description: 'Comprehensive analysis of market trends, risks, and opportunities across all monitored sectors.',
      date: 'Jan 27, 2026',
      type: 'Intelligence',
      trend: 'up' as const,
    },
    {
      id: '2',
      title: 'AI Infrastructure Market Deep Dive',
      description: 'Detailed analysis of GPU capacity, pricing trends, and enterprise adoption metrics.',
      date: 'Jan 25, 2026',
      type: 'Sector Analysis',
      trend: 'up' as const,
    },
    {
      id: '3',
      title: 'Portfolio Performance Review',
      description: 'Quarterly performance metrics, risk exposure analysis, and rebalancing recommendations.',
      date: 'Jan 20, 2026',
      type: 'Performance',
      trend: 'down' as const,
    },
    {
      id: '4',
      title: 'Biotech & Genomics Sector Report',
      description: 'Pipeline analysis, regulatory updates, and clinical trial progress tracking.',
      date: 'Jan 18, 2026',
      type: 'Sector Analysis',
      trend: 'up' as const,
    },
    {
      id: '5',
      title: 'Risk Assessment and Mitigation',
      description: 'Comprehensive risk analysis with mitigation strategies and hedging recommendations.',
      date: 'Jan 15, 2026',
      type: 'Risk Analysis',
      trend: 'down' as const,
    },
    {
      id: '6',
      title: 'Fintech & Payments Quarterly Update',
      description: 'Payment volume trends, regulatory landscape changes, and competitive positioning.',
      date: 'Jan 10, 2026',
      type: 'Sector Analysis',
      trend: 'up' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8 p-6 md:p-8">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Reports</h1>
          <p className="text-muted-foreground">Access comprehensive market analysis, portfolio reviews, and sector reports.</p>
        </div>

        {/* Reports Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {reports.map((report) => (
            <Card key={report.id} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                </div>
                <div className={`flex-shrink-0 ml-4 ${report.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {report.trend === 'up' ? (
                    <TrendingUp className="h-6 w-6" />
                  ) : (
                    <TrendingDown className="h-6 w-6" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">
                    {report.type}
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                    {report.date}
                  </span>
                </div>
                <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <p className="text-3xl font-bold text-foreground">{reports.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-slate-900 border-2 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-600 text-white rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bullish Insights</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">4</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-slate-900 border-2 border-red-200 dark:border-red-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600 text-white rounded-lg">
                <TrendingDown className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bearish Warnings</p>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">2</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
