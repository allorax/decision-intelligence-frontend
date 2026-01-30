export interface WatchlistStock {
  id: string;
  ticker: string;
  company: string;
  price: number;
  priceChange: number;
  priceChangePercent: number;
  volume: number;
  marketCap: string;
  peRatio: number;
  latestUpdate: string;
  chartData: Array<{
    time: string;
    price: number;
  }>;
}

export interface ActivityMetric {
  label: string;
  value: string | number;
  subLabel?: string;
}

export const WATCHLIST_STOCKS: WatchlistStock[] = [
  {
    id: 'nvda',
    ticker: 'NVDA',
    company: 'NVIDIA Corp',
    price: 142.50,
    priceChange: 2.45,
    priceChangePercent: 2.4,
    volume: 52300000,
    marketCap: '$3.52T',
    peRatio: 68.5,
    latestUpdate: '2 minutes ago',
    chartData: [
      { time: '9:30', price: 140.05 },
      { time: '10:00', price: 140.87 },
      { time: '10:30', price: 141.23 },
      { time: '11:00', price: 141.78 },
      { time: '11:30', price: 142.10 },
      { time: '12:00', price: 142.45 },
      { time: '12:30', price: 142.50 },
    ],
  },
  {
    id: 'msft',
    ticker: 'MSFT',
    company: 'Microsoft',
    price: 447.89,
    priceChange: -3.61,
    priceChangePercent: -0.8,
    volume: 22100000,
    marketCap: '$3.28T',
    peRatio: 45.2,
    latestUpdate: '1 minute ago',
    chartData: [
      { time: '9:30', price: 451.50 },
      { time: '10:00', price: 450.20 },
      { time: '10:30', price: 449.40 },
      { time: '11:00', price: 448.90 },
      { time: '11:30', price: 448.20 },
      { time: '12:00', price: 447.95 },
      { time: '12:30', price: 447.89 },
    ],
  },
  {
    id: 'aapl',
    ticker: 'AAPL',
    company: 'Apple Inc',
    price: 239.72,
    priceChange: 0.12,
    priceChangePercent: 0.1,
    volume: 45600000,
    marketCap: '$3.65T',
    peRatio: 34.1,
    latestUpdate: '3 minutes ago',
    chartData: [
      { time: '9:30', price: 239.60 },
      { time: '10:00', price: 239.55 },
      { time: '10:30', price: 239.62 },
      { time: '11:00', price: 239.70 },
      { time: '11:30', price: 239.68 },
      { time: '12:00', price: 239.71 },
      { time: '12:30', price: 239.72 },
    ],
  },
  {
    id: 'googl',
    ticker: 'GOOGL',
    company: 'Alphabet',
    price: 195.44,
    priceChange: 2.28,
    priceChangePercent: 1.2,
    volume: 30800000,
    marketCap: '$1.28T',
    peRatio: 28.5,
    latestUpdate: '4 minutes ago',
    chartData: [
      { time: '9:30', price: 193.16 },
      { time: '10:00', price: 193.52 },
      { time: '10:30', price: 194.10 },
      { time: '11:00', price: 194.68 },
      { time: '11:30', price: 195.20 },
      { time: '12:00', price: 195.35 },
      { time: '12:30', price: 195.44 },
    ],
  },
  {
    id: 'tsla',
    ticker: 'TSLA',
    company: 'Tesla',
    price: 398.50,
    priceChange: -5.22,
    priceChangePercent: -1.3,
    volume: 142500000,
    marketCap: '$1.58T',
    peRatio: 78.2,
    latestUpdate: 'Just now',
    chartData: [
      { time: '9:30', price: 403.72 },
      { time: '10:00', price: 402.10 },
      { time: '10:30', price: 400.85 },
      { time: '11:00', price: 399.45 },
      { time: '11:30', price: 399.10 },
      { time: '12:00', price: 398.65 },
      { time: '12:30', price: 398.50 },
    ],
  },
  {
    id: 'meta',
    ticker: 'META',
    company: 'Meta Platforms',
    price: 614.22,
    priceChange: 8.75,
    priceChangePercent: 1.4,
    volume: 15400000,
    marketCap: '$633B',
    peRatio: 31.9,
    latestUpdate: '5 minutes ago',
    chartData: [
      { time: '9:30', price: 605.47 },
      { time: '10:00', price: 607.23 },
      { time: '10:30', price: 609.80 },
      { time: '11:00', price: 611.45 },
      { time: '11:30', price: 612.90 },
      { time: '12:00', price: 613.50 },
      { time: '12:30', price: 614.22 },
    ],
  },
  {
    id: 'amzn',
    ticker: 'AMZN',
    company: 'Amazon',
    price: 212.15,
    priceChange: 3.42,
    priceChangePercent: 1.6,
    volume: 64200000,
    marketCap: '$2.14T',
    peRatio: 51.3,
    latestUpdate: '6 minutes ago',
    chartData: [
      { time: '9:30', price: 208.73 },
      { time: '10:00', price: 209.45 },
      { time: '10:30', price: 210.20 },
      { time: '11:00', price: 210.95 },
      { time: '11:30', price: 211.55 },
      { time: '12:00', price: 212.00 },
      { time: '12:30', price: 212.15 },
    ],
  },
  {
    id: 'nvdq',
    ticker: 'NVDQ',
    company: 'Nvidia Tech',
    price: 156.33,
    priceChange: 4.12,
    priceChangePercent: 2.7,
    volume: 28900000,
    marketCap: '$1.92T',
    peRatio: 42.1,
    latestUpdate: '7 minutes ago',
    chartData: [
      { time: '9:30', price: 152.21 },
      { time: '10:00', price: 152.87 },
      { time: '10:30', price: 153.95 },
      { time: '11:00', price: 154.75 },
      { time: '11:30', price: 155.55 },
      { time: '12:00', price: 156.10 },
      { time: '12:30', price: 156.33 },
    ],
  },
];

export const ACTIVITY_METRICS: ActivityMetric[] = [
  {
    label: 'Signals processed',
    value: '1,247',
  },
  {
    label: 'Sources scanned',
    value: '847',
  },
  {
    label: 'Alerts triggered',
    value: '14',
  },
  {
    label: 'Data freshness',
    value: 'Real-time',
    subLabel: '🟢',
  },
];
