"use client";

import { useRef, useState } from "react";
import { Figure } from "@/components/Figure";
import { ArrowRight, ChevronDown } from "@/components/Icons";

type StorySection = "now" | "record";

const sectionLabels: Record<StorySection, { title: string; short: string }> = {
  now: { title: "Nigeria today", short: "The problem" },
  record: { title: "What Obi did in Anambra", short: "His record" },
};

export function SectorStory({ sector, now, record, media }: {
  sector: string;
  now: { headline: string; points: string[] };
  record: { headline: string; points: string[] };
  media: { stage: string; image: string; type: "photo" | "video"; title: string; caption: string }[];
}) {
  const [open, setOpen] = useState<StorySection | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const sections = { now, record };

  function move(direction: number) {
    rail.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-5xl space-y-4 px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      {(Object.keys(sectionLabels) as StorySection[]).map((key) => {
        const label = sectionLabels[key];
        const content = sections[key];
        const expanded = open === key;
        const activeMedia = media.filter((item) => item.stage === key);
        const panelId = `${sector.toLowerCase().replaceAll(" ", "-")}-${key}-panel`;

        return (
          <div key={key} className="overflow-hidden rounded-2xl border border-line bg-white">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? null : key)}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-tint sm:px-7 sm:py-6"
            >
              <span>
                <span className="eyebrow text-green">{label.short}</span>
                <span className="mt-1.5 block font-display text-2xl font-semibold text-green-ink sm:text-3xl">
                  {label.title}
                </span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-green">
                <ChevronDown className={`size-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
              </span>
            </button>

            {expanded && (
              <div id={panelId} className="rise border-t border-line px-5 py-7 sm:px-7 sm:py-9">
                <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-green-ink sm:text-4xl">
                  {content.headline}
                </h2>

                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {content.points.map((point) => (
                    <li key={point} className="flex gap-3 py-4 sm:py-5">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-5 shrink-0 rounded-full bg-green" />
                      <span className="text-[15px] leading-relaxed text-ink sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>

                {activeMedia.length > 0 && (
                  <div className="mt-10 border-t border-line pt-8">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="eyebrow text-green">In pictures and videos</p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-green-ink">{label.title}</h3>
                      </div>
                      <div className="hidden gap-2 sm:flex">
                        <button type="button" onClick={() => move(-1)} aria-label="Previous media" className="grid size-10 place-items-center rounded-full border border-line text-green hover:bg-tint">
                          <ArrowRight className="size-4 rotate-180" />
                        </button>
                        <button type="button" onClick={() => move(1)} aria-label="Next media" className="grid size-10 place-items-center rounded-full bg-green text-white hover:bg-green-mid">
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </div>

                    <div ref={rail} className="media-rail mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                      {activeMedia.map((item, index) => (
                        <article key={`${item.title}-${index}`} className="w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white sm:w-[48%] lg:w-[32%]">
                          <Figure src={item.image} alt={item.title} fallback={sector.slice(0, 2).toUpperCase()} aspect="aspect-[4/3]" rounded="rounded-none" />
                          <div className="p-4">
                            <span className="rounded-full bg-tint px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-green">{item.type}</span>
                            <h4 className="mt-3 font-display text-xl font-semibold text-green-ink">{item.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-soft">{item.caption}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
