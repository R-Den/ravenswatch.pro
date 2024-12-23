export interface Hero {
  id: string;
  name: string;
  unlock_condition?: string;
  description?: string;
  talents: Talents[];
  abilities: Abilities[];
<<<<<<< HEAD
  encoding_id: string;
=======
  type: "heroes";
<<<<<<< HEAD
>>>>>>> 5db9c0c (Add hero type property and update image path retrieval in hero pages)
=======
  readonly imagePath: string;
>>>>>>> c30b0d6 (Add imagePath getter to hero objects and refactor image retrieval in HeroPage)
}

export interface Talents {
  id: string;
  name: string;
  description: string;
  unlock_rank?: number;
  hero: string;
  type: "starter" | "normal" | "ultimate";
  upgrade_changes?: string;
  prerequisite?: string;
  tags?: string[]; // for future use in filtering. Could add things like "weaken", "heal", "damage", vulnerable, etc.
  encoding_id: string;
}

export interface Abilities {
  id: string;
  name: string;
  description: string;
  hero: string;
  type: "trait" | "attack" | "power" | "special" | "defence" | "ultimate";
  passive?: boolean;
  tags?: string[]; // for future use in filtering. Could add things like "weaken", "heal", "damage", vulnerable, etc.
  image?: string;
}

export interface Magical_Objects {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary" | "cursed";
  super_effect?: string;
  stacks_to_effect?: 3 | 4 | 5;
<<<<<<< HEAD
  encoding_id: string;
=======
  readonly imagePath: string;
}

export function createMagical_Objects(
  data: Omit<Magical_Objects, "imagePath">
): Magical_Objects {
  return {
    ...data,
    imagePath: `/items/${data.id}.png`,
  };
}

export function createManyMagical_Objects(
  dataArray: Array<Omit<Magical_Objects, "imagePath">>
): Magical_Objects[] {
  return dataArray.map((item) => createMagical_Objects(item));
>>>>>>> c30b0d6 (Add imagePath getter to hero objects and refactor image retrieval in HeroPage)
}

export interface WikiEntry<T> {
  entity: T;
  tips: string;
  notes: string;
}

export interface Build {
  version: string;
  name: string;
  description: string;
  hero: string;
  core_talents: string[];
  secondary_talents: string[];
  magical_objects: string[];
  tips: string;
  tags?: string[];
}
export interface BuildSlot {
  type: "starter" | "normal" | "ultimate" | "ultimate-upgrade";
  content: Talents | Abilities | null;
  id: string;
}

export interface TalentButtonProps {
  talent: Talents;
  onClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
}

export interface ItemButtonProps {
  magical_object: Magical_Objects;
  onClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
}
export interface AbilityButtonProps {
  ability: Abilities;
  onClick: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
}

export interface EncodedBuild {
  hero: Hero;
  talents: {
    starter?: Talents;
    ultimate?: Talents;
    ultimate_upgrade?: Talents;
    core?: Talents[];
    alternative?: Talents[];
  };
  items?: Array<{
    item: Magical_Objects;
    quantity: number;
  }>;
}
