'use client';

import { useState } from 'react';
import { WATCHLIST_STOCKS, ACTIVITY_METRICS, WatchlistStock } from '@/lib/watchlist-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, TrendingDown, Plus, X, ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<WatchlistStock[]>(WATCHLIST_STOCKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState<WatchlistStock | null>(WATCHLIST_STOCKS[0]);

  const handleRemoveStock = (stockId: string) => {
    const filtered = watchlist.filter((s) => s.id !== stockId);
    setWatchlist(filtered);
    if (selectedStock?.id === stockId && filtered.length > 0) {
      setSelectedStock(filtered[0]);
    }
  };

  const availableStocks = WATCHLIST_STOCKS.filter(
    (stock) =>
      !watchlist.find((w) => w.id === stock.id) &&
      (stock.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
        {/* Left Panel - Activity & Watchlist Management */}
        <div className="md:col-span-1 space-y-6">
          {/* Today's Activity */}
          <div className="rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 p-5">
            <h2 className="font-bold text-lg text-foreground mb-4 uppercase tracking-wide">Today's Activity</h2>
            <div className="space-y-3">
              {ACTIVITY_METRICS.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <div className="text-right">
                    <p className="font-bold text-foreground text-sm">{metric.value}</p>
                    {metric.subLabel && <p className="text-xs">{metric.subLabel}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watchlist Management */}
          <div className="rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-blue-950 dark:text-blue-50 uppercase tracking-wide">Watchlist</h2>
              <span className="text-xs bg-blue-600 text-white rounded px-2 py-1">{watchlist.length} items</span>
            </div>

            {/* Search for stocks */}
            <div className="mb-3">
              <Input
                placeholder="Search stocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-sm"
              />
            </div>

            {/* Available stocks to add */}
            {availableStocks.length > 0 && (
              <div className="mb-4 space-y-1 border-t border-blue-200 dark:border-blue-800 pt-3">
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Add stocks</p>
                {availableStocks.slice(0, 3).map((stock) => (
                  <button
                    key={stock.id}
                    onClick={() => {
                      setWatchlist([...watchlist, stock]);
                      setSelectedStock(stock);
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center justify-between hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded p-2 transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{stock.ticker}</span>
                    <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Current watchlist */}
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {watchlist.map((stock) => (
                <button
                  key={stock.id}
                  onClick={() => setSelectedStock(stock)}
                  className={`w-full flex items-center justify-between rounded p-2.5 transition-all border ${
                    selectedStock?.id === stock.id
                      ? 'bg-white dark:bg-slate-800 border-blue-300 dark:border-blue-600 shadow-md'
                      : 'border-transparent hover:bg-blue-100 dark:hover:bg-blue-900/30'
                  }`}
                >
                  <div className="text-left min-w-0">
                    <p className="font-semibold text-blue-950 dark:text-blue-50 text-sm">{stock.ticker}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 truncate">{stock.company}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveStock(stock.id);
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:text-red-600 dark:hover:text-red-400 ml-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Stock Details & Chart */}
        <div className="md:col-span-2 space-y-6">
          {selectedStock && (
            <>
              {/* Stock Header Card */}
              <div className="rounded-lg border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Stock Overview</p>
                    <h2 className="text-3xl font-bold text-blue-950 dark:text-blue-50 mt-1">{selectedStock.ticker}</h2>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{selectedStock.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-foreground">${selectedStock.price.toFixed(2)}</p>
                    <p
                      className={`flex items-center justify-end gap-1 mt-1 font-bold text-lg ${
                        selectedStock.priceChangePercent >= 0
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {selectedStock.priceChangePercent >= 0 ? (
                        <TrendingUp className="h-5 w-5" />
                      ) : (
                        <TrendingDown className="h-5 w-5" />
                      )}
                      {selectedStock.priceChangePercent >= 0 ? '+' : ''}
                      {selectedStock.priceChangePercent.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="rounded-lg border border-border bg-white dark:bg-slate-800 p-6">
                <h3 className="font-semibold text-foreground mb-4">Today's Price Action</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={selectedStock.chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="time" stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                    <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} domain="dataMin - 1" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--color-card)',
                        border: `1px solid var(--color-border)`,
                        borderRadius: '8px',
                      }}
                      formatter={(value) => `$${(value as number).toFixed(2)}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="rgb(37, 99, 235)"
                      dot={false}
                      strokeWidth={2}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Stock Stats Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-white dark:bg-slate-800 p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Market Cap</p>
                  <p className="text-2xl font-bold text-foreground">{selectedStock.marketCap}</p>
                </div>
                <div className="rounded-lg border border-border bg-white dark:bg-slate-800 p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">P/E Ratio</p>
                  <p className="text-2xl font-bold text-foreground">{selectedStock.peRatio.toFixed(1)}</p>
                </div>
                <div className="rounded-lg border border-border bg-white dark:bg-slate-800 p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Volume</p>
                  <p className="text-2xl font-bold text-foreground">{(selectedStock.volume / 1000000).toFixed(1)}M</p>
                </div>
                <div className="rounded-lg border border-border bg-white dark:bg-slate-800 p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Last Update</p>
                  <p className="text-lg font-bold text-foreground">{selectedStock.latestUpdate}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
