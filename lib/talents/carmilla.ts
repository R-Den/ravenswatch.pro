import { Talents } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const carmilla_talents: Talents[] = [
  {
    id: "carmilla-bat-master",
    name: "Bat Master",
    description:
      "When not in combat, DEFENSE grants STEALTH and can be held without consuming BLOOD. DEFENSE deals +40% damage.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "starter",
    upgrade_changes: "+10% damage",
  },
  {
    id: "carmilla-life-essence",
    name: "Life Essence",
    description:
      "Quest (x30): Killing an enemy with SPECIAL's bite earns +1 VITALITY. Complete: Repeating this action restores 20 Health to Carmilla.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "starter",
    upgrade_changes: "+15 Health + Hero Level",
  },
  {
    id: "carmilla-blood-rage",
    name: "Blood Rage",
    description:
      "Quest (x20): Hitting an enemy with POWER held for at least 1 second earns +0.5 DMG. Complete: Repeating this action increases POWER explosion damage by +90%.",
    unlock_rank: 2,
    hero: HERO_IDS.CARMILLA,
    type: "starter",
    upgrade_changes: "+20% POWER explosion damage",
  },
  {
    id: "carmilla-life-tap",
    name: "Life Tap",
    description:
      "In Winged Form, activating TRAIT again consumes HEALTH equivalent to 20% of max health to recover up to 30 BLOOD points. This effect cannot be activated when health is below the required threshold and has a 5-second cooldown.",
    unlock_rank: 5,
    hero: HERO_IDS.CARMILLA,
    type: "starter",
    upgrade_changes: "+10 BLOOD points",
  },
  {
    id: "carmilla-razor-claws",
    name: "Razor Claws",
    description: "ATTACK deals +40% damage as BLEED.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10% damage as BLEED",
  },
  {
    id: "carmilla-puncture",
    name: "Puncture",
    description: "Each enemy passed through by DASH earns 8 BLOOD point(s).",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "carmilla-dispersion",
    name: "Dispersion",
    description:
      "After DEFENSE, bats disperse around Carmilla dealing 60 area damage as BLEED.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "carmilla-sadism",
    name: "Sadism",
    description: "Critical Hits deal +40% damage on enemies affected by BLEED.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "carmilla-boiling-blood",
    name: "Boiling Blood",
    description:
      "After consuming HEALTH for at least 1 second(s) to fuel an ability, gain +3 REGENERATION.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+1 REGENERATION",
  },
  {
    id: "carmilla-furious-tempest",
    name: "Furious Tempest",
    description:
      "Consuming BLOOD to fuel POWER gradually increases its damage up to +40% after 3.0 seconds of holding.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10% damage",
  },
  {
    id: "carmilla-go-for-the-throat",
    name: "Go For The Throat",
    description:
      "Distance covered before SPECIAL's bite increases its Crit Chance, up to +40%.",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10% Crit Chance",
  },
  {
    id: "carmilla-victimization",
    name: "Victimization",
    description:
      "SPECIAL applies MARKED to bitten enemies for 4.0 seconds | MARKED targets take +25% damage and spread this status to another nearby enemy when they die",
    unlock_rank: 0,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+2.0 seconds",
  },
  {
    id: "carmilla-gust",
    name: "Gust",
    description: "TRAIT pushes back nearby enemies and deals 200 area damage",
    unlock_rank: 2,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+50 damage + Hero Level + DMG",
  },
  {
    id: "carmilla-aggressive-flock",
    name: "Aggressive Flock",
    description:
      "During DEFENSE, Carmilla casts a bat every 0.50 second(s) that seeks out nearby enemies and pierces through them dealing, 26 damage",
    unlock_rank: 3,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "carmilla-blood-reserve",
    name: "Blood Reserve",
    description: "Increase maximum BLOOD reserve by 20%",
    unlock_rank: 3,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+5% maximum BLOOD reserve",
  },
  {
    id: "carmilla-flesh-rip",
    name: "Flesh Rip",
    description: "POWER has +40% Crit Chance on enemies affected by BLEED",
    unlock_rank: 4,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10% Crit Chance",
  },
  {
    id: "carmilla-onslaught",
    name: "Onslaught",
    description:
      "After a SPECIAL, the next ATTACK makes Carmilla rush forward, dealing 800% ATTACK damage to enemies passed through",
    unlock_rank: 4,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+200% ATTACK damage",
  },
  {
    id: "carmilla-seductive-provocation",
    name: "Seductive Provocation",
    description:
      "In combat, standing still makes Carmilla seduce up to 2 non-boss enemies in front of her, applying WEAKENED and VULNERABLE for 6 second(s). Has a 6-second cooldown",
    unlock_rank: 5,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+1 non-boss enemy",
  },
  {
    id: "carmilla-cruel-strike",
    name: "Cruel Strike",
    description:
      "After DASH or DEFENSE, the next ATTACK starts with a combo finishing move, dealing +100% damage",
    unlock_rank: 7,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "",
  },
  {
    id: "carmilla-angel-and-demon",
    name: "Angel and Demon",
    description:
      "When activating TRAIT: DAY: restore 20 health to all nearby heroes NIGHT: Grants STRENGTH to all nearby heroes for 4.0 seconds",
    unlock_rank: 7,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+10 health + Hero Level, +1.0 second of STRENGTH",
  },
  {
    id: "carmilla-wild-heart",
    name: "Wild Heart",
    description:
      "POWER's orb move speed is increased by 100% POWER explosion gains +20% range",
    unlock_rank: 8,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+5% range",
  },
  {
    id: "carmilla-injection",
    name: "Injection",
    description:
      "SPECIAL implants a blood seed into the bitten enemy that shortly after triggers an explosion of POWER, dealing 80% area damage",
    unlock_rank: 8,
    hero: HERO_IDS.CARMILLA,
    type: "normal",
    upgrade_changes: "+20% area damage",
  },
  {
    id: "carmilla-torture-of-the-pale",
    name: "Torture of the Pale",
    description:
      "At the end of their course, ULTIMATE blood spikes return toward Carmilla dealing 40% damage",
    unlock_rank: 9,
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
    upgrade_changes: "+10% damage",
  },
  {
    id: "carmilla-heartbreak",
    name: "Heartbreak",
    description:
      "Add a fourth move to ATTACK combo, impaling enemies in front, dealing 40% ULTIMATE damage",
    unlock_rank: 9,
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
    upgrade_changes: "+10% ULTIMATE damage",
  },
  {
    id: "carmilla-mistress-of-pain",
    name: "Mistress of Pain",
    description:
      "Increase the maximum number of ATTACKS transformed by ULTIMATE by 6",
    unlock_rank: 9,
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
    upgrade_changes: "+2 ATTACKS transformed",
  },
  {
    id: "carmilla-mass-punishment",
    name: "Mass Punishment",
    description:
      "Add a fourth ATTACK to ULTIMATE combo, dealing +240% area damage",
    unlock_rank: 9,
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
    upgrade_changes: "+60% area damage",
  },
];
