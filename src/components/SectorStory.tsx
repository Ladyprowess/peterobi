"use client";

import { useRef, useState } from "react";
import { Figure } from "@/components/Figure";
import { ArrowRight, ChevronDown } from "@/components/Icons";

type StoryTab = "now" | "record";

const tabLabels: Record<StoryTab, { title: string; short: string }> = {
  now: { title: "Nigeria today", short: "The problem" },
  record: { title: "What Obi did in Anambra", short: "His record" },
};

function pairPoints(points: string[]) {
  return Array.from({ length: Math.ceil(points.length / 2) }, (_, index) => ({
    title: points[index * 2],
    detail: points[index * 2 + 1],
  }));
}

export function SectorStory({ sector, now, record, media }: {
  sector: string;
  now: { headline: string; points: string[] };
  record: { headline: string; points: string[] };
  media: { stage: string; image: string; type: "photo" | "video"; title: string; caption: string }[];
}) {
  const [active, setActive] = useState<StoryTab>("now");
  const [openItem, setOpenItem] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const content = active === "now" ? now : record;
  const activeMedia = media.filter((item) => item.stage === active);
  const items = pairPoints(content.points);

  function selectTab(tab: StoryTab) {
    setActive(tab);
    setOpenItem(0);
  }

  function move(direction: number) {
    rail.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      <div role="tablist" aria-label={`${sector} sections`} className="grid grid-cols-2 gap-2 rounded-2xl bg-tint p-1.5">
        {(Object.keys(tabLabels) as StoryTab[]).map((key) => {
          const selected = active === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectTab(key)}
              className={`rounded-xl px-3 py-4 text-left transition sm:px-5 ${selected ? "bg-green text-white shadow-sm" : "text-green-ink hover:bg-white"}`}
            >
              <span className={`block text-[11px] font-extrabold uppercase tracking-wider ${selected ? "text-white/65" : "text-green"}`}>
                {tabLabels[key].short}
              </span>
              <span className="mt-1 block text-sm font-bold sm:text-base">{tabLabels[key].title}</span>
            </button>
          );
        })}
      </div>

      <div key={active} role="tabpanel" className="rise mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <p className="eyebrow text-green">{tabLabels[active].title}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-green-ink sm:text-4xl">
            {content.headline}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          {items.map((item, index) => {
            const expanded = openItem === index;
            const panelId = `${sector.toLowerCase().replaceAll(" ", "-")}-${active}-${index}`;
            return (
              <div key={item.title} className={index > 0 ? "border-t border-line" : ""}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpenItem(index)}
                  className={`flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition sm:px-6 ${expanded ? "bg-tint" : "hover:bg-tint/60"}`}
                >
                  <span className="text-[15px] font-bold leading-relaxed text-green-ink sm:text-base">
                    {item.title}
                  </span>
                  <ChevronDown className={`size-5 shrink-0 text-green transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                </button>

                {expanded && item.detail && (
                  <div id={panelId} className="border-t border-line px-5 py-5 sm:px-6">
                    <p className="border-l-4 border-green pl-4 text-[15px] leading-relaxed text-ink sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {activeMedia.length > 0 && (
        <div className="mt-12 border-t border-line pt-8">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-green">In pictures and videos</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-green-ink">{tabLabels[active].title}</h3>
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
    </section>
  );
}
