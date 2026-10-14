import { cn } from "@/lib/utils";

interface EcopavleLogoProps {
  className?: string;
}

/** Official ECOP AV LE S.A.S. mark (the "E" leaf globe). */
export const EcopavleLogo = ({ className }: EcopavleLogoProps) => (
  <img
    src="/logo-ecopavle-mark.png"
    alt="ECOPAV LE S.A.S."
    width={336}
    height={360}
    className={cn("h-12 w-auto select-none self-start md:h-14", className)}
  />
);

export default EcopavleLogo;
