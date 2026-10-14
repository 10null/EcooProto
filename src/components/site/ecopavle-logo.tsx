import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  /** Surface the logo sits on — controls the wordmark colours. */
  tone?: "ink" | "onInk";
  size?: "md" | "lg";
  /** "inline" puts the name beside the mark, "stacked" below it (as in the original lockup). */
  layout?: "inline" | "stacked";
  className?: string;
}

/** The official mark, traced from the brand file and served as optimised WebP. */
const MARK_SRC = "/img/logo-ecopavle.webp";

const markSize = {
  md: "h-11 md:h-12",
  lg: "h-14 md:h-16",
} as const;

const nameSize = {
  md: "text-[1.0625rem] md:text-[1.1875rem]",
  lg: "text-[1.375rem] md:text-[1.5rem]",
} as const;

interface WordmarkProps {
  tone: "ink" | "onInk";
  size: "md" | "lg";
  className?: string;
}

/** Crisp vector wordmark: "ECOPAVLE" + a smaller "S.A.S.", as in the brand lockup. */
const Wordmark = ({ tone, size, className }: WordmarkProps) => (
  <span
    className={cn(
      "font-display font-bold leading-none tracking-[-0.02em]",
      nameSize[size],
      tone === "ink" ? "text-primary" : "text-ink-foreground",
      className
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
  layout = "inline",
  className,
}: EcopavleLogoProps) => (
  <span
    className={cn(
      "flex select-none",
      layout === "inline" ? "items-center gap-3" : "flex-col items-center gap-2",
      className
    )}
    role="img"
    aria-label="ECOPAVLE S.A.S."
  >
    <img
      src={MARK_SRC}
      alt=""
      aria-hidden="true"
      width={200}
      height={214}
      decoding="async"
      className={cn("w-auto shrink-0", markSize[size])}
    />
    <Wordmark tone={tone} size={size} />
  </span>
);

export default EcopavleLogo;
