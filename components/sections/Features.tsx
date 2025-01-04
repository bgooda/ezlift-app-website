"use client";

import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { features } from "@/lib/features";

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50 scroll-mt-16 relative">
      <div className="container px-4 mx-auto">
        <ScrollAnimation delay={0}>
          <h2 className="text-3xl font-bold text-center mb-16 relative z-10">Why Choose EZLift?</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={feature.delay}>
              <FeatureCard {...feature} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}