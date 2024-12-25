import { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
}