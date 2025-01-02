import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="p-6 text-left bg-background hover:bg-muted/50 transition-colors border border-border hover:border-muted-foreground/25">
      <blockquote className="text-lg mb-4">{quote}</blockquote>
      <footer>
        <cite className="not-italic font-semibold block">{author}</cite>
        <span className="text-sm text-muted-foreground">{role}</span>
      </footer>
    </Card>
  );
}