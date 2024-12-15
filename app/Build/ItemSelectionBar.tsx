import { Magical_Objects } from "@/lib/types";
import { getAllMagicalObjects } from "@/lib/registry";
import { Card, CardContent } from "@/components/ui/card";
import { ItemButton } from "./ItemButton";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ItemSelectionBarProps {
  selectedItems: Map<string, number>;
  onItemUpdate: (item: Magical_Objects) => void;
  onClose: () => void;
}

export const ItemSelectionBar = ({
  selectedItems,
  onItemUpdate,
  onClose,
}: ItemSelectionBarProps) => {
  const magical_objects = getAllMagicalObjects();
  const isItemDisabled = (item: Magical_Objects) => {
    const isSelected = selectedItems.has(item.id);
    return (
      (item.rarity === "legendary" || item.rarity === "cursed") && isSelected
    );
  };

  return (
    <Card className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Magical Objects</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-15 gap-8">
          <div className="col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              {magical_objects.map((magical_object) => (
                <ItemButton
                  key={magical_object.id}
                  magical_object={magical_object}
                  onClick={() => onItemUpdate(magical_object)}
                  isDisabled={isItemDisabled(magical_object)}
                  isSelected={isItemDisabled(magical_object)}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
