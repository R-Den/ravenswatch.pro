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
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "f",
=======
  type: "heroes",
<<<<<<< HEAD
>>>>>>> 5db9c0c (Add hero type property and update image path retrieval in hero pages)
=======
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
>>>>>>> c30b0d6 (Add imagePath getter to hero objects and refactor image retrieval in HeroPage)
=======
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
>>>>>>> 767a2af1006244cf4aea16d1d7915ffcff6958f2
};
