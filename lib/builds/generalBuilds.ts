import { GeneralBuild } from "../types";

export const generalBuilds: GeneralBuild[] = [
  {
    version: "1.0",
    name: "Economy Build",
    description:
      "Get a lot of rerolls, gets you a lot of money, allows to buy things, gives you more damage. Can also allow you to easily force builds, due to the sheer volume of rerolls and dream shards obtained with this build. Hope Diamond is a great item, however, you do risk losing all your money on death. Be warned!",
    required_magical_objects: ["leprechaun-coin", "golden-egg"],
    optional_magical_objects: ["hope-diamond"],
    recommended_heroes: ["All", "aladdin", "wukong"],
    heroes_description:
      "Great on all heroes, but Wukong and Aladdin benefit greatly due to Fiery Golden Eyes and Master Thief, respectively.",
    tips: "Too flush with shards? Spending shards at the Alter of Heroes (Where feathers are bought) can be a great way to spend more shards and increase your damage stat further.",
    added_date: new Date("2025-01-11"),
  },
  {
    version: "1.0",
    name: "Dash Build",
    description:
      "Get a lot of dashes gives you crit, vajra is helpful for stagger and damage on the dash. Heroes such as piper benefit greatly from Seven-League Boots, as you can stack power charges instead of dash charges to Dash-Power-Dash-Power spam. Witch's broom is a great item in this build, but is high risk, due to 25% increased incoming damage. It is especially potent on Wukong and Geppetto who can hold dash for long periods of time - allowing for large spaces of intangibility",
    required_magical_objects: [
      "eternal-rose",
      "raven-wing",
      "charmstone",
      "vajra",
      "swan-cloak",
      "ring-of-dispel",
    ],
    optional_magical_objects: ["seven-league-boots", "witchs-broom"],
    recommended_heroes: [
      "geppetto",
      "wukong",
      "aladdin",
      "beowulf",
      "the-pied-piper",
    ],
    heroes_description:
      "Can be done on most champs, but Geppetto, Wukong, Aladdin, Beowulf and The Pied Piper benefit most, due to have synergistic talents such as: Rocket Scientist, Sprint (sorta spinning strikes too), Quick Ride (sorta leap strike), Fireball (sorta fiery slash), and Spinning Solo",
    tips: "The Crit from the Eternal Rose stacks with each dash, so the more dashes you have, the more crit you get. Doing 3 short dashes with a full stack of Eternal Rose, you can get 150% crit chance from the roses alone, meaning your next hit will be at least 155% more damage.",
    added_date: new Date("2025-01-11"),
  },
  {
    version: "1.0",
    name: "Crit Build",
    description:
      "This build offers a variety of routes to explore where to focus your damage. If the ability that you are trying to crit with has a long animation, it may be more beneficial to stack crit and crit damage from Horn of Plenty, rather than the Eternal Rose, as the crit chance can wear off before the ability lands. Horn of Plenty may be the better choice in most scenarios, particularly as it allows for greater flexibilty, however, the consistency of Eternal Rose's crit chance growth cannot be overlooked. The Jack of Diamonds and Kings of Clubs are great items to stack crit chance for Speical and Power respectively, but they should not be built together. Make sure to choose one of these two items and stick to it.",
    required_magical_objects: [
      "eternal-rose",
      "horn-of-plenty",
      "jack-of-diamonds-card",
      "kings-of-clubs-cards",
    ],
    optional_magical_objects: [],
    recommended_heroes: ["carmilla", "scarlet", "beowulf", "the-pied-piper"],
    added_date: new Date("2025-01-11"),
    heroes_description:
      "Most useful on heroes that have an inbuilt source of crit / an ability that provides a large amount of crit. For example, Pyromania on Scarlet's special provides 70% crit chance at max rarity, meaning that a a full stack of Jack of Diamonds will provide 115% crit chance on her special without any further investment, allowing you to focus more on crit damage.",
    tips: "Excess crit chance is converted to damage! Don't be afraid to overcap crit chance, as it will increase your damage output.",
  },
  {
    version: "1.0",
    name: "Armor Build",
    description:
      "This is a great build to output large amounts of damage, while being very beefy. The tradeoff being that this build can be a very slow start, particularly before you get a full stack of Dragon Hide's. The bloody mary's mirror can be an effective way to flip your early armor into DMG, or inverse the likely large armor stat that you have late game. Just be careful not to have too much damage, as this can sometimes negatively affect your DMG if not carefully considered.",
    required_magical_objects: ["green-armor", "dragon-hide"],
    optional_magical_objects: ["bloody-marys-mirror"],
    recommended_heroes: [
      "wukong",
      "geppetto",
      "aladdin",
      "melusine",
      "the-pied-piper",
    ],
    heroes_description:
      "Heroes that have methods of naturally stacking armor can be beneficial. Wukong, Geppetto, Aladdin, Melusine & the Pied Piper all have talents that can grant between 10 and 50 armor",
    tips: "Most sources of armor in the game have higher quanities, than the other resources available. This means pulling armor from a grimoire or a horn of plenty can be a very effective method of gaining damage.",
    added_date: new Date("2025-01-11"),
  },
  {
    version: "1.0",
    name: "Vitality Build",
    description:
      "A somewhat of a throwback to the early access Ogre-Horn build that terrorised the Early-Access meta, this build focuses on stacking a large amount of vitality, to convert into DMG through Ogre Bloods. Particularly effective with Thirst of Immortality on Wukong, where he can get to some insane Vitality numbers.",
    required_magical_objects: ["ogre-blood", "philosophers-stone"],
    optional_magical_objects: ["water-of-life"],
    recommended_heroes: ["wukong", "carmilla", "geppetto"],
    heroes_description:
      "Works best for Heroes that have an easy way of getting extra vitality, such as Wukong, Carmilla and Geppetto(?)",
    tips: "Healing Fountains are your best friend, each one can give you 10 vitality, meaning an easy 1 damage per ogre blood.",
    added_date: new Date("2025-01-11"),
  },
];
