import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { ProjectTile } from "@/components/site/project-tile";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import {
  portfolioProjects,
  projectCategories,
  type PortfolioProject,
} from "@/data/site-content";

interface ProjectsGalleryProps {
  projects?: PortfolioProject[];
  showFilters?: boolean;
}

const arrowClass =
  "absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/25 bg-ink-900/[0.6] text-ink-foreground backdrop-blur-sm transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:size-12";

/** Grid of executed projects that opens a photo gallery with arrow navigation. */
export const ProjectsGallery = ({
  projects = portfolioProjects,
  showFilters = false,
}: ProjectsGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    projectCategories[0]
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [videoProject, setVideoProject] = useState<PortfolioProject | null>(
    null
  );
  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filtered = useMemo(
    () =>
      showFilters && activeCategory !== projectCategories[0]
        ? projects.filter((project) => project.category === activeCategory)
        : projects,
    [projects, showFilters, activeCategory]
  );

  const slides = useMemo(
    () =>
      filtered.flatMap((project) =>
        project.images.map((photo) => ({ project, photo }))
      ),
    [filtered]
  );

  const total = slides.length;
  const current = slides[slideIndex];

  const go = useCallback(
    (delta: number) => {
      if (total === 0) return;
      setSlideIndex((index) => (index + delta + total) % total);
    },
    [total]
  );

  const openGallery = (project: PortfolioProject) => {
    const index = slides.findIndex(
      (slide) => slide.project.title === project.title
    );
    if (index < 0) return;
    setSlideIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const active = thumbsRef.current?.querySelector<HTMLElement>(
      `[data-thumb="${slideIndex}"]`
    );
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [isOpen, slideIndex]);

  const projectSlides = useMemo(
    () =>
      current
        ? slides.filter(
            (slide) => slide.project.title === current.project.title
          )
        : [],
    [slides, current]
  );

  const photoIndex = current
    ? projectSlides.findIndex(
        (slide) => slide.photo.full === current.photo.full
      ) + 1
    : 0;

  const countFor = (category: string) =>
    category === projectCategories[0]
      ? projects.length
      : projects.filter((project) => project.category === category).length;

  return (
    <>
      {showFilters && (
        <Reveal delay={0.08}>
          <div
            role="group"
            aria-label="Filtrar proyectos por línea de trabajo"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.875rem] font-semibold transition-[background-color,border-color,color] duration-150",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {category}
                  <span
                    className={cn(
                      "text-[0.75rem] font-medium",
                      isActive
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground/70"
                    )}
                  >
                    {countFor(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05} className="h-full">
            <ProjectTile
              project={project}
              onOpen={openGallery}
              onPlay={setVideoProject}
            />
          </Reveal>
        ))}
      </div>

      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-ink-900/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />

          <DialogPrimitive.Content
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") go(1);
              if (event.key === "ArrowLeft") go(-1);
            }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = event.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1);
              touchStartX.current = null;
            }}
            className="fixed left-1/2 top-1/2 z-[70] flex h-[94vh] w-[min(1200px,94vw)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-ink-border bg-ink-900 text-ink-foreground shadow-lg focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:h-[90vh]"
          >
            {current && (
              <>
                <div className="flex items-start justify-between gap-4 border-b border-ink-border px-5 py-4 md:px-6">
                  <div className="min-w-0">
                    <span className="eyebrow text-accent">
                      {current.project.category}
                    </span>
                    <DialogPrimitive.Title className="mt-1.5 font-display text-[1rem] font-semibold leading-snug text-ink-foreground md:text-[1.25rem]">
                      {current.project.title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                      Galería de fotos del proyecto {current.project.title}.
                    </DialogPrimitive.Description>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <span className="eyebrow hidden text-ink-muted sm:inline">
                      {photoIndex} / {projectSlides.length}
                    </span>
                    <DialogPrimitive.Close
                      aria-label="Cerrar galería"
                      className="flex size-11 items-center justify-center rounded-sm border border-ink-strong text-ink-foreground transition-colors duration-150 hover:border-primary-bright/60 hover:text-primary-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <X className="size-5" />
                    </DialogPrimitive.Close>
                  </div>
                </div>

                <div className="relative flex-1 bg-black/50">
                  <motion.img
                    key={current.photo.full}
                    src={current.photo.full}
                    decoding="async"
                    alt={`${current.project.title} — foto ${photoIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 h-full w-full object-contain"
                  />

                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Foto anterior"
                    className={cn(arrowClass, "left-3 md:left-5")}
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Foto siguiente"
                    className={cn(arrowClass, "right-3 md:right-5")}
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>

                <div className="border-t border-ink-border px-5 py-4 md:px-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[0.875rem] text-ink-muted">
                      {current.project.year
                        ? `${current.project.year} · ${current.project.location}`
                        : current.project.location}
                    </p>
                    <p className="eyebrow text-ink-muted">
                      {photoIndex} de {projectSlides.length} de esta obra
                    </p>
                  </div>

                  <div
                    ref={thumbsRef}
                    className="mt-3 flex gap-2 overflow-x-auto pb-1"
                  >
                    {slides.map((slide, index) => (
                      <button
                        key={slide.photo.full}
                        type="button"
                        data-thumb={index}
                        onClick={() => setSlideIndex(index)}
                        aria-label={`Ver ${slide.project.title}, foto ${index + 1}`}
                        aria-current={index === slideIndex}
                        className={cn(
                          "relative h-14 w-20 shrink-0 overflow-hidden rounded-sm border transition-[opacity,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                          index === slideIndex
                            ? "border-accent opacity-100"
                            : "border-ink-border opacity-60 hover:opacity-100"
                        )}
                      >
                        <img
                          src={slide.photo.thumb}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          width={200}
                          height={150}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {/* Reproductor del video del proyecto, sin salir de la página */}
      <DialogPrimitive.Root
        open={videoProject !== null}
        onOpenChange={(open) => {
          if (!open) setVideoProject(null);
        }}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-ink-900/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />

          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[70] flex h-[86vh] w-[min(1100px,94vw)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-ink-border bg-ink-900 text-ink-foreground shadow-lg focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
            <div className="flex items-start justify-between gap-4 border-b border-ink-border px-5 py-4 md:px-6">
              <div className="min-w-0">
                <span className="eyebrow text-accent">
                  {videoProject?.category}
                </span>
                <DialogPrimitive.Title className="mt-1.5 font-display text-[1rem] font-semibold leading-snug text-ink-foreground md:text-[1.25rem]">
                  {videoProject?.title}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Video del proyecto {videoProject?.title}
                </DialogPrimitive.Description>
              </div>

              <DialogPrimitive.Close
                aria-label="Cerrar video"
                className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-ink-strong text-ink-foreground transition-colors duration-150 hover:border-primary-bright/60 hover:text-primary-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X className="size-5" />
              </DialogPrimitive.Close>
            </div>

            <div className="flex-1 bg-black">
              {videoProject?.videoUrl && (
                <video
                  key={videoProject.videoUrl}
                  src={videoProject.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  Tu navegador no puede reproducir este video.
                </video>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-border px-5 py-3 md:px-6">
              <p className="text-[0.875rem] text-ink-muted">
                {videoProject?.year
                  ? `${videoProject.year} · ${videoProject.location}`
                  : videoProject?.location}
              </p>
              <p className="text-[0.8125rem] text-ink-muted">
                También puedes abrirlo en{" "}
                <a
                  href={videoProject?.videoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-primary-bright underline underline-offset-4"
                >
                  pantalla completa
                </a>
              </p>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default ProjectsGallery;
