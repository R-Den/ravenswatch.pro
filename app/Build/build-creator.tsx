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
import { HeroSelection } from "./HeroSelection";
import HeroSelectionDialog from "./HeroSelectionDialog";
import { getAllMagicalObjects } from "@/lib/registry";
import { BuildTalentBoard } from "./BuildTalentBoard";
import ItemBoard from "./BuildItemBoard";
import { ItemSelectionBar } from "./ItemSelectionBar";
import { TalentSelectionBar } from "./TalentSelectionBar";
import { DragEndEvent } from "@dnd-kit/core";
import { X, Book, Sword, Save, Eraser } from "lucide-react";

// when implementing sharing / editing builds from can populate this
const INITIAL_BUILD_SLOTS: BuildSlot[] = [
  { id: "starter", type: "starter", content: null },
  { id: "core-1", type: "normal", content: null },
  { id: "core-2", type: "normal", content: null },
  { id: "core-3", type: "normal", content: null },
  { id: "core-4", type: "normal", content: null },
  { id: "ultimate", type: "ultimate", content: null },
  { id: "core-5", type: "normal", content: null },
  { id: "core-6", type: "normal", content: null },
  { id: "core-7", type: "normal", content: null },
  { id: "ultimate-upgrade", type: "ultimate-upgrade", content: null },
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
  const [alternativeTalents, setAlternativeTalents] = useState<BuildSlot[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingHeroSelection, setPendingHeroSelection] = useState<Hero | null>(
    null,
  );
  const [talentSelectionMode, setTalentSelectionMode] = useState<
    "core" | "alternative"
  >("core");

  const handleTalentBarOpen = (mode: "core" | "alternative") => {
    setShowTalentBar(true);
    setShowItemBar(false);
    setTalentSelectionMode(mode);
  };

  const selectedIds = useMemo(
    () => [
      ...buildSlots
        .filter((slot) => slot.content)
        .map((slot) => slot.content!.id),
      ...alternativeTalents.map((slot) => slot.content!.id),
    ],
    [buildSlots, alternativeTalents],
  );

  const handleHeroSelect = (hero: Hero) => {
    if (
      buildSlots.some((slot) => slot.content) ||
      alternativeTalents.length > 0 ||
      selectedItems.size > 0
    ) {
      setPendingHeroSelection(hero);
      setShowConfirmDialog(true);
    } else {
      setSelectedHero(hero);
    }
  };

  const handleClearAll = () => {
    if (pendingHeroSelection) {
      setSelectedHero(pendingHeroSelection);
      setBuildSlots(INITIAL_BUILD_SLOTS);
      setAlternativeTalents([]);
      setSelectedItems(new Map());
      setShowConfirmDialog(false);
      setPendingHeroSelection(null);
    }
  };

  const handleClearTalentsOnly = () => {
    if (pendingHeroSelection) {
      setSelectedHero(pendingHeroSelection);
      setBuildSlots(INITIAL_BUILD_SLOTS);
      setAlternativeTalents([]);
      setShowConfirmDialog(false);
      setPendingHeroSelection(null);
    }
  };

  const handleDialogClose = () => {
    setShowConfirmDialog(false);
    setPendingHeroSelection(null);
  };

  const handleTalentSlotUpdate = (
    slotId: string,
    content: Talents | Abilities | null,
  ) => {
    // Check if it's a core slot
    const coreSlot = buildSlots.find((slot) => slot.id === slotId);
    if (coreSlot) {
      setBuildSlots((prev) =>
        prev.map((slot) => {
          if (slot.id === slotId) {
            return { ...slot, content };
          }
          // If removing an ultimate, also remove its upgrade
          if (
            slotId === "ultimate" &&
            !content &&
            slot.id === "ultimate-upgrade"
          ) {
            return { ...slot, content: null };
          }
          return slot;
        }),
      );
    } else {
      // Handle alternative talents
      if (content) {
        // Adding new alternative talent
        setAlternativeTalents((prev) => [
          ...prev,
          { id: slotId, type: "normal", content },
        ]);
      } else {
        // Removing alternative talent
        setAlternativeTalents((prev) =>
          prev.filter((slot) => slot.id !== slotId),
        );
      }
    }
  };

  const handleItemUpdate = (item: Magical_Objects | string) => {
    // Allow passing either the item object or just the itemId
    const itemId = typeof item === "string" ? item : item.id;
    const itemObj =
      typeof item === "string"
        ? getAllMagicalObjects().find((i) => i.id === item)
        : item;

    if (!itemObj) return;

    setSelectedItems((prev) => {
      const newMap = new Map(prev);
      if (itemObj.rarity === "legendary" || itemObj.rarity === "cursed") {
        if (!prev.has(itemId)) {
          newMap.set(itemId, 1);
        }
      } else {
        const currentCount = prev.get(itemId) || 0;
        newMap.set(itemId, currentCount + 1);
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

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    setBuildSlots((prev) => {
      const oldIndex = prev.findIndex((slot) => slot.id === activeId);
      const newIndex = prev.findIndex((slot) => slot.id === overId);

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
      <HeroSelectionDialog
        isOpen={showConfirmDialog}
        onClose={handleDialogClose}
        onClearAll={handleClearAll}
        onClearTalentsOnly={handleClearTalentsOnly}
        selectedHeroName={pendingHeroSelection?.name || ""}
      />
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex space-x-6">
          <HeroSelection
            heroes={heroes}
            selectedHero={selectedHero}
            onHeroSelect={handleHeroSelect}
          />

          {selectedHero && (
            <>
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHeroSelect(selectedHero)}
                    className="flex items-center space-x-1"
                  >
                    <Eraser className="w-4 h-4" />
                    <span>Clear</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleBar("item")}
                    className="flex items-center space-x-1"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </Button>
                </div>
                <BuildTalentBoard
                  buildSlots={buildSlots}
                  onSlotUpdate={handleTalentSlotUpdate}
                  onDragEnd={handleDragEnd}
                  onShowTalentBar={handleTalentBarOpen}
                  alternativeTalents={alternativeTalents}
                />
              </div>
              {/* Right side - Item Board */}
              <ItemBoard
                selectedItems={selectedItems}
                onItemRemove={handleItemRemove}
                onItemAdd={handleItemUpdate}
                onShowItemBar={() => toggleBar("item")}
                items={getAllMagicalObjects()}
              />
            </>
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
              defaultTab={talentSelectionMode}
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
              selectedItems={selectedItems}
              onItemUpdate={handleItemUpdate}
            />
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default BuildCreator;
