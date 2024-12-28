import { Hero } from "@/lib/types";
import { geppetto_talents } from "../talents/geppetto";
import { geppetto_abilities } from "../abilities/geppetto";

export const geppetto: Hero = {
  id: "geppetto",
  name: "Geppetto",
  unlock_condition: "Complete Chapter 1 with Beowulf",
  description:
    "Geppetto is the 7th Hero from the Ravenswatch. Geppetto, the Mad Inventor creates puppets to fight in his place—using his hammer to repair and protect or even launch his puppets toward enemies undermining the madness of his mind and power of those without.",
  talents: geppetto_talents,
  abilities: geppetto_abilities,
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "d",
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
