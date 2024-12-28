// lib/build-url.ts
import { Hero, Talents, BuildSlot, Abilities } from "@/lib/types";
import {
  getAllHeroes,
  getAllMagicalObjects,
  getHeroUltimateAbilities,
} from "@/lib/registry";

class BuildEncoder {
  private static readonly SECTION_SEPARATOR = "-";
  private static readonly BLANK = "_";

  private static encodeUltimate(ability: Abilities | null): string {
    if (!ability) return this.BLANK;
    // Check if it's ultimate1 or ultimate2 based on the ID
    const isFirstUltimate = ability.id.endsWith("ultimate1");
    return `u${isFirstUltimate ? "0" : "1"}`;
  }

  private static findUltimateByEncoding(
    hero: Hero,
    encoded: string,
  ): Abilities | undefined {
    if (encoded === this.BLANK || encoded.length !== 2 || encoded[0] !== "u") {
      return undefined;
    }
    const ultimateIndex = encoded[1] === "0" ? 0 : 1;
    const ultimates = getHeroUltimateAbilities(hero.id);
    return ultimates[ultimateIndex];
  }

  private static findUpgradeByEncoding(
    hero: Hero,
    encoded: string,
    selectedUltimate: Abilities | undefined,
  ): Talents | undefined {
    if (!selectedUltimate || encoded === this.BLANK || encoded.length !== 2) {
      return undefined;
    }

    // Find the upgrade talent that matches both the encoding and the prerequisite
    return hero.talents.find(
      (t) =>
        t.encoding_id === encoded &&
        t.type === "ultimate" &&
        t.prerequisite === selectedUltimate.name,
    );
  }

  static encodeBuild(
    hero: Hero | null,
    buildSlots: BuildSlot[],
    alternativeTalents: BuildSlot[],
    selectedItems: Map<string, number>,
  ): string {
    if (!hero) return "";
    const parts: string[] = [];

    // Build main section (hero + talents)
    let mainSection = hero.encoding_id;

    // Get starter talent
    const starter = buildSlots.find((slot) => slot.type === "starter")?.content;
    mainSection += starter ? (starter as Talents).encoding_id : this.BLANK;

    // Get ultimate
    const ultimate = buildSlots.find(
      (slot) => slot.type === "ultimate",
    )?.content;
    mainSection += this.encodeUltimate(ultimate as Abilities | null);

    // Get ultimate upgrade
    const upgrade = buildSlots.find(
      (slot) => slot.type === "ultimate-upgrade",
    )?.content;
    mainSection += upgrade ? (upgrade as Talents).encoding_id : this.BLANK;

    // Get core talents
    const coreTalents = buildSlots
      .filter((slot) => slot.type === "normal" && slot.content)
      .map((slot) => (slot.content as Talents).encoding_id)
      .join("");
    mainSection += coreTalents;

    parts.push(mainSection);

    // Always push alternative talents section, even if empty
    const altTalents = alternativeTalents
      .filter((slot) => slot.content)
      .map((slot) => (slot.content as Talents).encoding_id)
      .join("");
    parts.push(altTalents);

    // Encode items
    if (selectedItems.size > 0) {
      const itemParts: string[] = [];
      Array.from(selectedItems).forEach(([itemId, quantity]) => {
        if (typeof itemId !== "string" || typeof quantity !== "number") return;
        const item = getAllMagicalObjects().find((i) => i.id === itemId);
        if (item?.encoding_id) {
          const validQuantity = Math.max(1, Math.min(9, Math.floor(quantity)));
          itemParts.push(
            `${item.encoding_id}${validQuantity > 1 ? validQuantity : ""}`,
          );
        }
      });
      if (itemParts.length > 0) {
        parts.push(itemParts.join(""));
      }
    }

    return parts.join(this.SECTION_SEPARATOR);
  }

