import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const items = [
  {
    name: "Magic Lamp",
    description: "A lamp that grants three wishes.",
    rarity: "Legendary",
    effect: "Grants three wishes to the holder.",
  },
  {
    name: "Excalibur",
    description: "The legendary sword of King Arthur.",
    rarity: "Epic",
    effect: "Increases attack power significantly.",
  },
  {
    name: "Phoenix Feather",
    description: "A feather from the mythical Phoenix.",
    rarity: "Rare",
    effect: "Revives the holder upon death.",
  },
  {
    name: "Invisibility Cloak",
    description: "A cloak that makes the wearer invisible.",
    rarity: "Epic",
    effect: "Grants invisibility to the wearer.",
  },
  {
    name: "Healing Potion",
    description: "A potion that heals wounds.",
    rarity: "Common",
    effect: "Restores health to the drinker.",
  },
  // Add more items as needed
];

export default function Items() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Magical Objects</h1>
        <p className="text-lg">
          Discover the magical objects in Ravenswatch and their unique effects.
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        <Table className="bg-white shadow-md rounded-lg overflow-hidden">
          <TableCaption>A list of magical objects in Ravenswatch.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Rarity</TableHead>
              <TableHead>Effect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.rarity}</TableCell>
                <TableCell>{item.effect}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
