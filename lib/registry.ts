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

// Basic data access
export function getHero(heroId: string): Hero | undefined {
  return registry.heroes[heroId];
}

export function getAllHeroes(): Hero[] {
  return Object.values(registry.heroes);
}

export function getAllMagicalObjects(): Magical_Objects[] {
  return Object.values(registry.magical_objects);
}
// Talent helpers
export function getHeroTalents(heroId: string): Talents[] {
  return registry.heroes[heroId]?.talents || [];
}

export function getHeroTalentsByType(
  heroId: string,
  type: Talents["type"],
): Talents[] {
  return getHeroTalents(heroId).filter((talent) => talent.type === type);
}

export function getHeroStarterTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "starter");
}

export function getHeroNormalTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "normal");
}

export function getHeroUltimateTalents(heroId: string): Talents[] {
  return getHeroTalentsByType(heroId, "ultimate");
}

// Ability helpers
export function getHeroAbilities(heroId: string): Abilities[] {
  return registry.heroes[heroId]?.abilities || [];
}

export function getHeroAbilityByType(
  heroId: string,
  type: Abilities["type"],
): Abilities | undefined {
  return getHeroAbilities(heroId).find((ability) => ability.type === type);
}

export function getHeroUltimateAbilities(heroId: string): Abilities[] {
  return getHeroAbilities(heroId).filter(
    (ability) => ability.type === "ultimate",
  );
}

// Build validation helpers
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

// Build serialization helpers
export interface SerialisedBuild {
  heroId: string;
  starterTalentId: string;
  normalTalentIds: string[];
  ultimateId?: string;
  ultimateUpgradeId?: string;
}

export function serialiseBuild(
  heroId: string,
  starterTalent: Talents,
  normalTalents: Talents[],
  ultimate: Abilities | null,
  ultimateUpgrade: Talents | null,
): SerialisedBuild {
  return {
    heroId,
    starterTalentId: starterTalent.id,
    normalTalentIds: normalTalents.map((t) => t.id),
    ...(ultimate && { ultimateId: ultimate.id }),
    ...(ultimateUpgrade && { ultimateUpgradeId: ultimateUpgrade.id }),
  };
}

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
    (t) => t.id === build.starterTalentId,
  );
  const normalTalents = hero.talents.filter((t) =>
    build.normalTalentIds.includes(t.id),
  );
  const ultimate = hero.abilities.find((a) => a.id === build.ultimateId);
  const ultimateUpgrade = hero.talents.find(
    (t) => t.id === build.ultimateUpgradeId,
  );

  return {
    hero,
    starterTalent,
    normalTalents,
    ultimate,
    ultimateUpgrade,
  };
}
