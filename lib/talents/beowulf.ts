import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const beowulf_talents: Talents[] = [
  {
    id: "beowulf-shield-charge",
    name: "Shield Charge",
    description:
      "DEFENSE makes Beowulf dash forward and deal +100% damage along the path",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "starter",
    upgrade_changes: "+25% damage",
  },
  {
    id: "beowulf-explosive-fire",
    name: "Explosive Fire",
    description:
      "IGNITED enemies explode when they die, dealing 20 damage and applying IGNITE to all nearby enemies",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "starter",
    upgrade_changes: "+5 damage",
  },
  {
    id: "beowulf-rampart",
    name: "Rampart",
    description:
      "Quest (x20): Blocking at least one attack during DEFENSE grants +1 ARMOR. Complete: Wyrm DEFENSE heals 50% more and increases the area of effect by +3m",
    unlock_rank: 2,
    hero: HERO_IDS.BEOWULF,
    type: "starter",
    upgrade_changes: "+10% more healing",
  },
  {
    id: "beowulf-draconic-binds",
    name: "Draconic Binds",
    description:
      "Quest (x20): Hitting 2 enemies with a single Wyrm ability grants +0.5 DMG. Complete: TRAIT cooldown -25%. Wyrm abilities deal +10% damage",
    unlock_rank: 5,
    hero: HERO_IDS.BEOWULF,
    type: "starter",
    upgrade_changes: "+5% Wyrm ability damage",
  },
  {
    id: "beowulf-eruption",
    name: "Eruption",
    description:
      "POWER's shockwaves explode at the end and deal 60% additional damage all around",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+15% additional damage",
  },
  {
    id: "beowulf-breath-of-fire",
    name: "Breath of Fire",
    description:
      "Wyrm breathes in a cone of fire during ATTACK finisher, dealing 200% damage and applying IGNITE to enemies hit",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+50% damage",
  },
  {
    id: "beowulf-blademaster",
    name: "Blademaster",
    description:
      "After each TRAIT activation, the next 3 ATTACKS gain +100% Crit Chance. Permanently gain +10% ATTACK SPEED",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+2% ATTACK SPEED",
  },
  {
    id: "beowulf-heavy-strikes",
    name: "Heavy Strikes",
    description:
      "ATTACK is slower but cleaves in a wide area and deals +50% damage",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "beowulf-fiery-seismo",
    name: "Fiery Seismo",
    description:
      "Wyrm SPECIAL's finisher strikes 3 times with a growing radius for 45% damage each",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "beowulf-bladestorm",
    name: "Bladestorm",
    description: "SPECIAL spins 2 more time(s) for 100% damage each",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+1 additional spin",
  },
  {
    id: "beowulf-double-shock",
    name: "Double Shock",
    description:
      "POWER sends out two successive shockwaves, each one dealing -30% damage",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "beowulf-furnace",
    name: "Furnace",
    description: "Your IGNITE effects last 2 more seconds and deal +32% damage",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+8% damage",
  },
  {
    id: "beowulf-blazing-runes",
    name: "Blazing Runes",
    description:
      "ATTACK and SPECIAL gain +40% Crit Chance against IGNITED enemies",
    unlock_rank: 2,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+10% Crit Chance",
  },
  {
    id: "beowulf-fire-wings",
    name: "Fire Wings",
    description:
      "Activating TRAIT deals 30 damage all around and applies IGNITE to all enemies hit",
    unlock_rank: 3,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+5 damage + Hero Level + DMG",
  },
  {
    id: "beowulf-scorched-earth",
    name: "Scorched Earth",
    description:
      "Wyrm POWER leaves a trail of fire, dealing 40 damage over time to enemies standing on it",
    unlock_rank: 3,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+20 damage + Hero Level + DMG",
  },
  {
    id: "beowulf-retaliation",
    name: "Retaliation",
    description:
      "After using DEFENSE, the next ATTACK within 2 seconds triggers a two-strike retaliation, with each one dealing 360% damage",
    unlock_rank: 4,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+90% damage",
  },
  {
    id: "beowulf-sparkling-shield",
    name: "Sparkling Shield",
    description:
      "Each attack blocked during DEFENSE inflicts 120% of blocked damage to what is in front of Beowulf",
    unlock_rank: 4,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+30% of blocked damage",
  },
  {
    id: "beowulf-fiery-slash",
    name: "Fiery Slash",
    description:
      "ATTACK triggered right after DASH deals 400% damage and applies IGNITE to enemies",
    unlock_rank: 5,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+100% damage",
  },
  {
    id: "beowulf-secondary-tremor",
    name: "Secondary Tremor",
    description: "SPECIAL sends out a Shockwave dealing 120% of POWER damage",
    unlock_rank: 7,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+30% POWER damage",
  },
  {
    id: "beowulf-battle-cry",
    name: "Battle Cry",
    description:
      "Activating TRAIT clears POWER cooldown for all Heroes in the area and gives them a 12 SHIELD for 6 seconds",
    unlock_rank: 7,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+4 SHIELD + Hero Level",
  },
  {
    id: "beowulf-furious-blow",
    name: "Furious Blow",
    description:
      "After a SPECIAL, the next ATTACK triggers a series of 3 strikes dealing 100% damage each. If Wyrm empowered SPECIAL, the attacks apply an IGNITE status to enemies and inflict +50% damage",
    unlock_rank: 8,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+25% damage",
  },
  {
    id: "beowulf-runes-of-war",
    name: "Runes of War",
    description:
      "After hitting an enemy with DEFENSE, runes appear around Beowulf dealing 16 area damage per second for 5 seconds",
    unlock_rank: 8,
    hero: HERO_IDS.BEOWULF,
    type: "normal",
    upgrade_changes: "+5 area damage + Hero Level + DMG",
  },
  {
    id: "beowulf-immolation",
    name: "Immolation",
    description:
      "During ULTIMATE, Beowulf deals 40 damage per second to nearby enemies, and all abilities are empowered by Wyrm",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Dragon's Flight",
  },
  {
    id: "beowulf-sudden-growth",
    name: "Sudden Growth",
    description:
      "During ULTIMATE, the Wyrm grows and breathes fire in a wider zone, dealing +20% damage",
    unlock_rank: 9,
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
    upgrade_changes: "+5% damage",
    prerequisite: "Dragon's Flight",
  },
  {
    id: "beowulf-volcanic-rage",
    name: "Volcanic Rage",
    description:
      "Each ULTIMATE fireball throws 4 fiery rock into the surrounding area, dealing 50% damage each",
    unlock_rank: 0,
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
    upgrade_changes: "+1 fiery rock(s)",
    prerequisite: "Raging Chain",
  },
  {
    id: "beowulf-fireball",
    name: "Fireball",
    description:
      "In Combat, DASH makes Wyrm throw a Fireball towards the closest enemy, dealing 40 area damage",
    unlock_rank: 9,
    hero: HERO_IDS.BEOWULF,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Raging Chain",
  },
];
