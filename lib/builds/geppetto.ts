import { Abilities } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const geppetto_abilities: Abilities[] = [
  {
    id: "geppetto-trait",
    name: "Dummy",
    description:
      "Build a DUMMY that draws enemies' attention and attacks them for 40 damage. Geppetto can have up to 3 DUMMIES built at the same time. DUMMIES can be dismantled using CONTEXTUAL ACTION and will self-destroy if they are too far from Geppetto",
    hero: HERO_IDS.GEPPETTO,
    type: "trait",
  },
  {
    id: "geppetto-attack",
    name: "Hammer",
    description:
      "Attack with a hammer at close quarters, dealing 15 damage. DUMMIES hit are healed for 15% of their Maximum Health",
    hero: HERO_IDS.GEPPETTO,
    type: "attack",
  },
  {
    id: "geppetto-power",
    name: "Uppercut",
    description:
      "Perform a powerful hammer strike that deals 25 damage. Closest DUMMY hit is displaced and deals 50 damage along its path",
    hero: HERO_IDS.GEPPETTO,
    type: "power",
  },
  {
    id: "geppetto-special",
    name: "Cogsplosion",
    description:
      "Hold then release to roll a bomb that explodes after a short duration, dealing 40 damage all around. DUMMIES hit are healed for 40% of their Maximum Health",
    hero: HERO_IDS.GEPPETTO,
    type: "special",
  },
  {
    id: "geppetto-defence",
    name: "Defibrillation",
    description:
      "Apply a 20 SHIELD on GEPPETTO and all DUMMIES for 6 seconds. Briefly grants INTANGIBLE at the start of the ability",
    hero: HERO_IDS.GEPPETTO,
    type: "defence",
  },
  {
    id: "geppetto-ultimate1",
    name: "Meca-Puppet",
    description:
      "Create an autonomous giant PUPPET that will attack the closest target and deal up to 77 damage per second. PUPPET follows Geppetto if no target is nearby and lasts up to 40 seconds",
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
  },
  {
    id: "geppetto-ultimate2",
    name: "Overclock",
    description:
      "Make all active DUMMIES spin around and track nearby enemies, each one dealing 50 per second all around. DUMMIES under the effect of Overclock are INTANGIBLE. Cooldown is proportional to the number of DUMMIES effected",
    hero: HERO_IDS.GEPPETTO,
    type: "ultimate",
  },
];
