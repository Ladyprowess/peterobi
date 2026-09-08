"use client";

import { useRef, useState } from "react";
import { Figure } from "@/components/Figure";
import { ArrowRight } from "@/components/Icons";

type StoryTab = "now" | "record" | "future";

const tabLabels: Record<StoryTab, { number: string; title: string; short: string }> = {
  now: { number: "01", title: "Nigeria today", short: "The problem" },
  record: { number: "02", title: "What Obi did in Anambra", short: "His record" },
  future: { number: "03", title: "What he would do as president", short: "The national case" },
};

export function SectorStory({
  sector,
  now,
  record,
  future,
  media,
}: {
  sector: string;
  now: { headline: string; points: string[] };
  record: { headline: string; points: string[] };
  future: { headline: string; points: string[] };
  media: { image: string; type: "photo" | "video"; title: string; caption: string }[];
}) {
  const [active, setActive] = useState<StoryTab>("now");
  const rail = useRef<HTMLDivElement>(null);
  const content = active === "now" ? now : active === "record" ? record : future;

  function move(direction: number) {
    rail.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      <div role="tablist" aria-label={`${sector} sections`} className="grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-3">
        {(Object.keys(tabLabels) as StoryTab[]).map((key) => {
          const tab = tabLabels[key];
          const selected = active === key;
          return (
            <button key={key} type="button" role="tab" aria-selected={selected} onClick={() => setActive(key)} className={`flex min-h-20 items-center gap-4 border-b border-line px-5 text-left transition md:border-r md:border-b-0 last:md:border-r-0 ${selected ? "bg-green text-white" : "hover:bg-tint"}`}>
              <span className={`tnum font-display text-2xl font-semibold ${selected ? "text-mint" : "text-green"}`}>{tab.number}</span>
              <span><span className={`block text-[11px] font-extrabold uppercase tracking-wider ${selected ? "text-white/60" : "text-soft"}`}>{tab.short}</span><span className="mt-1 block text-sm font-bold sm:text-[15px]">{tab.title}</span></span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="rise mt-8 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div>
          <p className="eyebrow text-green">{tabLabels[active].title}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-green-ink sm:text-4xl">{content.headline}</h2>
          <p className="mt-4 text-sm leading-relaxed text-soft">Select any tab above to compare today&apos;s reality, the Anambra record and the case for national leadership.</p>
        </div>
        <ol className="space-y-3">
          {content.points.map((point, index) => <li key={point} className="flex gap-4 rounded-xl border border-line bg-white p-4 sm:p-5"><span className="tnum mt-0.5 text-xs font-extrabold text-green">{String(index + 1).padStart(2, "0")}</span><span className="text-[15px] leading-relaxed text-ink sm:text-base">{point}</span></li>)}
        </ol>
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <div className="flex items-end justify-between gap-5"><div><p className="eyebrow text-green">Pictures and videos</p><h2 className="mt-2 font-display text-2xl font-semibold text-green-ink">See the {sector.toLowerCase()} story</h2></div>
          <div className="hidden gap-2 sm:flex"><button onClick={() => move(-1)} aria-label="Previous media" className="grid size-10 place-items-center rounded-full border border-line text-green hover:bg-tint"><ArrowRight className="size-4 rotate-180" /></button><button onClick={() => move(1)} aria-label="Next media" className="grid size-10 place-items-center rounded-full bg-green text-white hover:bg-green-mid"><ArrowRight className="size-4" /></button></div>
        </div>
        <div ref={rail} className="media-rail mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
          {media.map((item, index) => <article key={`${item.title}-${index}`} className="w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white sm:w-[48%] lg:w-[32%]">
            <Figure src={item.image} alt={item.title} fallback={sector.slice(0, 2).toUpperCase()} aspect="aspect-[4/3]" rounded="rounded-none" />
            <div className="p-4"><span className="rounded-full bg-tint px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-green">{item.type}</span><h3 className="mt-3 font-display text-xl font-semibold text-green-ink">{item.title}</h3><p className="mt-2 text-xs leading-relaxed text-soft">{item.caption}</p></div>
          </article>)}
        </div>
        <p className="mt-2 text-xs text-soft">Swipe on mobile. Media remains in review until its source and permission are confirmed.</p>
      </div>
    </section>
  );
}
