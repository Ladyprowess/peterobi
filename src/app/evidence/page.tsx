import type { Metadata } from "next";
import { evidence, sources } from "@/lib/evidence";
import { SourceLink } from "@/components/SourceLink";

export const metadata: Metadata = { title: "Evidence library", description: "Inspect the sources behind claims about Nigeria, Peter Obi's record and his stated plans." };
const labels = { record: "Verified record", "nigeria-now": "Nigeria today", proposal: "Stated proposal" };

export default function EvidencePage() {
  return <>
    <header className="on-green"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <p className="eyebrow text-white/65">Trust is part of the campaign</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">Do not take our word for it. Check the record.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">Every serious claim should lead to a document, dataset, speech or independently reported record. This library will grow as the campaign grows.</p>
    </div></header>
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20"><div className="grid gap-5 lg:grid-cols-2">
      {evidence.map((item) => <article key={item.id} className="rounded-2xl border border-line bg-white p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-green px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">{labels[item.status]}</span><span className="text-xs font-bold uppercase tracking-wider text-soft">{item.sector}</span></div>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-green-ink sm:text-3xl">{item.claim}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-soft">{item.context}</p>
        <div className="mt-6 space-y-2">{item.sourceIds.map((id) => <SourceLink key={id} source={sources[id]} />)}</div>
      </article>)}
    </div></section>
  </>;
}
