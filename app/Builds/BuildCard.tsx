import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GeneralBuild } from "@/lib/types";
import { getMagicalObject, getHero } from "@/lib/registry";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

interface BuildCardProps {
  build: GeneralBuild;
}

const BuildCard = ({ build }: BuildCardProps) => {
  const ItemIcon = ({
    id,
    isOptional,
  }: {
    id: string;
    isOptional: boolean;
  }) => {
    const item = getMagicalObject(id);
    if (!item) return null;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center group">
              <div
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${
                  isOptional ? "border-amber-500" : "border-blue-500"
                } bg-gray-800 hover:border-primary transition-colors`}
              >
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1 text-center group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm">{item.description}</p>
            {item.super_effect && (
              <p className="text-sm text-primary">Super: {item.super_effect}</p>
            )}
            <p className="text-xs text-gray-400 mt-1">Rarity: {item.rarity}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const HeroIcon = ({ id }: { id: string }) => {
    if (id === "All") {
      return (
        <div className="flex flex-col items-center group">
          {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 bg-gray-800 hover:border-purple-500 transition-colors flex items-center justify-center"> */}
          <CircleUserRound color="#692cc3" size={48} />
          {/* </div> */}
          <span className="text-xs mt-1 text-center group-hover:text-primary transition-colors">
            All Heroes
          </span>
        </div>
      );
    }

    const hero = getHero(id);
    if (!hero) return null;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 bg-gray-800 hover:border-purple-500 transition-colors">
                <Image
                  src={`/heroes/thumbnail/${hero.id}.png`}
                  width={500}
                  height={500}
                  alt={hero.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <span className="text-xs mt-1 text-center group-hover:text-primary transition-colors">
                {hero.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">{hero.name}</p>
            {hero.description && <p className="text-sm">{hero.description}</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Card className="w-full max-w-4xl bg-gray-900 text-gray-100 border-gray-700">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold text-primary">
              {build.name}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {build.description}
            </CardDescription>
          </div>
          <Badge className="bg-purple-600 hover:bg-purple-700">
            v{build.version}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Required Items */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-400">
            Required Items
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {build.required_magical_objects.map((itemId) => (
              <ItemIcon key={itemId} id={itemId} isOptional={false} />
            ))}
          </div>
        </div>

        {/* Optional Items */}
        {build.optional_magical_objects &&
          build.optional_magical_objects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-amber-400">
                Optional Items
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {build.optional_magical_objects.map((itemId) => (
                  <ItemIcon key={itemId} id={itemId} isOptional={true} />
                ))}
              </div>
            </div>
          )}

        {/* Recommended Heroes */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-400">
            Recommended Heroes
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {build.recommended_heroes.map((heroId) => (
              <HeroIcon key={heroId} id={heroId} />
            ))}
          </div>
          <p className="mt-3 text-gray-300 text-sm">
            {build.heroes_description}
          </p>
        </div>

        {/* Tips */}
        {build.tips && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Tips & Notes
            </h3>
            <p className="text-gray-300">{build.tips}</p>
          </div>
        )}

        {/* Tags */}
        {build.tags && build.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {build.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-700">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BuildCard;
