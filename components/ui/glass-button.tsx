"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva("relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/45 bg-white/28 px-4 py-2 text-sm font-medium text-[var(--ink)] shadow-[0_4px_16px_rgba(37,40,43,0.14)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-105 hover:bg-white/48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "", primary: "bg-[var(--ink)] text-white hover:bg-[var(--ink-soft)]", outline: "bg-transparent border-[var(--ink)]/40", ghost: "border-transparent bg-transparent shadow-none hover:bg-white/25" }, size: { default: "h-10", sm: "h-8 px-3 text-xs", lg: "h-12 px-6 text-base", icon: "h-10 w-10 px-0" } }, defaultVariants: { variant: "default", size: "default" } });

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof glassButtonVariants> { asChild?: boolean; }

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(({ className, variant, asChild = false, size, children, ...props }, ref) => {
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  return <Comp className={cn(glassButtonVariants({ variant, size, className }))} ref={ref} {...props}><span className="relative z-10 flex items-center gap-2">{children}</span></Comp>;
});
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
