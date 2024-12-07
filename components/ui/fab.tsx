import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Position = "bottom-right" | "bottom-left" | "top-right" | "top-left";
type Size = "default" | "sm" | "lg";

interface FloatingActionButtonProps extends Omit<ButtonProps, "size"> {
  position?: Position;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const positionClasses: Record<Position, string> = {
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
};

const sizeClasses: Record<Size, string> = {
  default: "h-14 w-14",
  sm: "h-10 w-10",
  lg: "h-16 w-16",
};

const FloatingActionButton = ({
  children,
  className,
  position = "bottom-right",
  size = "default",
  variant = "default",
  ...props
}: FloatingActionButtonProps) => {
  return (
    <Button
      className={cn(
        "fixed rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
        positionClasses[position],
        sizeClasses[size],
        className,
      )}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default FloatingActionButton;
