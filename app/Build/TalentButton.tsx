import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TalentButtonProps } from "@/lib/types";

export const TalentButton = ({
  talent,
  onClick,
  isDisabled,
  isSelected,
}: TalentButtonProps) => (
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
            width={104}
            height={104}
            alt={talent.name}
            className={cn(
              "w-full h-full object-cover rounded",
              isSelected && "opacity-50",
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <div className="space-y-2">
          <h4 className="font-bold">{talent.name}</h4>
          <p>{talent.description}</p>
          {talent.upgrade_changes && (
            <p className="text-sm text-muted-foreground">
              Upgrade: {talent.upgrade_changes}
            </p>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
    <span className="text-xs text-center font-medium">{talent.name}</span>
  </motion.div>
);
