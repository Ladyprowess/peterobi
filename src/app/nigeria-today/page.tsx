import Link from "next/link";
import type { Metadata } from "next";
import { sectors } from "@/lib/content";
import { ArrowRight, sectorIcons } from "@/components/Icons";

export const metadata: Metadata = { title: "Nigeria today", description: "A sourced account of the problems Nigerians are living through and the choices before the country in 2027." };

export default function NigeriaTodayPage() {
  return <>
    <header className="on-green"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <p className="eyebrow text-white/65">The case for change</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">Before asking for another term, government must answer for this one.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">This page focuses on outcomes—not insults, rumours or edited clips. Prices, security, schools, hospitals, roads, debt and the daily experience of Nigerians are the test.</p>
    </div></header>
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sectors.map((sector) => { const Icon = sectorIcons[sector.icon]; return <Link key={sector.slug} href={`/${sector.slug}`} className="group rounded-2xl border border-line p-6 transition hover:-translate-y-0.5 hover:border-green hover:shadow-lg hover:shadow-green/5">
        <span className="grid size-11 place-items-center rounded-xl bg-tint text-green"><Icon className="size-6" /></span><h2 className="mt-5 font-display text-2xl font-semibold text-green-ink">{sector.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-soft">{sector.now.points[0]}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green">Inspect the issue <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
      </Link>; })}
    </div></section>
  </>;
}
