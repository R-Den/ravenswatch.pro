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
  encoding_id: "d",
=======
  type: "heroes",
>>>>>>> 5db9c0c (Add hero type property and update image path retrieval in hero pages)
};
