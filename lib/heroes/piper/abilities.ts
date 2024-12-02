import { Abilities } from "@/lib/types";
import { piper } from "./piper";

export const piper_trait: Abilities = {
  name: "Taiji",
  description:
    "Switch between YIN STANCE and YANG STANCE. YIN: All abilities and ATTACKS gain 10% LIFE ON HIT, on activation all heroes around gain 15 SHIELD for 6 seconds. YANG: Sun piper deals and takes 100% more damage, on activation all heroes around gain STRENGTH for 4 seconds",
  hero: piper.name,
  type: "trait",
};
export const piper_attack: Abilities = {
  name: "Ruyi Jingu Bang",
  description:
    "Chain attacks with the staff, with each successive move increasing its range and power. The full chain deals a total of 162 damage",
  hero: piper.name,
  type: "attack",
};
export const piper_power: Abilities = {
  name: "Jindou Yun",
  description:
    "Rush toward a nearby enemy then strike it for 60 damage. If other enemies are nearby, this ability chains up to two more times while INTANGIBLE. After landing POWER, Sun piper is briefly INTANGIBLE while leaping backwards",
  hero: piper.name,
  type: "power",
};
export const piper_special: Abilities = {
  name: "Mantra",
  description:
    "Launch prayer beads that orbit Sun piper for 5 second(s), dealing 32 damage per second to enemies affected",
  hero: piper.name,
  type: "special",
};
export const piper_defence: Abilities = {
  name: "Empty Palm",
  description:
    "Block any attack for 0.5 seconds. If an attack is blocked, the blocking time is reset and Empty Palm's cooldown is refreshed. Blocking multiple attacks with one DEFENSE activation does not stack progression of Talents/Quests. On a successful block, if the attack still going then automaticlly block those attacks without pressing DEFENSE again",
  hero: piper.name,
  type: "defence",
};
export const piper_ultimate1: Abilities = {
  name: "Monkey Clones",
  description:
    "Sun piper becomes INTANGIBLE and summons 6 clones in the area, which will fight nearby enemies and attract their attention. Clones copy Sun piper's VITALITY and DMG and disappear after 10 second",
  hero: piper.name,
  type: "ultimate",
};
export const piper_ultimate2: Abilities = {
  name: "Transfiguration",
  description:
    "Sun piper transforms for 20 seconds into a copy of another random hero, with all their standard Talents activated, of Epic quality. When transformed as Aladdin, TRAIT can only be activated once per transformation",
  hero: piper.name,
  type: "ultimate",
};
