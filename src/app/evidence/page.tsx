import Link from "next/link";
import type { Metadata } from "next";
import { sectors } from "@/lib/content";
import { ArrowRight, sectorIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "100 Reasons to Vote Peter Obi",
  description: "One hundred practical reasons to consider Peter Obi for president, organised by the problems Nigerians want solved.",
};

export default function EvidencePage() {
  const currentCount = sectors.reduce((total, sector) => total + sector.record.points.length, 0);
  return <>
    <header className="hero-grid on-green overflow-hidden"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <p className="eyebrow text-white/65">The record, made simple</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">100 reasons to vote Peter Obi.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Not one hundred slogans. One hundred things he did, changed, funded, completed or handled in Anambra—and what that record tells us about national leadership.</p></div>
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"><span className="tnum font-display text-5xl font-semibold text-mint">{currentCount}</span><span className="mt-1 block text-xs font-bold uppercase tracking-wider text-white/60">documented reasons added</span><span className="mt-3 block text-sm text-white/85">Building carefully toward 100</span></div></div>
    </div></header>

    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
      <div className="max-w-3xl"><p className="eyebrow text-green">Choose the problem that matters to you</p><h2 className="mt-3 font-display text-3xl text-green-ink sm:text-4xl">Every issue follows the same clear path.</h2><p className="mt-4 leading-relaxed text-soft">Open a topic. Start with what Nigerians face today. Switch to what Peter Obi did about the same problem in Anambra. Then see what that experience would mean for the country.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">{sectors.map((sector, sectorIndex) => { const Icon = sectorIcons[sector.icon]; const start = sectors.slice(0, sectorIndex).reduce((total, item) => total + item.record.points.length, 0) + 1; const end = start + sector.record.points.length - 1; return <Link key={sector.slug} href={`/${sector.slug}`} className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-green hover:shadow-xl hover:shadow-green/5 sm:p-7"><div className="flex items-start justify-between gap-5"><span className="grid size-12 place-items-center rounded-xl bg-tint text-green"><Icon className="size-6" /></span><span className="tnum text-xs font-extrabold uppercase tracking-wider text-soft">Reasons {start}–{end}</span></div><h2 className="mt-6 font-display text-3xl font-semibold text-green-ink">{sector.name}</h2><p className="mt-2 text-sm leading-relaxed text-soft">{sector.concern}</p><div className="mt-6 flex items-center justify-between border-t border-line pt-5"><span className="text-sm font-extrabold text-green">Explore all three tabs</span><ArrowRight className="size-5 text-green transition group-hover:translate-x-1" /></div></Link>; })}</div>
    </section>

    <section className="bg-tint"><div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow text-green">How a reason earns its place</p><h2 className="mt-3 font-display text-3xl text-green-ink">We will not reach 100 by padding the list.</h2></div><div className="grid gap-3 sm:grid-cols-3">{["It must describe a specific action or result.", "It must belong to a real problem Nigerians understand.", "It must have a working source before publication."].map((item, index) => <div key={item} className="rounded-xl bg-white p-5"><span className="tnum text-xs font-extrabold text-green">0{index + 1}</span><p className="mt-3 text-sm font-semibold leading-relaxed text-green-ink">{item}</p></div>)}</div></div></div></section>
  </>;
}
