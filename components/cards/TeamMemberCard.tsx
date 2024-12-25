"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { TeamMember } from "@/types/team";

export function TeamMemberCard({ name, role, image, socials }: TeamMember) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <div className="flex gap-4">
          {socials.map((social, index) => {
            const SocialIcon = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <SocialIcon className="h-5 w-5" />
                <span className="sr-only">Visit {name}&apos;s profile</span>
              </Link>
            );
          })}
        </div>
      </div>
    </Card>
  );
}