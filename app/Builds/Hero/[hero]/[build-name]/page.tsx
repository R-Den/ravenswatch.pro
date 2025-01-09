import { notFound } from "next/navigation";
import HeroBuildCard from "../../../HeroBuildCard";
import {
  getHero,
  getHeroBuildByName,
  getAllHeroBuilds,
  formatBuildName,
} from "@/lib/registry";

interface BuildPageProps {
  params: {
    hero: string;
    "build-name": string;
  };
}

export async function generateStaticParams() {
  // This will create static pages for all hero builds at build time
  const allHeroBuilds = getAllHeroBuilds();
  const params = [];

  for (const { heroId, builds } of allHeroBuilds) {
    for (const build of builds) {
      params.push({
        hero: heroId,
        "build-name": formatBuildName(build.name),
      });
    }
  }

  return params;
}

export default async function BuildPage({ params }: BuildPageProps) {
  const heroId = params.hero;
  const buildName = decodeURIComponent(params["build-name"]);

  const hero = getHero(heroId);
  const build = getHeroBuildByName(heroId, buildName);

  if (!hero || !build) {
    notFound();
  }

  return (
    <div className="flex justify-center mx-auto py-8">
      <HeroBuildCard build={build} />
    </div>
  );
}
