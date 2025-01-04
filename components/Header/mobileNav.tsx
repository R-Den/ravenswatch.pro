"use client";
import { useState } from "react";
import Link from "next/link";
import { NavigationItem } from "@/lib/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MobileNavigationProps {
  items: NavigationItem[];
  isOpen: boolean;
  onCloseAction: () => void; // Renamed to satisfy Next.js serialization requirements
}

export default function MobileNavigation({
  items,
  isOpen,
  onCloseAction,
}: MobileNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  function toggleExpanded(label: string) {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  }

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t">
      <div className="container py-4">
        <nav className="flex flex-col space-y-6">
          {items.map((item) => (
            <div key={item.href} className="w-full relative">
              <div className="flex flex-col items-center">
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-center"
                  onClick={() => !item.dropdownItems && onCloseAction()}
                >
                  {item.label}
                </Link>
                {item.dropdownItems && (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="absolute right-0 top-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        expandedItems.has(item.label) ? "Collapse" : "Expand"
                      }
                    >
                      {expandedItems.has(item.label) ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {expandedItems.has(item.label) && (
                      <div className="mt-2 flex flex-col items-center space-y-2 w-full">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.href}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-center"
                            onClick={onCloseAction}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
