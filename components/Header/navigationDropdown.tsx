import { DropdownItem } from "@/lib/types";
import Link from "next/link";

interface NavigationDropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function NavigationDropdown({
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: NavigationDropdownProps) {
  return (
    <div
      className={`absolute mt-2 w-48 bg-background border border-border rounded shadow-lg transition-all duration-300 ease-in-out transform ${
        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      } origin-top`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="relative overflow-hidden bg-gradient-to-r from-primary to-transparent bg-[length:0%_100%] bg-no-repeat transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_100%] cursor-pointer"
          >
            <Link
              href={item.href}
              className="block px-4 py-2 relative z-10 text-foreground transition-colors duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
