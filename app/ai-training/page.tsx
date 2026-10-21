import type { Metadata } from "next";
import TrainingDashboard from "./training-dashboard";

export const metadata: Metadata = {
  title: "Learn AI with Abi | A&K Dynamics",
  description: "Beginner-friendly AI training with AbiCode Lab, powered by A&K Dynamics. Explore six practical modules and contact Abi to enroll.",
  alternates: { canonical: "/ai-training" },
  openGraph: {
    title: "Learn AI with Abi | A&K Dynamics",
    description: "Practical AI skills for work, business, and everyday life. No IT background needed.",
    url: "/ai-training",
    type: "website",
  },
};

export default function AITrainingPage() {
  return <TrainingDashboard />;
}
