import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const melusine_abilities: Abilities[] = [
  {
    id: "melusine-trait",
    name: "Siren's Call",
    description:
      "Switch between SING STANCE and MOVE STANCE. SING STANCE casts a controllable WISP but immobilizes the Hero. MOVE STANCE revokes WISP and restores control to the Hero. In SING STANCE, DASH also revokes control of WISP. While exiting SING STANCE Melusine moves quickly for a brief moment",
    hero: HERO_IDS.MELUSINE,
    type: "trait",
  },
  {
    id: "melusine-attack",
    name: "Wisp Attack",
    description:
      "WISP suddenly dashes forward, dealing 21 damage to all enemies passed. Automatically enter SING STANCE when cast",
    hero: HERO_IDS.MELUSINE,
    type: "attack",
  },
  {
    id: "melusine-power",
    name: "Splatter",
    description:
      "WISP pulses a splash of water, dealing 50 damage to all enemies around. Automatically enter SING STANCE when cast",
    hero: HERO_IDS.MELUSINE,
    type: "power",
  },
  {
    id: "melusine-special",
    name: "Torrent",
    description:
      "Send waves of water forward, dealing up to 100 damage. Torrent can still be cast during SING STANCE and does not revoke control of WISP",
    hero: HERO_IDS.MELUSINE,
    type: "special",
  },
  {
    id: "melusine-defence",
    name: "Dive",
    description:
      "Dive into a pool of water, turning INTANGIBLE for a short time. Reemerge in MOVE STANCE",
    hero: HERO_IDS.MELUSINE,
    type: "defence",
  },
  {
    id: "melusine-ultimate1",
    name: "Water Bomb",
    description:
      "Melusine wraps herself in a water sphere and turns INVINCIBLE. After a short time or if triggered, the sphere explodes and deals 400 damage to all nearby enemies",
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
  },
  {
    id: "melusine-ultimate2",
    name: "Wisp Ballet",
    description:
      "Summon 6 autonomous WISPS that pursue and attack nearby enemies. After 4 seconds, the WISPS cast Splatter and then disappear. Melusine can still be damaged while channeling Wisp Ballet. Wisp Ballet can be cancelled early and its cooldown is proportional to the time it has been used (with a minimum of 10s)",
    hero: HERO_IDS.MELUSINE,
    type: "ultimate",
  },
];
