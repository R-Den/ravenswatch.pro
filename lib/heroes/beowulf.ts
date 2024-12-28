import { Hero } from "@/lib/types";
import { beowulf_abilities } from "../abilities/beowulf";
import { beowulf_talents } from "../talents/beowulf";

export const beowulf: Hero = {
  id: "beowulf",
  name: "Beowulf",
  unlock_condition: "Default",
  description:
    "Beowulf the Warrior wields his runic broadsword and radiant shield to strike down his enemies, and with the aid of his baby dragon's empowerments—banish the Nightmares from Reverie.",
  talents: beowulf_talents,
  abilities: beowulf_abilities,
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "b",
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
