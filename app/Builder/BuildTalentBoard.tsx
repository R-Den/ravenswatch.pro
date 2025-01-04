import { BuildSlot, Talents, Abilities } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Plus, HelpCircle } from "lucide-react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface BuildBoardProps {
  buildSlots: BuildSlot[];
  onSlotUpdate: (slotId: string, content: Talents | Abilities | null) => void;
  onShowTalentBar: (mode: "core" | "alternative") => void;
  alternativeTalents: BuildSlot[];
}

export const BuildTalentBoard = ({
  buildSlots,
  onSlotUpdate,
  onShowTalentBar,
  alternativeTalents,
}: BuildBoardProps) => {
  const specialSlots = buildSlots.filter(
    (slot) =>
      slot.type === "starter" ||
      slot.type === "ultimate" ||
      slot.type === "ultimate-upgrade",
  );

  const coreTalents = buildSlots.filter(
    (slot) => slot.type === "normal" && slot.content,
  );

  const renderSlotContent = (slot: BuildSlot) => {
    if (!slot.content) return renderSlotPlaceholder(slot);

    return (
      <div className="relative group">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full aspect-square">
              <Image
                src={
                  slot.type === "ultimate"
                    ? `/abilities/${slot.content.hero}/${slot.content.id}.png`
                    : `/talents/${slot.content.hero}/${slot.content.id}.png`
                }
                width={80}
                height={80}
                alt={slot.content.name}
                className="w-full h-full object-cover rounded shadow-sm hover:shadow-md transition-shadow"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-2">
              <p className="font-bold">{slot.content.name}</p>
              <p className="text-sm">{slot.content.description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
        <Button
          variant="ghost"
          size="sm"
          className="absolute -top-2 -right-2 w-6 h-6 p-0 z-10 bg-background/80 hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          onClick={() => onSlotUpdate(slot.id, null)}
        >
          <X className="w-4 h-4" />
        </Button>
        <span className="mt-1 text-xs text-center font-medium truncate w-full block">
          {slot.content.name}
        </span>
      </div>
    );
  };

  const renderSlotPlaceholder = (
    slot: BuildSlot,
    type: "core" | "alternative" = "core",
  ) => {
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
      <div className="w-20 h-20">
        <Button
          variant="ghost"
          className="w-full h-full aspect-square border-2 border-dashed rounded flex flex-col items-center justify-center text-muted-foreground hover:bg-primary"
          onClick={() => onShowTalentBar(type)}
        >
          <Plus className="w-6 h-6" />
        </Button>
        <span className="mt-1 text-xs text-center font-medium truncate w-full block">
          {title}
        </span>
      </div>
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,80px))] gap-4 justify-center">
          {specialSlots.map((slot) => (
            <div key={slot.id} className="w-20">
              {renderSlotContent(slot)}
            </div>
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
        <div className="flex flex-wrap justify-center gap-4">
          {coreTalents.map((slot) => (
            <div key={slot.id} className="w-20">
              {renderSlotContent(slot)}
            </div>
          ))}
          {coreTalents.length < 7 && (
            <div className="w-20 h-20">
              <Button
                variant="ghost"
                className="w-full h-full aspect-square border-2 border-dashed rounded flex flex-col items-center justify-center text-muted-foreground hover:bg-primary"
                onClick={() => onShowTalentBar("core")}
              >
                <Plus className="w-6 h-6" />
              </Button>

              <span className="mt-1 text-xs text-center font-medium truncate w-full block">
                Add Talent
              </span>
            </div>
          )}
        </div>
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
        <div className="flex flex-wrap justify-center gap-4">
          {alternativeTalents.map((slot) => (
            <div key={slot.id} className="w-20">
              {renderSlotContent(slot)}
            </div>
          ))}
          <div className="w-20 h-20">
            <Button
              variant="ghost"
              className="w-full h-full aspect-square border-2 border-dashed rounded flex flex-col items-center justify-center text-muted-foreground hover:bg-primary"
              onClick={() => onShowTalentBar("alternative")}
            >
              <Plus className="w-6 h-6 " />
            </Button>
            <span className="mt-1 text-xs text-center font-medium truncate w-full block">
              Add Alternative
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
