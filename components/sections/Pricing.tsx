"use client";

import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { PricingCard } from "@/components/cards/PricingCard";
import { pricingPlans } from "@/lib/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 scroll-mt-16">
      <div className="container px-4 mx-auto text-center">
        <ScrollAnimation delay={0}>
          <h2 className="text-3xl font-bold mb-4">
            Start Lifting Smarter – No Limits, No Ads
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experience all EzLift features with a free trial – track 5 workouts to see the difference! No time limit!
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 2}>
              <PricingCard plan={plan} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={4}>
          <p className="mt-16 text-lg font-medium">
            Try EzLift Free for 5 Workouts – Discover the Ultimate Lifting Companion
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}