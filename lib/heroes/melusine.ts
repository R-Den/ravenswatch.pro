import { Hero } from "@/lib/types";
import { melusine_abilities } from "../abilities/melusine";
import { melusine_talents } from "../talents/melusine";

export const melusine: Hero = {
  id: "melusine",
  name: "Melusine",
  unlock_condition: "Complete Chapter 1 with The Pied Piper",
  description:
    "Melusine the Siren commands the waters and uses them to infuse the will-o-wisps at her side to submerge those foolish enough to be caught within her captivating song.",
  talents: melusine_talents,
  abilities: melusine_abilities,
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "e",
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