  static decodeBuild(encoded: string): {
    hero: Hero | null;
    buildSlots: BuildSlot[];
    alternativeTalents: BuildSlot[];
    selectedItems: Map<string, number>;
  } {
    const INITIAL_BUILD_SLOTS: BuildSlot[] = [
      { id: "starter", type: "starter", content: null },
      { id: "core-1", type: "normal", content: null },
      { id: "core-2", type: "normal", content: null },
      { id: "core-3", type: "normal", content: null },
      { id: "core-4", type: "normal", content: null },
      { id: "ultimate", type: "ultimate", content: null },
      { id: "core-5", type: "normal", content: null },
      { id: "core-6", type: "normal", content: null },
      { id: "core-7", type: "normal", content: null },
      { id: "ultimate-upgrade", type: "ultimate-upgrade", content: null },
    ];

    if (!encoded || typeof encoded !== "string") {
      return {
        hero: null,
        buildSlots: INITIAL_BUILD_SLOTS,
        alternativeTalents: [],
        selectedItems: new Map(),
      };
    }

    const sections = encoded.split(this.SECTION_SEPARATOR);
    const [mainSection, altSection, itemSection] = sections;
    if (!mainSection) {
      return {
        hero: null,
        buildSlots: INITIAL_BUILD_SLOTS,
        alternativeTalents: [],
        selectedItems: new Map(),
      };
    }

    const buildSlots: BuildSlot[] = [...INITIAL_BUILD_SLOTS];
    const alternativeTalents: BuildSlot[] = [];
    const selectedItems = new Map<string, number>();

    // Decode hero
    const heroChar = mainSection[0];
    const hero = getAllHeroes().find((h) => h.encoding_id === heroChar) || null;

    if (!hero) return { hero, buildSlots, alternativeTalents, selectedItems };

    let pos = 1;

    // Decode starter talent
    if (mainSection[pos] !== this.BLANK) {
      const starterTalent = hero.talents.find(
        (t) => t.encoding_id === mainSection[pos],
      );
      if (starterTalent) {
        const starterSlot = buildSlots.find((slot) => slot.type === "starter");
        if (starterSlot) starterSlot.content = starterTalent;
      }
    }
    pos++;

    // Decode ultimate ability
    let selectedUltimate: Abilities | undefined;
    if (mainSection[pos] === "u") {
      const ultimateEncoding = mainSection.slice(pos, pos + 2);
      selectedUltimate = this.findUltimateByEncoding(hero, ultimateEncoding);
      if (selectedUltimate) {
        const ultimateSlot = buildSlots.find(
          (slot) => slot.type === "ultimate",
        );
        if (ultimateSlot) ultimateSlot.content = selectedUltimate;
      }
      pos += 2;
    } else if (mainSection[pos] === this.BLANK) {
      pos++;
    }

    // Decode ultimate upgrade
    if (mainSection[pos] !== this.BLANK) {
      const upgradeEncoding = mainSection.slice(pos, pos + 2);
      if (selectedUltimate) {
        const upgrade = this.findUpgradeByEncoding(
          hero,
          upgradeEncoding,
          selectedUltimate,
        );
        if (upgrade) {
          const upgradeSlot = buildSlots.find(
            (slot) => slot.type === "ultimate-upgrade",
          );
          if (upgradeSlot) upgradeSlot.content = upgrade;
        }
      }
      pos += 2;
    } else {
      pos++;
    }

    // Decode core talents
    while (pos < mainSection.length - 1) {
      const talentId = mainSection.slice(pos, pos + 2);
      const talent = hero.talents.find((t) => t.encoding_id === talentId);
      if (talent && talent.type === "normal") {
        const coreSlot = buildSlots.find(
          (slot) => slot.type === "normal" && !slot.content,
        );
        if (coreSlot) coreSlot.content = talent;
      }
      pos += 2;
    }

    // Decode alternative talents
    if (altSection) {
      for (let i = 0; i + 1 < altSection.length; i += 2) {
        const talentId = altSection.slice(i, i + 2);
        const talent = hero.talents.find((t) => t.encoding_id === talentId);
        if (talent) {
          alternativeTalents.push({
            id: `alt-${i / 2}`,
            type: "normal",
            content: talent,
          });
        }
      }
    }

    // Decode items
    if (itemSection) {
      let itemPos = 0;
      while (itemPos + 2 < itemSection.length) {
        const itemId = itemSection.slice(itemPos, itemPos + 3);
        const item = getAllMagicalObjects().find(
          (i) => i.encoding_id === itemId,
        );
        if (item) {
          const quantityChar = itemSection[itemPos + 3];
          const quantity =
            quantityChar && /^\d$/.test(quantityChar)
              ? parseInt(quantityChar)
              : 1;
          selectedItems.set(item.id, quantity);
          itemPos += quantityChar && /^\d$/.test(quantityChar) ? 4 : 3;
        } else {
          itemPos += 3;
        }
      }
    }

    return { hero, buildSlots, alternativeTalents, selectedItems };
  }
}

export default BuildEncoder;
