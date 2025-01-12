"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { format } from "date-fns";
import type { BlogPost } from "@/types/blog";

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <FadeIn>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            <span>•</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                img: ({ node, src, alt }) => (
                  <div className="relative w-full aspect-video mb-8">
                    <Image
                      src={src || ''}
                      alt={alt || ''}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ),
                iframe: ({ node, ...props }) => (
                  <div className="relative aspect-video mb-8">
                    <iframe {...props} className="absolute inset-0 w-full h-full rounded-lg" />
                  </div>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}