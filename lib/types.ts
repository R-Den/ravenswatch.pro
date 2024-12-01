export interface Hero {
  name: string;
  unlock_condition?: string;
  description?: string;
  talents: Talents[];
  abilities: Abilities[];
}

export interface Talents {
  name: string;
  description: string;
  unlock_condition?: string;
  type: "starter" | "normal" | "ultimate";
}

export interface Abilities {
  name: string;
  description: string;
  type: "trait" | "power" | "special" | "defence" | "ultimate";
  passive?: boolean;
}

export interface Magical_Objects {
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  super_effect?: string;
  stacks_to_effect?: 3 | 4 | 5;
}

export interface Build {
  name: string;
  description: string;
  hero: Hero;
  talents: Talents[];
  magical_objects: Magical_Objects[];
}
