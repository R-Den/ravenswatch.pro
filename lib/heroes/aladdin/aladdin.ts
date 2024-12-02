import { Hero } from "@/lib/types";
import {
  aladdin_trait,
  aladdin_attack,
  aladdin_power,
  aladdin_special,
  aladdin_defence,
  aladdin_ultimate1,
  aladdin_ultimate2,
} from "./abilities";

export const aladdin: Hero = {
  name: "Aladdin",
  unlock_condition: "Complete Chapter 1 with Scarlet",
  description:
    "Aladdin is one of the nine currently playable heroes in the Ravenswatch. Aladdin is a master thief armed with magical scimitars, showcasing his years of experience with remarkable nimbleness and with his genie's three wishes—he's always prepared to overcome any obstacle.",
  talents: [],
  abilities: [
    aladdin_trait,
    aladdin_attack,
    aladdin_power,
    aladdin_special,
    aladdin_defence,
    aladdin_ultimate1,
    aladdin_ultimate2,
  ],
};
