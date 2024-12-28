import { Hero } from "@/lib/types";
import { snow_queen_abilities } from "../abilities/snow_queen";
import { snow_queen_talents } from "../talents/snow_queen";

export const snow_queen: Hero = {
  id: "snow_queen",
  name: "The Snow Queen",
  unlock_condition: "Default",
  description:
    "Sun snow_queen is the 8th Hero from the Ravenswatch. The Monkey King Sun snow_queen battles with his magical staff and stances to withstand powerful blows or crush ignorant foes dissuaded by his playful demeanor.",
  talents: snow_queen_talents,
  abilities: snow_queen_abilities,
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "h",
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
