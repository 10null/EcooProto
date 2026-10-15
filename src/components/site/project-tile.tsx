import { Images, Maximize2, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/site-content";

interface ProjectTileProps {
  project: PortfolioProject;
  /** When provided, the tile opens the project gallery instead of being static. */
  onOpen?: (project: PortfolioProject) => void;
  /** When provided, video projects play inline instead of leaving the site. */
  onPlay?: (project: PortfolioProject) => void;
}

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Single executed-project tile. */
export const ProjectTile = ({ project, onOpen, onPlay }: ProjectTileProps) => {
  const cover = project.images[0]?.card ?? null;
  const isVideo = Boolean(project.videoUrl);
  const canOpen = Boolean(onOpen) && project.images.length > 0;

  const content = (
    <>
      {cover ? (
        <img
          src={cover}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width={640}
          height={480}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-engineered group-hover:scale-[1.05]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-ink" />
      )}

      <div className="absolute inset-0 bg-gradient-ink-fade" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
        <span className="rounded-full border border-ink-strong bg-ink-900/[0.6] px-3 py-1.5 text-[0.75rem] font-medium text-ink-foreground backdrop-blur-sm">
          {project.images.length > 0
            ? `${project.images.length} ${project.images.length === 1 ? "foto" : "fotos"}`
            : "Video"}
        </span>
        <span className="flex size-9 items-center justify-center rounded-full border border-ink-foreground/25 bg-ink-900/[0.6] text-ink-foreground backdrop-blur-sm transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
          {isVideo ? (
            <Play className="size-4" />
          ) : (
            <Maximize2 className="size-4" />
          )}
        </span>
      </div>

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
        {(canOpen || (isVideo && onPlay)) && (
          <span className="mt-3 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary-bright opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {isVideo ? <Play className="size-4" /> : <Images className="size-4" />}
            {isVideo ? "Ver video aquí" : "Ver galería"}
          </span>
        )}
      </div>
    </>
  );

  const baseClass =
    "group relative flex min-h-[320px] w-full flex-col justify-end overflow-hidden rounded-lg border border-ink-border bg-ink-900 text-left";

  if (isVideo) {
    if (onPlay) {
      return (
        <button
          type="button"
          onClick={() => onPlay(project)}
          aria-label={`Reproducir el video del proyecto ${project.title}`}
          className={cn(baseClass, focusClass)}
        >
          {content}
        </button>
      );
    }

    return (
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Ver video del proyecto ${project.title}`}
        className={cn(baseClass, focusClass)}
      >
        {content}
      </a>
    );
  }

  if (canOpen) {
    return (
      <button
        type="button"
        onClick={() => onOpen?.(project)}
        aria-label={`Ver la galería del proyecto ${project.title}`}
        className={cn(baseClass, focusClass)}
      >
        {content}
      </button>
    );
  }

  return <article className={baseClass}>{content}</article>;
};

export default ProjectTile;
