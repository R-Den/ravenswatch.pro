import { getAllMagicalObjects, getAllHeroes } from "@/lib/registry"; // Import functions for items and heroes
import TableOfContents from "@/components/ui/toc";
import { notFound } from "next/navigation";
import { InfoBox } from "@/app/Wiki/infobox"; // Import the InfoBox component
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface WikiPageProps {
  params: {
    wiki: string;
  };
}

export default async function WikiPage({ params }: WikiPageProps) {
  // Fetch items and heroes
  const magicalObjects = await getAllMagicalObjects();
  const heroes = await getAllHeroes();

  if (
    (!magicalObjects || magicalObjects.length === 0) &&
    (!heroes || heroes.length === 0)
  ) {
    return notFound();
  }

  // Find the entity by slug or ID
  const entity =
    magicalObjects.find((obj) => obj.id === params.wiki) ||
    heroes.find((hero) => hero.id === params.wiki);

  if (!entity) {
    return notFound();
  }

  // Define sections based on the type
  const sections =
    entity.type === "heroes"
      ? [
          { id: "overview", title: "Overview" },
          { id: "abilities", title: "Abilities" },
          { id: "talents", title: "Talents" },
        ]
      : [
          { id: "overview", title: "Overview" },
          { id: "stats", title: "Stats & Usage" },
          { id: "acquisition", title: "Acquisition" },
        ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="relative grid grid-cols-1 lg:grid-cols-[220px,1fr,300px] gap-8 max-w-7xl mx-auto">
        {/* LEFT COLUMN: Table of Contents */}
        <aside className="hidden lg:block">
          <TableOfContents sections={sections} />
        </aside>

        {/* CENTER COLUMN: Main Content */}
        <div className="flex flex-col">
          <header className="text-center my-8">
            <h1 className="text-4xl font-bold mb-4">{entity.name}</h1>
            <p className="text-lg">
              {entity.type === "heroes"
                ? "Learn everything about this hero's abilities and talents."
                : "Everything you need to know about this magical object."}
            </p>
          </header>

          <main>
            {/* Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <section id="overview">
                  <p>{entity.description}</p>
                </section>
              </CardContent>
            </Card>

            {/* Conditional Sections */}
            {entity.type === "heroes" ? (
              <>
                {/* Abilities */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Abilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <section id="abilities">
                      <ul className="list-disc pl-5">
                        {entity.abilities.map((ability, index) => (
                          <li key={index}>
                            <strong>{ability.name}:</strong>{" "}
                            {ability.description}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </CardContent>
                </Card>

                {/* Talents */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Talents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <section id="talents">
                      <ul className="list-disc pl-5">
                        {entity.talents.map((talent, index) => (
                          <li key={index}>
                            <strong>{talent.name}:</strong> {talent.description}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                {/* Stats & Usage */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Stats & Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <section id="stats">
                      <p>Rarity: {entity.rarity}</p>
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
                      <p>Learn how to acquire {entity.name} in-game...</p>
                    </section>
                  </CardContent>
                </Card>
              </>
            )}
          </main>
        </div>

        {/* RIGHT COLUMN: Infobox */}
        <aside className="hidden lg:block">
          <InfoBox
            imageUrl={entity.imagePath}
            altText={entity.name}
            name={entity.name}
            rarity={entity.rarity}
          />
        </aside>
      </div>
    </div>
  );
}
