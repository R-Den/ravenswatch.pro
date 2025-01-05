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
  },
];
