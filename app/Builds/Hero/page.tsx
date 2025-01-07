import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { getAllHeroes } from "@/lib/registry";
import Image from "next/image";
import Link from "next/link";

export default function GeneralBuildPage() {
  const heroes = getAllHeroes();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Hero Builds</h1>
        <p className="text-lg">
          These are builds for each of the Heroes in Ravenswatch. Click on a
          Hero to get started.
        </p>
      </header>
      <main className="w-full max-w-6xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {heroes.map((hero) => (
            <Link
              key={hero.id}
              href={`/Builds/Hero/${hero.id}`}
              className="block"
            >
              <Card
                className="bg-input
                                 border-border
                                 shadow-md
                                 rounded-lg
                                 overflow-hidden
                                 flex
                                 flex-col
                                 justify-between
                                 h-full
                                 transform
                                 transition-all
                                 duration-500
                                 ease-in-out
                                 hover:scale-105
                                 bg-gradient-to-r
                                 from-primary
                                 to-transparent
                                 bg-[length:0%_100%]
                                 bg-no-repeat
                                 hover:bg-[length:100%_100%]
                                 hover:from-primary
                                 hover:to-input
                                 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle>{hero.name}</CardTitle>
                  <CardDescription className="flex-1">
                    {hero.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-end">
                  <Image
                    src={`/heroes/${hero.id}.png`}
                    alt={hero.name}
                    height={1548}
                    width={1000}
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
