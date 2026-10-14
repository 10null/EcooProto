import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  /** Surface the logo sits on — controls the wordmark colours. */
  tone?: "ink" | "onInk";
  size?: "md" | "lg";
  className?: string;
}

/** The official mark, cleaned of artefacts and served as optimised WebP. */
const MARK_SRC = "/img/logo-ecopavle-mark2.webp";

const markSize = {
  md: "h-12 md:h-14",
  lg: "h-16 md:h-20",
} as const;

const nameSize = {
  md: "text-[1.125rem] md:text-[1.375rem]",
  lg: "text-[1.5rem] md:text-[1.75rem]",
} as const;

interface WordmarkProps {
  tone: "ink" | "onInk";
  size: "md" | "lg";
}

/** Crisp vector wordmark: "ECOPAVLE" + a smaller "S.A.S.", beside the mark. */
const Wordmark = ({ tone, size }: WordmarkProps) => (
  <span
    className={cn(
      "font-display font-bold leading-none tracking-[-0.02em]",
      nameSize[size],
      tone === "ink" ? "text-primary" : "text-ink-foreground"
    )}
  >
    ECOPAVLE
    <span
      className={cn(
        "ml-1.5 font-sans text-[0.52em] font-semibold tracking-[0.14em]",
        tone === "ink" ? "text-muted-foreground" : "text-ink-muted"
      )}
    >
      S.A.S.
    </span>
  </span>
);

export const EcopavleLogo = ({
  tone = "ink",
  size = "md",
  className,
}: EcopavleLogoProps) => (
  <span
    className={cn("flex select-none items-center gap-3", className)}
    role="img"
    aria-label="ECOPAVLE S.A.S."
  >
    <img
      src={MARK_SRC}
      alt=""
      aria-hidden="true"
      width={320}
      height={360}
      decoding="async"
      className={cn("w-auto shrink-0", markSize[size])}
    />
    <Wordmark tone={tone} size={size} />
  </span>
);

export default EcopavleLogo;
