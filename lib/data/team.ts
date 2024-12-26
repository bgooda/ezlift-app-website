import { Linkedin, Instagram, Youtube } from "lucide-react";
import type { TeamMember } from "@/types/team";

export const teamMembers: TeamMember[] = [
  {
    name: "Mostafa Adly",
    role: "CEO & Co-Founder",
    image: "/team/mostafa-adly.webp",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/mostafa-elgaafary/" },
      { icon: Instagram, href: "https://www.instagram.com/mel.gaaf/" },
      { icon: Youtube, href: "https://www.youtube.com/@moadly" },
    ]
  },
  {
    name: "Belal Gouda",
    role: "CPO & Co-Founder",
    image: "/team/belal-gouda.webp",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/bgooda/" },
    ]
  },
  {
    name: "Fahmy Farahat",
    role: "CTO & Co-Founder",
    image: "/team/fahmy-farahat.webp",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/fahmyfarahat/" },
    ]
  }
];