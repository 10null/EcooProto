import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "ink" | "onInk";
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  tone = "ink",
  align = "left",
  className,
  children,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      align === "center" && "items-center text-center",
      className
    )}
  >
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-8 rounded-full bg-gradient-gold" />
      <span
        className={cn(
          "eyebrow",
          tone === "ink" ? "text-accent-strong" : "text-accent"
        )}
      >
        {eyebrow}
      </span>
    </div>
    <h2
      className={cn(
        "display-l max-w-[22ch]",
        align === "center" && "mx-auto max-w-[26ch]",
        tone === "ink" ? "text-foreground" : "text-ink-foreground"
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "max-w-[62ch] text-[1.0625rem] leading-relaxed",
          tone === "ink" ? "text-muted-foreground" : "text-ink-muted"
        )}
      >
        {description}
      </p>
    )}
    {children}
  </div>
);

export default SectionHeading;
