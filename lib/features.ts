import { IconType } from "@/components/features/FeatureIcon";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

export const features: Feature[] = [
  {
    icon: "clipboard-list",
    title: "Personalized Routines",
    description: "Create custom workouts tailored to your lifting goals and preferences.",
    delay: 0,
  },
  {
    icon: "activity",
    title: "Seamless Tracking",
    description: "Track sets, reps, and weights with an easy-to-use interface designed for serious lifters.",
    delay: 1,
  },
  {
    icon: "repeat",
    title: "Supersets & Drop Sets",
    description: "Add advanced techniques effortlessly for a truly customized workout experience.",
    delay: 2,
  },
  {
    icon: "scan-text",
    title: "Scan Your Handwritten Workouts & Notes",
    description: "Easily scan and upload your handwritten workouts and logs directly into the app.",
    delay: 3,
  },
  {
    icon: "table",
    title: "Sync with Google Sheets (coming soon)",
    description: "Sync progress with your Google Sheets for ultimate tracking flexibility.",
    delay: 4,
  },
  {
    icon: "bar-chart",
    title: "Comprehensive Weekly Stats",
    description: "View past workouts, muscle group summaries, and weekly progress charts.",
    delay: 5,
  },
];