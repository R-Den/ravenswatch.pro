import { BuildSlot } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, HelpCircle } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
interface BuildBoardProps {
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotId: string, content: BuildSlot["content"]) => void;
  onDragEnd: (event: DragEndEvent) => void;
  onShowTalentBar: (mode: "core" | "alternative") => void;
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

  // Get special slots (starter and ultimate)
  const specialSlots = buildSlots.filter(
    (slot) =>
      slot.type === "starter" ||
      slot.type === "ultimate" ||
      slot.type === "ultimate-upgrade",
  );

  // Get core talent slots that have content
  const coreTalents = buildSlots.filter(
    (slot) => slot.type === "normal" && slot.content,
  );

  const renderSlotPlaceholder = (slot: BuildSlot) => {
    let title = "";
    switch (slot.type) {
      case "starter":
        title = "Starter Talent";
        break;
      case "ultimate":
        title = "Ultimate Ability";
        break;
      case "ultimate-upgrade":
        title = "Ultimate Upgrade";
        break;
      default:
        title = "Add Talent";
    }

    return (
      <Button
        variant="ghost"
        className="w-full h-full p-4 aspect-square border-2 border-dashed rounded flex flex-col items-center justify-center text-muted-foreground hover:bg-accent/50"
        onClick={() => onShowTalentBar("core")}
      >
        <Plus className="w-6 h-6 mb-2" />
        <div className="text-sm font-medium text-center">{title}</div>
      </Button>
    );
  };

  return (
    <div className="space-y-8">
      {/* Special Slots Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Required Abilities</h2>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              Every build requires a starter talent and an ultimate ability
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {specialSlots.map((slot) => (
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
        </div>
      </div>

      {/* Core Talents Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Core Talents</h2>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                Essential talents for this build (maximum 7)
              </TooltipContent>
            </Tooltip>
          </div>
          <Badge variant="secondary">{coreTalents.length}/7</Badge>
        </div>
        <DndContext
          sensors={sensors}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={onDragEnd}
        >
          <div className="grid grid-cols-5 gap-4">
            <SortableContext
              items={coreTalents.map((slot) => slot.id)}
              strategy={verticalListSortingStrategy}
            >
              {coreTalents.map((slot) => (
                <Card key={slot.id} className="relative col-span-1">
                  <CardContent className="p-4">
                    <DraggableSlot
                      slot={slot}
                      onRemove={() => onSlotUpdate(slot.id, null)}
                    />
                  </CardContent>
                </Card>
              ))}
              {coreTalents.length < 7 && (
                <Button
                  variant="outline"
                  className="w-20 h-20"
                  onClick={() => onShowTalentBar("core")}
                >
                  <Plus className="w-8 h-8" />
                </Button>
              )}
            </SortableContext>
          </div>
        </DndContext>
      </div>

      {/* Alternative Talents Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Alternative Talents</h2>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              Backup talents to use if core talents aren&apos;t available
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {alternativeTalents.map((slot) => (
            <Card key={slot.id} className="relative col-span-1">
              <CardContent className="p-4">
                <DraggableSlot
                  slot={slot}
                  onRemove={() => onSlotUpdate(slot.id, null)}
                />
              </CardContent>
            </Card>
          ))}
          <Button
            variant="outline"
            className="w-20 h-20"
            onClick={() => onShowTalentBar("alternative")}
          >
            <Plus className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};
