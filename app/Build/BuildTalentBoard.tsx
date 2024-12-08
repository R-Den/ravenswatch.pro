import { BuildSlot } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { DraggableSlot } from "./DraggableSlot";

interface BuildBoardProps {
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotId: string, content: BuildSlot["content"]) => void;
  onDragEnd: (event: DragEndEvent) => void;
  onShowTalentBar: () => void;
  alternativeTalents: BuildSlot[];
}

export const BuildTalentBoard = ({
  buildSlots,
  onSlotUpdate,
  onDragEnd,
  onShowTalentBar,
  alternativeTalents,
}: BuildBoardProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const coreTalentIds = buildSlots
    .filter((slot) => slot.type === "normal")
    .map((slot) => slot.id);

  const renderSlotPlaceholder = (slot: BuildSlot) => {
    let title = "";
    switch (slot.type) {
      case "starter":
        title = "Starter";
        break;
      case "ultimate":
        title = "Ultimate";
        break;
      case "ultimate-upgrade":
        title = "Ultimate Upgrade";
        break;
      default:
        title = "Core Talent";
    }

    return (
      <Button
        variant="ghost"
        className="w-full h-full p-4 aspect-square border-2 border-dashed rounded flex flex-col items-center justify-center text-muted-foreground hover:bg-accent/50"
        onClick={onShowTalentBar}
      >
        <Plus className="w-6 h-6 mb-2" />
        <div className="text-sm font-medium text-center">{title}</div>
      </Button>
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <DndContext
          sensors={sensors}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={onDragEnd}
        >
          <div className="grid grid-cols-5 gap-4">
            <SortableContext
              items={coreTalentIds}
              strategy={verticalListSortingStrategy}
            >
              {buildSlots.map((slot) => (
                <Card key={slot.id} className="relative col-span-1">
                  <CardContent className="p-4">
                    <AnimatePresence>
                      {slot.content ? (
                        <DraggableSlot
                          slot={slot}
                          onRemove={() => onSlotUpdate(slot.id, null)}
                        />
                      ) : (
                        renderSlotPlaceholder(slot)
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Alternative Talents</h2>
        <div className="grid grid-cols-5 gap-4">
          {alternativeTalents.map((slot) => (
            <Card key={slot.id} className="relative col-span-1">
              <CardContent className="p-4">
                <AnimatePresence>
                  <DraggableSlot
                    slot={slot}
                    onRemove={() => onSlotUpdate(slot.id, null)}
                  />
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
          <Button
            variant="outline"
            className="w-20 h-20"
            onClick={onShowTalentBar}
          >
            <Plus className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};
