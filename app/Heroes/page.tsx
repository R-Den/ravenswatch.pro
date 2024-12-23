import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAllHeroes } from "@/lib/registry";
import Image from "next/image";
import Link from "next/link";

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
            <Link key={hero.id} href={`/Heroes/${hero.id}`} className="block">
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
