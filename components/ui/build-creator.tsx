"use client";

import React, { useState, useMemo } from "react";
import { Hero, Talents, Abilities, BuildSlot } from "@/lib/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeroSelection } from "../HeroSelection";
import { BuildBoard } from "../BuildBoard";
import { TalentSelectionBar } from "../TalentSelectionBar";
import { DragEndEvent } from "@dnd-kit/core";

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

  const selectedIds = useMemo(
    () =>
      buildSlots.filter((slot) => slot.content).map((slot) => slot.content!.id),
    [buildSlots],
  );

  const handleHeroSelect = (hero: Hero) => {
    setSelectedHero(hero);
    setBuildSlots(INITIAL_BUILD_SLOTS);
  };

  const handleSlotUpdate = (
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
        <HeroSelection
          heroes={heroes}
          selectedHero={selectedHero}
          onHeroSelect={handleHeroSelect}
        />

        {selectedHero && (
          <>
            <BuildBoard
              buildSlots={buildSlots}
              onSlotUpdate={handleSlotUpdate}
              onDragEnd={handleDragEnd}
            />

            <TalentSelectionBar
              selectedHero={selectedHero}
              buildSlots={buildSlots}
              onSlotUpdate={handleSlotUpdate}
              selectedIds={selectedIds}
            />
          </>
        )}
      </div>
    </TooltipProvider>
  );
};

export default BuildCreator;
