import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  className?: string;
  /** Which background the logo sits on: light surfaces or dark "ink" surfaces. */
  tone?: "ink" | "onInk";
}

const LOGO_SRC = {
  ink: "/logo-ecopavle-dark.png",
  onInk: "/logo-ecopavle-light.png",
} as const;

/** Official ECOP AV LE S.A.S. lockup, in its dark and light variants. */
export const EcopavleLogo = ({ className, tone = "ink" }: EcopavleLogoProps) => (
  <img
    src={LOGO_SRC[tone]}
    alt="ECOPAV LE S.A.S."
    width={139}
    height={86}
    className={cn("h-11 w-auto select-none self-start md:h-12", className)}
  />
);

export default EcopavleLogo;
