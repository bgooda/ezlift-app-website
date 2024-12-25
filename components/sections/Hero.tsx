"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { BRAND } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Weightlifting background"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn className="flex-1 space-y-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Personal{" "}
              <span className="bg-clip-text text-transparent bg-gradient-brand">
                Fitness Journey
              </span>{" "}
              Starts Here
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
              Track workouts, analyze progress, and achieve your fitness goals with EZLift - the smart workout companion that adapts to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
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
                  priority
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
                  priority
                />
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn className="flex-1" delay={200}>
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="pb-[216.744%]" /> {/* 466/215 ≈ 216.744% for correct aspect ratio */}
              <Image
                src="https://is2-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6c/06/24/6c06248e-901a-7373-8ff6-2998bba6ac7e/default_routine.jpeg/0x0ss.png"
                alt="EZLift App in action"
                fill
                className="absolute inset-0 object-cover rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}