import { Hero } from "@/lib/types";
import { scarlet_talents } from "../talents/scarlet";
import { scarlet_abilities } from "../abilities/scarlet";

export const scarlet: Hero = {
  id: "scarlet",
  name: "Scarlet",
  unlock_condition: "Default",
  description:
    " In the daytime, Scarlet uses her elusive prowess to swiftly bring her enemies to their end, though when night falls; her curse transforms her into a deadly werewolf—brutalizing and overpowering those who dare stand in her way.",
  talents: scarlet_talents,
  abilities: scarlet_abilities,
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
