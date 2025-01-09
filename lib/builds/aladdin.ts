import { HeroBuild } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const aladdin_builds: HeroBuild[] = [
  {
    version: "1.0",
    name: "Attack Build",
    description: "An attack focused build for Aladdin",
    hero: HERO_IDS.ALADDIN,
    core_talents: [
      "aladdin-shard-blades",
      "aladdin-air-dash",
      "aladdin-dive",
      "aladdin-spinning-strikes",
      "aladdin-leaping-strike",
    ],
    secondary_talents: [
      "aladdin-slide-attack",
      "aladdin-acrobatics",
      "aladdin-master-thief",
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
    name: "Power Build",
    description: "A Power focused build for Aladdin",
    hero: HERO_IDS.ALADDIN,
    core_talents: ["aladdin-jinns-fury", "aladdin-swordjinn"],
    secondary_talents: [
      "aladdin-jinns-might",
      "aladdin-enchanted-jinn",
      "aladdin-master-thief",
    ],
    talents_description:
      "Jinn's Might is a great starting talent to increase your damage output, despite this, it can still be beneficial to take Jinniya's Gift to gain the extra trait charge and rarity increase. Cyclonic Appearance is the biggest bait in this build, it almost never is useful when playing correctly.",
    required_magical_objects: [
      "king-of-clubs-card",
      "flaming-pearl",
      "raven-claw",
      "nightmare-thorn",
      "balors-eye",
    ],
    optional_magical_objects: ["horn-of-plenty"],
    tips: "Charging your power to full before using it will increase the damage of the attack.",
  },
];
