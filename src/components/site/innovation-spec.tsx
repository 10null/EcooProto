import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";
import type { Innovation } from "@/data/innovations";

interface InnovationSpecProps {
  spec: NonNullable<Innovation["spec"]>;
}

/** Technical specification, rendered as an accordion of numbered blocks. */
export const InnovationSpec = ({ spec }: InnovationSpecProps) => {
  const [openCode, setOpenCode] = useState<string | null>(
    spec.blocks[0]?.code ?? null
  );

  return (
    <section className="section-ink texture-grid-ink relative overflow-hidden">
      <div className="shell relative py-16 md:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            tone="onInk"
            eyebrow={spec.label}
            title={spec.title}
            description={spec.reference}
          />
        </Reveal>

        <div className="mt-12 border-t border-ink-border lg:mt-14">
          {spec.blocks.map((block, index) => (
            <Reveal key={block.code} delay={index * 0.03}>
              <details
                open={openCode === block.code}
                onToggle={(event) => {
                  if (event.currentTarget.open) setOpenCode(block.code);
                }}
                className="group border-b border-ink-border"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 transition-colors hover:text-primary-bright md:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="eyebrow text-accent">{block.code}</span>
                    <span className="font-display text-[1.0625rem] font-semibold leading-snug text-ink-foreground md:text-[1.25rem]">
                      {block.title}
                    </span>
                  </span>
                  <ChevronDown className="size-5 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="pb-8 md:pr-16">
                  <div
                    className={cn(
                      block.image &&
                        "grid gap-6 md:grid-cols-[minmax(0,1fr)_260px] md:items-start md:gap-10"
                    )}
                  >
                    <div>
                      {block.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="max-w-[80ch] text-[0.9375rem] leading-relaxed text-ink-muted"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {block.items && (
                        <ul className="flex flex-col gap-5">
                          {block.items.map((item) => (
                            <li
                              key={item.label}
                              className="flex flex-col gap-1.5 border-l-2 border-ink-border pl-4"
                            >
                              <span className="text-[0.9375rem] font-semibold text-ink-foreground">
                                {item.label}
                              </span>
                              {item.text && (
                                <span className="max-w-[80ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                                  {item.text}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {block.image && (
                      <img
                        src={block.image}
                        alt={block.imageAlt ?? ""}
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-lg border border-ink-border bg-ink-800 object-cover"
                      />
                    )}
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSpec;
