import { Hero, Talents, Abilities, BuildSlot } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TalentButton } from "./TalentButton";
import { AbilityButton } from "./AbilityButton";

interface TalentSelectionBarProps {
  selectedHero: Hero;
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotId: string, content: Talents | Abilities | null) => void;
  selectedIds: string[];
}

export const TalentSelectionBar = ({
  selectedHero,
  buildSlots,
  onSlotUpdate,
  selectedIds,
}: TalentSelectionBarProps) => {
  const getSelectedNormalTalents = () =>
    buildSlots.filter((slot) => slot.type === "normal" && slot.content).length;

  const handleTalentSelect = (talent: Talents | Abilities) => {
    // Find the first empty core slot or use alternative section
    const emptySlot = buildSlots.find(
      (slot) => slot.type === "normal" && !slot.content,
    );

    if (emptySlot) {
      onSlotUpdate(emptySlot.id, talent);
    } else {
      // Add to alternatives
      onSlotUpdate(`alternative-${Date.now()}`, talent);
    }
  };
  return (
    <Card className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <CardContent className="p-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Starter Talents */}
          <div className="col-span-3 border-r pr-4">
            <h3 className="font-bold mb-3">Starter Talents</h3>
            <div className="grid grid-cols-2 gap-2">
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

          {/* Normal Talents */}
          <div className="col-span-6 relative">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Normal Talents</h3>
              <Badge variant="secondary">
                {getSelectedNormalTalents()}/7 Selected
              </Badge>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {selectedHero.talents
                .filter((talent) => talent.type === "normal")
                .map((talent) => (
                  <TalentButton
                    key={talent.id}
                    talent={talent}
                    onClick={() => handleTalentSelect(talent)}
                    isDisabled={false}
                    isSelected={selectedIds.includes(talent.id)}
                  />
                ))}
            </div>
          </div>

          {/* Ultimate and Upgrades */}
          <div className="col-span-3 border-l pl-4">
            <h3 className="font-bold mb-3">Ultimate & Upgrade</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {selectedHero.abilities
                  .filter((ability) => ability.type === "ultimate")
                  .map((ultimate) => (
                    <motion.div
                      key={ultimate.id}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center space-y-1"
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
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
                              buildSlots.find(
                                (slot) => slot.type === "ultimate",
                              )?.content !== null
                            }
                            isSelected={selectedIds.includes(ultimate.id)}
                          >
                            {/* <Image
                              src={`/abilities/${ultimate.hero}/${ultimate.name}.png`}
                              height={104}
                              width={104}
                              alt={ultimate.name}
                              className="w-full h-full object-cover rounded"
                            /> */}
                          </AbilityButton>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <div className="space-y-2">
                            <h4 className="font-bold">{ultimate.name}</h4>
                            <p>{ultimate.description}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      <span className="text-xs text-center font-medium">
                        {ultimate.name}
                      </span>
                    </motion.div>
                  ))}
              </div>

              {buildSlots.find((slot) => slot.type === "ultimate")?.content && (
                <div className="grid grid-cols-2 gap-2">
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
