import { Hero } from "@/lib/types";
import { aladdin_talents } from "@/lib/talents/aladdin";
import { aladdin_abilities } from "@/lib/abilities/aladdin";

export const aladdin: Hero = {
  id: "aladdin",
  name: "Aladdin",
  unlock_condition: "Complete Chapter 1 with Scarlet",
  description:
    "Aladdin is one of the nine currently playable heroes in the Ravenswatch. Aladdin is a master thief armed with magical scimitars, showcasing his years of experience with remarkable nimbleness and with his genie's three wishes—he's always prepared to overcome any obstacle.",
  talents: aladdin_talents,
  abilities: aladdin_abilities,
  encoding_id: "a",
};
