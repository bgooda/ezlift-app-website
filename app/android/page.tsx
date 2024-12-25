"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Smartphone } from "lucide-react";

export default function AndroidWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your API
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-black">
        <div className="container px-4 mx-auto">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <Smartphone className="h-16 w-16 mx-auto mb-8 text-brand-primary animate-pulse" />
            <h1 className="text-4xl font-bold mb-6 text-white">
              Coming Soon to Android
            </h1>
            <p className="text-xl mb-12 text-gray-400">
              EZLift is currently available on iOS, and we're working hard to bring
              the same great experience to Android. Sign up to be notified when
              we launch!
            </p>
            {submitted ? (
              <div className="bg-brand-primary/10 p-6 rounded-lg border border-brand-primary/20">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Thanks for your interest!
                </h2>
                <p className="text-gray-400">
                  We'll notify you as soon as EZLift is available on Android.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="max-w-md mx-auto"
                />
                <Button type="submit" size="lg">
                  Notify Me
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </main>
    </>
  );
}