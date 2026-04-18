import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        "[--duration:40s] [--gap:1rem] gap-[var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
        // 🧠 GPU isolation (prevents theme-toggle reset flicker)
        "[transform:translateZ(0)]"
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={`marquee-${i}`}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            {
              "animate-marquee flex-row will-change-transform": !vertical,
              "animate-marquee-vertical flex-col will-change-transform": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            }
          )}
          // 🧠 extra stability layer (prevents repaint freeze on theme toggle)
          style={{
            transform: "translate3d(0,0,0)",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}