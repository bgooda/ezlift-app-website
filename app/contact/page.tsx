"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or feedback? We'd love to hear from you.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}