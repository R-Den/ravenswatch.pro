"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/Header/theme-toggle";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllHeroes } from "@/lib/registry";
import SearchBar from "@/components/Header/SearchBar";
import GithubRef from "./githubRef";
import DesktopNavigation from "./desktopNav";
import MobileNavigation from "./mobileNav";
import { NavigationItem } from "@/lib/types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroes = getAllHeroes();

  const navigationItems: NavigationItem[] = [
    { href: "/", label: "Home" },
    {
      href: "/Heroes",
      label: "Heroes",
      dropdownItems: heroes.map((hero) => ({
        id: hero.id,
        label: hero.name,
        href: `/Heroes/${hero.id}`,
      })),
    },
    { href: "/Items", label: "Items" },
    {
      href: "/Builds",
      label: "Builds",
      dropdownItems: [
        { id: "general", label: "General Builds", href: "/Builds/popular" },
        { id: "featured", label: "Featured Builds", href: "/Builds/featured" },
        { id: "recent", label: "Recent Builds", href: "/Builds/recent" },
        // Add more build-related items as needed
      ],
    },
    { href: "/Builder", label: "Builder" },
    { href: "/About", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/rw_logo.png"
            alt="Ravenswatch Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-foreground">
            Ravenswatch.pro
          </span>
        </Link>

        <DesktopNavigation items={navigationItems} />

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-2 flex-shrink-0 md:absolute md:right-4">
          <GithubRef />
          <SearchBar />
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileNavigation
        items={navigationItems}
        isOpen={isMenuOpen}
        onCloseAction={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
