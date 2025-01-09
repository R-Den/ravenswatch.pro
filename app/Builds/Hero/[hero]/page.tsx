import { notFound } from "next/navigation";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  getHero,
  getHeroBuilds,
  getAllHeroBuilds,
  formatBuildName,
} from "@/lib/registry";
import Image from "next/image";

interface HeroPageProps {
  params: {
    hero: string;
  };
}

export async function generateStaticParams() {
  // This will create static pages for all heroes that have builds
  const heroBuilds = getAllHeroBuilds();
  return heroBuilds.map(({ heroId }) => ({
    hero: heroId,
  }));
}

export default async function HeroPage({ params }: HeroPageProps) {
  const heroId = params.hero;
  const hero = getHero(heroId);
  const heroBuilds = getHeroBuilds(heroId);

  if (!hero || !heroBuilds) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-20 h-20 relative rounded-full overflow-hidden">
            <Image
              src={`/heroes/thumbnail/${hero.id}.png`}
              alt={hero.name}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold">{hero.name} Builds</h1>
        </div>
        {hero.description && <p className="text-lg">{hero.description}</p>}
      </header>

      <div className="max-w-4xl w-full">
        {heroBuilds.map((build) => (
          <Link
            key={build.name}
            href={`/Builds/Hero/${heroId}/${formatBuildName(build.name)}`}
          >
            <Card className="w-full mb-4 hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>{build.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{build.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
