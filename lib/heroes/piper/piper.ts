import { Hero } from "@/lib/types";
import {
  piper_trait,
  piper_attack,
  piper_power,
  piper_special,
  piper_defence,
  piper_ultimate1,
  piper_ultimate2,
} from "./abilities";

export const piper: Hero = {
  name: "The Pied Piper",
  unlock_condition: "Default",
  description:
    " The Pied Piper uses his cursed music to attack his enemies with ear-splitting notes, sending them dancing to their graves or falling prey to the horde of rats at his call.",
  talents: [],
  abilities: [
    piper_trait,
    piper_attack,
    piper_power,
    piper_special,
    piper_defence,
    piper_ultimate1,
    piper_ultimate2,
  ],
};
