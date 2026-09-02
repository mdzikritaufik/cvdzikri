import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, PROJECT_SLUGS } from "@/data/content";
import { ProjectDetailView } from "@/views/project-detail-view";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.en.find((p) => p.slug === slug);
  return { title: project ? `${project.code} — ${project.name}` : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!PROJECT_SLUGS.includes(slug as (typeof PROJECT_SLUGS)[number])) {
    notFound();
  }
  return <ProjectDetailView slug={slug} />;
}
