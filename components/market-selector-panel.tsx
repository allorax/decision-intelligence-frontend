'use client';

import { useState } from 'react';
import { Market, MOCK_MARKETS } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { X, Plus } from 'lucide-react';

interface MarketSelectorPanelProps {
  selectedMarkets: Market[];
  onAddMarket: (market: Market) => void;
  onRemoveMarket: (marketId: string) => void;
}

export function MarketSelectorPanel({
  selectedMarkets,
  onAddMarket,
  onRemoveMarket,
}: MarketSelectorPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Use mock markets as available universe (can be replaced with live data later)
  const availableMarkets = MOCK_MARKETS.filter(
    (market) =>
      !selectedMarkets.some((m) => m.id === market.id) &&
      (market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        market.symbol.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Selected Fields Panel */}
      <div className="rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 p-4">
        <h3 className="font-bold text-blue-950 dark:text-blue-50 mb-3 text-sm uppercase tracking-wide">
          Selected Fields ({selectedMarkets.length})
        </h3>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {selectedMarkets.length === 0 ? (
            <p className="text-sm text-blue-600 dark:text-blue-400 italic">
              No fields selected. Add some to get started.
            </p>
          ) : (
            selectedMarkets.map((market) => (
              <div
                key={market.id}
                className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-100 dark:border-blue-700"
              >
                <div>
                  <p className="font-medium text-blue-950 dark:text-blue-50 text-sm">
                    {market.name}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {market.symbol}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveMarket(market.id)}
                  className="text-blue-600 dark:text-blue-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Fields Panel */}
      <div className="rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 p-4">
        <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">
          Available Fields
        </h3>

        <div className="space-y-3">
          <Input
            placeholder="Search markets & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-sm"
          />

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {availableMarkets.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                {searchQuery ? 'No matches found.' : 'All fields are selected.'}
              </p>
            ) : (
              availableMarkets.map((market) => (
                <button
                  key={market.id}
                  onClick={() => {
                    onAddMarket(market);
                    setSearchQuery('');
                  }}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent rounded-lg p-3 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group"
                >
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">
                      {market.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {market.symbol}
                    </p>
                  </div>

                  <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
