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
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
