import { Hero, Talents, Abilities, BuildSlot } from "@/lib/types";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TalentButton } from "./TalentButton";
import { AbilityButton } from "./AbilityButton";
import { HelpCircle, X } from "lucide-react";

interface TalentSelectionBarProps {
  selectedHero: Hero;
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotId: string, content: Talents | Abilities | null) => void;
  selectedIds: string[];
  defaultTab?: "core" | "alternative";
  onClose: () => void;
}

type TabValue = "core" | "alternative";

export const TalentSelectionBar = ({
  selectedHero,
  buildSlots,
  onSlotUpdate,
  selectedIds,
  defaultTab = "core",
  onClose,
}: TalentSelectionBarProps) => {
  const [activeTab, setActiveTab] = useState<TabValue>(defaultTab);

  const getSelectedNormalTalents = () =>
    buildSlots.filter((slot) => slot.type === "normal" && slot.content).length;

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (value: string) => {
    if (value === "core" || value === "alternative") {
      setActiveTab(value);
    }
  };

  const handleTalentSelect = (
    talent: Talents | Abilities,
    type: "core" | "alternative",
  ) => {
    if (type === "core") {
      if (getSelectedNormalTalents() >= 7) return;
      const emptySlot = buildSlots.find(
        (slot) => slot.type === "normal" && !slot.content,
      );
      if (emptySlot) {
        onSlotUpdate(emptySlot.id, talent);
      }
    } else {
      onSlotUpdate(`alternative-${Date.now()}`, talent);
    }
  };

  return (
    <Card className="fixed inset-0 md:inset-auto md:bottom-0 md:left-0 md:right-0 bg-background/80 backdrop-blur-sm md:backdrop-blur-none md:bg-background overflow-y-auto md:max-h-[600px]">
      <CardContent className="p-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-background z-10 p-2">
          <h3 className="font-bold text-lg">Talent Selection</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Starter Talents Section */}
          <div className="w-full lg:w-1/4 lg:border-r lg:pr-4">
            <h3 className="font-bold mb-3">Starter Talents</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
              {selectedHero.talents
                .filter((talent) => talent.type === "starter")
                .map((talent) => (
                  <TalentButton
                    key={talent.id}
                    talent={talent}
                    onClick={() => {
                      const starterSlot = buildSlots.find(
                        (slot) => slot.type === "starter",
                      );
                      if (starterSlot) {
                        onSlotUpdate(starterSlot.id, talent);
                      }
                    }}
                    isDisabled={
                      buildSlots.find((slot) => slot.type === "starter")
                        ?.content !== null
                    }
                    isSelected={selectedIds.includes(talent.id)}
                  />
                ))}
            </div>
          </div>

          {/* Normal Talents Section */}
          <div className="w-full lg:w-2/4">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-bold">Normal Talents</h3>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Select where to add the talent
                  </TooltipContent>
                </Tooltip>
              </div>
              <Badge variant="secondary">
                {getSelectedNormalTalents()}/7 Core Selected
              </Badge>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="mb-4 w-full justify-start">
                <TabsTrigger value="core">Add to Core</TabsTrigger>
                <TabsTrigger value="alternative">
                  Add as Alternative
                </TabsTrigger>
              </TabsList>

              <TabsContent value="core">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
                  {selectedHero.talents
                    .filter((talent) => talent.type === "normal")
                    .map((talent) => (
                      <TalentButton
                        key={talent.id}
                        talent={talent}
                        onClick={() => handleTalentSelect(talent, "core")}
                        isDisabled={getSelectedNormalTalents() >= 7}
                        isSelected={selectedIds.includes(talent.id)}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="alternative">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
                  {selectedHero.talents
                    .filter((talent) => talent.type === "normal")
                    .map((talent) => (
                      <TalentButton
                        key={talent.id}
                        talent={talent}
                        onClick={() =>
                          handleTalentSelect(talent, "alternative")
                        }
                        isDisabled={false}
                        isSelected={selectedIds.includes(talent.id)}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Ultimate & Upgrades Section */}
          <div className="w-full lg:w-1/4 lg:border-l lg:pl-4">
            <h3 className="font-bold mb-3">Ultimate & Upgrade</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                {selectedHero.abilities
                  .filter((ability) => ability.type === "ultimate")
                  .map((ultimate) => (
                    <AbilityButton
                      key={ultimate.id}
                      ability={ultimate}
                      onClick={() => {
                        const ultimateSlot = buildSlots.find(
                          (slot) => slot.type === "ultimate",
                        );
                        if (ultimateSlot) {
                          onSlotUpdate(ultimateSlot.id, ultimate);
                        }
                      }}
                      isDisabled={
                        buildSlots.find((slot) => slot.type === "ultimate")
                          ?.content !== null
                      }
                      isSelected={selectedIds.includes(ultimate.id)}
                    />
                  ))}
              </div>

              {buildSlots.find((slot) => slot.type === "ultimate")?.content && (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                  {selectedHero.talents
                    .filter(
                      (talent) =>
                        talent.type === "ultimate" &&
                        talent.prerequisite ===
                          buildSlots.find((slot) => slot.type === "ultimate")
                            ?.content?.name,
                    )
                    .map((talent) => (
                      <TalentButton
                        key={talent.id}
                        talent={talent}
                        onClick={() => {
                          const upgradeSlot = buildSlots.find(
                            (slot) => slot.type === "ultimate-upgrade",
                          );
                          if (upgradeSlot) {
                            onSlotUpdate(upgradeSlot.id, talent);
                          }
                        }}
                        isDisabled={
                          buildSlots.find(
                            (slot) => slot.type === "ultimate-upgrade",
                          )?.content !== null
                        }
                        isSelected={selectedIds.includes(talent.id)}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
