import Link from "next/link";
import { candidate, sectors } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md bg-green font-display text-lg font-semibold leading-none text-white"
          >
            PO
          </span>
          <span className="hidden font-display text-lg font-semibold leading-tight text-green-ink sm:block">
            Obi 2027
          </span>
        </Link>

        <nav
          aria-label="Issues"
          className="-mx-2 flex min-w-0 flex-1 gap-0.5 overflow-x-auto px-2"
        >
          {sectors.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="shrink-0 rounded-md px-2.5 py-2 text-[13px] font-semibold text-soft transition-colors duration-100 ease-out hover:bg-tint hover:text-green-mid"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/about"
          className="hidden shrink-0 rounded-md bg-green px-4 py-2.5 text-[13px] font-bold text-white transition-colors duration-100 ease-out hover:bg-green-mid active:translate-y-px sm:block"
        >
          Why Obi
        </Link>
      </div>
      <div className="flagrule" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="flagrule" />
      <div className="on-green">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
            {candidate.slogan}
          </p>
          <p className="mt-3 text-[15px] font-semibold text-white/90">
            {candidate.short} and {candidate.runningMate.replace("Senator ", "")}.{" "}
            {candidate.partyShort}. {candidate.electionLabel}.
          </p>

          <nav aria-label="All issues" className="mt-8 border-t border-white/20 pt-8">
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="inline-flex min-h-10 items-center text-[14px] font-medium text-white/85 underline decoration-white/30 underline-offset-4 transition-colors duration-100 ease-out hover:text-white hover:decoration-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-8 max-w-prose border-t border-white/20 pt-6 text-[12px] leading-relaxed text-white/70">
            An independent project by supporters. Not published, funded or authorised
            by Peter Obi, the Nigeria Democratic Congress, or any campaign
            organisation.
          </p>
        </div>
      </div>
    </footer>
  );
}
