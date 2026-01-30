import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-card",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-secondary via-secondary to-accent text-white shadow-elevated hover:shadow-[0_14px_42px_-12px_hsl(var(--secondary)_/_0.45)] hover:scale-[1.05] active:scale-[0.98] font-bold border border-white/15 rounded-xl ring-2 ring-secondary/25 hover:ring-secondary/40 ring-offset-2 ring-offset-background transition-all duration-300",
        maroon: "bg-maroon text-maroon-foreground hover:bg-maroon/90 shadow-soft",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-elevated hover:shadow-[0_14px_38px_-8px_rgba(37,211,102,0.5)] hover:scale-[1.05] active:scale-[0.98] font-bold border border-white/25 rounded-xl ring-2 ring-[#25D366]/30 hover:ring-[#25D366]/50 ring-offset-2 ring-offset-background transition-all duration-300",
        outlineWarm: "border-2 border-secondary bg-transparent text-secondary-foreground hover:bg-secondary/10",
        outlineMaroon: "border-2 border-maroon bg-transparent text-maroon hover:bg-maroon hover:text-maroon-foreground",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
