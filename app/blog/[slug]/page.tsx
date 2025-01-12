import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/data/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          <BlogPostContent post={post} />
        </div>
      </main>
      <Footer />
    </>
  );
}