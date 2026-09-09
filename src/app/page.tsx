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
      <section className="hero-grid on-green overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-white/70">An independent citizens&apos; campaign &middot; {candidate.electionLabel}</p>

              <h1 className="mt-4 font-display text-[2.75rem] font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
                Nigeria can work.<br /><span className="text-mint">The record says so.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                See what Nigeria is going through, what Peter Obi delivered in
                Anambra, and what he says he will do
                differently as president.
              </p>

              <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-white">
                Look at the record. Then decide.
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
              className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-black/15 sm:p-4"
            >
              <Figure
                src="/images/obi-kwankwaso-hero.png"
                alt="Peter Obi and Rabiu Musa Kwankwaso"
                fallback="PO · RMK"
                aspect="aspect-square"
                sizes="(min-width: 1024px) 26rem, 100vw"
                priority
                className="mb-0"
              />
              <div className="p-4 sm:p-5"><p className="eyebrow text-green">The candidate</p><h2 id="profile-heading" className="mt-2 font-display text-3xl font-semibold leading-tight text-green-ink">{candidate.name}</h2><p className="mt-2 text-sm leading-relaxed text-soft">Former Governor of Anambra State · businessman · 2027 presidential candidate</p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-green">Meet Peter Obi <ArrowRight className="size-4" /></Link></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          {[{ k: "THE REALITY", v: "Nigeria today", h: "/nigeria-today" }, { k: "THE RECORD", v: "What Obi has done", h: "/evidence" }, { k: "THE CHOICE", v: "A better Nigeria", h: "/#issues" }].map((item) => <Link key={item.k} href={item.h} className="group bg-ink px-6 py-7 transition hover:bg-green-deep"><span className="eyebrow text-white/45">{item.k}</span><span className="mt-2 flex items-center justify-between font-display text-2xl">{item.v}<ArrowRight className="size-5 transition group-hover:translate-x-1" /></span></Link>)}
        </div>
      </section>

      {/* Headline numbers ---------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="flagrule-sm" />
        <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
          Eight years in Anambra
        </h2>
        <div className="mt-8 rounded-xl border border-line">
          <StatGrid stats={headlineStats} />
        </div>
      </section>

      {/* Issue picker --------------------------------------------------- */}
      <section id="issues" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-14 md:px-6 lg:px-8">
        <IssuePicker />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-3xl bg-gold-wash p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div><p className="eyebrow text-gold-deep">A record Nigerians can judge</p><h2 className="mt-3 max-w-2xl font-display text-3xl text-green-ink sm:text-4xl">The problems are clear. What matters now is who has shown that he can solve them.</h2><p className="mt-4 max-w-2xl leading-relaxed text-soft">Choose an issue and compare Nigeria today with Peter Obi&apos;s record in Anambra.</p></div>
          <Link href="/evidence" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white lg:mt-0">See why Obi <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      {/* All issues ----------------------------------------------------- */}
      <section className="bg-tint">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
          <div className="flagrule-sm" />
          <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            The record
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
