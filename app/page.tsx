import Image from "next/image";
import { wukong } from "@/lib/heroes/wukong";
import { carmilla } from "@/lib/heroes/carmilla";
import { aladdin } from "@/lib/heroes/aladdin";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const featuredHeroes = [
  {
    name: wukong.name,
    description: "WhatTheShuck - Dev",
    id: wukong.id,
  },
  {
    name: carmilla.name,
    description: "R-Den - Dev",
    id: carmilla.id,
  },
  {
    name: aladdin.name,
    description: "Miet - Project Manager",
    id: aladdin.id,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Ravenswatch Pro</h1>
        <p className="text-lg">
          Welcome to Ravenswatch.pro, your ultimate resource for all things
          related to the game Ravenswatch.
        </p>
      </header>

      <main className="w-full max-w-4xl px-4">
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">About Ravenswatch</h2>
          <p className="text-lg">
            Fallen heroes of old folk tales and legends: you are on the verge of
            a crucial battle against the Nightmare invading and corrupting your
            world. A roguelike action game from the creators of Curse of the
            Dead Gods©, playable solo or in online co-op.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Featured Heroes</h2>
          <p className="text-lg">
            Discover the Dev Team&apos;s favourite heroes in Ravenswatch.
          </p>

          <br />
          <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {featuredHeroes.map((hero) => (
              <Link key={hero.id} href={`/Heroes/${hero.id}`} className="block">
                <Card
                  key={hero.name}
                  className="bg-secondary border-border shadow-md rounded-lg overflow-hidden flex flex-col justify-between hover:scale-105 hover:bg-input"
                >
                  <CardHeader>
                    <CardTitle>{hero.name}</CardTitle>
                    <CardDescription className="flex-1">
                      {hero.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="w-full h-full relative">
                    <Image
                      src={`/heroes/${hero.name}.png`}
                      alt={hero.name}
                      height={1548}
                      width={1000}
                      className="object-cover"
                    />
                  </div>
                </Card>
              </Link>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}
