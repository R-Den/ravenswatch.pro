//#region Imports
import { Hero, Talents, Abilities, Magical_Objects } from "./types";
import { aladdin } from "./heroes/aladdin";
import { beowulf } from "./heroes/beowulf";
import { carmilla } from "./heroes/carmilla";
import { geppetto } from "./heroes/geppetto";
import { melusine } from "./heroes/melusine";
import { piper } from "./heroes/piper";
import { scarlet } from "./heroes/scarlet";
import { snow_queen } from "./heroes/snow_queen";
import { wukong } from "./heroes/wukong";
import { magical_objects } from "./magical_objects/magical_objects";
//#endregion

//#region Registry
export const registry = {
  heroes: {
    [aladdin.id]: aladdin,
    [beowulf.id]: beowulf,
    [carmilla.id]: carmilla,
    [geppetto.id]: geppetto,
    [melusine.id]: melusine,
    [piper.id]: piper,
    [scarlet.id]: scarlet,
    [snow_queen.id]: snow_queen,
    [wukong.id]: wukong,
  },
  magical_objects,
} as const;
//#endregion

//#region Basic data access
/**
 * Get a hero by ID.
 * @param heroId The ID of the hero to retrieve.
 * @returns The hero object, or `undefined` if not found.
 */
export function getHero(heroId: string): Hero | undefined {
  return registry.heroes[heroId];
}

/**
 * Get all heroes.
 * @returns An array of all heroes.
 */
export function getAllHeroes(): Hero[] {
  return Object.values(registry.heroes);
}

/**
 * Get all magical objects.
 * @returns An array of all magical objects.
 */
export function getAllMagicalObjects(): Magical_Objects[] {
  return Object.values(registry.magical_objects);
}

/**
 * Get a magical object by ID.
 * @param objectId The ID of the magical object to retrieve.
 * @returns The magical object, or `undefined` if not found.
 */
export function getMagicalObject(
  objectId: string
): Magical_Objects | undefined {
  return registry.magical_objects[objectId];
}

/**
 * Get image of entity.
 * @param entityType The type of entity to retrieve.
 * @param entityId The ID of the entity to retrieve.
 * @returns A path to the entity image.
 */
export function getImagePath(entityType: string, entityId: string) {
  // The string `entityType` should match the folder name: "heroes", "items", "enemies", etc.
  // The `entityId` should match the filename (without extension or with .png if needed).
  return `/${entityType}/${entityId}.png`;
}

//#endregion

//#region wiki helpers

//#endregion

//#region Talent helpers

/**
 * Get all talents for a hero.
 * @param heroId The ID of the hero to retrieve talents for.
 * @returns An array of all talents for the hero.
 */
export function getHeroTalents(heroId: string): Talents[] {
  return registry.heroes[heroId]?.talents || [];
}

/**
 * Get all talents of a specific type for a hero.
 * @param heroId The ID of the hero to retrieve talents for.
 * @param type The type of talent to retrieve.
 * @returns An array of all talents of the specified type for the hero.
 */
export function getHeroTalentsByType(
  heroId: string,
  type: Talents["type"]
): Talents[] {
  return getHeroTalents(heroId).filter((talent) => talent.type === type);
}

/**
 * Get the starter talents for a hero.
 * @param heroId The ID of the hero to retrieve talents for.
 * @returns An array of all starter talents for the hero.
 */
export function getHeroStarterTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "starter");
}

/**
 * Get the normal talents for a hero.
 * @param heroId The ID of the hero to retrieve talents for.
 * @returns An array of all normal talents for the hero.
 */
export function getHeroNormalTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "normal");
}

/**
 * Get the ultimate talents for a hero.
 * @param heroId The ID of the hero to retrieve talents for.
 * @returns An array of all ultimate talents for the hero.
 */
export function getHeroUltimateTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "ultimate");
}
//#endregion

//#region Ability helpers

/**
 * Get all abilities for a hero.
 * @param heroId The ID of the hero to retrieve abilities for.
 * @returns An array of all abilities for the hero.
 */
export function getHeroAbilities(heroId: string): Abilities[] {
  return registry.heroes[heroId]?.abilities || [];
}

/**
 * Get all abilities of a specific type for a hero.
 * @param heroId The ID of the hero to retrieve abilities for.
 * @param type The type of ability to retrieve.
 * @returns An array of all abilities of the specified type for the hero.
 */
export function getHeroAbilityByType(
  heroId: string,
  type: Abilities["type"]
): Abilities | undefined {
  return getHeroAbilities(heroId).find((ability) => ability.type === type);
}

/**
 * Get the ultimate abilities for a hero.
 * @param heroId The ID of the hero to retrieve abilities for.
 * @returns An array of all ultimate abilities for the hero.
 */
