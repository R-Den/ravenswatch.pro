import { Hero } from "@/lib/types";
import {
  beowulf_trait,
  beowulf_attack,
  beowulf_power,
  beowulf_special,
  beowulf_defence,
  beowulf_ultimate1,
  beowulf_ultimate2,
} from "./abilities";

export const beowulf: Hero = {
  name: "Beowulf",
  unlock_condition: "Default",
  description:
    "Beowulf the Warrior wields his runic broadsword and radiant shield to strike down his enemies, and with the aid of his baby dragon's empowerments—banish the Nightmares from Reverie.",
  talents: [],
  abilities: [
    beowulf_trait,
    beowulf_attack,
    beowulf_power,
    beowulf_special,
    beowulf_defence,
    beowulf_ultimate1,
    beowulf_ultimate2,
  ],
};
