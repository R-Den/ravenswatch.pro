import { NextResponse } from "next/server";
import SteamAPI from "steamapi";

const API_KEY = process.env.STEAM_API_KEY;
const appID = 2071280;

interface StatsResponse {
  playerCount: number;
  latestPatchDate: string | null;
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  const steam = new SteamAPI(API_KEY);

  try {
    // Fetch both player count and news in parallel
    const [playerStats, newsItems] = await Promise.all([
      steam.getGamePlayers(appID),
      steam.getGameNews(appID, {
        count: 10,
        tags: ["patchnotes"],
      }),
    ]);

    // Find the most recent patch notes
    const latestPatch =
      newsItems.length > 0
        ? new Date(newsItems[0].publishedTimestamp * 1000).toISOString() // Steam returns Unix timestamp
        : null;

    const response: StatsResponse = {
      playerCount: playerStats,
      latestPatchDate: latestPatch,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching Steam stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch Steam stats" },
      { status: 500 },
    );
  }
}
