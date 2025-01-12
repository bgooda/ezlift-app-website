"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/cards/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
              <p className="text-lg text-muted-foreground">
                Discover tips, guides, and insights about strength training and fitness.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 100}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}