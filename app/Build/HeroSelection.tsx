import { Hero } from "@/lib/types";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader } from "@/app/Build/cardCollapsible";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface HeroSelectionProps {
  heroes: Hero[];
  selectedHero: Hero | null;
  onHeroSelect: (hero: Hero) => void;
}

export const HeroSelection = ({
  heroes,
  selectedHero,
  onHeroSelect,
}: HeroSelectionProps) => (
  <Card selectedHero={selectedHero} autoCollapse={true}>
    <CardHeader></CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        {heroes.map((hero) => (
          <Tooltip key={hero.id}>
            <TooltipTrigger asChild>
              <Button
                variant={selectedHero?.id === hero.id ? "default" : "outline"}
                className="w-full aspect-square p-2 size-24"
                onClick={() => onHeroSelect(hero)}
              >
                <Image
                  src={`/heroes/thumbnail/${hero.id}.png`}
                  width={500}
                  height={500}
                  alt={hero.name}
                  className="w-full h-full object-cover rounded"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-bold">{hero.name}</p>
              <p className="text-sm">{hero.description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </CardContent>
  </Card>
);
