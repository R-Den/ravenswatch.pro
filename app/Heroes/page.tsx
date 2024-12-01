import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const heroes = [
  {
    name: "Scarlet",
    description: "Scarlet, the Red Hood is one of the nine currently playable heroes in the Ravenswatch.",
    image: "/scarlet.png",
  },
  {
    name: "Beowulf",
    description: "Beowulf, the legendary hero known for his strength and bravery.",
    image: "/beowulf.png",
  },
  {
    name: "Aladdin",
    description: "Aladdin, the cunning hero with a magical lamp.",
    image: "/aladdin.png",
  },
  {
    name: "Snow Queen",
    description: "Snow Queen, the icy ruler with powerful frost abilities.",
    image: "/snowqueen.png",
  },
  {
    name: "Melusine",
    description: "Melusine, the water nymph with enchanting abilities.",
    image: "/melusine.png",
  },
  {
    name: "Dracula",
    description: "Dracula, the vampire lord with dark powers.",
    image: "/dracula.png",
  },
  {
    name: "Robin Hood",
    description: "Robin Hood, the master archer and defender of the poor.",
    image: "/robinhood.png",
  },
  {
    name: "Rapunzel",
    description: "Rapunzel, the princess with magical hair.",
    image: "/rapunzel.png",
  },
  // Add more heroes as needed
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Ravenswatch Wiki</h1>
        <p className="text-lg">
          Welcome to the Ravenswatch Wiki, your ultimate resource for all things
          related to the game Ravenswatch.
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {heroes.map((hero) => (
            <Card key={hero.name} className="bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle>{hero.name}</CardTitle>
                <CardDescription>{hero.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={hero.image} alt={`Ravenswatch ${hero.name}`} className="w-full h-48 object-cover" />
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
