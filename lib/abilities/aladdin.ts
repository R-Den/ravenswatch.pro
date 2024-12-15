import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const aladdin_abilities: Abilities[] = [
  {
    id: "aladdin-trait",
    name: "Jinniya of the Lamp",
    description:
      "Call Jinniya of the Lamp for a wish. Next ability grants the wish (3 charges). While calling for a wish, Aladdin is INTANGIBLE. POWER: Deals 250 damage all around. SPECIAL: Make 15 to 25 Dream Shards and 1 Consumable(s) appear. DEFENSE: Fully heals or revive all nearby Heroes with a permanent 30 SHIELD",
    hero: HERO_IDS.ALADDIN,
    type: "trait",
  },
  {
    id: "aladdin-attack",
    name: "Scimitars",
    description:
      "Chain together a series of attacks with the scimitars, dealing 16 damage. Last attack hits all around. Each attack can consume ENCHANTMENT points to strike twice with increased damage",
    hero: HERO_IDS.ALADDIN,
    type: "attack",
  },
  {
    id: "aladdin-power",
    name: "Ring Jinn",
    description:
      "Summon Jinn of the Ring to fly forward and deliver a powerful blow that deals 80 damage. Can be held to move farther and increase damage up to +50%",
    hero: HERO_IDS.ALADDIN,
    type: "power",
  },
  {
    id: "aladdin-special",
    name: "Enchanted Blades",
    description:
      "Throw scimitars: they move forward, stop to spin then return to Aladdin, dealing up to 60 damage. Scimitars gain ENCHANTMENT points for each enemy hit. Aladdin cannot use Scimitars while Enchanted Blades are in flight",
    hero: HERO_IDS.ALADDIN,
    type: "special",
  },
  {
    id: "aladdin-defence",
    name: "Somersault",
    description:
      "Jump quickly to turn INTANGIBLE. Enemies passed become VULNERABLE for 3 second(s)",
    hero: HERO_IDS.ALADDIN,
    type: "defence",
  },
  {
    id: "aladdin-ultimate1",
    name: "Dream Wish",
    description:
      "Consume 150 Dream Shards to earn an additional TRAIT charge. Aladdin can still be damaged while channeling Dream Wish",
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
  },
  {
    id: "aladdin-ultimate2",
    name: "Magic Carpet",
    description:
      "Ride The Magic Carpet, turning INTANGIBLE and dealing 100 damage to enemies passed. Movement is forced but the direction can be controlled",
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
  },
];
