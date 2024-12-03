import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const snow_queen_abilities: Abilities[] = [
  {
    id: "snow_queen-trait",
    name: "Ice Crown",
    description:
      "Passive: Some abilities apply CHILLED to enemies hit, decreasing their move speed by 40% for 5 seconds. Active: Briefly become INTANGIBLE and shatter all CHILLED enemies, dealing 60 damage to them and removing their CHILLED status",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "trait",
  },
  {
    id: "snow_queen-attack",
    name: "Ice Lances",
    description:
      "Shoot out ice lances, that deal 15 damage and pierce through enemies. Ice Lances deal +50% damage to CHILLED targets",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "attack",
  },
  {
    id: "snow_queen-power",
    name: "Frost Blast",
    description:
      "Create a large area of FROST, dealing 50 damage to enemies in the area and inflicting them with CHILLED",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "power",
  },
  {
    id: "snow_queen-special",
    name: "Ice Shards",
    description:
      "Throw a volley of ice shards at a short range, dealing up to 65 damage. Ice Shards deal +50% damage to CHILLED enemies",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "special",
  },
  {
    id: "snow_queen-defence",
    name: "Ice Skating",
    description:
      "Boost your own Move Speed and create FROST underfoot, dealing 30 damage to enemies passed and inflicting them with CHILLED. Briefly grants INTANGIBLE at the start of the ability. Ice Skating can be cancelled early and its cooldown is proportional to the time it has been used (with a minimum of 2s)",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "defence",
  },
  {
    id: "snow_queen-ultimate1",
    name: "Frost Ray",
    description:
      "Channel a Frost Ray to the ground, dealing 160 damage per second and applying CHILLED to hit enemies. The Snow Queen can still be damaged while channeling Frost Ray. Frost Ray can be cancelled early and its cooldown is proportional to the time it has been used (with a minimum of 10s)",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "ultimate",
  },
  {
    id: "snow_queen-ultimate2",
    name: "Snowstorm",
    description:
      "Summon a snow storm to deal 5 damage per second, inflicting all enemies within range with CHILLED. The effect lasts for 10 seconds",
    hero: HERO_IDS.THE_SNOW_QUEEN,
    type: "ultimate",
  },
];
