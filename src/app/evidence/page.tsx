import Link from "next/link";
import type { Metadata } from "next";
import { sectors } from "@/lib/content";
import { ArrowRight, sectorIcons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Why Peter Obi",
  description: "See what Peter Obi did in Anambra State and why his leadership matters for Nigeria.",
};

export default function EvidencePage() {
  return <>
    <header className="hero-grid on-green overflow-hidden"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <p className="eyebrow text-white/65">Leadership we have seen before</p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">Look at the problems. Then look at his record.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Nigeria needs more than another promise. Choose any issue and see what Nigerians face today, what Peter Obi did about it in Anambra and what the same approach would mean for the country.</p>
    </div></header>

    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
      <div className="max-w-3xl"><p className="eyebrow text-green">What matters to you?</p><h2 className="mt-3 font-display text-3xl text-green-ink sm:text-4xl">Start with the Nigeria you want to see.</h2></div>
      <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{sectors.map((sector) => { const Icon = sectorIcons[sector.icon]; return <Link key={sector.slug} href={`/${sector.slug}`} className="group flex h-full min-h-64 flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-green hover:shadow-xl hover:shadow-green/5 sm:p-7"><span className="grid size-12 place-items-center rounded-xl bg-tint text-green"><Icon className="size-6" /></span><h2 className="mt-6 font-display text-3xl font-semibold text-green-ink">{sector.name}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{sector.concern}</p><span className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm font-extrabold text-green">See what can change <ArrowRight className="size-5 transition group-hover:translate-x-1" /></span></Link>; })}</div>
    </section>

    <section className="on-green"><div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20"><h2 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">Nigeria has seen the cost of poor leadership. We can choose differently.</h2><Link href="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-green-deep">Meet Peter Obi <ArrowRight className="size-4" /></Link></div></section>
  </>;
}
