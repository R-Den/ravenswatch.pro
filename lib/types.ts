export interface Hero {
  id: string;
  name: string;
  unlock_condition?: string;
  description?: string;
  talents: Talents[];
  abilities: Abilities[];
  type: "heroes";
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
}

export interface Abilities {
  id: string;
  name: string;
  description: string;
  hero: string;
  type: "trait" | "attack" | "power" | "special" | "defence" | "ultimate";
  passive?: boolean;
  tags?: string[]; // for future use in filtering. Could add things like "weaken", "heal", "damage", vulnerable, etc.
}

export interface Magical_Objects {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary" | "cursed";
  super_effect?: string;
  stacks_to_effect?: 3 | 4 | 5;
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
  core_talents: Talents[];
  secondary_talents: Talents[];
  magical_objects: Magical_Objects[];
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

export interface DraggableSyntheticListeners {
  onKeyDown?(event: React.KeyboardEvent<HTMLElement>): void;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
  onMouseUp?(event: React.MouseEvent<HTMLElement>): void;
  onTouchEnd?(event: React.TouchEvent<HTMLElement>): void;
  onTouchStart?(event: React.TouchEvent<HTMLElement>): void;
}

export interface DraggableAttributes {
  role?: string;
  tabIndex?: number;
  "aria-describedby"?: string;
  "aria-disabled"?: boolean;
  "aria-pressed"?: boolean;
  "aria-roledescription"?: string;
  "data-testid"?: string;
  draggable?: boolean;
  style?: React.CSSProperties;
  translate?: "yes" | "no";
  hidden?: boolean;
  id?: string;
  className?: string;
  title?: string;
}

export interface DraggableSlotProps {
  slot: BuildSlot;
  onRemove: () => void;
  attributes?: DraggableAttributes;
  listeners?: DraggableSyntheticListeners;
}
