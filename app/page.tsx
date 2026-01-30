'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 md:px-12">
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Monitor Your Portfolio in Real-Time
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Bold alerts, clear insights, and live market updates. Monitor110 gives you the signal you need to make confident decisions with vibrant, eye-catching notifications.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/watchlist">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                View Watchlist <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="border-t border-border bg-secondary/10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground">Built for Serious Decision-Makers</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Value Prop 1 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Clear Insights</h3>
              <p className="text-sm text-muted-foreground">
                Top 3 actionable insights per market, ranked by relevance and impact. No noise, just signal.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Risk Awareness</h3>
              <p className="text-sm text-muted-foreground">
                Downside signals and warnings highlighted. Know the risks before they become problems.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Instant Context</h3>
              <p className="text-sm text-muted-foreground">
                Market direction, trend analysis, and alerts. Everything you need in one calm interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 md:px-12">
        <div className="max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to make better decisions?</h2>
          <p className="mb-8 text-muted-foreground">
            Explore sample markets and see how Clarity turns complexity into clarity.
          </p>
          <Link href="/dashboard">
            <Button size="lg">Explore Dashboard</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-6 py-8 text-center text-sm text-muted-foreground md:px-12">
        <p>Monitor110 — Real-Time Portfolio & Market Intelligence | Demo Version</p>
      </footer>
    </div>
  );
}
