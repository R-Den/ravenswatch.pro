import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { X } from "lucide-react";
import { DraggableSlotProps } from "@/lib/types";
import { useSortable } from "@dnd-kit/sortable";

export const DraggableSlot = ({
  slot,
  onRemove,
  attributes,
  listeners,
}: DraggableSlotProps) => {
  const { isDragging, setNodeRef } = useSortable({
    id: slot.id,
    disabled: slot.type !== "normal",
  });

  if (!slot.content) return null;

  return (
    <motion.div
      ref={setNodeRef}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="relative"
      style={{
        opacity: isDragging ? 0.5 : 1,
        ...(attributes?.style || {}),
      }}
      {...(attributes || {})}
      {...(listeners || {})}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative w-full">
            <div className="aspect-square">
              <Image
                src={
                  slot.type === "ultimate"
                    ? `/abilities/${slot.content.hero}/${slot.content.id}.png`
                    : `/talents/${slot.content.hero}/${slot.content.id}.png`
                }
                width={104}
                height={104}
                alt={slot.content.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="text-xs text-center mt-1 font-medium truncate px-1">
              {slot.content.name}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive hover:bg-destructive/90"
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-2">
            <h4 className="font-bold">{slot.content.name}</h4>
            <p>{slot.content.description}</p>
            {"upgrade_changes" in slot.content &&
              slot.content.upgrade_changes && (
                <p className="text-sm text-muted-foreground">
                  Upgrade: {slot.content.upgrade_changes}
                </p>
              )}
          </div>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
