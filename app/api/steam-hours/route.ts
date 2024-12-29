import { NextResponse } from "next/server";
import SteamAPI from "steamapi";
import { getSteamId } from "@/lib/steam-mappings";

// This will be available server-side in Next.js API routes
const API_KEY = process.env.STEAM_API_KEY;
const appID = 2071280;
export async function GET(request: Request) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }
  const { searchParams } = new URL(request.url);
  const alias = searchParams.get("alias");

  if (!alias) {
    return NextResponse.json({ error: "No alias provided" }, { status: 400 });
  }

  const steamId = getSteamId(alias);

  if (!steamId) {
    return NextResponse.json({ error: "Invalid alias" }, { status: 400 });
  }
  const steam = new SteamAPI(API_KEY);
  try {
    const stats = await steam.getUserOwnedGames(steamId);
    const game = stats.find((game) => game.game.id === appID);
    if (game) {
      const playtime = game.minutes / 60;
      return NextResponse.json({ time: playtime.toFixed(0) });
    }
  } catch (error) {
    console.error("Error fetching Steam stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch Steam stats" },
      { status: 500 },
    );
  }
}
