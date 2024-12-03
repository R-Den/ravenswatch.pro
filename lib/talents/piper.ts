import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const piper_talents: Talents[] = [
  {
    id: "piper-sound-barrier",
    name: "Sound Barrier",
    description:
      "Quest (x20): Gain +1 ARMOR whenever DEFENSE hits at least 2 enemies. Complete: Doing so again grants 12 SHIELD to all nearby Heroes for 6 seconds",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "starter",
    upgrade_changes: "+3 SHIELD + Hero Level",
  },
  {
    id: "piper-explosive-rats",
    name: "Explosive Rats",
    description: "Rats explode when they die and deal 6 damage all around",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "starter",
    upgrade_changes: "+1.5 damage",
  },
  {
    id: "piper-freezing-trap",
    name: "Freezing Trap",
    description:
      "Enemies within SPECIAL's area of effect are CHILLED and take +10% damage",
    unlock_rank: 2,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "starter",
    upgrade_changes: "+5% damage",
  },
  {
    id: "piper-virtuoso",
    name: "Virtuoso",
    description:
      "Move Speed when using ATTACK or POWER is increased by 30%. Gain +10% ATTACK Speed",
    unlock_rank: 5,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "starter",
    upgrade_changes: "+5% ATTACK Speed",
  },
  {
    id: "piper-grand-finale",
    name: "Grand Finale",
    description:
      "When SPECIAL's effect expires, the area of effect explodes and deals 60 damage",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+20 damage + Hero Level + DMG",
  },
  {
    id: "piper-giant-rats",
    name: "Giant Rats",
    description: "Rats' attacks WEAKEN enemies and deal +20% damage",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "piper-sniper",
    name: "Sniper",
    description:
      "Notes from ATTACK and POWER have a longer range and deal +20% damage if they hit after halfway",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "piper-horde",
    name: "Horde",
    description:
      "Rats spawn in groups of 3 (instead of 2). Increase maximum controllable rats by 6",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+2 maximum rats",
  },
  {
    id: "piper-explosive-blast",
    name: "Explosive Blast",
    description: "DEFENSE deals 40 damage",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+10 damage",
  },
  {
    id: "piper-sforzando",
    name: "Sforzando",
    description:
      "SPECIAL triggers an implosive DEFENSE (pulling enemies inwards) with its range increased by 20%",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+5% range",
  },
  {
    id: "piper-extra-measure",
    name: "Extra Measure",
    description:
      "After hitting an enemy with DEFENSE, next POWER within 3 seconds lasts longer (+2 waves of notes)",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+1 wave(s) of notes",
  },
  {
    id: "piper-quintuplets",
    name: "Quintuplets",
    description:
      "POWER plays 5 notes each wave (instead of 3) but each note deals -20% damage",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "piper-perfect-harmony",
    name: "Perfect Harmony",
    description:
      "DEFENSE restores 4 health to all Heroes around for each enemy hit (up to 4)",
    unlock_rank: 2,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+2 Health restored + Hero Level",
  },
  {
    id: "piper-low-notes",
    name: "Low Notes",
    description:
      "ATTACK sends bigger notes dealing +60% damage in an area of effect but at a 40% reduced frequency",
    unlock_rank: 3,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+15% damage",
  },
  {
    id: "piper-acoustic-pulses",
    name: "Acoustic Pulses",
    description: "SPECIAL deals 8 damage every second",
    unlock_rank: 3,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+3 damage + Hero Level + DMG",
  },
  {
    id: "piper-spinning-solo",
    name: "Spinning Solo",
    description:
      "POWER triggered after DASH makes Hero move quicker and has +40% Crit Chance",
    unlock_rank: 4,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+10% Crit Chance",
  },
  {
    id: "piper-stimulant-vibes",
    name: "Stimulant Vibes",
    description:
      "Rats attacking within SPECIAL's zone cannot die, and deal +20% damage",
    unlock_rank: 4,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "piper-music-of-spheres",
    name: "Music of Spheres",
    description:
      "DASH leaves behind a bubbled clef that explodes when hit, sending 4 POWER music notes to enemies around",
    unlock_rank: 5,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+1 POWER music note",
  },
  {
    id: "piper-invasive-blast",
    name: "Invasive Blast",
    description:
      "Hitting at least one enemy with DEFENSE spawns up to 4 rats, which immediately attack nearby enemies",
    unlock_rank: 7,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+1 more time",
  },
  {
    id: "piper-chorus",
    name: "Chorus",
    description:
      "Every 1 second(s), the SPECIAL area of effect fires 5 ATTACK notes, targeting the closest enemies",
    unlock_rank: 7,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes:
      "Rare: -0.2 second(s), Epic: -0.15 second(s), Legendary: -0.1 second(s)",
  },
  {
    id: "piper-ghost-notes",
    name: "Ghost Notes",
    description:
      "For every 10 notes played, a ghost note is sent towards the nearest enemy, dealing 20 area damage",
    unlock_rank: 8,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes:
      "Rare: -2 notes threshold, Epic and Legendary: -1 note(s) threshold",
  },
  {
    id: "piper-leeching-charm",
    name: "Leeching Charm",
    description:
      "For every 20 attacks that rats made on enemies restore 4 Health to all nearby heroes",
    unlock_rank: 8,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "normal",
    upgrade_changes: "+ 1 Health + Hero Level",
  },
  {
    id: "piper-jig",
    name: "Jig",
    description: "DASH sends 4 ULTIMATE notes to nearby enemies",
    unlock_rank: 0,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
    upgrade_changes: "+1 ULTIMATE note(s)",
    prerequisite: "Unchained Melody",
  },
  {
    id: "piper-rain-of-notes",
    name: "Rain of Notes",
    description:
      "During ULTIMATE, 12 notes per second fall from the sky in the surroundings, each dealing 10 area damage",
    unlock_rank: 9,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Unchained Melody",
  },
  {
    id: "piper-vermin-massacre",
    name: "Vermin Massacre",
    description:
      "When ULTIMATE is channeled to completion, the swarm of rats explodes, dealing 200 area damage",
    unlock_rank: 6,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Plague of Rats",
  },
  {
    id: "piper-rat-king",
    name: "Rat King",
    description:
      "Each rat summoned has a 15% chance to be a Rat King, capable of attacking twice as much and dealing +100% damage",
    unlock_rank: 9,
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
    upgrade_changes: "+5% chance",
    prerequisite: "Plague of Rats",
  },
];
