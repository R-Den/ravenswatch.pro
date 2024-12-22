"use client";

import { getAllHeroes } from "@/lib/registry";
import BuildCreator from "./build-creator";
import MobileBuildCreator from "./build-creator-mobile";
import { useEffect, useState } from "react";

export default function BuildPage() {
  const [isMobile, setIsMobile] = useState(false);
  const heroes = getAllHeroes();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="min-h-screen py-8">
      {isMobile ? (
        <MobileBuildCreator heroes={heroes} />
      ) : (
        <BuildCreator heroes={heroes} />
      )}
    </main>
  );
}
