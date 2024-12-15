import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { Magical_Objects } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ItemBoardProps {
  selectedItems: Map<string, number>;
  onItemRemove: (itemId: string) => void;
  onItemAdd: (itemId: string) => void;
  onShowItemBar: () => void;
  items: Magical_Objects[];
}

const ItemBoard = ({
  selectedItems,
  onItemRemove,
  onItemAdd,
  onShowItemBar,
  items,
}: ItemBoardProps) => {
  const getItemById = (id: string) => items.find((item) => item.id === id);

  const handleItemClick = (itemId: string) => {
    const item = getItemById(itemId);
    if (!item) return;

    if (
      (item.rarity === "legendary" || item.rarity === "cursed") &&
      selectedItems.get(itemId) === 1
    ) {
      return;
    }

    onItemAdd(itemId);
  };

  const itemCount = selectedItems.size;
  const gridRows = Math.ceil((itemCount + 1) / 2);
  const gridHeight = gridRows * 96 + (gridRows - 1) * 16;

  return (
    <Card className="w-[208px]">
      <CardHeader className="p-4">
        <h3 className="font-bold text-lg">Selected Items</h3>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4" style={{ height: gridHeight }}>
          {Array.from(selectedItems.entries()).map(([itemId, count]) => {
            const item = getItemById(itemId);
            if (!item) return null;

            return (
              <Tooltip key={itemId}>
                <TooltipTrigger asChild>
                  <div className="relative flex flex-col items-center group">
                    <div className="relative w-20 h-20">
                      <Button
                        variant="outline"
                        className="w-full h-full p-0"
                        onClick={() => handleItemClick(itemId)}
                      >
                        <Image
                          src={`/items/${item.name}.png`}
                          width={80}
                          height={80}
                          alt={item.name}
                          className="object-cover rounded"
                        />
                      </Button>
                      {count > 1 && (
                        <Badge
                          variant="secondary"
                          className="absolute -bottom-2 -right-2 z-10"
                        >
                          {count}
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute -top-2 -right-2 w-6 h-6 p-0 z-10 bg-background/80 hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          onItemRemove(itemId);
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <span className="mt-1 text-xs text-center font-medium truncate w-full">
                      {item.name}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <div className="space-y-2">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm">{item.description}</div>
                    {item.super_effect && (
                      <div className="text-sm">
                        <span className="font-semibold">Super Effect</span> (
                        {item.stacks_to_effect}): {item.super_effect}
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground capitalize">
                      {item.rarity} Item
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-20 h-20"
                onClick={onShowItemBar}
              >
                <Plus className="w-8 h-8" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Add new item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemBoard;
