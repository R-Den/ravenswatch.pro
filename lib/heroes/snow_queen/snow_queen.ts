import { Hero } from "@/lib/types";
import {
  snow_queen_trait,
  snow_queen_attack,
  snow_queen_power,
  snow_queen_special,
  snow_queen_defence,
  snow_queen_ultimate1,
  snow_queen_ultimate2,
} from "./abilities";

export const snow_queen: Hero = {
  name: "The Snow Queen",
  unlock_condition: "Default",
  description:
    "Sun snow_queen is the 8th Hero from the Ravenswatch. The Monkey King Sun snow_queen battles with his magical staff and stances to withstand powerful blows or crush ignorant foes dissuaded by his playful demeanor.",
  talents: [],
  abilities: [
    snow_queen_trait,
    snow_queen_attack,
    snow_queen_power,
    snow_queen_special,
    snow_queen_defence,
    snow_queen_ultimate1,
    snow_queen_ultimate2,
  ],
};
