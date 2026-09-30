import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  className?: string;
  /** Which background the logo sits on: light surfaces or dark "ink" surfaces. */
  tone?: "ink" | "onInk";
}

const LOGO_SRC = {
  ink: "/eco-logo-dark.png",
  onInk: "/eco-logo-light.png",
} as const;

/** Official ECOP AVLE S.A.S. wordmark, in its dark and light variants. */
export const EcopavleLogo = ({ className, tone = "ink" }: EcopavleLogoProps) => (
  <img
    src={LOGO_SRC[tone]}
    alt="ECOPAVLE S.A.S."
    width={908}
    height={159}
    className={cn("h-8 w-auto select-none md:h-9", className)}
  />
);

export default EcopavleLogo;
