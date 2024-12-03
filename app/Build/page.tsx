import { aladdin } from "@/lib/heroes/aladdin";
import { beowulf } from "@/lib/heroes/beowulf";
import { geppetto } from "@/lib/heroes/geppetto";
import { melusine } from "@/lib/heroes/melusine";
import { piper } from "@/lib/heroes/piper";
import { scarlet } from "@/lib/heroes/scarlet";
import { snow_queen } from "@/lib/heroes/snow_queen";
import { wukong } from "@/lib/heroes/wukong";
import BuildCreator from "@/components/ui/build-creator";

export const metadata = {
  title: "Build Creator | Ravenswatch",
  description: "Create and share your Ravenswatch builds",
};

export default async function BuildPage() {
  // In a real app, you might fetch this data from an API
  const heroes = [
    aladdin,
    beowulf,
    geppetto,
    melusine,
    piper,
    scarlet,
    snow_queen,
    wukong,
  ]; // Add other heroes as you create them

  return (
    <main className="min-h-screen py-8">
      <BuildCreator heroes={heroes} />
    </main>
  );
}
