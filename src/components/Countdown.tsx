"use client";

import { useEffect, useState } from "react";
import { ELECTION_ISO } from "@/lib/content";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function partsUntil(target: number, now: number): Parts {
  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

/** Client only. A server rendered clock would hydrate wrong every time. */
export function Countdown({ onGreen = false }: { onGreen?: boolean }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const target = new Date(ELECTION_ISO).getTime();
    const tick = () => setParts(partsUntil(target, Date.now()));
    const frame = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(id);
    };
  }, []);

  const units: Array<[string, number | undefined]> = [
    ["days", parts?.days],
    ["hours", parts?.hours],
    ["mins", parts?.minutes],
    ["secs", parts?.seconds],
  ];

  const numberCls = onGreen ? "text-white" : "text-green-ink";
  const labelCls = onGreen ? "text-white/70" : "text-soft";
  const skeletonCls = onGreen ? "bg-white/20" : "bg-tint-strong";

  return (
    <div>
      <p className={`eyebrow ${onGreen ? "text-white/70" : "text-green-mid"}`}>
        Election in
      </p>
      <div className="mt-2.5 flex items-end gap-5 sm:gap-7">
        {units.map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span
              className={`tnum font-display text-4xl font-semibold leading-none sm:text-5xl ${numberCls}`}
              style={{ minWidth: "2ch" }}
            >
              {value === undefined ? (
                <span
                  className={`inline-block h-9 w-[2ch] animate-pulse rounded align-bottom sm:h-11 ${skeletonCls}`}
                />
              ) : (
                String(value).padStart(2, "0")
              )}
            </span>
            <span
              className={`mt-1.5 text-[11px] font-bold uppercase tracking-wider ${labelCls}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
