import Link from "next/link";
import { candidate, headlineStats, sectors } from "@/lib/content";
import { Figure } from "@/components/Figure";
import { Countdown } from "@/components/Countdown";
import { IssuePicker } from "@/components/IssuePicker";
import { ShareRow } from "@/components/Share";
import { StatGrid } from "@/components/Stats";
import { ArrowRight, sectorIcons } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="on-green">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-white/70">
                {candidate.partyShort} &middot; {candidate.electionLabel}
              </p>

              <h1 className="mt-4 font-display text-[2.75rem] font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
                A New Nigeria is POssible.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Peter Obi governed Anambra for eight years. He took its schools from
                26th in the country to 1st, took its health system from no accredited
                institution to polio free, built 800 km of roads that came with a
                maintenance guarantee, and still left money in the treasury.
              </p>

              <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-white">
                He did it for one state; he will do it for the country.
              </p>

              <div className="mt-10 border-t border-white/20 pt-8">
                <Countdown onGreen />
              </div>

              <ShareRow
                onGreen
                className="mt-8"
                message="A New Nigeria is POssible. Here is what Peter Obi actually did, sector by sector:"
              />
            </div>

            {/* Profile ------------------------------------------------- */}
            <aside
              aria-labelledby="profile-heading"
              className="rounded-2xl bg-white p-6 sm:p-7"
            >
              <Figure
                src={candidate.portrait}
                alt={`Portrait of ${candidate.name}`}
                fallback="PO"
                aspect="aspect-square"
                sizes="(min-width: 1024px) 26rem, 100vw"
                priority
                className="mb-6"
              />

              <h2
                id="profile-heading"
                className="font-display text-3xl font-semibold leading-tight text-green-ink"
              >
                {candidate.name}
              </h2>
              <p className="mt-1.5 text-[14px] font-medium leading-snug text-soft">
                {candidate.office}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-t-2 border-line pt-6">
                {candidate.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="eyebrow text-green-mid">{f.label}</dt>
                    <dd className="mt-1 text-[15px] font-bold leading-snug text-green-ink">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/about"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green px-5 text-[15px] font-bold text-white transition-colors duration-100 ease-out hover:bg-green-mid active:translate-y-px"
              >
                Read his full record
                <ArrowRight className="size-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Headline numbers ---------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="flagrule-sm" />
        <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
          Eight years in Anambra, in four numbers
        </h2>
        <div className="mt-8 rounded-xl border border-line">
          <StatGrid stats={headlineStats} />
        </div>
      </section>

      {/* Issue picker --------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6 lg:px-8">
        <IssuePicker />
      </section>

      {/* All issues ----------------------------------------------------- */}
      <section className="bg-tint">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
          <div className="flagrule-sm" />
          <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            The record, issue by issue
          </h2>
          <p className="mt-2.5 max-w-prose text-[16px] leading-relaxed text-soft">
            Every page follows the same three questions: where Nigeria stands today,
            what Peter Obi did in Anambra, and what he will do as president.
          </p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => {
              const Icon = sectorIcons[s.icon];
              return (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-transparent bg-white transition-colors duration-100 ease-out hover:border-green"
                  >
                    <Figure
                      src={s.image}
                      alt=""
                      fallback={s.name.slice(0, 2).toUpperCase()}
                      aspect="aspect-[16/9]"
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                      rounded="rounded-none"
                    />
                    <span className="mt-5 ml-6 grid size-11 place-items-center rounded-lg bg-tint text-green">
                      <Icon className="size-6" />
                    </span>
                    <span className="mt-4 px-6 font-display text-2xl font-semibold leading-tight text-green-ink">
                      {s.name}
                    </span>
                    <span className="mt-2 flex-1 px-6 text-[14px] leading-relaxed text-soft">
                      {s.tagline}
                    </span>
                    <span className="mt-4 mb-6 inline-flex items-center gap-1.5 px-6 text-[14px] font-bold text-green">
                      See the record
                      <ArrowRight className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.1] text-green-ink sm:text-5xl">
          One state proved it. Now the country.
        </h2>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-soft">
          Nigeria has had promises for decades. Peter Obi has a record. Send this to
          the people still deciding, and vote on {candidate.electionLabel}.
        </p>
        <ShareRow
          className="mt-7"
          message="Nigeria has had promises for decades. Peter Obi has a record. See it here:"
        />
      </section>
    </>
  );
}
