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
  encoding_id: "b",
=======
  type: "heroes",
>>>>>>> 5db9c0c (Add hero type property and update image path retrieval in hero pages)
};
