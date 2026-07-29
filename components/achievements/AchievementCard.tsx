import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Achievement } from "./AchievementData";

export function AchievementCard({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <Card className="group h-full rounded-lg border-orange/10 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]">
      <CardContent className="pt-0">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md bg-orange/5">
          {achievement.image ? (
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-orange/60">
              <ImageIcon className="size-9" aria-hidden="true" />
              <span className="text-xs font-semibold">Achievement image</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardHeader className="mt-auto">
        <CardTitle className="text-lg font-bold transition-colors group-hover:text-orange">
          {achievement.title}
        </CardTitle>
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <CalendarDays className="size-4 text-orange" aria-hidden="true" />
          {achievement.date}
        </p>
      </CardHeader>
    </Card>
  );
}
