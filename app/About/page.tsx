import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, GithubIcon, UserIcon, PaletteIcon } from "lucide-react";

export default async function AboutPage() {
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
            {/* Developers Card */}
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CodeIcon className="w-5 h-5" />
                  Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/WhatTheShuck"
                      className="text-primary hover:text-primary/90 underline underline-offset-4 flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      WhatTheShuck
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/R-Den"
                      className="text-primary hover:text-primary/90 underline underline-offset-4 flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      R-Den
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project Manager Card */}
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  Project Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                    <span className="text-primary">Miet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Designers Card */}
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PaletteIcon className="w-5 h-5" />
                  Designers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                    <span className="text-primary">Jinariadne</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
