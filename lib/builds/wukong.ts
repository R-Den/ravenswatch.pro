import { HeroBuild } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const wukong_builds: HeroBuild[] = [
  {
    version: "1.0",
    name: "Power Build",
    description: "Wukong Power build. The premier damage build for Wukong.",
    added_date: new Date("2025-01-26"),
    hero: HERO_IDS.SUN_WUKONG,
    core_talents: [
      "wukong-shard-blades",
      "wukong-air-dash",
      "wukong-dive",
      "wukong-spinning-strikes",
      "wukong-leaping-strike",
    ],
    secondary_talents: [
      "wukong-slide-attack",
      "wukong-acrobatics",
      "wukong-master-thief",
    ],
    required_magical_objects: [
      "eternal-rose",
      "ace-of-spades-card",
      "charmstone",
      "raven-wing",
      "swan-cloak",
    ],
    optional_magical_objects: [
      "vajra",
      "ring-of-dispel",
      "seven-league-boots",
      "witchs-broom",
    ],
    talents_description:
      "Acrobatics is a great addition to this build, as it allows you to gain more enchantment points, which increases your damage output. Master Thief is also a great addition, as it allows you to potentially gain a second copy of any common, rare or epic magical item you find.",
    tips: "The increased range from shard blades applies to all attacks, including those of dive, spinning strikes and leaping strike. Make sure you always have plenty of enchantment points to maximise your damage output.",
  },
  {
    version: "1.0",
    name: "WhatTheShuck's Hard Carry Build",
    description:
      "The build that WhatTheShuck uses to carry his team to victory when the he desperately needs the W.",
    hero: HERO_IDS.SUN_WUKONG,
    added_date: new Date("2025-01-11"),
    core_talents: [
      "wukong-stone-monkey",
      "wukong-airbender",
      "wukong-focused-strikes",
      "wukong-thundercloud",
      "wukong-divine-palm",
      "wukong-fiery-golden-eyes",
      "wukong-chi-outburst",
      "wukong-sprint",
    ],
    secondary_talents: ["wukong-perfect-copy", "wukong-divine-beverage"],
    talents_description:
      "These talents exenuate the power build, capitalising on the strengths of the power build. While the making useful additions to the build, such as: Fiery Golden Eyes for the increased dream shard gains, sprint for the added move speed and ability to run the map. Divine palm also serves the build extremely well, if your block timings are on point. Always run the Transfiguration Ultimate, with the upgrades being dependant on the situation, WhatTheShuck prefers Divine Beverage for co-op play, while Perfect Copy is more suited to solo. One slot is available for a situational talent, however, usually One-Inch Punch is the go to.",
    required_magical_objects: [
      "king-of-clubs-card",
      "flaming-pearl",
      "raven-claw",
      "nightmare-thorn",
      "balors-eye",
      "leprechaun-coin",
      "golden-egg",
      "tamatebako",
      "excalibur",
    ],
    optional_magical_objects: [],
    tips: "Blocking is a great form of damage in this build, with the damage of Stone Monkey, paired with the Yang stance Divine Palm damage. ",
  },
];
