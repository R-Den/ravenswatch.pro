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
import { HeroBuild } from "@/lib/types";
import { getMagicalObject, getHero } from "@/lib/registry";
import Image from "next/image";

interface HeroBuildCardProps {
  build: HeroBuild;
}

const HeroBuildCard = ({ build }: HeroBuildCardProps) => {
  const hero = getHero(build.hero);

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

  const TalentIcon = ({ id, isCore }: { id: string; isCore: boolean }) => {
    const talent = hero?.talents.find((t) => t.id === id);
    if (!talent) return null;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center group">
              <div
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${
                  isCore ? "border-purple-500" : "border-indigo-500"
                } bg-gray-800 hover:border-primary transition-colors flex items-center justify-center`}
              >
                <Image
                  src={`/talents/${talent.hero}/${talent.id}.png`}
                  alt={talent.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1 text-center group-hover:text-primary transition-colors">
                {talent.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-bold">{talent.name}</p>
            <p className="text-sm">{talent.description}</p>
            {talent.unlock_rank && (
              <p className="text-xs text-gray-400 mt-1">
                Unlocks at Rank {talent.unlock_rank}
              </p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  if (!hero) return null;

  return (
    <Card className="w-full max-w-4xl bg-gray-900 text-gray-100 border-gray-700">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src={`/heroes/thumbnail/${hero.id}.png`}
                alt={hero.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-primary">
                {hero.name} - {build.name}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {build.description}
              </CardDescription>
            </div>
          </div>
          <Badge className="bg-purple-600 hover:bg-purple-700">
            v{build.version}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Core Talents */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-400">
            Core Talents
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {build.core_talents.map((talentId) => (
              <TalentIcon key={talentId} id={talentId} isCore={true} />
            ))}
          </div>
        </div>

        {/* Secondary Talents */}
        {build.secondary_talents && build.secondary_talents.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-400">
              Secondary Talents
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {build.secondary_talents.map((talentId) => (
                <TalentIcon key={talentId} id={talentId} isCore={false} />
              ))}
            </div>
          </div>
        )}

        {/* Talents Description */}
        {build.talents_description && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">
              Talents Strategy
            </h3>
            <p className="text-gray-300">{build.talents_description}</p>
          </div>
        )}

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

export default HeroBuildCard;
