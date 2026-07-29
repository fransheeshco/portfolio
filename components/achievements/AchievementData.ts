export type Achievement = {
  title: string;
  date: string;
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Achievement Title",
    date: "Month Year",
    // Add the image to public/achievements, then set:
    // image: "/achievements/file-name.jpg",
  },
  {
    title: "Achievement Title",
    date: "Month Year",
  },
];
