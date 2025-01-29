import { HeroBuild } from "@/lib/types";
import { HERO_IDS } from "../hero-ids";

export const beowulf_builds: HeroBuild[] = [
  {
    version: "1.0",
    name: "Attack Build",
    description: "An attack focused build for Beowulf",
    added_date: new Date("2025-01-29"),
    hero: HERO_IDS.BEOWULF,
    core_talents: [
      "beowulf-breath-of-fire",
      "beowulf-blademaster",
      "beowulf-fiery-slash",
      "beowulf-blazing-runes",
      "beowulf-fireball",
    ],
    secondary_talents: [
      "beowulf-furnace",
      "beowulf-fire-wings",
      "beowulf-furious-blows",
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
      "The combination of Fiery Slash and Fireball is a real one two punch, with the Fiery Slash attack an extremely strong melee attack the Fireball being a very strong ranged attack that provides a great deal of stagger. Furnace is a nice addition, as it can help to keep enemies ignited for longer, allowing you to get more benefit from the increased critical chance from Blazing Runes. Similarly, Fire Wings can be beneficial as it provides another method of igniting enemies, to take advantage of Blazing Runes on the Fiery Slash attack. Do not take heavy strikes as it will likely reduce your damage output and fun, as it takes a lot of attack speed to return your attack animation to a reasonable speed. ",
    tips: "The optimal way to play this build is likely the repeated combo of dash->attack->dash->attack continuously, as this will grant you a large amount of crit and damage output. Dash charges, cooldown and Eternal Rose are all very important to this build. That being said, you can utilise Retailiation and Furious Blows to introduce more variety into the build, where it will branch away more from the General Dash Build.",
  },
  {
    version: "1.0",
    name: "Power Build",
    description: "A Power focused build for Beowulf",
    hero: HERO_IDS.BEOWULF,
    added_date: new Date("2025-01-29"),
    core_talents: [
      "beowulf-double-shock",
      "beowulf-eruption",
      "beowulf-scorched-earth",
      "beowulf-battle-cry",
    ],
    secondary_talents: [
      "beowulf-draconic-binds",
      "beowulf-explosive-fire",
      "beowulf-secondary-tremor",
    ],
    talents_description:
      "The choice between Draconic Binds and Explosive Fire is mostly personal preference, Draconic binds will be more damage, however, Explosive Fire will help to clear large groups of enemies, particularly important in coop. Personally, if I am in coop, I will always take Explosive Fire. Other than that, we chose all the Power talents to make sure it hits as hard as possible. With a few Flaming Pearls and a Balor's Eye, you will be able to One Shot most bosses with your Power, particularly if you have some form of Vulnerable to apply to them.",
    required_magical_objects: [
      "king-of-clubs-card",
      "flaming-pearl",
      "raven-claw",
      "nightmare-thorn",
      "balors-eye",
    ],
    optional_magical_objects: ["horn-of-plenty"],
    tips: "Your Trait should basically always be used on your Power in this build, as it will increase your damage output by a large amount. There is a case to be made for using it on your special if you are using the - talent, however, I am not personally good enough at aiming the resulting Power from it to take advantage of it.\
    Another tip is to use encourage any of your coop partners to spec into Power builds, as Battle Cry refreshes the Power cooldown for all players in the area, not just your own.",
  },
];
