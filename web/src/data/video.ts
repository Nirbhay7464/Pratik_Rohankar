export interface VideoItem {
  id: number;
  title: string;
  videoUrl: string;
  category?: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "Wedding Highlight Film",
    videoUrl: "https://youtu.be/wRYohrYh4JU", // Regular YouTube link
    category: "Wedding"
  },
  {
    id: 2,
    title: "Pre-Wedding Cinematic",
    videoUrl: "https://youtu.be/6wUpqGRPTs4",
    category: "Pre-Wedding"
  },
  {
    id: 3,
    title: "Event Aftermovie",
    videoUrl: "https://youtu.be/glyfRz0isW8",
    category: "Events"
  },
  {
    id: 4,
    title: "Event Aftermovie",
    videoUrl: "https://youtu.be/b3lmgixlmTI",
    category: "Events"
  },
];