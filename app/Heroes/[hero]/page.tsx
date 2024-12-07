import { getHero } from "@/lib/registry";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hero.abilities.map((ability) => (
              <Card
                key={ability.id}
                className="bg-secondary border-border shadow-md rounded-lg overflow-hidden"
              >
                <CardHeader>
                  <CardTitle>{ability.name}</CardTitle>
                </CardHeader>
                <CardContent>
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
                <CardHeader>
                  <CardTitle>{talent.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{talent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Additional Information</h2>
          <p className="text-lg">
            Add any additional information about the hero here.
          </p>
        </section>
      </main>
    </div>
  );
}
