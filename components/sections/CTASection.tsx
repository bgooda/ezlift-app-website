"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { BRAND } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-primary/10">
      <div className="container px-4 mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join thousands of satisfied users who have transformed their lives with EZLift
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={BRAND.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={156}
                height={52}
                className="h-[52px] w-auto"
              />
            </Link>
            <Link
              href="/android"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/play-store-badge.svg"
                alt="Get it on Google Play"
                width={156}
                height={52}
                className="h-[52px] w-auto"
              />
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span className="text-sm">Free Download • No Credit Card Required</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}