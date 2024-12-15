import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { AbilityButtonProps } from "@/lib/types";

export const AbilityButton = ({
  ability,
  onClick,
  isDisabled,
  isSelected,
}: AbilityButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center space-y-1"
  >
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="w-16 h-16 p-0"
          onClick={onClick}
          disabled={isDisabled || isSelected}
        >
          <Image
            src={`/abilities/${ability.hero}/${ability.name}.png`}
            width={104}
            height={104}
            alt={ability.name}
            className={cn(
              "w-full h-full object-cover rounded",
              isSelected && "opacity-50",
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <div className="space-y-2">
          <h4 className="font-bold">{ability.name}</h4>
          <p>{ability.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
    <span className="text-xs text-center font-medium">{ability.name}</span>
  </motion.div>
);
