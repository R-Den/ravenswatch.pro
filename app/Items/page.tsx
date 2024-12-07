"use client";
import { useState } from "react";
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
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Items() {
  const rarities = ["common", "rare", "epic", "legendary", "cursed"];
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>(
    rarities.reduce((acc, rarity) => ({ ...acc, [rarity]: true }), {})
  );

  const toggleCollapse = (rarity: string) => {
    setCollapsed((prev) => ({ ...prev, [rarity]: !prev[rarity] }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Magical Objects</h1>
        <p className="text-lg">
          Discover the magical objects in Ravenswatch and their unique effects.
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto">
        {rarities.map((rarity) => (
          <div key={rarity} className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 capitalize cursor-pointer flex items-center"
              onClick={() => toggleCollapse(rarity)}
            >
              {collapsed[rarity] ? (
                <ChevronRight className="mr-2" />
              ) : (
                <ChevronDown className="mr-2" />
              )}
              {rarity} Items
            </h2>
            {!collapsed[rarity] && (
              <Table className="bg-secondary border-border shadow-md rounded-lg overflow-hidden">
                <TableCaption>
                  A list of {rarity} magical objects in Ravenswatch.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Icon</TableHead>
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead>Effect</TableHead>
                    <TableHead>Rarity</TableHead>
                    <TableHead>Super Effect</TableHead>
                    <TableHead>Stacks to Effect</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {magical_objects
                    .filter((item) => item.rarity === rarity)
                    .map((item) => (
                      <TableRow key={item.name}>
                        <TableCell>
                          <Image
                            src={`/items/${item.name}.png`}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.rarity}</TableCell>
                        <TableCell>{item.super_effect}</TableCell>
                        <TableCell>{item.stacks_to_effect}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
