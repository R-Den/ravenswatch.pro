import { Hero } from "@/lib/types";

import { carmilla_abilities } from "@/lib/abilities/carmilla";

import { carmilla_talents } from "@/lib/talents/carmilla";

export const carmilla: Hero = {
  id: "carmilla",
  name: "Carmilla",
  unlock_condition:
    "Complete Chapter 1 with Aladdin, Melusine, Geppetto, or Sun Wukong",
  description:
    "Carmilla is the 9th Hero from the Ravenswatch. Carmilla is described as a bewitching woman, torn between humanity and vampire savagery. She embodies the vampire fantasy and can use unnaturally strong abilities with her special resource, BLOOD.",
  abilities: carmilla_abilities,
  talents: carmilla_talents,
<<<<<<< HEAD
<<<<<<< HEAD
  encoding_id: "c",
=======
  type: "heroes",
<<<<<<< HEAD
>>>>>>> 5db9c0c (Add hero type property and update image path retrieval in hero pages)
};
=======
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
>>>>>>> c30b0d6 (Add imagePath getter to hero objects and refactor image retrieval in HeroPage)
=======
  type: "heroes",
  get imagePath(): string {
    return `/heroes/${this.id}.png`;
  },
};
>>>>>>> 767a2af1006244cf4aea16d1d7915ffcff6958f2
