import { Hero, Talents, Abilities, BuildSlot } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TalentButton } from "./TalentButton";

interface TalentSelectionBarProps {
  selectedHero: Hero;
  buildSlots: BuildSlot[];
  onSlotUpdate: (level: number, content: Talents | Abilities | null) => void;
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
                    onClick={() => onSlotUpdate(1, talent)}
                    isDisabled={buildSlots[0].content !== null}
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
                    onClick={() => {
                      const emptySlot = buildSlots.find(
                        (slot) => slot.type === "normal" && !slot.content,
                      );
                      if (emptySlot && getSelectedNormalTalents() < 7) {
                        onSlotUpdate(emptySlot.level, talent);
                      }
                    }}
                    isDisabled={getSelectedNormalTalents() >= 7}
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
                          <Button
                            variant="outline"
                            className="w-16 h-16"
                            onClick={() => onSlotUpdate(5, ultimate)}
                            disabled={buildSlots[4].content !== null}
                          >
                            <Image
                              src={`/abilities/${ultimate.hero}/${ultimate.name}.png`}
                              height={104}
                              width={104}
                              alt={ultimate.name}
                              className="w-full h-full object-cover rounded"
                            />
                          </Button>
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

              {buildSlots[4].content && (
                <div className="grid grid-cols-2 gap-2">
                  {selectedHero.talents
                    .filter(
                      (talent) =>
                        talent.type === "ultimate" &&
                        talent.prerequisite ===
                          (buildSlots[4].content as Abilities).name,
                    )
                    .map((talent) => (
                      <TalentButton
                        key={talent.id}
                        talent={talent}
                        onClick={() => onSlotUpdate(10, talent)}
                        isDisabled={buildSlots[9].content !== null}
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
