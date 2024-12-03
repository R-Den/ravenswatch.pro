import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const aladdin_abilities: Abilities[] = [
  {
    id: "aladdin-trait",
    name: "Taiji",
    description:
      "Switch between YIN STANCE and YANG STANCE. YIN: All abilities and ATTACKS gain 10% LIFE ON HIT, on activation all heroes around gain 15 SHIELD for 6 seconds. YANG: Sun aladdin deals and takes 100% more damage, on activation all heroes around gain STRENGTH for 4 seconds",
    hero: HERO_IDS.ALADDIN,
    type: "trait",
  },
  {
    id: "aladdin-attack",
    name: "Ruyi Jingu Bang",
    description:
      "Chain attacks with the staff, with each successive move increasing its range and power. The full chain deals a total of 162 damage",
    hero: HERO_IDS.ALADDIN,
    type: "attack",
  },
  {
    id: "aladdin-power",
    name: "Jindou Yun",
    description:
      "Rush toward a nearby enemy then strike it for 60 damage. If other enemies are nearby, this ability chains up to two more times while INTANGIBLE. After landing POWER, Sun aladdin is briefly INTANGIBLE while leaping backwards",
    hero: HERO_IDS.ALADDIN,
    type: "power",
  },
  {
    id: "aladdin-special",
    name: "Mantra",
    description:
      "Launch prayer beads that orbit Sun aladdin for 5 second(s), dealing 32 damage per second to enemies affected",
    hero: HERO_IDS.ALADDIN,
    type: "special",
  },
  {
    id: "aladdin-defence",
    name: "Empty Palm",
    description:
      "Block any attack for 0.5 seconds. If an attack is blocked, the blocking time is reset and Empty Palm's cooldown is refreshed. Blocking multiple attacks with one DEFENSE activation does not stack progression of Talents/Quests. On a successful block, if the attack still going then automaticlly block those attacks without pressing DEFENSE again",
    hero: HERO_IDS.ALADDIN,
    type: "defence",
  },
  {
    id: "aladdin-ultimate1",
    name: "Monkey Clones",
    description:
      "Sun aladdin becomes INTANGIBLE and summons 6 clones in the area, which will fight nearby enemies and attract their attention. Clones copy Sun aladdin's VITALITY and DMG and disappear after 10 second",
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
  },
  {
    id: "aladdin-ultimate2",
    name: "Transfiguration",
    description:
      "Sun aladdin transforms for 20 seconds into a copy of another random hero, with all their standard Talents activated, of Epic quality. When transformed as Aladdin, TRAIT can only be activated once per transformation",
    hero: HERO_IDS.ALADDIN,
    type: "ultimate",
  },
];
