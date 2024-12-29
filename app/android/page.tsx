"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Smartphone } from "lucide-react";

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1323013440322670592/Ou2iS_tN_ugBwc4ZFlL6cQRHavl-UfJkcZuKCpVSeDQs3QawAeT-ZvoIeQD2M55hRWpG";

export default function AndroidWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "New Android Waitlist Signup",
          embeds: [{
            title: "Android Waitlist Entry",
            fields: [
              { name: "Email", value: email }
            ],
            color: 5814783,
            timestamp: new Date().toISOString()
          }]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Notify Me"}
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </main>
    </>
  );
}