export function getHeroUltimateAbilities(heroId: string): Abilities[] {
  return getHeroAbilities(heroId).filter(
    (ability) => ability.type === "ultimate"
  );
}
//#endregion

//#region Build validation helpers

/**
 * Check if a build is valid.
 * @param heroId The ID of the hero for the build.
 * @param starterTalent The starter talent for the build.
 * @param normalTalents The normal talents for the build.
 * @param ultimate The ultimate ability for the build.
 * @param ultimateUpgrade The ultimate upgrade for the build.
 * @returns An object with the result of the validation.
 */
export function isValidBuild(
  heroId: string,
  starterTalent: Talents | null,
  normalTalents: Talents[],
  ultimate: Abilities | null,
  ultimateUpgrade: Talents | null
): { valid: boolean; error?: string } {
  const hero = getHero(heroId);
  if (!hero) return { valid: false, error: "Invalid hero" };

  // Validate starter talent
  if (!starterTalent) {
    return { valid: false, error: "Missing starter talent" };
  }
  if (starterTalent.type !== "starter" || starterTalent.hero !== heroId) {
    return { valid: false, error: "Invalid starter talent" };
  }

  // Validate normal talents
  if (normalTalents.length > 7) {
    return { valid: false, error: "Too many normal talents selected" };
  }
  for (const talent of normalTalents) {
    if (talent.type !== "normal" || talent.hero !== heroId) {
      return { valid: false, error: "Invalid normal talent selected" };
    }
  }

  // Validate ultimate and upgrade
  if (ultimate) {
    if (ultimate.type !== "ultimate" || ultimate.hero !== heroId) {
      return { valid: false, error: "Invalid ultimate ability" };
    }
    if (ultimateUpgrade) {
      if (
        ultimateUpgrade.type !== "ultimate" ||
        ultimateUpgrade.hero !== heroId ||
        ultimateUpgrade.prerequisite !== ultimate.name
      ) {
        return { valid: false, error: "Invalid ultimate upgrade" };
      }
    }
  } else if (ultimateUpgrade) {
    return {
      valid: false,
      error: "Cannot have ultimate upgrade without ultimate",
    };
  }

  return { valid: true };
}
//#endregion

//#region Build serialization helpers

/**
 * Serialise a build into a plain object.
 * @param heroId The ID of the hero for the build.
 * @param starterTalent The starter talent for the build.
 * @param normalTalents The normal talents for the build.
 * @param ultimate The ultimate ability for the build.
 * @param ultimateUpgrade The ultimate upgrade for the build.
 * @returns A plain object representing the build.
 */
export interface SerialisedBuild {
  heroId: string;
  starterTalentId: string;
  normalTalentIds: string[];
  ultimateId?: string;
  ultimateUpgradeId?: string;
}

/**
 * Deserialise a build from a plain object.
 * @param build The plain object representing the build.
 * @returns An object with the hero, talents, and abilities for the build.
 */
export function serialiseBuild(
  heroId: string,
  starterTalent: Talents,
  normalTalents: Talents[],
  ultimate: Abilities | null,
  ultimateUpgrade: Talents | null
): SerialisedBuild {
  return {
    heroId,
    starterTalentId: starterTalent.id,
    normalTalentIds: normalTalents.map((t) => t.id),
    ...(ultimate && { ultimateId: ultimate.id }),
    ...(ultimateUpgrade && { ultimateUpgradeId: ultimateUpgrade.id }),
  };
}

/**
 * Deserialise a build from a plain object.
 * @param build The plain object representing the build.
 * @returns An object with the hero, talents, and abilities for the build.
 */
export function deserialiseBuild(build: SerialisedBuild): {
  hero: Hero | undefined;
  starterTalent: Talents | undefined;
  normalTalents: Talents[];
  ultimate: Abilities | undefined;
  ultimateUpgrade: Talents | undefined;
} {
  const hero = getHero(build.heroId);
  if (!hero)
    return {
      hero: undefined,
      starterTalent: undefined,
      normalTalents: [],
      ultimate: undefined,
      ultimateUpgrade: undefined,
    };

  const starterTalent = hero.talents.find(
    (t) => t.id === build.starterTalentId
  );
  const normalTalents = hero.talents.filter((t) =>
    build.normalTalentIds.includes(t.id)
  );
  const ultimate = hero.abilities.find((a) => a.id === build.ultimateId);
  const ultimateUpgrade = hero.talents.find(
    (t) => t.id === build.ultimateUpgradeId
  );

  return {
    hero,
    starterTalent,
    normalTalents,
    ultimate,
    ultimateUpgrade,
  };
}
//#endregion
