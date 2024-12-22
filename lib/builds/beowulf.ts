import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const beowulf_abilities: Abilities[] = [
  {
    id: "beowulf-trait",
    name: "Last Wyrm",
    description: "Call Wyrm to empower the next POWER, SPECIAL, or DEFENSE",
    hero: HERO_IDS.BEOWULF,
    type: "trait",
  },
  {
    id: "beowulf-attack",
    name: "Runic Sword",
    description:
      "Chain together a series of attacks with the sword, the last attack deals 200% damage. Whole combo deals a total of 70 damage",
    hero: HERO_IDS.BEOWULF,
    type: "attack",
  },
  {
    id: "beowulf-power",
    name: "Shockwave",
    description:
      "Scrape the sword on the floor to project a shockwave in front that deals 50 damage along the path. +WYRM: deals +50% damage and applies IGNITE to all enemies hit",
    hero: HERO_IDS.BEOWULF,
    type: "power",
  },
  {
    id: "beowulf-special",
    name: "Whirlwind",
    description:
      "Spin with the sword, briefly becoming INTANGIBLE and dealing 15 damage all around then finish with a swing that deals 60 damage all around. +WYRM: deals +50% damage and finisher applies IGNITE to all enemies hit",
    hero: HERO_IDS.BEOWULF,
    type: "special",
  },
  {
    id: "beowulf-defence",
    name: "Shield",
    description:
      "Hold to raise shield and block all incoming damage - release to bash with shield and deal 30 damage. +WYRM: deals +50% damage. Each attack blocked heals all Heroes around by 30% of blocked damage. Become INTANGIBLE when bashing with shield",
    hero: HERO_IDS.BEOWULF,
    type: "defence",
  },
  {
    id: "beowulf-ultimate1",
    name: "Dragon's Flight",
    description:
      "Wyrm takes off and tracks enemies, continuously breathing fire during its flight and dealing 200 damage per second and applying IGNITE to all enemies hit. TRAIT is disabled during this time but is refreshed at the end of the duration",
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
  },
  {
    id: "beowulf-ultimate2",
    name: "Raging Chain",
    description:
      "Beowulf rushes forward, stopping at the first enemy and striking them twice in a small cone before sending himself backwards. Wyrm then shoots two fireballs at the point of impact, applying IGNITE to all enemies hit. Using Raging Chain with no target puts the ability on a 5 second(s) cooldown. Beowulf can still be damaged while attacking with Raging Chain",
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
  },
];
