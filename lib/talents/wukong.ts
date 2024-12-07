import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const wukong_talents: Talents[] = [
  {
    id: "wukong-stone-monkey",
    name: "Stone Monkey",
    description:
      "Quest (x40): Each successful DEFENSE grants +0.5 ARMOR. Complete: Each block triggers an attack dealing 100% of the blocked damage as area damage",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "starter",
    upgrade_changes: "+25% of the blocked damage",
  },
  {
    id: "wukong-thirst-for-immortality",
    name: "Thirst For Immortality",
    description:
      "Quest (x7): Obtaining a Magical Object with Rare quality or higher grants +2 DMG. Complete: Grants +100 VITALITY but now only Hero or Magical Object heals are effective",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "starter",
    upgrade_changes: "+25 VITALITY",
  },
  {
    id: "wukong-supreme-polarity",
    name: "Supreme Polarity",
    description:
      "Switching STANCE increases the power of the new STANCE for 7 second(s). YIN: +4% LIFE ON HIT. YANG: deals 20% more damage",
    unlock_rank: 2,
    hero: HERO_IDS.SUN_WUKONG,
    type: "starter",
    upgrade_changes: "+1% LIFE ON HIT and +5% damage",
  },
  {
    id: "wukong-way-of-awakening",
    name: "Way of Awakening",
    description:
      "After 10 successful DEFENSE actions, the next TRAIT activates AWAKENED STANCE for 12 second(s). AWAKENED STANCE grants both YIN and YANG effects without taking any additional damage",
    unlock_rank: 5,
    hero: HERO_IDS.SUN_WUKONG,
    type: "starter",
    upgrade_changes: "Duration +3 second(s)",
  },
  {
    id: "wukong-mantra-of-balance",
    name: "Mantra of Balance",
    description:
      "When SPECIAL is triggered, it applies a negative status effect to nearby enemies within range: YIN: VULNERABLE for 4 second(s) YANG: WEAKENED for 6 second(s)",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+1 second of VULNERABLE. +2 second(s) of WEAKENED",
  },
  {
    id: "wukong-celestial-pillar",
    name: "Celestial Pillar",
    description:
      "Adds a crushing blow to the ATTACK combo, dealing 80 damage around the point of impact",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+25 damage + Hero Level + DMG",
  },
  {
    id: "wukong-stick-twirl",
    name: "Stick Twirl",
    description:
      "ATTACK triggered after a DASH launches a rapid series of 5 strikes, each dealing 60% area damage	",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+15% area damage",
  },
  {
    id: "wukong-sprint",
    name: "Sprint",
    description:
      "Gain +10% Move Speed. DASH can be held for up to 3 second(s) to sprint at high speed",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+2% Move Speed",
  },
  {
    id: "wukong-resonance",
    name: "Resonance",
    description:
      "When the SPECIAL effect expires, all the activation effects of the current STANCE are restarted. Special deals +20% damage",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "wukong-airbender",
    name: "Airbender",
    description: "POWER can strike up to to 1 more time(s)",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+1 more time",
  },
  {
    id: "wukong-om",
    name: "Om",
    description:
      "While SPECIAL is active, beads gradually increase their action radius, up to +24%, and hit all enemies present in the area",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+6% radius",
  },
  {
    id: "wukong-ringing-beads",
    name: "Ringing Beads",
    description:
      "While SPECIAL is active, ATTACK makes beads ring, dealing 30% ATTACK damage all around",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+5% of ATTACK damage",
  },
  {
    id: "wukong-thundercloud",
    name: "Thundercloud",
    description:
      "Enemies hit by POWER are soon afterwards struck by lightning dealing 20% damage all around the point of impact (ignore enemies armor)",
    unlock_rank: 2,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+5% damage",
  },
  {
    id: "wukong-mind-fortress",
    name: "Mind Fortress",
    description:
      "SHIELD and STRENGTH effects triggered upon TRAIT activation last 60% longer",
    unlock_rank: 3,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "lasts +15% longer",
  },
  {
    id: "wukong-one-inch-punch",
    name: "One-Inch Punch",
    description:
      "ATTACK triggered a successful DEFENSE launches a powerful punch, dealing 600% damage",
    unlock_rank: 3,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+150% damage",
  },
  {
    id: "wukong-fiery-dragon",
    name: "Fiery Dragon",
    description:
      "Adds an explosion of fire to the activation of YANG STANCE, dealing 55 area damage and inflicting enemies with IGNITE",
    unlock_rank: 4,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+15 area damage + Hero Level + DMG",
  },
  {
    id: "wukong-frost-tiger",
    name: "Frost Tiger",
    description:
      "Adds an explosion of frost to the activation of YIN STANCE, dealing 44 area damage and inflicting enemies with CHILLED",
    unlock_rank: 4,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+11 area damage + Hero Level + DMG",
  },
  {
    id: "wukong-divine-palm",
    name: "Divine Palm",
    description:
      "Blocking with DEFENSE less than 0.2 second(s) after its activation triggers perfect block: YIN: restores 4 Health to all nearby heroes. YANG: deals 80 area damage",
    unlock_rank: 5,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+1 Health. +30 area damage + Hero Level + DMG",
  },
  {
    id: "wukong-focused-strikes",
    name: "Focused Strikes",
    description:
      "POWER can be held down to deliver the next strike to the same target and deals +12% damage",
    unlock_rank: 7,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+4% damage",
  },
  {
    id: "wukong-sacred-seal",
    name: "Sacred Seal",
    description:
      "When SPECIAL ends, orbs sink into the ground to draw a sacred pattern that explodes after a short time, dealing 100 area damage",
    unlock_rank: 7,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+35 area damage + Hero Level + DMG",
  },
  {
    id: "wukong-chi-outburst",
    name: "Ch'i Outburst",
    description:
      "After POWER hits at least one enemy, the next ATTACK can be held down to store power, then released to deliver an energy beam dealing up to 220% POWER damage to all enemies it passes through",
    unlock_rank: 8,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+55% POWER damage",
  },
  {
    id: "wukong-fiery-golden-eyes",
    name: "Fiery Golden Eyes",
    description:
      "At the start of each DAY or NIGHT, reveal 2 point(s) of interest on the map. Personal Dream Shards gains are increased by 20%",
    unlock_rank: 8,
    hero: HERO_IDS.SUN_WUKONG,
    type: "normal",
    upgrade_changes: "+5% Personal Dream Shard(s)",
  },
  {
    id: "wukong-army-of-monkeys",
    name: "Army of Monkeys",
    description: "ULTIMATE summons 3 additional clones",
    unlock_rank: 0,
    hero: HERO_IDS.SUN_WUKONG,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Monkey Clones",
  },
  {
    id: "wukong-mantra-of-replication",
    name: "Mantra of Replication",
    description:
      "Whenever SPECIAL is cast, summon 3 Monkey Clones that fight for 8 seconds",
    unlock_rank: 9,
    hero: HERO_IDS.SUN_WUKONG,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Monkey Clones",
  },
  {
    id: "wukong-perfect-copy",
    name: "Perfect Copy",
    description:
      "During the ULTIMATE transformation, Sun Wukong can use a random ULTIMATE ability of the Hero copied. Transfiguration lasts 4 more seconds",
    unlock_rank: 6,
    hero: HERO_IDS.SUN_WUKONG,
    type: "ultimate",
    upgrade_changes: "+1 more second(s)",
    prerequisite: "Transfiguration",
  },
  {
    id: "wukong-divine-beverage",
    name: "Divine Beverage",
    description:
      "ULTIMATE transformation grants all heroes around OMNIPOTENCE for 8 seconds. During OMNIPOTENCE, Heroes' POWER, SPECIAL and DEFENSE have a 0.5 second cooldown",
    unlock_rank: 9,
    hero: HERO_IDS.SUN_WUKONG,
    type: "ultimate",
    upgrade_changes: "",
    prerequisite: "Transfiguration",
  },
];
