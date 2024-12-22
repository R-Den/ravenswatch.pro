import { Hero } from "@/lib/types";
import { wukong_talents } from "@/lib/talents/wukong";
import { wukong_abilities } from "@/lib/abilities/wukong";

export const wukong: Hero = {
  id: "wukong",
  name: "Sun Wukong",
  unlock_condition: "Complete Chapter 1 with the Snow Queen",
  description:
    "Sun Wukong is the 8th Hero from the Ravenswatch. The Monkey King Sun Wukong battles with his magical staff and stances to withstand powerful blows or crush ignorant foes dissuaded by his playful demeanor.",
  talents: wukong_talents,
  abilities: wukong_abilities,
  encoding_id: "i",
};
