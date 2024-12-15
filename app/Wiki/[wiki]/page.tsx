import { getAllMagicalObjects } from "@/lib/registry";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/ui/toc";
import { notFound } from "next/navigation";

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

  const sections = [
    { id: "magical-objects", title: "Magical Objects" },
    // Add more sections here for enemies, locations, etc.
  ];

  return (
    <div className="min-h-screen bg-background p-8 relative flex flex-col lg:flex-row">
      <div className="lg:w-64 lg:block hidden">
        <TableOfContents sections={sections} />
      </div>
      <div className="flex-1 lg:ml-8">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">Wiki</h1>
          <p className="text-lg">Your go-to resource for all information.</p>
        </header>

        <main className="w-full max-w-6xl mx-auto">
          <section id="magical-objects" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Magical Objects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {magicalObjects.map((object) => (
                <Card
                  key={object.id}
                  className="bg-secondary border-border shadow-md rounded-lg overflow-hidden"
                >
                  <CardHeader className="flex justify-between items-center">
                    <CardTitle>{object.name}</CardTitle>
                    <span className="text-sm text-gray-500 ml-2">
                      Rarity: {object.rarity}
                    </span>
                  </CardHeader>
                  <CardContent className="flex items-center">
                    <Image
                      src={object.image}
                      alt={object.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
