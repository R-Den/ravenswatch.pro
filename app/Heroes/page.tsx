import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { aladdin } from "@/lib/heroes/aladdin";
import { beowulf } from "@/lib/heroes/beowulf";
import { carmilla } from "@/lib/heroes/carmilla";
import { geppetto } from "@/lib/heroes/geppetto";
import { melusine } from "@/lib/heroes/melusine";
import { piper } from "@/lib/heroes/piper";
import { scarlet } from "@/lib/heroes/scarlet";
import { snow_queen } from "@/lib/heroes/snow_queen";
import { wukong } from "@/lib/heroes/wukong";

import Image from "next/image";

const heroes = [
  aladdin,
  beowulf,
  carmilla,
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
              className="bg-secondary border-border shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle>{hero.name}</CardTitle>
                <CardDescription className="flex-1">
                  {hero.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-end">
                <div className="w-full h-72 relative">
                  <Image
                    src={`/heroes/${hero.name}.png`}
                    alt={hero.name}
                    layout="fill"
                    objectFit="contain"
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
            // <Card
            //   key={hero.name}
            //   className="bg-secondary border-border shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
            // >
            //   <CardHeader>
            //     <CardTitle>{hero.name}</CardTitle>
            //     <CardDescription className="flex-1">
            //       {hero.description}
            //     </CardDescription>
            //   </CardHeader>
            //   <CardContent className="flex justify-center items-end">
            //     <Image
            //       src={`/heroes/${hero.name}.png`}
            //       alt={hero.name}
            //       width={200}
            //       height={200}
            //       className="object-cover"
            //     />
            //   </CardContent>
            // </Card>