import { BuildSlot, Magical_Objects } from "@/lib/types";
import { getAllMagicalObjects } from "@/lib/registry";
import { Card, CardContent } from "@/components/ui/card";
import { ItemButton } from "./ItemButton";

interface ItemSelectionBarProps {
  buildSlots: BuildSlot[];
  onSlotUpdate: (level: number, content: Magical_Objects | null) => void;
  selectedIds: string[];
}

export const ItemSelectionBar = ({
  buildSlots,
  onSlotUpdate,
  selectedIds,
}: ItemSelectionBarProps) => {
  const getSelectedNormalTalents = () =>
    buildSlots.filter((slot) => slot.type === "normal" && slot.content).length;
  const magical_objects = getAllMagicalObjects();

  return (
    <Card className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <CardContent className="p-4">
        <div className="grid grid-cols-15 gap-8">
          <div className="col-span-6 relative">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Magical Objects</h3>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {magical_objects.map((magical_object) => (
                <ItemButton
                  key={magical_object.id}
                  magical_object={magical_object}
                  onClick={() => {
                    const emptySlot = buildSlots.find(
                      (slot) => slot.type === "normal" && !slot.content,
                    );
                    if (emptySlot && getSelectedNormalTalents() < 7) {
                      onSlotUpdate(emptySlot.level, magical_object);
                    }
                  }}
                  isDisabled={getSelectedNormalTalents() >= 7}
                  isSelected={selectedIds.includes(magical_object.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
