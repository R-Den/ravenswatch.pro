import { getHero } from "@/lib/registry";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface HeroPageProps {
  params: {
    hero: string;
  };
}

export default async function HeroPage({ params }: HeroPageProps) {
  const hero = getHero(params.hero);

  if (!hero) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">{hero.name}</h1>
        <p className="text-lg">{hero.description}</p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={`/heroes/${hero.name}.png`}
              alt={hero.name}
              height={300}
              width={200}
              className="object-cover rounded mb-4 md:mb-0 md:mr-8"
            />
            <p className="text-lg">{hero.description}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Abilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {hero.abilities.map((ability) => (
              <Card
                key={ability.id}
                className="bg-secondary border-border shadow-md rounded-lg overflow-hidden"
              >
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>{ability.name}</CardTitle>
                  <span className="text-sm text-gray-500 ml-2">
                    Type: {ability.type}
                  </span>
                </CardHeader>
                <CardContent className="flex items-center">
                  <Image
                    src={`/abilities/${hero.id}/${ability.name}.png`}
                    alt={ability.name}
                    width={96} // Set the width to 96px (w-24 in Tailwind)
                    height={96} // Set the height to 96px (h-24 in Tailwind)
                    className="object-cover rounded mr-4 w-24 h-24"
                  />
                  <p>{ability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Talents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hero.talents.map((talent) => (
              <Card
                key={talent.id}
                className="bg-secondary border-border shadow-md rounded-lg overflow-hidden"
              >
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>{talent.name}</CardTitle>
                  <span className="text-sm text-gray-500 ml-2">
                    Type: {talent.type}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    Unlock: Rank {talent.unlock_rank}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    On upgrade: {talent.upgrade_changes}
                  </span>
                </CardHeader>
                <CardContent className="flex items-center">
                  <Image
                    src={`/talents/${hero.id}/${talent.name}.png`}
                    alt={talent.name}
                    width={96} // Set the width to 96px (w-24 in Tailwind)
                    height={96} // Set the height to 96px (h-24 in Tailwind)
                    className="object-cover rounded mr-4 w-24 h-24"
                  />
                  <p>{talent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}