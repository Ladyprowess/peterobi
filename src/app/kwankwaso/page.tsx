import type { Metadata } from "next";
import Link from "next/link";
import { Figure } from "@/components/Figure";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Rabiu Musa Kwankwaso",
  description:
    "The background and public record of Senator Rabiu Musa Kwankwaso, former Governor of Kano State.",
};

const roles = [
  { label: "Governor of Kano State", value: "1999 to 2003 and 2011 to 2015" },
  { label: "Federal service", value: "Minister of Defence, 2003 to 2007" },
  { label: "National Assembly", value: "Senator for Kano Central, 2015 to 2019" },
  { label: "Profession", value: "Civil engineer and public servant" },
];

const record = [
  {
    title: "Education",
    text: "His administrations expanded public education in Kano, supported scholarship programmes and established new state owned institutions, including the university now known as Aliko Dangote University of Science and Technology and Northwest University, Kano.",
  },
  {
    title: "Skills and opportunity",
    text: "His government created training institutions focused on technical skills and practical employment for young people and women across Kano State.",
  },
  {
    title: "Infrastructure",
    text: "His second administration invested in roads, flyovers, drainage projects and new housing developments across Kano.",
  },
  {
    title: "National experience",
    text: "Beyond Kano, he has served in the House of Representatives, as Minister of Defence and as the senator representing Kano Central.",
  },
];

export default function KwankwasoPage() {
  return (
    <>
      <header className="on-green">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <p className="eyebrow text-white/70">The running mate</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Senator Rabiu Musa Kwankwaso
          </h1>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-white/90">
            Engineer · two term Governor of Kano State · former Defence Minister · former Senator
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[20rem_1fr] lg:px-8 lg:py-16">
        <Figure
          src="/images/kwankwaso.jpg"
          alt="Senator Rabiu Musa Kwankwaso"
          fallback="RMK"
          aspect="aspect-[4/5]"
          sizes="(min-width: 1024px) 20rem, 100vw"
          className="bg-green-deep"
        />

        <div>
          <div className="flagrule-sm" />
          <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            Who he is
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink">
            <p>
              Rabiu Musa Kwankwaso is a civil engineer and Nigerian public servant whose career spans state government, the National Assembly and the federal cabinet.
            </p>
            <p>
              He governed Kano State twice, first from 1999 to 2003 and again from 2011 to 2015. He later represented Kano Central in the Senate and was a presidential candidate in the 2023 election.
            </p>
            <p>
              His political base grew through the Kwankwasiyya movement, with education, scholarships, skills training and public infrastructure at the centre of his record in Kano.
            </p>
          </div>

          <dl className="mt-9 grid gap-6 border-t-2 border-line pt-8 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.label}>
                <dt className="eyebrow text-green-mid">{role.label}</dt>
                <dd className="mt-1.5 text-lg font-bold leading-snug text-green-ink">
                  {role.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-tint">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <div className="flagrule-sm" />
          <h2 className="mt-5 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
            His public record
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {record.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-2xl text-green-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <h2 className="font-display text-3xl text-green-ink">Sources</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <li>
            <a className="group flex items-center justify-between rounded-xl border border-line p-4 font-bold text-green hover:border-green" href="https://www.reuters.com/world/africa/nigeria-opposition-alliance-falters-two-leading-figures-quit-clouding-2027-unity-2026-05-05/" target="_blank" rel="noreferrer">
              Reuters profile context <ArrowRight className="size-4" />
            </a>
          </li>
          <li>
            <a className="group flex items-center justify-between rounded-xl border border-line p-4 font-bold text-green hover:border-green" href="https://guardian.ng/politics/kwankwasos-strides-in-education-as-kano-governor/" target="_blank" rel="noreferrer">
              Education record in Kano <ArrowRight className="size-4" />
            </a>
          </li>
        </ul>

        <Link href="/" className="mt-9 inline-flex items-center gap-2 font-extrabold text-green">
          Return to the candidates <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
