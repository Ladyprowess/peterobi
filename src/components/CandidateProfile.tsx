"use client";

import { useState } from "react";
import Link from "next/link";
import { candidate } from "@/lib/content";
import { ArrowRight } from "@/components/Icons";
import { Figure } from "@/components/Figure";

const profiles = {
  obi: {
    name: candidate.name,
    summary:
      "Former Governor of Anambra State · businessman · 2027 presidential candidate",
  },
  kwankwaso: {
    name: candidate.runningMate,
    summary:
      "Former Governor of Kano State · former senator · 2027 vice presidential candidate",
  },
} as const;

type ProfileKey = keyof typeof profiles;

export function CandidateProfile() {
  const [selected, setSelected] = useState<ProfileKey>("obi");
  const profile = profiles[selected];

  return (
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

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow text-green">The candidate</p>
          <div
            className="inline-flex rounded-full border border-line bg-tint p-1"
            aria-label="Choose a candidate"
          >
            {(["obi", "kwankwaso"] as const).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={selected === key}
                onClick={() => setSelected(key)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
                  selected === key
                    ? "bg-green text-white"
                    : "text-green-ink hover:bg-white"
                }`}
              >
                {key === "obi" ? "Peter Obi" : "Kwankwaso"}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[9rem]">
          <h2
            id="profile-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight text-green-ink"
          >
            {profile.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-soft">{profile.summary}</p>

          {selected === "obi" && (
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-green"
            >
              Meet Peter Obi <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
