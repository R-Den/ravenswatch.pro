import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const piper_abilities: Abilities[] = [
  {
    id: "piper-trait",
    name: "Infestation",
    description:
      "Passive: Rats spawn from the ground at regular intervals and follow the Hero (up to 20 rats). Active: Order all current rats to attack enemies, they attack up to 3 times for 5 damage each and die afterwards",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "trait",
  },
  {
    id: "piper-attack",
    name: "Flute",
    description:
      "DAY: Hold to play the flute, sending notes dealing 6 damage each. NIGHT: Hold to play the flute, sending piercing notes dealing 4 damage each. Does not prevent movement but reduces Move Speed",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "attack",
  },
  {
    id: "piper-power",
    name: "Solo",
    description:
      "DAY: Play a solo note on the flute, sending 3 waves of 3 notes in a cone, each one dealing 12 damage. NIGHT: Play a solo note on the flute, sending 3 waves of 3 piercing notes in a straight line, each one dealing 8 damage. Does not prevent movement but reduces Move Speed",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "power",
  },
  {
    id: "piper-special",
    name: "Fortissimo",
    description:
      "Create a zone of power that makes all enemies inside VULNERABLE",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "special",
  },
  {
    id: "piper-defence",
    name: "Acoustic Blast",
    description:
      "The Pied Piper briefly becomes INTANGIBLE then creates an acoustic blast, stunning and pushing back all enemies around",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "defence",
  },
  {
    id: "piper-ultimate1",
    name: "Unchained Melody",
    description:
      "Play notes continuously and rapidly, automatically targeting the closest enemy and dealing up to 120 damage per second. During this ability, the Hero runs forward but the direction can be controlled. DAY: the notes stop at the first enemy hit, dealing more damage. NIGHT: the notes pierce through all enemies, dealing less damage than at DAY. The Pied Piper can still be damaged while channeling Unchained Melody",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
  },
  {
    id: "piper-ultimate2",
    name: "Plague of Rats",
    description:
      "Channel a melody to control a swarm of rats that rushes forward and deals up to 100 damage per second over a large area. The Pied Piper can still be damaged while channeling Plague of Rats. Plague of Rats can be cancelled early and its cooldown is proportional to the time it has been used (with a minimum of 10s)",
    hero: HERO_IDS.THE_PIED_PIPER,
    type: "ultimate",
  },
];
