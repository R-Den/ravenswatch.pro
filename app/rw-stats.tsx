"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Stats {
  playerCount: number;
  latestPatchDate: string | null;
}

export const RwStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/steam-stats`);
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (error) {
        console.error("Error loading Steam stats:", error);
        setError("Failed to load game statistics");
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return (
      <Card className="bg-red-50/5">
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg blur-xl" />
      <Card className="relative bg-background/80 backdrop-blur-sm border-2 border-transparent transition-all duration-500 hover:border-primary/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground/90 transition-colors duration-300 group-hover:text-primary">
            Ravenswatch Stats
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:translate-x-2">
              <span className="text-lg text-foreground/75">
                Current Active Players:
              </span>
              <span className="text-lg font-medium text-primary">
                {stats?.playerCount ?? "Loading..."}
              </span>
            </div>
            <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:translate-x-2">
              <span className="text-lg text-foreground/75">
                Last Patch Date:
              </span>
              <span className="text-lg font-medium text-primary">
                {stats?.latestPatchDate
                  ? new Date(stats.latestPatchDate).toLocaleDateString()
                  : "No patch notes found"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RwStats;
