import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { magical_objects } from "@/lib/magical_objects/magical_objects";
import Image from "next/image";

export default function Items() {
  return (
    <div className="min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Magical Objects</h1>
        <p className="text-lg">
          Discover the magical objects in Ravenswatch and their unique effects.
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        <Table className="bg-secondary border-border shadow-md rounded-lg overflow-hidden">
          <TableCaption>A list of magical objects in Ravenswatch.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Icon</TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Effect</TableHead>
              <TableHead>Rarity</TableHead>
              <TableHead>Super Effect</TableHead>
              <TableHead>stacks to effect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {magical_objects.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Image
                    src={`/items/${item.name}.png`}
                    alt={item.name}
                    width={208}
                    height={208}
                    className="rounded-lg"
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.rarity}</TableCell>
                <TableCell>{item.super_effect}</TableCell>
                <TableCell>{item.stacks_to_effect}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
