"use client";

import Link from "next/link";
import { useState } from "react";
import { sectors } from "@/lib/content";
import { ArrowRight, Check, sectorIcons } from "./Icons";
import { ShareRow } from "./Share";

const MAX = 3;

/** Pick what you care about, get the pages that answer it. */
export function IssuePicker() {
  const [picked, setPicked] = useState<string[]>([]);

  function toggle(slug: string) {
    setPicked((prev) =>
      prev.includes(slug)
        ? prev.filter((p) => p !== slug)
        : prev.length >= MAX
          ? prev
          : [...prev, slug],
    );
  }

  const chosen = picked
    .map((slug) => sectors.find((s) => s.slug === slug))
    .filter((s): s is (typeof sectors)[number] => Boolean(s));

  const atLimit = picked.length >= MAX;

  return (
    <div className="rounded-2xl border-2 border-green bg-white p-6 sm:p-8">
      <div className="flagrule-sm" />
      <h2 className="mt-4 font-display text-3xl leading-tight text-green-ink sm:text-4xl">
        What matters most to you?
      </h2>
      <p className="mt-2.5 max-w-prose text-[16px] leading-relaxed text-soft">
        Pick up to three. We will take you straight to what Peter Obi did about them
        in Anambra, and what he will do about them for Nigeria.
      </p>

      <fieldset className="mt-6">
        <legend className="sr-only">Choose up to three issues</legend>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {sectors.map((s) => {
            const Icon = sectorIcons[s.icon];
            const on = picked.includes(s.slug);
            const disabled = !on && atLimit;

            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={on}
                disabled={disabled}
                onClick={() => toggle(s.slug)}
                className={`flex min-h-16 items-center gap-3 rounded-xl border-2 p-3.5 text-left transition-[background-color,border-color,opacity] duration-100 ease-out active:translate-y-px ${
                  on
                    ? "border-green bg-tint"
                    : "border-line bg-white hover:border-line-strong"
                } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-lg ${
                    on ? "bg-green text-white" : "bg-tint text-green-mid"
                  }`}
                >
                  {on ? <Check className="size-5" /> : <Icon className="size-5" />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold text-green-ink">
                    {s.name}
                  </span>
                  <span className="block text-[13px] leading-snug text-soft">
                    {s.concern}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {chosen.length > 0 && (
        <div className="rise mt-6 border-t-2 border-line pt-6">
          <p className="eyebrow text-green-mid">Start here</p>
          <ol className="mt-3 space-y-2.5">
            {chosen.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex min-h-14 items-center gap-3.5 rounded-xl bg-green-deep p-4 transition-colors duration-100 ease-out hover:bg-green"
                >
                  <span className="tnum grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-[14px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-bold text-white">
                      {s.name}
                    </span>
                    <span className="block text-[13px] leading-snug text-white/75">
                      {s.tagline}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-white transition-transform duration-150 ease-out group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ol>

          <ShareRow
            className="mt-5"
            message={`I care about ${chosen
              .map((s) => s.name.toLowerCase())
              .join(", ")}. This is what Peter Obi will do about it:`}
          />
        </div>
      )}
    </div>
  );
}
