import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/evidence/projects";

export function ProjectCard({ slug, large = false }: { slug: string; large?: boolean }) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return null;
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10 lift"
    >
      <ProjectVisual slug={project.slug} className={large ? "min-h-80" : "min-h-64"} />
      <div className="flex flex-1 flex-col gap-3 p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge variant={project.label === "DEMONSTRATION" ? "outline" : "default"}>{project.label}</Badge>
          <span className="text-sm text-muted-foreground">{project.industry}</span>
        </div>
        <h3 className="display-item">{project.title}</h3>
        <p className="text-muted-foreground">{project.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-medium">
          View project
          <ArrowRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
