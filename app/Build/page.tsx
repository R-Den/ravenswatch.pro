import { wukong } from "@/lib/heroes/wukong";
import BuildCreator from "@/components/ui/build-creator";

export const metadata = {
  title: "Build Creator | Ravenswatch",
  description: "Create and share your Ravenswatch builds",
};

export default async function BuildPage() {
  // In a real app, you might fetch this data from an API
  const heroes = [wukong]; // Add other heroes as you create them

  return (
    <main className="min-h-screen py-8">
      <BuildCreator heroes={heroes} />
    </main>
  );
}
