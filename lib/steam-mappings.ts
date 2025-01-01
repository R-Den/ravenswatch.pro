const steamIdMap = {
  whattheshuck: process.env.STEAM_ID_WHATTHESHUCK,
  rden: process.env.STEAM_ID_RDEN,
  miet: process.env.STEAM_ID_MIET,
  jinariadne: process.env.STEAM_ID_JINARIADNE,
} as const;

type SteamAlias = keyof typeof steamIdMap;

export const getSteamId = (alias: string): string | null => {
  return steamIdMap[alias as SteamAlias] || null;
};
