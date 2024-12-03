import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const scarlet_talents: Talents[] = [
  {
    id: "scarlet-distant-explosions",
    name: "Distant Explosions",
    description: "SPECIAL now targets a farther location and deals +40% damage",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "starter",
    upgrade_changes: "+10% damage",
  },
  {
    id: "scarlet-devourer",
    name: "Devourer",
    description:
      "Quest (x20:) Each kill with Werewolf POWER earns +0.5 DMG. Complete: POWER has a 40% chance to have no cooldown if it kills an enemy (for both forms)",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "starter",
    upgrade_changes: "+20% chance for no cooldown",
  },
  {
    id: "scarlet-shadow-strikes",
    name: "Shadow Strikes",
    description:
      "Quest (x30): ATTACK or POWER triggered during Human DEFENSE earns Crit Chance +0.5% per enemy hit. Complete: +20% Crit Damage",
    unlock_rank: 2,
    hero: HERO_IDS.SCARLET,
    type: "starter",
    upgrade_changes: "+5% Crit Damage",
  },
  {
    id: "scarlet-shapeshifter",
    name: "Shapeshifter",
    description:
      "TRAIT becomes activatable (with a 30 second cooldown) and HEALS 20% of Maximum Health when used. Maximum Health is reduced by 20%",
    unlock_rank: 5,
    hero: HERO_IDS.SCARLET,
    type: "starter",
    upgrade_changes: "reduce cooldown by 4 seconds",
  },
  {
    id: "scarlet-slash-flurry",
    name: "Slash Flurry",
    description:
      "After using POWER, the next ATTACK within 3 seconds delivers a flurry of 5 slashes with +20% increased damage",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+10% increased damaged",
  },
  {
    id: "scarlet-cleave",
    name: "Cleave",
    description:
      "ATTACK has a 25% chance to cleave all around and deal +120% damage",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+30% damage",
  },
  {
    id: "scarlet-short-wick",
    name: "Short Wick",
    description:
      "Human: SPECIAL no longer affects Scarlet and bomb explodes as soon as it hits the ground. SPECIAL recharges 20% faster in both forms",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+5% faster",
  },
  {
    id: "scarlet-pyromania",
    name: "Pyromania",
    description:
      "SPECIAL applies IGNITE to hit enemies and gains +40% Crit Chance",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+10% Crit Chance",
  },
  {
    id: "scarlet-aggressive-defense",
    name: "Aggressive Defense",
    description: "Deal 60 damage all around when triggering DEFENSE",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+25 damage + Hero Level + DMG",
  },
  {
    id: "scarlet-murderous-intent",
    name: "Murderous Intent",
    description: "DEFENSE instantly grants 2 COMBO POINTS and lasts 20% longer",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+5% longer",
  },
  {
    id: "scarlet-energy",
    name: "Energy",
    description:
      "Maximum COMBO POINTS is increased by 2. POWER has +4% Crit Chance per COMBO POINT stored",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+1% Crit Chance",
  },
  {
    id: "scarlet-evisceration",
    name: "Evisceration",
    description:
      "Each Combo Point spent by POWER applies 8% damage dealt in the form of BLEED",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+2% damage dealt",
  },
  {
    id: "scarlet-armor-break",
    name: "Armor Break",
    description: "SPECIAL applies VULNERABLE to enemies hit for 3 seconds",
    unlock_rank: 2,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+1 second(s)",
  },
  {
    id: "scarlet-true-instincts",
    name: "True Instincts",
    description:
      "In Human Form, gain +10% Move Speed. In Werewolf Form, gain +20% Maximum Health",
    unlock_rank: 3,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+2% Move Speed, +5% Maximum Health",
  },
  {
    id: "scarlet-wide-attacks",
    name: "Wide Attacks",
    description: "ATTACK gains +40% range and deals +20% damage",
    unlock_rank: 3,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "scarlet-double-strike",
    name: "Double Strike",
    description:
      "ATTACK triggered right after DASH triggers a double strike, dealing 400% damage and generating one COMBO POINT",
    unlock_rank: 4,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+100% damage",
  },
  {
    id: "scarlet-pulverize",
    name: "Pulverize",
    description:
      "Special hits enemies 30% farther. Special consumes one COMBO POINT and deals +40% damage",
    unlock_rank: 4,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "scarlet-explosive-rush",
    name: "Explosive Rush",
    description:
      "When at 3 COMBO POINTS or more, POWER triggers SPECIAL's effect upon use, dealing 40% of its normal damage amount",
    unlock_rank: 5,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+10% of its normal damage",
  },
  {
    id: "scarlet-adrenaline",
    name: "Adrenaline",
    description:
      "Each time you spend COMBO POINTS, each point spent: Human: restores 2.0 Health, Werewolf: increases ATTACK SPEED by 4% for 6 seconds",
    unlock_rank: 7,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+0.8 Health + Hero Level, +1% ATTACK SPEED",
  },
  {
    id: "scarlet-fan-of-spikes",
    name: "Fan of Spikes",
    description:
      "DASH can consume a COMBO POINT to send 4 spikes, with each one dealing 100% ATTACK damage to enemies it passes through",
    unlock_rank: 7,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+1 spike(s)",
  },
  {
    id: "scarlet-savagery",
    name: "Savagery",
    description:
      "Each time Scarlet earns or spends COMBO POINTS, she gains a stack of Savagery (up to 20), each granting +1 DMG. Savagery stacks disappear after 5 seconds if no new stacks are gained",
    unlock_rank: 8,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+5 Maximum stacks of Savagery, +0.2 DMG",
  },
  {
    id: "scarlet-on-the-hunt",
    name: "On the Hunt",
    description:
      "DEFENSE applies MARKED to the nearest enemy for 4 seconds. MARKED targets take +25% damage and spread this status to another nearby enemy when they die",
    unlock_rank: 8,
    hero: HERO_IDS.SCARLET,
    type: "normal",
    upgrade_changes: "+2 seconds",
  },
  {
    id: "scarlet-fiery-maw",
    name: "Fiery Maw",
    description:
      "ULTIMATE gains +30% range, deals +20% damage and applies IGNITE to enemies hit",
    unlock_rank: 0,
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
    upgrade_changes: "+5% damage",
    prerequisite: "Hunter's Souvenir",
  },
  {
    id: "scarlet-reload",
    name: "Reload",
    description:
      "Every 16 times POWER, SPECIAL or DEFENSE is used, clear ULTIMATE cooldown",
    unlock_rank: 9,
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
    upgrade_changes: "-2 times",
    prerequisite: "Hunter's Souvenir",
  },
  {
    id: "scarlet-bone-cracker",
    name: "Bone Cracker",
    description:
      "Human: Ash cloud deals 20 damage per second to enemies inside. Werewolf: Devouring an enemy causes it to explode, dealing 40 to 120 area damage (depending on its size)",
    unlock_rank: 6,
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Grandmother's Souvenir",
  },
  {
    id: "scarlet-pack-leader",
    name: "Pack Leader",
    description:
      "Human: Ash cloud restores 3 hit points per second to all Heroes within. Werewolf: Eating an enemy applies a 12 to 15 SHIELD to all heroes around (depending on its size)",
    unlock_rank: 9,
    hero: HERO_IDS.SCARLET,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Grandmother's Souvenir",
  },
];
