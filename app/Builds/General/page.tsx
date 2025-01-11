import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { generalBuilds } from "@/lib/builds/generalBuilds";
import Link from "next/link";
import Image from "next/image";
import { getHero, formatBuildName } from "@/lib/registry";
import { CircleUserRound } from "lucide-react";

export default function GeneralBuildPage() {
  const HeroIcon = ({ id }: { id: string }) => {
    if (id === "All") {
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <CircleUserRound color="#692cc3" size={48} />
        </div>
      );
    }

    const hero = getHero(id);
    if (!hero) return null;

    return (
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 bg-gray-800 ">
        <Image
          src={`/heroes/thumbnail/${hero.id}.png`}
          width={500}
          height={500}
          alt={hero.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8 ">
      <div className="max-w-5xl w-full">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">General Builds</h1>
          <p className="text-lg">
            These are builds that apply to a wide variety of heroes. Click on a
            build to get started.
          </p>
        </header>
        {generalBuilds.map((build) => (
          <Link
            key={build.name}
            href={`/Builds/General/${formatBuildName(build.name)}`}
          >
            <Card className="w-full mb-4">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{build.name}</CardTitle>
                  <div className="flex -space-x-4">
                    {build.recommended_heroes.map((heroId) => (
                      <div key={heroId} className="relative">
                        <HeroIcon id={heroId} />
                      </div>
                    ))}
                  </div>
                </div>
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
