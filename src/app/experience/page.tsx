import type { Metadata } from "next";
import { ExperienceView } from "@/views/experience-view";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <ExperienceView />;
}
