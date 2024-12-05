"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { Menu, Mail, Github } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { links } from "@/lib/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/Heroes", label: "Heroes" },
    { href: "/Items", label: "Items" },
    { href: "/Build", label: "Build" },
    { href: "/About", label: "About" },
  ];
  const socialLinks = [
    {
      href: links.githubUrl,
      icon: <Github size={20} />,
      condition: true,
    },
    {
      href: `mailto:${links.email}`,
      icon: <Mail size={20} />,
      condition: true,
    },
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

        <div className="flex items-center gap-1 flex-shrink-0 md:absolute md:right-4">
          <div className="flex items-center gap-2">
            <ModeToggle />
            {/* Separator Line - Only visible on desktop */}
            <div className="hidden md:block w-px h-6 bg-border" />
            {/* Social Links - Only visible on desktop */}
            <div className="hidden md:flex items-center space-x-3 ml-2">
              {socialLinks.map(
                (link) =>
                  link.condition && (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.icon}
                    </a>
                  ),
              )}
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t flex justify-center">
          <div className="container py-4">
            <nav className="flex flex-col items-center space-y-4">
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
              <div className="flex space-x-3 pt-2">
                {socialLinks.map(
                  (link) =>
                    link.condition && (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.icon}
                      </a>
                    ),
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
