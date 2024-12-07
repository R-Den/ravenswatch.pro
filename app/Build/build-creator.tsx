"use client";

import React, { useState, useMemo } from "react";
import {
  Hero,
  Talents,
  Abilities,
  BuildSlot,
  Magical_Objects,
} from "@/lib/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroSelection } from "./HeroSelection";
import { BuildBoard } from "./BuildBoard";
import { ItemSelectionBar } from "./ItemSelectionBar";
import { TalentSelectionBar } from "./TalentSelectionBar";
import { DragEndEvent } from "@dnd-kit/core";
import { X, Book, Sword } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Item } from "@radix-ui/react-navigation-menu";

// when implementing sharing / editing builds from can populate this
const INITIAL_BUILD_SLOTS: BuildSlot[] = [
  { level: 1, type: "starter", content: null },
  { level: 2, type: "normal", content: null },
  { level: 3, type: "normal", content: null },
  { level: 4, type: "normal", content: null },
  { level: 5, type: "ultimate", content: null },
  { level: 6, type: "normal", content: null },
  { level: 7, type: "normal", content: null },
  { level: 8, type: "normal", content: null },
  { level: 9, type: "normal", content: null },
  { level: 10, type: "ultimate-upgrade", content: null },
];

const BuildCreator = ({ heroes }: { heroes: Hero[] }) => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [buildSlots, setBuildSlots] =
    useState<BuildSlot[]>(INITIAL_BUILD_SLOTS);
  const [selectedItems, setSelectedItems] = useState<Map<string, number>>(
    new Map(),
  );
  const [showTalentBar, setShowTalentBar] = useState(true);
  const [showItemBar, setShowItemBar] = useState(false);

  const selectedIds = useMemo(
    () =>
      buildSlots.filter((slot) => slot.content).map((slot) => slot.content!.id),
    [buildSlots],
  );

  const handleHeroSelect = (hero: Hero) => {
    setSelectedHero(hero);
    setBuildSlots(INITIAL_BUILD_SLOTS);
    setSelectedItems(new Map());
  };

  const handleTalentSlotUpdate = (
    level: number,
    content: Talents | Abilities | null,
  ) => {
    setBuildSlots((prev) =>
      prev.map((slot) => {
        // If removing an ultimate, also remove its upgrade
        if (level === 5 && !content) {
          return slot.level === 10
            ? { ...slot, content: null }
            : slot.level === level
              ? { ...slot, content }
              : slot;
        }
        return slot.level === level ? { ...slot, content } : slot;
      }),
    );
  };

  const handleItemUpdate = (item: Magical_Objects) => {
    setSelectedItems((prev) => {
      const newMap = new Map(prev);
      if (item.rarity === "legendary" || item.rarity === "cursed") {
        if (!prev.has(item.id)) {
          newMap.set(item.id, 1);
        }
      } else {
        const currentCount = prev.get(item.id) || 0;
        newMap.set(item.id, currentCount + 1);
      }
      return newMap;
    });
  };

  const handleItemRemove = (itemId: string) => {
    setSelectedItems((prev) => {
      const newMap = new Map(prev);
      const currentCount = prev.get(itemId) || 0;
      if (currentCount <= 1) {
        newMap.delete(itemId);
      } else {
        newMap.set(itemId, currentCount - 1);
      }
      return newMap;
    });
  };

  const toggleBar = (barType: "talent" | "item") => {
    if (barType === "talent") {
      setShowTalentBar(!showTalentBar);
      setShowItemBar(false);
    } else {
      setShowItemBar(!showItemBar);
      setShowTalentBar(false);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    setBuildSlots((prev) => {
      const oldIndex = prev.findIndex(
        (slot) => slot.level.toString() === activeId,
      );
      const newIndex = prev.findIndex(
        (slot) => slot.level.toString() === overId,
      );

      if (oldIndex === -1 || newIndex === -1) return prev;

      const activeSlot = prev[oldIndex];
      const overSlot = prev[newIndex];

      // Don't allow moving starter, ultimate, or ultimate upgrade slots
      if (activeSlot.type !== "normal" || overSlot.type !== "normal")
        return prev;

      // Create a new array with the updated order
      const updatedSlots = [...prev];
      const [removed] = updatedSlots.splice(oldIndex, 1);
      updatedSlots.splice(newIndex, 0, removed);

      return updatedSlots;
    });
  };

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex space-x-6">
          <HeroSelection
            heroes={heroes}
            selectedHero={selectedHero}
            onHeroSelect={handleHeroSelect}
          />

          {selectedHero && (
            <div className="flex-1">
              <div className="flex justify-end space-x-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleBar("talent")}
                  className="flex items-center space-x-1"
                >
                  <Book className="w-4 h-4" />
                  <span>Talents</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleBar("item")}
                  className="flex items-center space-x-1"
                >
                  <Sword className="w-4 h-4" />
                  <span>Items</span>
                </Button>
              </div>

              <BuildBoard
                buildSlots={buildSlots}
                onSlotUpdate={handleTalentSlotUpdate}
                onDragEnd={handleDragEnd}
              />

              {/* need to make into a component  */}
              <div className="mt-6">
                <h3 className="font-bold mb-3">Selected Items</h3>
                <div className="grid grid-cols-6 gap-4">
                  {Array.from(selectedItems.entries()).map(
                    ([itemId, count]) => (
                      <div key={itemId} className="relative">
                        <Button
                          variant="outline"
                          className="w-16 h-16 relative"
                          onClick={() => handleItemRemove(itemId)}
                        >
                          <Image
                            src={`/items/${itemId}.png`}
                            width={64}
                            height={64}
                            alt={itemId}
                            className="w-full h-full object-cover rounded"
                          />
                          {count > 1 && (
                            <Badge
                              variant="secondary"
                              className="absolute -top-2 -right-2"
                            >
                              {count}
                            </Badge>
                          )}
                        </Button>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {selectedHero && showTalentBar && (
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-3 right-3 z-10"
              onClick={() => setShowTalentBar(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <TalentSelectionBar
              selectedHero={selectedHero}
              buildSlots={buildSlots}
              onSlotUpdate={handleTalentSlotUpdate}
              selectedIds={selectedIds}
            />
          </div>
        )}

        {selectedHero && showItemBar && (
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-3 right-3 z-10"
              onClick={() => setShowItemBar(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <ItemSelectionBar
              buildSlots={buildSlots}
              onSlotUpdate={handleItemUpdate}
              selectedIds={Array.from(selectedItems.keys())}
            />
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default BuildCreator;
