"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/data/team";

export default function About() {
  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Meet our team</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We are a small team based in Berlin, Germany. Our team is made up of expert Lifters 
                and fitness enthusiasts who decided to build an app to solve the weightlifting 
                tracking once and for all.
              </p>
              <Button onClick={scrollToTeam} size="lg">
                Meet our team
              </Button>
            </div>
          </FadeIn>
        </div>

        <section id="team" className="py-24 bg-muted/50">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <FadeIn key={member.name} delay={index * 100}>
                  <TeamMemberCard {...member} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}