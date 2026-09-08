import type { Metadata } from "next";
import { Figure } from "@/components/Figure";
import { mediaItems } from "@/lib/evidence";

export const metadata: Metadata = { title: "Media centre", description: "Photographs and videos documenting Nigeria's challenges and the record being discussed." };

export default function MediaPage() {
  return <>
    <header className="bg-ink text-white"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <p className="eyebrow text-white/55">See the issue</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl">Nigeria, documented.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Images and videos should show what happened, where it happened and when. Every item added here will carry context and its original source.</p>
    </div></header>
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20"><div className="grid gap-6 sm:grid-cols-2">
      {mediaItems.map((item) => <article key={item.title} className="group overflow-hidden rounded-2xl border border-line bg-white">
        <Figure src={item.image} alt="" fallback={item.sector.slice(0, 2).toUpperCase()} aspect="aspect-[16/10]" rounded="rounded-none" />
        <div className="p-6"><div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-green-mid"><span>{item.type}</span><span className="text-line-strong">/</span><span>{item.sector}</span></div>
          <h2 className="mt-3 font-display text-2xl font-semibold text-green-ink">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-soft">{item.description}</p>
          <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-soft">Media collection ready for verified uploads</p>
        </div>
      </article>)}
    </div></section>
  </>;
}
