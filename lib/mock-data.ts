// =====================
// Core Types
// =====================

export type TrendDirection = "bullish" | "neutral" | "bearish";
export type AlertType = "signal_shift" | "rising_risk" | "opportunity";

// =====================
// Insight
// =====================

export interface Insight {
  id: string;
  title: string;
  description: string;
  recommendation: string;
  source: string;
  timestamp: string;
}

// =====================
// Risk Signal
// =====================

export interface RiskSignal {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
}

// =====================
// Alert
// =====================

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  timestamp: string;
}

// =====================
// Market (UI Contract)
// =====================

export interface Market {
  id: string;
  name: string;
  symbol: string;

  trendDirection: TrendDirection;
  trendRationale: string;

  insights: Insight[];
  riskSignals: RiskSignal[];
  alerts: Alert[];
}

// =====================
// Backend Signal Shape
// (DO NOT render directly)
// =====================

export interface BackendMarketSignal {
  id: number;
  name: string;
  symbol: string;

  trendDirection: TrendDirection;
  trendRationale: string;

  confidence: number;
  momentum: "improving" | "flat" | "weakening";

  insights: string[];
  riskSignals: string[];
  alerts: string[];
}

// =====================
// Legacy Mock (optional fallback)
// =====================
// You can delete this later once backend is always available

export const MOCK_MARKETS: Market[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    trendDirection: "bullish",
    trendRationale: "Moderate sentiment with improving momentum",

    insights: [
      {
        id: "i1",
        title: "Positive sentiment increasing",
        description: "Reddit discussion shows a growing bias toward bullish narratives",
        recommendation: "Monitor continuation and volume confirmation",
        source: "Signal Engine",
        timestamp: "2 hours ago",
      },
    ],

    riskSignals: [
      {
        id: "r1",
        title: "Macro uncertainty",
        description: "Risk-related keywords still present in discussion",
        severity: "medium",
      },
    ],

    alerts: [
      {
        id: "a1",
        type: "signal_shift",
        title: "Momentum Shift Detected",
        description: "Confidence increased vs previous snapshot",
        timestamp: "1 hour ago",
      },
    ],
  },
];

// =====================
// Default Market (safe UI fallback)
// =====================

export const DEFAULT_MARKET: Market = MOCK_MARKETS[0];
