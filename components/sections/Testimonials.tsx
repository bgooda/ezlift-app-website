"use client";

import { Star } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function Testimonials() {
  const testimonials = [
    {
      quote: "EZLift transformed my workout routine. The progress tracking is incredible!",
      author: "Sarah M.",
      role: "Fitness Enthusiast",
      delay: 0,
    },
    {
      quote: "As a personal trainer, I recommend EZLift to all my clients. It's simply the best.",
      author: "Mike Johnson",
      role: "Personal Trainer",
      delay: 2,
    },
    {
      quote: "The community support and progress tracking keep me motivated every day.",
      author: "Alex Chen",
      role: "CrossFit Athlete",
      delay: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-24 scroll-mt-16">
      <div className="container px-4 mx-auto text-center">
        <ScrollAnimation delay={0}>
          <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="text-2xl font-bold">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">(2000+ Reviews)</span>
          </div>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={testimonial.delay}>
              <TestimonialCard {...testimonial} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}