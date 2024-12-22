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
  type: "heroes",
};
