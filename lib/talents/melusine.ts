import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const melusine_talents: Talents[] = [
  {
    id: "melusine-deep-beat",
    name: "Deep Beat",
    description:
      "For every 4 ATTACKS that hit an enemy, generate a blast all around that deals 100% of ATTACK's damage. Counter resets when exiting SING STANCE",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "starter",
    upgrade_changes: "+20% of ATTACK's damage",
  },
  {
    id: "melusine-bewitching-song",
    name: "Bewitching Song",
    description:
      "When entering SING STANCE, apply WEAK to all nearby enemies for 3 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "starter",
    upgrade_changes: "+1 second",
  },
  {
    id: "melusine-sea-dance",
    name: "Sea Dance",
    description:
      "In SING STANCE, CONTEXTUAL ACTION allows for quick teleportation to the WISP (5 seconds cooldown). Performing this action in combat restores 8 Health to all nearby heroes",
    unlock_rank: 2,
    hero: HERO_IDS.MELUSINE,
    type: "starter",
    upgrade_changes: "+2 Health + Hero Level",
  },
  {
    id: "melusine-spring-water",
    name: "Spring Water",
    description:
      "Each wave from SPECIAL that hits an enemy restores 2 Health to all Heroes within the wave",
    unlock_rank: 5,
    hero: HERO_IDS.MELUSINE,
    type: "starter",
    upgrade_changes: "+0.5 Health + Hero Level",
  },
  {
    id: "melusine-power-dive",
    name: "Power Dive",
    description:
      "DEFENSE triggers POWER's effect with a +20% damage increase when Melusine dives underwater",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "melusine-protective-flow",
    name: "Protective Flow",
    description: "Heroes passed by ATTACK gain 8 SHIELD for 6 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+3 SHIELD + Hero Level",
  },
  {
    id: "melusine-water-bubble",
    name: "Water Bubble",
    description:
      "After DEFENSE is triggered, Melusine is surrounded by a bubble for 4 seconds, absorbing one instance of damage. The bubble then explodes and deals 60 area damage",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "melusine-underwater-predation",
    name: "Underwater Predation",
    description:
      "Hold DEFENSE to move underwater. All enemies passed become VULNERABLE for 4 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+1 second",
  },
  {
    id: "melusine-aftershock",
    name: "Aftershock",
    description:
      "POWER leaves a water core at the casting location that triggers POWER again after 1.5 seconds for 40% of its damage",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "melusine-backwash",
    name: "Backwash",
    description:
      "When SPECIAL ends, add 3 additional waves coming backwards that deal 50% damage each",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+15% damage",
  },
  {
    id: "melusine-freezing-splash",
    name: "Freezing Splash",
    description: "POWER applies CHILLED to hit enemies and gains +15% range",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+5% range",
  },
  {
    id: "melusine-tidal-wave",
    name: "Tidal Wave",
    description: "SPECIAL's waves are 20% wider and longer",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+5% wider and longer",
  },
  {
    id: "melusine-submerging-attack",
    name: "Submerging Attack",
    description:
      "ATTACK damage increases by 8% for each enemy hit (up to 6 hits, +48%). Resets if Melusine takes damage or exits SING STANCE",
    unlock_rank: 2,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+1% damage increase",
  },
  {
    id: "melusine-geyser",
    name: "Geyser",
    description: "POWER deals +50% damage at its center",
    unlock_rank: 3,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "melusine-water-communion",
    name: "Water Communion",
    description:
      "DEFENSE clears SPECIAL's cooldown and increases next SPECIAL's damage within 3 seconds by +40%",
    unlock_rank: 3,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "melusine-soothing-presence",
    name: "Soothing Presence",
    description:
      "When in combat, passively heal 4 Health for all Heroes in the area every 5 seconds",
    unlock_rank: 4,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+1 Health + Hero Level",
  },
  {
    id: "melusine-razor-tail",
    name: "Razor Tail",
    description:
      "DEFENSE makes Melusine strike with her tail, dealing 400% of ATTACK damage",
    unlock_rank: 4,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+100% of ATTACK damage",
  },
  {
    id: "melusine-wisp-surge",
    name: "Wisp Surge",
    description: "After casting SPECIAL, gain +40% ATTACK SPEED for 3 seconds",
    unlock_rank: 5,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+10% ATTACK SPEED",
  },
  {
    id: "melusine-waterlogging",
    name: "Waterlogging",
    description:
      "WISP gains 2 growth charges for each wave of SPECIAL that hits it (up to a maximum of 12 charges). Each charge increase the damage of the ATTACK by 20%, with each ATTACK consuming one charge",
    unlock_rank: 7,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+5% damage increase",
  },
  {
    id: "melusine-final-burst",
    name: "Final Burst",
    description:
      "After 3 successful attacks, WISP explodes when it disappears, dealing 40 area damage",
    unlock_rank: 7,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "melusine-shimmering-scales",
    name: "Shimmering Scales",
    description:
      "In SING STANCE, Melusine gains temporary +4 ARMOR every second, up to a maximum of 40",
    unlock_rank: 8,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+2 ARMOR",
  },
  {
    id: "melusine-enduring-wisp",
    name: "Enduring Wisp",
    description:
      "When Melusine leaves SING STANCE, WISP remains active and automatically attacks surrounding enemies up to 4 times before then disappearing",
    unlock_rank: 8,
    hero: HERO_IDS.MELUSINE,
    type: "normal",
    upgrade_changes: "+1 more time(s)",
  },
  {
    id: "melusine-vortex-bomb",
    name: "Vortex Bomb",
    description:
      "ULTIMATE's water sphere attracts nearby enemies and deals 40 damage per second to enemies hit",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Water Bomb",
  },
  {
    id: "melusine-healing-blast",
    name: "Healing Blast",
    description:
      "ULTIMATE explosion restores 60 health to all Heroes around and grants them +5 REGENERATION",
    unlock_rank: 9,
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
    upgrade_changes: "+1 REGENERATION",
    prerequisite: "Water Bomb",
  },
  {
    id: "melusine-crescendo",
    name: "Crescendo",
    description:
      "While ULTIMATE is channeled, Melusine gradually summons up to 3 additional WISPS",
    unlock_rank: 0,
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
    upgrade_changes: "+1 additional WISP",
    prerequisite: "Wisp Ballet",
  },
  {
    id: "melusine-overtone-singing",
    name: "Overtone Singing",
    description:
      "When entering SING STANCE, Melusine casts an additional ULTIMATE autonomous WISP that deals 40% damage",
    unlock_rank: 9,
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
    upgrade_changes: "+10% damage",
    prerequisite: "Wisp Ballet",
  },
];
