import { achievements } from "./AchievementData";
import { AchievementCard } from "./AchievementCard";

export default function AchievementsSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20">
      <h2 className="text-center text-4xl font-black tracking-tight">
        Notable <span className="text-orange">Achievements</span>
      </h2>
      <div className="my-4 h-1 w-16 rounded-full bg-orange" />

      <div className="mt-10 grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`${achievement.title}-${index}`}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
}
