import { Hero } from "@/lib/types";
import {
  wukong_trait,
  wukong_attack,
  wukong_power,
  wukong_special,
  wukong_defence,
  wukong_ultimate1,
  wukong_ultimate2,
} from "./abilities";

export const wukong: Hero = {
  name: "Sun Wukong",
  unlock_condition: "",
  description:
    "Sun Wukong is the 8th Hero from the Ravenswatch. The Monkey King Sun Wukong battles with his magical staff and stances to withstand powerful blows or crush ignorant foes dissuaded by his playful demeanor.",
  talents: [],
  abilities: [
    wukong_trait,
    wukong_attack,
    wukong_power,
    wukong_special,
    wukong_defence,
    wukong_ultimate1,
    wukong_ultimate2,
  ],
};
