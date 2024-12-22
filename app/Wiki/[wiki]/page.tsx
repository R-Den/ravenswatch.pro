import { getAllMagicalObjects } from "@/lib/registry";
import Image from "next/image";
import TableOfContents from "@/components/ui/toc";
import { notFound } from "next/navigation";
import { InfoBox } from "@/app/Wiki/infobox"; // <-- import the component
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface WikiPageProps {
  params: {
    wiki: string;
  };
}

export default async function WikiPage({ params }: WikiPageProps) {
  const magicalObjects = await getAllMagicalObjects();

  if (!magicalObjects || magicalObjects.length === 0) {
    return notFound();
  }

  // Find the specific item by slug or ID
  const item = magicalObjects.find((obj) => obj.id === params.wiki);
  if (!item) {
    return notFound();
  }

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "stats", title: "Stats & Usage" },
    { id: "acquisition", title: "Acquisition" },
  ];

  return (
    <div className="min-h-screen bg-background p-8 relative grid grid-cols-1 lg:grid-cols-[220px,1fr,300px] gap-8">
      {/* LEFT COLUMN: Table of Contents */}
      <aside className="hidden lg:block">
        <TableOfContents sections={sections} />
      </aside>

      {/* CENTER COLUMN: Main Content */}
      <div className="flex flex-col">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-lg">
            Everything you need to know about this magical object.
          </p>
        </header>

        <main className="w-full max-w-4xl mx-auto">
          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <section id="overview">
                <p>{item.description}</p>
              </section>
            </CardContent>
          </Card>

          {/* Stats & Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Stats & Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <section id="stats">
                <p>Rarity: {item.rarity}</p>
                {/* Add more fields if needed */}
              </section>
            </CardContent>
          </Card>

          {/* Acquisition */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acquisition</CardTitle>
            </CardHeader>
            <CardContent>
              <section id="acquisition">
                <p>
                  {/* Explain how the user can obtain this item */}
                  Learn how to acquire {item.name} in-game...
                </p>
              </section>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* RIGHT COLUMN: Infobox / Key Details */}
      <aside className="hidden lg:block">
        <InfoBox
          imageUrl={item.image}
          altText={item.name}
          name={item.name}
          rarity={item.rarity}
          // Add other props here if you expanded InfoBox
        />
      </aside>
    </div>
  );
}
