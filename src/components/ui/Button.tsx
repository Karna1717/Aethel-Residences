import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none text-sm font-medium transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gold text-dark hover:bg-gold-hover": variant === "primary",
            "bg-white text-dark hover:bg-gray-200": variant === "secondary",
            "border border-border bg-transparent text-white hover:bg-white hover:text-dark": variant === "outline",
            "bg-transparent text-white hover:text-gold": variant === "ghost",
            "h-9 px-4 py-2": size === "sm",
            "h-12 px-8 py-3 tracking-wide": size === "md",
            "h-14 px-10 py-4 text-base tracking-widest uppercase": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
