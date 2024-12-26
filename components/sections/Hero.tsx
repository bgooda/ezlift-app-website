"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { FadeIn } from "./FadeIn";


const HERO_CONFIG = {
  background: {
    src: "/hero-bg.webp",
    alt: "Weightlifting background",
    sizes: "(min-width: 1920px) 1920px, 100vw",
    loading: "eager" as const,
    priority: true
  },
  appPreview: {
    src: "/app-preview.webp",
    alt: "EZLift App showing a workout routine screen",
    sizes: "(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px",
    loading: "eager" as const,
    priority: true
  },
  storeBadges: {
    src: "/store-badges.webp",
    alt: "Download on the App Store and Get it on Google Play",
    width: 156,
    height: 52,
    loading: "eager" as const
  }
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          {...HERO_CONFIG.background}
          className="object-cover opacity-40"
          alt={HERO_CONFIG.background.alt}
          priority
          quality={75}
          sizes="100vw"
          width={1920}
          height={1080}
          placeholder="blur"
          loading="eager"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBcAAAABF6CgbQNmFGAQQxQUFMQgBjEIQRACAFZQOCAYAAAAMAEAnQEqCAAIAABAAJ0BKggACAAAQAA="
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" 
          aria-hidden="true"
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn className="flex-1 space-y-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Personal{" "}
              <span className="bg-clip-text text-transparent bg-gradient-brand">
                Fitness Journey
              </span>
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
                className="transform transition-transform hover:scale-105 duration-300"
                aria-label="Download on the App Store"
              >
                <Image
                  {...HERO_CONFIG.storeBadges}
                  src="/app-store-badge.svg"
                  alt={HERO_CONFIG.storeBadges.alt}
                />
              </Link>
              <Link
                href="/android"
                className="transform transition-transform hover:scale-105 duration-300"
                aria-label="Get it on Google Play"
              >
                <Image
                  {...HERO_CONFIG.storeBadges}
                  src="/play-store-badge.svg"
                  alt={HERO_CONFIG.storeBadges.alt}
                />
              </Link>
            </div>
          </FadeIn>
          
          <FadeIn className="flex-1" delay={200}>
            <div className="relative w-full max-w-[500px] mx-auto">
              <div 
                className="pb-[216.744%]" 
                aria-hidden="true"
              /> 
              <Image
                {...HERO_CONFIG.appPreview}
                fill
                className="absolute inset-0 object-cover rounded-2xl shadow-2xl"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBcAAAABF6CgbQNmFGAQQxQUFMQgBjEIQRACAFZQOCAYAAAAMAEAnQEqCAAIAABAAJ0BKggACAAAQAA="
                alt={HERO_CONFIG.appPreview.alt}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}