import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  className?: string;
  /** Colour treatment of the wordmark. */
  tone?: "ink" | "onInk";
  showSas?: boolean;
}

/** Original brand mark: a green globe carrying a stylised "e". */
export const EcopavleLogo = ({
  className,
  tone = "ink",
  showSas = true,
}: EcopavleLogoProps) => (
  <span className={cn("flex items-center gap-2.5", className)}>
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className="h-9 w-9 shrink-0 drop-shadow-sm"
    >
      <defs>
        <linearGradient id="ecopavle-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(100 48% 51%)" />
          <stop offset="100%" stopColor="hsl(123 46% 30%)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#ecopavle-mark)" />
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="hsl(155 18% 8% / 0.18)"
        strokeWidth="1"
      />
      <path
        d="M28.4 24.2a9.6 9.6 0 1 1 .1-8.9"
        fill="none"
        stroke="hsl(140 20% 98%)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M13.6 20h13.2"
        fill="none"
        stroke="hsl(140 20% 98%)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
    <span className="flex items-baseline gap-1.5">
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold leading-none tracking-[-0.03em]",
          tone === "ink" ? "text-foreground" : "text-ink-foreground"
        )}
      >
        eco
        <span className="text-primary">pavle</span>
      </span>
      {showSas && (
        <span
          className={cn(
            "font-mono text-[0.6rem] font-medium uppercase leading-none tracking-[0.14em]",
            tone === "ink" ? "text-muted-foreground" : "text-ink-muted"
          )}
        >
          S.A.S
        </span>
      )}
    </span>
  </span>
);

export default EcopavleLogo;
