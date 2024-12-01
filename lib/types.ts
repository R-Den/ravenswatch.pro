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
  unlock_rank?: number;
  hero: string;
  type: "starter" | "normal" | "ultimate";
  upgrade_changes?: string;
}

export interface Abilities {
  name: string;
  description: string;
  hero: string;
  type: "trait" | "attack" | "power" | "special" | "defence" | "ultimate";
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
  tier: "S" | "A" | "B" | "C" | "D";
  core_talents: Talents[];
  secondary_talents: Talents[];
  core_magical_objects: Magical_Objects[];
  secondary_magical_objects: Magical_Objects[];
}
