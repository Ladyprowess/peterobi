import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { candidate, getSector, sectors } from "@/lib/content";
import { ShareRow } from "@/components/Share";
import { StatGrid } from "@/components/Stats";
import { ArrowRight, sectorIcons } from "@/components/Icons";
import { Figure } from "@/components/Figure";

/** Only the eight known issues exist. Anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[sector]">): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: sector.name,
    description: sector.tagline,
    openGraph: { title: `${sector.name} | Obi 2027`, description: sector.tagline },
  };
}

function Block({
  step,
  headline,
  points,
  accent = false,
}: {
  step: string;
  headline: string;
  points: string[];
  accent?: boolean;
}) {
  return (
    <section className={accent ? "bg-tint" : ""}>
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="flex items-baseline gap-3">
          <span className="tnum font-display text-2xl font-semibold text-green">
            {step}
          </span>
          <h2 className="font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            {headline}
          </h2>
        </div>

        <ul className="mt-7 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-6 shrink-0 rounded-full bg-green"
              />
              <span className="text-[16px] leading-relaxed text-ink sm:text-[17px]">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function SectorPage({ params }: PageProps<"/[sector]">) {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const Icon = sectorIcons[sector.icon];
  const i = sectors.findIndex((s) => s.slug === sector.slug);
  const next = sectors[(i + 1) % sectors.length];

  return (
    <>
      {/* Page header ---------------------------------------------------- */}
      <header className="on-green">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <span className="grid size-12 place-items-center rounded-xl bg-white/15 text-white">
              <Icon className="size-6" />
            </span>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {sector.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/90">
              {sector.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/75">
              {sector.intro}
            </p>
          </div>

          <Figure
            src={sector.image}
            alt=""
            fallback={sector.name.slice(0, 2).toUpperCase()}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 30rem, 100vw"
            priority
          />
        </div>
      </header>

      {sector.stats.length > 0 && (
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="-mt-8 rounded-xl border border-line bg-white shadow-sm">
            <StatGrid stats={sector.stats} />
          </div>
        </div>
      )}

      <Block step="01" headline={sector.now.headline} points={sector.now.points} />
      <Block
        step="02"
        headline={sector.record.headline}
        points={sector.record.points}
        accent
      />
      <Block step="03" headline={sector.plan.headline} points={sector.plan.points} />

      {/* Close ---------------------------------------------------------- */}
      <section className="on-green">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8 lg:py-14">
          <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
            {sector.name} is on the ballot on {candidate.electionLabel}.
          </p>
          <ShareRow
            onGreen
            className="mt-7"
            message={`On ${sector.name.toLowerCase()}: what Peter Obi did in Anambra, and what he will do for Nigeria.`}
          />
        </div>
      </section>

      <nav
        aria-label="Next issue"
        className="mx-auto max-w-4xl px-4 py-10 md:px-6 lg:px-8"
      >
        <Link
          href={`/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-xl border-2 border-line p-5 transition-colors duration-100 ease-out hover:border-green hover:bg-tint"
        >
          <span>
            <span className="eyebrow text-green-mid">Next issue</span>
            <span className="mt-1 block font-display text-2xl font-semibold text-green-ink">
              {next.name}
            </span>
          </span>
          <ArrowRight className="size-6 shrink-0 text-green transition-transform duration-150 ease-out group-hover:translate-x-1" />
        </Link>
      </nav>
    </>
  );
}
