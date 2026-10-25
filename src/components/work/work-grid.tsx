"use client";

import Link from "next/link";
import { useState } from "react";
import { FolderOpenIcon } from "lucide-react";
import { PROJECTS, WORK_FILTERS, matchesFilter, type WorkFilter } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { ProjectCard } from "@/components/evidence/project-card";

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const projects = PROJECTS.filter((project) => matchesFilter(project, filter));

  return (
    <div className="flex flex-col gap-10">
      <div className="-mx-5 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(value) => value && setFilter(value as WorkFilter)}
          variant="outline"
          spacing={2}
          aria-label="Filter work"
          className="w-max"
        >
          {WORK_FILTERS.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              className="h-10 rounded-full px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {projects.length ? (
        <ul className="grid gap-5 md:grid-cols-2" aria-live="polite">
          {projects.map((project, index) => (
            <li key={project.slug} className={index === 0 && projects.length % 2 === 1 ? "md:col-span-2" : undefined}>
              <ProjectCard slug={project.slug} large={index === 0 && projects.length % 2 === 1} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty className="rounded-2xl border border-dashed py-20" aria-live="polite">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpenIcon />
            </EmptyMedia>
            <EmptyTitle>Nothing published here yet</EmptyTitle>
            <EmptyDescription>
              Case studies appear here once client work is complete and approved for publication.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" className="rounded-full" onClick={() => setFilter("all")}>
              Show all work
            </Button>
            <Button asChild variant="link">
              <Link href="/get-started?path=project">Discuss a project</Link>
            </Button>
          </EmptyContent>
        </Empty>
      )}
    </div>
  );
}
