import { adaptMarket } from "@/lib/adapters/marketAdapter";
import { BackendMarketSignal, Market } from "@/lib/mock-data";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchMarkets(): Promise<Market[]> {
  const res = await fetch(`${API_BASE}/markets`, {
    cache: "no-store", // always fetch latest
  });

  if (!res.ok) {
    throw new Error("Failed to fetch markets");
  }

  const raw: BackendMarketSignal[] = await res.json();
  return raw.map(adaptMarket);
}
