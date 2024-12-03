import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const geppetto_talents: Talents[] = [
  {
    id: "geppetto-rocket-science",
    name: "Rocket Science",
    description:
      "DASH can be held for up to 1 second(s), dealing 32 damage along its path and applying IGNITE to all enemies hit",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "starter",
    upgrade_changes: "+8 damage + Hero Level + DMG",
  },
  {
    id: "geppetto-dummyball",
    name: "Dummyball",
    description:
      "SPECIAL creates a DUMMY when it explodes and deals 155% damage. Has no effect if the max number of DUMMIES are already active",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "starter",
    upgrade_changes: "+15% damage",
  },
  {
    id: "geppetto-twin-dummies",
    name: "Twin Dummies",
    description: "TRAIT has 55% chance to build two DUMMIES at once",
    unlock_rank: 2,
    hero: HERO_IDS.GEPPETTO,
    type: "starter",
    upgrade_changes: "+15% chance",
  },
  {
    id: "geppetto-unstable-cores",
    name: "Unstable Cores",
    description:
      "5 seconds after their creation, DUMMIES become UNSTABLE. If an unstable DUMMY is hit with POWER - or if it is destroyed or dismantled - this will cause it to explode, dealing 80 area damage",
    unlock_rank: 5,
    hero: HERO_IDS.GEPPETTO,
    type: "starter",
    upgrade_changes: "+10 area damage + Hero Level + DMG",
  },
  {
    id: "geppetto-nailing-strike",
    name: "Nailing Strike",
    description:
      "Adds an additional strike to ATTACK combo, dealing 400% damage",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+100% damage",
  },
  {
    id: "geppetto-oiled-mechanisms",
    name: "Oiled Mechanisms",
    description:
      "DUMMIES hit by Geppetto's ATTACK immediately attack in their current position, dealing 50% damage",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "geppetto-heart-ties",
    name: "Heart Ties",
    description:
      "DUMMIES gain 40% of Geppetto's VITALITY. Geppetto gains +5 ARMOR per active DUMMY",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10% of Geppetto's VITALITY",
  },
  {
    id: "geppetto-forked-lightning",
    name: "Forked Lightning",
    description:
      "DEFENSE send bolts of lightning out towards DUMMIES, each one dealing 40 damage",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10 damage + Hero Level + DMG",
  },
  {
    id: "geppetto-large-family",
    name: "Large Family",
    description:
      "Increase maximum active DUMMIES by 1. TRAIT has a 10% reduced cooldown",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+5% reduced cooldown",
  },
  {
    id: "geppetto-mourning-rage",
    name: "Mourning Rage",
    description:
      "Whenever a DUMMY is destroyed, Geppetto and other DUMMIES gain STRENGTH for 4 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+2 seconds",
  },
  {
    id: "geppetto-explosive-builds",
    name: "Explosive Builds",
    description:
      "When built by TRAIT, DUMMIES emit a blast, dealing 40 area damage",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10 area damage + Hero Level + DMG",
  },
  {
    id: "geppetto-pogo-hoppers",
    name: "Pogo-Hoppers",
    description: "DUMMIES move 100% farther when attacking",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+33% farther",
  },
  {
    id: "geppetto-flux-capacitor",
    name: "Flux Capacitor",
    description:
      "While Geppetto has SHIELD, POWER affects all DUMMIES within range and deals +20% damage",
    unlock_rank: 2,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "geppetto-fireworks",
    name: "Fireworks",
    description:
      "Each time a DUMMY regains 30% of its Maximum Health, it shoots a homing missile that deals 15 damage to a nearby enemy",
    unlock_rank: 3,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "-5% of its Maximum Health threshold",
  },
  {
    id: "geppetto-clockwork-medicine",
    name: "Clockwork Medicine",
    description: "DUMMIES healed by SPECIAL also gain +8 REGENERATION",
    unlock_rank: 3,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+2 REGENERATION",
  },
  {
    id: "geppetto-family-meeting",
    name: "Family Meeting",
    description:
      "When three or more DUMMIES are active, Geppetto and DUMMIES gain +20% ATTACK SPEED",
    unlock_rank: 4,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+5% ATTACK SPEED",
  },
  {
    id: "geppetto-laser-lenses",
    name: "Laser Lenses",
    description:
      "When the DEFENSE effect is applied, DUMMIES' next attack shoots lasers from their eyes, dealing 200% ranged damage",
    unlock_rank: 4,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+50% ranged damage",
  },
  {
    id: "geppetto-vacuum-capsule",
    name: "Vacuum Capsule",
    description:
      "DUMMIES hit by SPECIAL are jerked toward the center of the explosion, dealing 40% of POWER damage along the way",
    unlock_rank: 5,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10% of POWER damage",
  },
  {
    id: "geppetto-sharp-noses",
    name: "Sharp Noses",
    description:
      "DUMMIES have a 50% chance of attacking with their nose, dealing 160% damage on all enemies they hit",
    unlock_rank: 7,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+40% damage",
  },
  {
    id: "geppetto-magnetic-hammer",
    name: "Magnetic Hammer",
    description:
      "Holding POWER allows Geppetto to pull in a DUMMY in front of him. Upon release, the DUMMY that has been pulled in deals +40% damage across a 100% wider area",
    unlock_rank: 7,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "geppetto-flash-of-genius",
    name: "Flash of Genius",
    description:
      "Instantly create 1 random Magical Object(s). Each upgrade to this talent will create an additional item",
    unlock_rank: 8,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+1 random Magical Object(s)",
  },
  {
    id: "geppetto-lightning-rod-dummies",
    name: "Lightning Rod Dummies",
    description:
      "After 2-2.5 seconds of DEFENSE is applied, DUMMIES are struck by lightning and deal 36 damage around",
    unlock_rank: 8,
    hero: HERO_IDS.GEPPETTO,
    type: "normal",
    upgrade_changes: "+10 damage + Hero Level + DMG",
  },
  {
    id: "geppetto-bomb-reserve",
    name: "Bomb Reserve",
    description:
      "When in combat, PUPPET sends a bomb around itself every 1 second(s), dealing 40 area damage",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
    upgrade_changes: "+50 area damage + Hero Level + DMG",
    prerequisite: "Meca-Puppet",
  },
  {
    id: "geppetto-master-puppet",
    name: "Master Puppet",
    description:
      "When the Meca-Puppet is built, it consumes any DUMMY built around to gain 20% max health and deal 10% more damage per DUMMY consumed",
    unlock_rank: 9,
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Meca-Puppet",
  },
  {
    id: "geppetto-high-voltage",
    name: "High Voltage",
    description:
      "After a DUMMY is displaced by POWER, it activates the Overclock effect of the ULTIMATE for 1 second(s)",
    unlock_rank: 0,
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Overclock",
  },
  {
    id: "geppetto-hyperclock",
    name: "Hyperclock",
    description:
      "DUMMIES under the Overclock effect overheat, applying IGNITE to enemies hit, and lastly, explode to deal 80 area damage",
    unlock_rank: 9,
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Overclock",
  },
];
