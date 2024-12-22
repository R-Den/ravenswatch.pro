import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const scarlet_abilities: Abilities[] = [
  {
    id: "scarlet-attack",
    name: "Daggers",
    description:
      "Chain together a series of dagger slashes, each one dealing 15 damage. Every two consecutive attacks that hit an enemy generates one COMBO POINT (up to 3 can be stored)",
    hero: HERO_IDS.SCARLET,
    type: "attack",
  },
  {
    id: "scarlet-power",
    name: "Swift Strike",
    description:
      "Rush forward while INTANGIBLE, dealing 40 damage along the way. Spends all COMBO POINTS, damage is increased by 50% for each spent",
    hero: HERO_IDS.SCARLET,
    type: "power",
  },
  {
    id: "scarlet-special",
    name: "Bomb",
    description:
      "Drops a bomb that triggers a delayed explosion. Deals 60 damage to enemies and stuns Scarlet if she is within the area of effect",
    hero: HERO_IDS.SCARLET,
    type: "special",
  },
  {
    id: "scarlet-defence",
    name: "Cloak",
    description:
      "Hide under the cloak to enter STEALTH and turn INTANGIBLE for 2 second(s). ATTACK or POWER triggered during this effect gain +100% Crit Chance",
    hero: HERO_IDS.SCARLET,
    type: "defence",
  },
  {
    id: "scarlet-ultimate1",
    name: "Hunter's Souvenir",
    description:
      "Shoot with the shotgun, dealing 250 damage in a wide cone. Stores 2 charges",
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
  },
  {
    id: "scarlet-ultimate2",
    name: "Grandmother's Souvenir",
    description:
      "Throw a pinch of ashes that creates a clouded area lasting 8 seconds. During this time, all Heroes standing in the area of effect are INTANGIBLE",
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
  },
];
