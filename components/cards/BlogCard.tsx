import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="p-6 hover:bg-muted/50 transition-colors">
        <article className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <header className="mb-4">
              <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>
            </header>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </div>
        </article>
      </Card>
    </Link>
  );
}