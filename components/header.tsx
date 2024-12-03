"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/Heroes", label: "Heroes" },
    { href: "/Build", label: "Build" },
    { href: "/Items", label: "Items" },
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center items-center">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href={item.href}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-2 flex-shrink-0 md:absolute md:right-4">
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
