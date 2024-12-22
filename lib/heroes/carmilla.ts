import { Hero } from "@/lib/types";

import { carmilla_abilities } from "@/lib/abilities/carmilla";

import { carmilla_talents } from "@/lib/talents/carmilla";

export const carmilla: Hero = {
  id: "carmilla",
  name: "Carmilla",
  unlock_condition:
    "Complete Chapter 1 with Aladdin, Melusine, Geppetto, or Sun Wukong",
  description:
    "Carmilla is the 9th Hero from the Ravenswatch. Carmilla is described as a bewitching woman, torn between humanity and vampire savagery. She embodies the vampire fantasy and can use unnaturally strong abilities with her special resource, BLOOD.",
  abilities: carmilla_abilities,
  talents: carmilla_talents,
  type: "heroes",
};

//name: string;
//  description: string;
//  hero: Hero;
//  type: "trait" | "attack" | "power" | "special" | "defence" | "ultimate";
//  passive?: boolean;

//name: string;
//unlock_condition?: string;
//description?: string;
//talents: Talents[];
//abilities: Abilities[];
