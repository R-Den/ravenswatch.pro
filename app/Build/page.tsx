import { getAllHeroes } from "@/lib/registry";
import BuildCreator from "./build-creator";

export const metadata = {
  title: "Build Creator | Ravenswatch",
  description: "Under Construction: Create and share your Ravenswatch builds",
};

export default async function BuildPage() {
  const heroes = getAllHeroes();
  return (
    <main className="min-h-screen py-8">
      <BuildCreator heroes={heroes} />
    </main>
  );
}
