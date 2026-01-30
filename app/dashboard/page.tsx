'use client';

import { useEffect, useState } from 'react';

import { fetchMarkets } from '@/lib/api';
import { Market, TrendDirection } from '@/lib/mock-data';

import { InsightCard } from '@/components/insight-card';
import { RiskSignalCard } from '@/components/risk-signal-card';
import { MarketAlert } from '@/components/market-alert';
import { MarketSelectorPanel } from '@/components/market-selector-panel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/* ---------------- helpers ---------------- */

const getTrendLabel = (trend: TrendDirection) => {
  switch (trend) {
    case 'bullish':
      return '↑ Bullish';
    case 'bearish':
      return '↓ Bearish';
    case 'neutral':
      return '→ Neutral';
    default:
      return trend;
  }
};

const getTrendColor = (trend: TrendDirection) => {
  switch (trend) {
    case 'bullish':
      return 'border-green-500 bg-green-50 dark:bg-green-950';
    case 'bearish':
      return 'border-red-500 bg-red-50 dark:bg-red-950';
    case 'neutral':
      return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950';
    default:
      return '';
  }
};

/* ---------------- page ---------------- */

export default function DashboardPage() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [selectedMarkets, setSelectedMarkets] = useState<Market[]>([]);
  const [focusedMarket, setFocusedMarket] = useState<Market | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔴 Fetch live backend data
  useEffect(() => {
    fetchMarkets()
      .then((data) => {
        setMarkets(data);
        setSelectedMarkets(data.slice(0, 1));
        setFocusedMarket(data[0] ?? null);
      })
      .catch((err) => {
        console.error('Failed to fetch markets', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6">Loading live market data…</div>;
  }

  if (!focusedMarket) {
    return <div className="p-6">No market data available</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8 p-6 md:p-8">

        {/* Market Selector */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-foreground">
            Markets & Topics Selector
          </h2>

          <MarketSelectorPanel
            selectedMarkets={selectedMarkets}
            onAddMarket={(market) => {
              const next = [...selectedMarkets, market];
              setSelectedMarkets(next);
              setFocusedMarket(market);
            }}
            onRemoveMarket={(marketId) => {
              const filtered = selectedMarkets.filter(m => m.id !== marketId);
              setSelectedMarkets(filtered);
              if (focusedMarket.id === marketId) {
                setFocusedMarket(filtered[0] ?? null);
              }
            }}
          />
        </section>

        {/* Main Content */}
        {selectedMarkets.length > 0 && focusedMarket && (
          <main className="space-y-8">

            {/* Focus Switcher */}
            {selectedMarkets.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                {selectedMarkets.map((market) => (
                  <Button
                    key={market.id}
                    onClick={() => setFocusedMarket(market)}
                    variant={focusedMarket.id === market.id ? 'default' : 'outline'}
                  >
                    {market.name}
                  </Button>
                ))}
              </div>
            )}

            {/* Trend Card */}
            <div
              className={`rounded-lg border-2 p-6 ${getTrendColor(
                focusedMarket.trendDirection
              )}`}
            >
              <Badge className="mb-2">
                {getTrendLabel(focusedMarket.trendDirection)}
              </Badge>

              <h2 className="mb-2 text-3xl font-bold">
                {focusedMarket.name}
              </h2>

              <p className="opacity-90">
                {focusedMarket.trendRationale}
              </p>
            </div>

            {/* Alerts */}
            {focusedMarket.alerts.length > 0 && (
              <section>
                <h3 className="mb-4 text-lg font-bold uppercase">
                  Active Alerts
                </h3>
                <div className="grid gap-4">
                  {focusedMarket.alerts.map((alert) => (
                    <MarketAlert key={alert.id} alert={alert} />
                  ))}
                </div>
              </section>
            )}

            {/* Insights */}
            <section>
  <h3 className="mb-4 text-lg font-bold uppercase">
    Top Actionable Insights
  </h3>

  {focusedMarket.insights.length === 0 ? (
    <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
      No actionable insights detected at this time.
      Signals are being monitored for meaningful changes.
    </div>
  ) : (
    <div className="grid gap-4">
      {focusedMarket.insights.slice(0, 3).map((insight) => (
        <InsightCard key={insight.id} insight={insight} />
      ))}
    </div>
  )}
</section>


            {/* Risks */}
            <section>
              <h3 className="mb-4 text-lg font-bold uppercase">
                Risk Signals
              </h3>
              <div className="grid gap-3">
                {focusedMarket.riskSignals.map((risk) => (
                  <RiskSignalCard key={risk.id} risk={risk} />
                ))}
              </div>
            </section>

          </main>
        )}
      </div>
    </div>
  );
}
