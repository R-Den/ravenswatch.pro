import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAllHeroes } from "@/lib/registry";
import Image from "next/image";

export default function Home() {
  const heroes = getAllHeroes();
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
                <Image
                  src={`/heroes/${hero.name}.png`}
                  alt={hero.name}
                  height={1548}
                  width={1000}
                  className="object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
