//#region Imports
import {
  Hero,
  Talents,
  Abilities,
  Magical_Objects,
  HeroBuild,
  GeneralBuild,
} from "./types";
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
import { aladdin_builds } from "./builds/aladdin";
// import { beowulf_builds } from "./builds/beowulf";
// import { carmilla_builds } from "./builds/carmilla";
// import { geppetto_builds } from "./builds/geppetto";
// import { melusine_builds } from "./builds/melusine";
// import { piper_builds } from "./builds/piper";
// import { scarlet_builds } from "./builds/scarlet";
// import { snow_queen_builds } from "./builds/snow_queen";
// import { wukong_builds } from "./builds/wukong";
import { generalBuilds } from "./builds/generalBuilds";
//#endregion

// Hero Section
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
  hero_builds: {
    [aladdin.id]: aladdin_builds,
    // [beowulf.id]: beowulf_builds,
    // [carmilla.id]: carmilla_builds,
    // [geppetto.id]: geppetto_builds,
    // [melusine.id]: melusine_builds,
    // [piper.id]: piper_builds,
    // [scarlet.id]: scarlet_builds,
    // [snow_queen.id]: snow_queen_builds,
    // [wukong.id]: wukong_builds,
  },
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
  type: Talents["type"],
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
  type: Abilities["type"],
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
    (ability) => ability.type === "ultimate",
  );
}

export const talentRegistry = new Map<string, Talents>();
export const magicalObjectRegistry = new Map<string, Magical_Objects>();

// Utility functions for safe lookups
// export function getTalent(id: string): Talents | undefined {
//   return talentRegistry.get(id);
// }

export function getMagicalObject(id: string): Magical_Objects | undefined {
  return registry.magical_objects[id];
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
  ultimateUpgrade: Talents | null,
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

//#region Build helpers
/**
 * Get all builds for a specific hero
 * @param heroId The ID of the hero to retrieve builds for
 * @returns Array of builds for the hero, or undefined if hero not found
 */
export function getHeroBuilds(heroId: string): HeroBuild[] | undefined {
  return registry.hero_builds[heroId];
}

/**
 * Get a specific build for a hero by name
 * @param heroId The ID of the hero
 * @param buildName The name of the build (will be converted to slug format)
 * @returns The build object if found, undefined otherwise
 */
export function getHeroBuildByName(
  heroId: string,
  buildName: string,
): HeroBuild | undefined {
  const builds = getHeroBuilds(heroId);
  if (!builds) return undefined;

  const formattedBuildName = buildName.toLowerCase().replace(/\s+/g, "-");
  return builds.find(
    (build) =>
      build.name.toLowerCase().replace(/\s+/g, "-") === formattedBuildName,
  );
}

/**
 * Get all hero builds across all heroes
 * @returns Array of all hero builds with their corresponding hero IDs
 */
export function getAllHeroBuilds(): { heroId: string; builds: HeroBuild[] }[] {
  return Object.entries(registry.hero_builds).map(([heroId, builds]) => ({
    heroId,
    builds,
  }));
}

/**
 * Get all builds across all heroes and all general builds
 * @returns Array containing all hero builds and general builds
 */
export function getAllBuilds(): (HeroBuild | GeneralBuild)[] {
  // Get all hero builds and flatten them into a single array
  const heroBuilds = Object.entries(registry.hero_builds).flatMap(
    ([_, builds]) => builds,
  );

  // Combine hero builds with general builds
  return [...heroBuilds, ...generalBuilds];
}

/**
 * Format a build name into a URL-friendly slug
 * @param name The build name to format
 * @returns URL-friendly slug version of the name
 */
export function formatBuildName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
