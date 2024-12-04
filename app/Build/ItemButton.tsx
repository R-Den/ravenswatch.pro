import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ItemButtonProps } from "@/lib/types";

export const ItemButton = ({
  magical_object: item,
  onClick,
  isDisabled,
  isSelected,
}: ItemButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center space-y-1"
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="w-16 h-16"
          onClick={onClick}
          disabled={isDisabled || isSelected}
        >
          <Image
            src="/talents/placeholder.png"
            // src={`/items/${item.name}.png`}
            width={104}
            height={104}
            alt={item.name}
            className={cn(
              "w-full h-full object-cover rounded",
              isSelected && "opacity-50",
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <div className="space-y-2">
          <h4 className="font-bold">{item.name}</h4>
          <p>{item.description}</p>
          {item.super_effect && (
            <p className="text-sm text-muted-foreground">
              Super Effect ({item.stacks_to_effect}): {item.super_effect}
            </p>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
    <span className="text-xs text-center font-medium">{item.name}</span>
  </motion.div>
);
