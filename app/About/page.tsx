import { Card, CardContent } from "@/components/ui/card";
import { team, TeamMember } from "@/lib/team";
import { TeamCard } from "./team-card";

export default async function AboutPage() {
  const teamByRole = team.reduce(
    (acc, member) => {
      const role = member.role;
      if (!acc[role]) {
        acc[role] = [];
      }
      acc[role].push(member);
      return acc;
    },
    {} as Record<string, TeamMember[]>,
  );
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container px-4 mx-auto space-y-8">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            About Ravenswatch.pro
          </h1>
          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ravenswatch.pro is a fan-made website for the game{" "}
                <a
                  href="https://ravenswatch.com"
                  className="text-primary hover:text-primary/90 underline underline-offset-4"
                >
                  Ravenswatch
                </a>
                . It is a work in progress and is not affiliated with the game
                developers. This website is Open Source and contributions are
                welcome. The source code can be found on{" "}
                <a
                  href="https://github.com/R-Den/ravenswatch.pro"
                  className="text-primary hover:text-primary/90 underline underline-offset-4"
                >
                  GitHub
                </a>
                . Don&apos;t code? No problem! You can help by reporting bugs or
                suggesting features.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Meet the Team
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(teamByRole).map(([role, members]) => (
              <TeamCard key={role} role={role} members={members} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
