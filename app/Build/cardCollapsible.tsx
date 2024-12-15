import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    selectedHero?: { name: string; id: string } | null;
    autoCollapse?: boolean;
  }
>(({ className, children, selectedHero, autoCollapse, ...props }, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (autoCollapse && selectedHero) {
      setIsCollapsed(true);
    }
  }, [selectedHero, autoCollapse]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        isCollapsed ? "h-16" : "h-auto", // Apply a tiny height when collapsed
        className,
      )}
      {...props}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          {isCollapsed && selectedHero && (
            <div className="w-8 h-8 mr-4">
              <Image
                src={`/heroes/thumbnail/${selectedHero.id}.png`}
                width={32}
                height={32}
                alt={selectedHero.name}
                className="rounded"
              />
            </div>
          )}
          <div className="text-2xl font-semibold leading-none tracking-tight text-center flex-1">
            Select Hero
          </div>
          <button onClick={toggleCollapse} className="ml-2 text-sm">
            {isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
      </div>
      {!isCollapsed && <div className="p-4">{children}</div>}
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
