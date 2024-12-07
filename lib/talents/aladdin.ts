import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const aladdin_talents: Talents[] = [
  {
    id: "aladdin-aerial-catch",
    name: "Aerial Catch",
    description:
      "Quest (x15): After they hit an enemy, retrieving SPECIAL's blades during DEFENSE grants +1 ARMOR. Complete: Doing it again grants 12/15/18/21 SHIELD to all nearby Heroes for 6 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "starter",
    upgrade_changes: "+3 SHIELD + Hero Level",
  },
  {
    id: "aladdin-jinniyas-gift",
    name: "Jinniya's Gift",
    description:
      "Gain +1 TRAIT Charge Future Talents have +15%/25%/35%/45% chance to be Rare or above",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "starter",
    upgrade_changes: "+10% chance",
  },
  {
    id: "aladdin-jinns-might",
    name: "Jinn's Might",
    description:
      "Quest (x20): Hitting an enemy with POWER at maximum charge grants +0.5 DMG. Complete: Increase POWER's bonus damage from charge by 40%/50%/60%/70%",
    unlock_rank: 2,
    hero: HERO_IDS.ALADDIN,
    type: "starter",
    upgrade_changes: "+10% bonus damage",
  },
  {
    id: "aladdin-wish-of-omnipotence",
    name: "Wish of Omnipotence",
    description:
      "Adds a fourth wish to TRAIT, granting all nearby heroes OMNIPOTENCE for 8/10/12/14 seconds. During OMNIPOTENCE, Heroes' POWER, SPECIAL and DEFENSE have 0.5 second cooldown",
    unlock_rank: 5,
    hero: HERO_IDS.ALADDIN,
    type: "starter",
    upgrade_changes: "+2 seconds",
  },
  {
    id: "aladdin-slide-attack",
    name: "Slide Attack",
    description:
      "Using ATTACK while the blades are flying makes you slide and deal 400%/500%/600%/700% of ATTACK's damage along the path",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+100% of ATTACK's damage",
  },
  {
    id: "aladdin-shard-blades",
    name: "Shard Blades",
    description:
      "While ENCHANTMENT is active on blades, ATTACKS have their range increased by 20%/25%/30%/35% and deal +20% damage",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+5% range",
  },
  {
    id: "aladdin-air-dash",
    name: "Air Dash",
    description:
      "DASH can be triggered during DEFENSE's air time. Doing so increases ATTACK speed by 15% for 4/5/6/7 second(s)",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+1 second(s)",
  },
  {
    id: "aladdin-jinns-fury",
    name: "Jinn's Fury",
    description:
      "POWER strikes 3 times, each one dealing 40%/45%/50%/55% damage",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "aladdin-healing-blades",
    name: "Healing Blades",
    description:
      "When retrieved, SPECIAL's blades heal all Heroes nearby for each enemy hit, up to 7/11/15/19 Health",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+4 Health + Hero Level",
  },
  {
    id: "aladdin-major-enchantment",
    name: "Major Enchantment",
    description:
      "While NOT using ATTACK, passively generate 1 ENCHANTMENT every 3/2.5/2.25/2 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "Rare: -0.50 seconds. Epic and Legendary: -0.25 seconds",
  },
  {
    id: "aladdin-dancing-blades",
    name: "Dancing Blades",
    description:
      "Spin duration of SPECIAL's blades is increased by 75%/100%/125%/150% Blades can be recalled sooner by triggering SPECIAL again",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+25% increased spin duration",
  },
  {
    id: "aladdin-cyclonic-appearance",
    name: "Cyclonic Appearance",
    description:
      "When triggering POWER, Jinn hits all nearby enemies and deals 50%/60%/70%/80% of POWER's damage",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+10% of POWER's damage",
  },
  {
    id: "aladdin-dive",
    name: "Dive",
    description:
      "Using ATTACK during DEFENSE's jump makes Aladdin dive to the ground, dealing 400%/500%/600%/700% of ATTACK's damage all around",
    unlock_rank: 2,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+100% of ATTACK's damage",
  },
  {
    id: "aladdin-spinning-strikes",
    name: "Spinning Strikes",
    description:
      "After retrieving SPECIAL's blades, next ATTACK within 2 second(s) spins 2 times (twice more with ENCHANTMENT) and deals +80%/100%/120%/140% damage",
    unlock_rank: 3,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+20% damage",
  },
  {
    id: "aladdin-acrobatics",
    name: "Acrobatics",
    description:
      "Each enemy passed during DEFENSE grants 3/4/5/6 ENCHANTMENT points",
    unlock_rank: 3,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+1 ENCHANTMENT point",
  },
  {
    id: "aladdin-swordjinn",
    name: "Swordjinn",
    description:
      "POWER Jinn can catch SPECIAL's blades to deal +80%/120%/140%/160% damage in a wider range",
    unlock_rank: 4,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "Rare: +40% damage. Epic and Legendary: +20% damage",
  },
  {
    id: "aladdin-leaping-strike",
    name: "Leaping Strike",
    description:
      "ATTACK used right after DASH deals 200%/250%/300%/350% damage and strikes twice with ENCHANTMENT",
    unlock_rank: 4,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+50% damage",
  },
  {
    id: "aladdin-tornado-jump",
    name: "Tornado Jump",
    description:
      "DEFENSE casts a tornado that moves toward Aladdin and deals 40/55/70/85 damage per second for 4 seconds",
    unlock_rank: 5,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+15 damage + Hero Level + DMG",
  },
  {
    id: "aladdin-dream-scimitars",
    name: "Dream Scimitars",
    description:
      "While ENCHANTMENT is active on blades, ATTACK has a 40%/50%/60%/70% chance of earning Aladdin a Dream Shard upon enemy hit",
    unlock_rank: 7,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+10% chance",
  },
  {
    id: "aladdin-sand-vortex",
    name: "Sand Vortex",
    description:
      "SPECIAL's blades, when stationary, pull in enemies around them. SPECIAL deals +40%/50%/60%/70% damage",
    unlock_rank: 7,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "aladdin-master-thief",
    name: "Master Thief",
    description:
      "Whenever you choose a Common, Rare, or Epic Magical Object, you have a: 40%/20%/10%; 50%/25%/12%; 60%/30%/14%; 70%/35%/16% chance to get another copy of it",
    unlock_rank: 8,
    hero: HERO_IDS.ALADDIN,
    type: "normal",
    upgrade_changes: "+10%/5%/2% chance",
  },
  {
    id: "aladdin-enchanted-jinn",
    name: "Enchanted Jinn",
    description:
      "POWER can consume up to 5 ENCHANTMENT points to increase its Crit Chance by 10% per point. The maximum number of ENCHANTMENT points is increased by 5/10/15/20",
    unlock_rank: 8,
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
    upgrade_changes: "+5 maximum ENCHANTMENT points",
  },
  {
    id: "aladdin-wondrous-wishes",
    name: "Wondrous Wishes",
    description:
      "All wishes are improved: POWER: deals +50% damage. SPECIAL: 40% chance to generate 2 Consumable(s). DEFENSE: +100% SHIELD gained",
    unlock_rank: 0,
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
    upgrade_changes: "",
  },
  {
    id: "aladdin-infinite-wishes",
    name: "Infinite Wishes",
    description:
      "Gain +3 TRAIT charges.Dream Shards cost for ULTIMATE is reduced by 20%",
    unlock_rank: 9,
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
    upgrade_changes: "",
  },
  {
    id: "aladdin-dream-stride",
    name: "Dream Stride",
    description:
      "Each time ULTIMATE hits an enemy, Aladdin gains 8 Dream Shards. ULTIMATE has no cooldown if no enemies are hit",
    unlock_rank: 6,
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
    upgrade_changes: "",
  },
  {
    id: "aladdin-quick-ride",
    name: "Quick Ride",
    description:
      "DASH uses Magic Carpet to deal 40 damage to enemies passed and can be held for up to 1.0 second(s)	",
    unlock_rank: 9,
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
    upgrade_changes: "",
  },
];
