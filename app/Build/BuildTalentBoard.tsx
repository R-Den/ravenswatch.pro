import { BuildSlot } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { DraggableSlot } from "./DraggableSlot";

interface BuildBoardProps {
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotLevel: number, content: BuildSlot["content"]) => void;
  onDragEnd: (event: DragEndEvent) => void;
}

export const BuildTalentBoard = ({
  buildSlots,
  onSlotUpdate,
  onDragEnd,
}: BuildBoardProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const normalSlotIds = buildSlots
    .filter((slot) => slot.type === "normal")
    .map((slot) => slot.level.toString());

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
    >
      <div className="grid grid-cols-5 gap-4 h-full">
        <SortableContext
          items={normalSlotIds}
          strategy={verticalListSortingStrategy}
        >
          {buildSlots.map((slot) => (
            <Card
              key={slot.level}
              className={cn(
                "relative col-span-1",
                slot.level === 5 && "col-span-1",
                slot.level === 10 && "col-span-1",
              )}
            >
              <CardHeader className="p-2">
                <div className="text-sm font-medium text-center">
                  Level {slot.level}
                </div>
              </CardHeader>
              <CardContent className="m">
                <AnimatePresence>
                  {slot.content ? (
                    <DraggableSlot
                      slot={slot}
                      onRemove={() => onSlotUpdate(slot.level, null)}
                    />
                  ) : (
                    <div className="w-full h-full p-4 aspect-square border-2 border-dashed rounded flex items-center justify-center text-muted-foreground">
                      +
                      <div className="text-sm font-medium text-center">
                        {slot.type === "starter"
                          ? "Starter"
                          : slot.type === "ultimate"
                            ? "Ultimate"
                            : slot.type === "ultimate-upgrade"
                              ? "Upgrade"
                              : "Normal"}
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
