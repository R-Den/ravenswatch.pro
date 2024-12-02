import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aladdin } from "@/lib/heroes/aladdin/aladdin";
import { beowulf } from "@/lib/heroes/beowulf/beowulf";
// import { carmilla } from "@/lib/heroes/carmilla/carmilla";
import { geppetto } from "@/lib/heroes/geppetto/geppetto";
import { melusine } from "@/lib/heroes/melusine/melusine";
import { piper } from "@/lib/heroes/piper/piper";
import { scarlet } from "@/lib/heroes/scarlet/scarlet";
import { snow_queen } from "@/lib/heroes/snow_queen/snow_queen";
import { wukong } from "@/lib/heroes/wukong/wukong";

import Image from "next/image";

const heroes = [
  aladdin,
  beowulf,
  geppetto,
  melusine,
  piper,
  scarlet,
  snow_queen,
  wukong,
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Ravenswatch Wiki</h1>
        <p className="text-lg">
          Welcome to the Ravenswatch Wiki, your ultimate resource for all things
          related to the game Ravenswatch.
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {heroes.map((hero) => (
            <Card
              key={hero.name}
              className="bg-secondary border-border shadow-md rounded-lg overflow-hidden"
            >
              <CardHeader>
                <CardTitle>{hero.name}</CardTitle>
                <CardDescription>{hero.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={`/heroes/${hero.name}.png`}
                  width={500}
                  height={500}
                  alt={`Ravenswatch ${hero.name}`}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
