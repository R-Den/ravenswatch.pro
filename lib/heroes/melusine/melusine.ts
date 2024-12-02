import { Hero } from "@/lib/types";
import {
  melusine_trait,
  melusine_attack,
  melusine_power,
  melusine_special,
  melusine_defence,
  melusine_ultimate1,
  melusine_ultimate2,
} from "./abilities";

export const melusine: Hero = {
  name: "melusine",
  unlock_condition: "Complete Chapter 1 with The Pied Piper",
  description:
    "Melusine the Siren commands the waters and uses them to infuse the will-o-wisps at her side to submerge those foolish enough to be caught within her captivating song.",
  talents: [],
  abilities: [
    melusine_trait,
    melusine_attack,
    melusine_power,
    melusine_special,
    melusine_defence,
    melusine_ultimate1,
    melusine_ultimate2,
  ],
};
