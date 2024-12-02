import { Abilities } from "@/lib/types";
import { scarlet } from "./scarlet";

export const scarlet_trait: Abilities = {
  name: "Taiji",
  description:
    "Switch between YIN STANCE and YANG STANCE. YIN: All abilities and ATTACKS gain 10% LIFE ON HIT, on activation all heroes around gain 15 SHIELD for 6 seconds. YANG: Sun scarlet deals and takes 100% more damage, on activation all heroes around gain STRENGTH for 4 seconds",
  hero: scarlet.name,
  type: "trait",
};
export const scarlet_attack: Abilities = {
  name: "Ruyi Jingu Bang",
  description:
    "Chain attacks with the staff, with each successive move increasing its range and power. The full chain deals a total of 162 damage",
  hero: scarlet.name,
  type: "attack",
};
export const scarlet_power: Abilities = {
  name: "Jindou Yun",
  description:
    "Rush toward a nearby enemy then strike it for 60 damage. If other enemies are nearby, this ability chains up to two more times while INTANGIBLE. After landing POWER, Sun scarlet is briefly INTANGIBLE while leaping backwards",
  hero: scarlet.name,
  type: "power",
};
export const scarlet_special: Abilities = {
  name: "Mantra",
  description:
    "Launch prayer beads that orbit Sun scarlet for 5 second(s), dealing 32 damage per second to enemies affected",
  hero: scarlet.name,
  type: "special",
};
export const scarlet_defence: Abilities = {
  name: "Empty Palm",
  description:
    "Block any attack for 0.5 seconds. If an attack is blocked, the blocking time is reset and Empty Palm's cooldown is refreshed. Blocking multiple attacks with one DEFENSE activation does not stack progression of Talents/Quests. On a successful block, if the attack still going then automaticlly block those attacks without pressing DEFENSE again",
  hero: scarlet.name,
  type: "defence",
};
export const scarlet_ultimate1: Abilities = {
  name: "Monkey Clones",
  description:
    "Sun scarlet becomes INTANGIBLE and summons 6 clones in the area, which will fight nearby enemies and attract their attention. Clones copy Sun scarlet's VITALITY and DMG and disappear after 10 second",
  hero: scarlet.name,
  type: "ultimate",
};
export const scarlet_ultimate2: Abilities = {
  name: "Transfiguration",
  description:
    "Sun scarlet transforms for 20 seconds into a copy of another random hero, with all their standard Talents activated, of Epic quality. When transformed as Aladdin, TRAIT can only be activated once per transformation",
  hero: scarlet.name,
  type: "ultimate",
};
