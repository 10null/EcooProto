import { FlaskConical, Globe2, HardHat, Recycle } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { credentials } from "@/data/site-content";

const iconMap = {
  hardhat: HardHat,
  globe: Globe2,
  flask: FlaskConical,
  recycle: Recycle,
} as const;

export const CredentialsBand = () => (
  <section
    className="section-ink texture-grid-ink relative overflow-hidden border-y border-ink-border"
    aria-label="Credenciales y capacidades"
  >
    <div className="shell relative py-14 md:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {credentials.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal
              key={item.label}
              delay={index * 0.07}
              className={
                index > 0
                  ? "lg:border-l lg:border-ink-border lg:pl-8"
                  : "lg:pr-8"
              }
            >
              <div className="flex h-full flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-sm border border-ink-strong bg-ink-800">
                  <Icon className="size-[18px] text-primary-bright" />
                </span>
                <h3 className="font-display text-[1.0625rem] font-semibold leading-snug text-ink-foreground">
                  {item.label}
                </h3>
                <p className="max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default CredentialsBand;
