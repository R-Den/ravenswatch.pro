import { Hero } from "@/lib/types";
import { piper_abilities } from "../abilities/piper";
import { piper_talents } from "../talents/piper";

export const piper: Hero = {
  id: "piper",
  name: "The Pied Piper",
  unlock_condition: "Default",
  description:
    " The Pied Piper uses his cursed music to attack his enemies with ear-splitting notes, sending them dancing to their graves or falling prey to the horde of rats at his call.",
  talents: piper_talents,
  abilities: piper_abilities,
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
