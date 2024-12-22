import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const carmilla_abilities: Abilities[] = [
  {
    id: "carmilla-trait",
    name: "Dhampir",
    description:
      "Passive: Carmilla uses BLOOD to fuel some of her abilities, or health when none is left. Active: Enter Winged Form, draining 9 BLOOD per second to gain +30% MOVE SPEED and BLOOD-free abilities. DAY: Every 1 second, restore 2 health to all nearby heroes. NIGHT: Gain +30% Crit Chance.",
    hero: HERO_IDS.CARMILLA,
    type: "trait",
  },
  {
    id: "carmilla-attack",
    name: "Tearing",
    description:
      "Chain a series of 5 attacks with clawed hands, with the last attack dealing +300% damage. The combo overall deals a total of 48 damage and earns 8 BLOOD point(s).",
    hero: HERO_IDS.CARMILLA,
    type: "attack",
  },
  {
    id: "carmilla-power",
    name: "Blood Orb",
    description:
      "Carmilla sends a blood orb forward; holding the action consumes BLOOD to fuel it, dealing 80 area damage per second. Upon release, the blood orb explodes and deals 40 area damage. While channeling POWER, the orb can be slowly moved around.",
    hero: HERO_IDS.CARMILLA,
    type: "power",
  },
  {
    id: "carmilla-special",
    name: "Death Kiss",
    description:
      "Hold then release - Carmilla launches herself at the target location, then bites the closest enemy while INTANGIBLE, dealing 100 damage. Each successful bite earns 30 BLOOD point(s).",
    hero: HERO_IDS.CARMILLA,
    type: "special",
  },
  {
    id: "carmilla-defence",
    name: "Bat Swarm",
    description:
      "Carmilla transforms into an INTANGIBLE bat swarm for 0.65 second(s), dealing 30 damage to enemies passed through as BLEED. Holding the action consumes BLOOD to keep this form active for up to 3 second(s).",
    hero: HERO_IDS.CARMILLA,
    type: "defence",
  },
  {
    id: "carmilla-ultimate1",
    name: "Impalement",
    description:
      "Consumes all BLOOD to launch a series of blood spikes erupting from the ground in front, dealing 450 damage per second to enemies in the area. Each BLOOD point consumed increases the damage by +1%. In Winged Form, Impalement does not consume BLOOD while still increasing its damage.",
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
  },
  {
    id: "carmilla-ultimate2",
    name: "Blood Lash",
    description:
      "Summon a whip of blood, dealing 100 area damage. Next 12 ATTACKS use the whip to strike in large areas, with the combo overall dealing a total of 140 damage.",
    hero: HERO_IDS.CARMILLA,
    type: "ultimate",
  },
];
