"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationDropdown } from "./navigationDropdown";
import { NavigationItem } from "@/lib/types";

interface DesktopNavigationProps {
  items: NavigationItem[];
}

export default function DesktopNavigation({ items }: DesktopNavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="hidden md:flex flex-1 justify-center absolute left-1/2 transform -translate-x-1/2">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center items-center">
          {items.map((item) => (
            <NavigationMenuItem
              key={item.href}
              onMouseEnter={() =>
                item.dropdownItems && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
              {item.dropdownItems && (
                <NavigationDropdown
                  items={item.dropdownItems}
                  isOpen={openDropdown === item.label}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                />
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
