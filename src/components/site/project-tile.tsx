import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/site-content";

interface ProjectTileProps {
  project: PortfolioProject;
}

/** Single executed-project tile. Video entries link out to the recording. */
export const ProjectTile = ({ project }: ProjectTileProps) => {
  const content = (
    <>
      {project.image ? (
        <img
          src={project.image}
          crossOrigin="anonymous"
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.05]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-ink" />
      )}

      <div className="absolute inset-0 bg-gradient-ink-fade" />

      {project.videoUrl && (
        <span className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-ink-foreground/30 bg-ink-900/60 text-ink-foreground backdrop-blur-sm transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
          <Play className="size-4" />
        </span>
      )}

      <div className="relative p-5 md:p-6">
        <span className="eyebrow text-accent">{project.category}</span>
        <h3 className="mt-2 font-display text-[1.125rem] font-semibold leading-snug text-ink-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-[0.8125rem] text-ink-muted">
          {project.year
            ? `${project.year} · ${project.location}`
            : project.location}
        </p>
      </div>
    </>
  );

  const baseClass =
    "group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg border border-ink-border bg-ink-900";

  if (project.videoUrl) {
    return (
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Ver video del proyecto ${project.title}`}
        className={cn(
          baseClass,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
      >
        {content}
      </a>
    );
  }

  return <article className={baseClass}>{content}</article>;
};

export default ProjectTile;
