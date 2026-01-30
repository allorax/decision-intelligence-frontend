import { Market, Insight, RiskSignal, Alert } from "@/lib/mock-data";

function nowMinus(hours: number) {
  return `${hours} hours ago`;
}
const getRecommendation = (text: string, confidence: number) => {
  if (text.includes("outweighs")) {
    return "Momentum favors continuation — watch for confirmation signals";
  }

  if (text.includes("Negative narratives")) {
    return "Downside risk increasing — reassess exposure";
  }

  if (text.includes("high discussion volume")) {
    return "Rising attention detected — volatility may increase";
  }

  if (text.includes("low discussion volume")) {
    return "Signals are weak — avoid acting on limited data";
  }

  if (confidence < 40) {
    return "Low confidence environment — risk management advised";
  }

  return "Monitor for further confirmation";
};

export function adaptMarket(raw: any): Market {
  const insights: Insight[] = raw.insights.map((text: string, i: number) => ({
    id: `insight-${i}`,
    title: text.split(":")[0],
    description: text,
    recommendation: getRecommendation(text, raw.confidence),

    source: "Live News",
    timestamp: nowMinus(1 + i),
  }));

  const riskSignals: RiskSignal[] = raw.riskSignals.map(
    (text: string, i: number) => ({
      id: `risk-${i}`,
      title: "Risk Signal Detected",
      description: text,
      severity:
        raw.confidence < 40 ? "high" : raw.confidence < 65 ? "medium" : "low",
    })
  );

  const alerts: Alert[] = raw.alerts.map((text: string, i: number) => ({
    id: `alert-${i}`,
    type:
      text.toLowerCase().includes("reversal")
        ? "signal_shift"
        : "rising_risk",
    title: "Market Alert",
    description: text,
    timestamp: nowMinus(1),
  }));

  return {
    id: raw.symbol.toLowerCase(),
    name: raw.name,
    symbol: raw.symbol,
    trendDirection: raw.trendDirection,
    trendRationale: raw.trendRationale,
    insights,
    riskSignals,
    alerts,
  };
}
