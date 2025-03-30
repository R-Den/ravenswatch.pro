import { Hero } from "@/lib/types";
import { snow_queen_abilities } from "../abilities/snow_queen";
import { snow_queen_talents } from "../talents/snow_queen";

export const snow_queen: Hero = {
  id: "snow_queen",
  name: "The Snow Queen",
  unlock_condition: "Default",
  description:
    "The Snow Queen controls the wrath of winter, slowing and freezing her enemies beneath blankets of frost while sliding gracefully through the battlefield with her chilling aura.",
  talents: snow_queen_talents,
  abilities: snow_queen_abilities,
  encoding_id: "h",
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
