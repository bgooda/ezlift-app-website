import { Card } from "@/components/ui/card";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import type { IconType } from "@/components/features/FeatureIcon";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 bg-background hover:bg-muted/50 transition-colors border border-border hover:border-muted-foreground/25">
      <div className="flex flex-col gap-4">
        <div className="text-primary h-12 w-12">
          <FeatureIcon type={icon} className="h-full w-full" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}