import { Hero } from "@/lib/types";
import {
  scarlet_trait,
  scarlet_attack,
  scarlet_power,
  scarlet_special,
  scarlet_defence,
  scarlet_ultimate1,
  scarlet_ultimate2,
} from "./abilities";

export const scarlet: Hero = {
  name: "scarlet",
  unlock_condition: "Default",
  description:
    " In the daytime, Scarlet uses her elusive prowess to swiftly bring her enemies to their end, though when night falls; her curse transforms her into a deadly werewolf—brutalizing and overpowering those who dare stand in her way.",
  talents: [],
  abilities: [
    scarlet_trait,
    scarlet_attack,
    scarlet_power,
    scarlet_special,
    scarlet_defence,
    scarlet_ultimate1,
    scarlet_ultimate2,
  ],
};
