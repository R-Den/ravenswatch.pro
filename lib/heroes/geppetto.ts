import { Hero } from "@/lib/types";
import {
  geppetto_trait,
  geppetto_attack,
  geppetto_power,
  geppetto_special,
  geppetto_defence,
  geppetto_ultimate1,
  geppetto_ultimate2,
} from "./abilities";

export const geppetto: Hero = {
  name: "Geppetto",
  unlock_condition: "Complete Chapter 1 with Beowulf",
  description:
    "Geppetto is the 7th Hero from the Ravenswatch. Geppetto, the Mad Inventor creates puppets to fight in his place—using his hammer to repair and protect or even launch his puppets toward enemies undermining the madness of his mind and power of those without.",
  talents: [],
  abilities: [
    geppetto_trait,
    geppetto_attack,
    geppetto_power,
    geppetto_special,
    geppetto_defence,
    geppetto_ultimate1,
    geppetto_ultimate2,
  ],
};
