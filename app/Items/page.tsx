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
import { useRouter } from "next/navigation";

import TableOfContents from "@/components/ui/toc";

import { magical_objects } from "@/lib/magical_objects/magical_objects";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Items() {
  const rarities = ["common", "rare", "epic", "legendary", "cursed"];
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>(
    rarities.reduce((acc, rarity) => ({ ...acc, [rarity]: false }), {})
  );

  const toggleCollapse = (rarity: string) => {
    setCollapsed((prev) => ({ ...prev, [rarity]: !prev[rarity] }));
  };

  const sections = rarities.map((rarity) => ({
    id: rarity,
    title: `${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Items`,
  }));

  const router = useRouter();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="relative grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-8 max-w-7xl mx-auto">
        {/* Table of Contents */}
        <aside className="hidden lg:block">
          <TableOfContents sections={sections} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <header className="text-center my-8">
            <h1 className="text-4xl font-bold mb-4">Magical Objects</h1>
            <p className="text-lg">
              Discover the magical objects in Ravenswatch and their unique
              effects.
            </p>
          </header>

          <div className="w-full max-w-6xl mx-auto">
            {rarities.map((rarity) => (
              <section key={rarity} id={rarity} className="mb-8">
                <h2
                  className="text-2xl font-bold mb-4 capitalize flex items-center cursor-pointer group"
                  onClick={() => toggleCollapse(rarity)}
                >
                  {collapsed[rarity] ? (
                    <ChevronRight className="mr-2 transition-transform duration-300 group-hover:rotate-90" />
                  ) : (
                    <ChevronDown className="mr-2 transition-transform duration-300 group-hover:rotate-0" />
                  )}
                  {rarity} Items
                </h2>
                {!collapsed[rarity] && (
                  <Table className="w-full bg-secondary border border-border shadow-md rounded-lg overflow-hidden">
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
                          <TableRow
                            key={item.name}
                            onClick={() => router.push(`/Wiki/${item.id}`)}
                            className="
                              cursor-pointer
                              relative
                              overflow-hidden
                              bg-gradient-to-r from-primary to-transparent
                              bg-[length:0%_100%]
                              bg-no-repeat
                              transition-[background-size] duration-500 ease-in-out
                              hover:bg-[length:100%_100%]
                              hover:bg-gradient-to-r from-primary to-accent
                            "
                          >
                            <TableCell>
                              <Image
                                src={`/items/${item.id}.png`}
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
                            <TableCell className="capitalize">
                              {item.rarity}
                            </TableCell>
                            <TableCell>{item.super_effect}</TableCell>
                            <TableCell>{item.stacks_to_effect}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                )}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
