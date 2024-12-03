export const HERO_IDS = {
  ALADDIN: "aladdin",
  BEOWULF: "beowulf",
  CARMILLA: "carmilla",
  GEPPETTO: "geppetto",
  MELUSINE: "melusine",
  THE_PIED_PIPER: "piper",
  SCARLET: "scarlet",
  THE_SNOW_QUEEN: "snow_queen",
  SUN_WUKONG: "wukong",
} as const;

export type HeroId = (typeof HERO_IDS)[keyof typeof HERO_IDS];
