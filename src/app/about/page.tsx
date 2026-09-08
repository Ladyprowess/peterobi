import type { Metadata } from "next";
import { candidate, caseFor2027, headlineStats, sectors } from "@/lib/content";
import { ShareRow } from "@/components/Share";
import { StatGrid } from "@/components/Stats";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Figure } from "@/components/Figure";

export const metadata: Metadata = {
  title: "Why Obi",
  description:
    "Peter Obi's record in full: who he is, what he built in Anambra, and the case for 2027.",
};

export default function AboutPage() {
  return (
    <>
      <header className="on-green">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <p className="eyebrow text-white/70">The candidate</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {candidate.name}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-white/90">
            {candidate.office}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <div className="-mt-8 rounded-xl border border-line bg-white shadow-sm">
          <StatGrid stats={headlineStats} />
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="flagrule-sm" />
        <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
          Who he is
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-[1fr_18rem] sm:items-start">
          <div className="space-y-5 sm:order-1">
            {candidate.bio.map((p) => (
              <p key={p} className="max-w-prose text-[17px] leading-relaxed text-ink">
                {p}
              </p>
            ))}
          </div>
          <Figure
            src="/images/peter-obi-who-he-is.jpg"
            alt={`${candidate.name} standing against a dark background`}
            fallback="PO"
            aspect="aspect-[2/3]"
            sizes="(min-width: 640px) 18rem, 100vw"
            className="bg-[#111] sm:order-2"
            imageClassName="object-contain"
          />
        </div>

        <dl className="mt-10 grid gap-x-6 gap-y-6 border-t-2 border-line pt-8 sm:grid-cols-2">
          {candidate.facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow text-green-mid">{f.label}</dt>
              <dd className="mt-1.5 text-xl font-bold leading-snug text-green-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-tint">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <div className="flagrule-sm" />
          <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            The case for 2027
          </h2>
          <ul className="mt-7 space-y-4">
            {caseFor2027.map((p) => (
              <li key={p} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-6 shrink-0 rounded-full bg-green"
                />
                <span className="text-[17px] leading-relaxed text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <h2 className="font-display text-3xl leading-tight text-green-ink sm:text-4xl">
          Go deeper, issue by issue
        </h2>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border-2 border-line p-4 transition-colors duration-100 ease-out hover:border-green hover:bg-tint"
              >
                <span className="text-[15px] font-bold text-green-ink">{s.name}</span>
                <ArrowRight className="size-5 shrink-0 text-green transition-transform duration-150 ease-out group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>

        <ShareRow
          className="mt-9"
          message="Peter Obi's record in full, and the case for 2027:"
        />
      </section>
    </>
  );
}
