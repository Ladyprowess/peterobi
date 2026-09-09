import type { Stat } from "@/lib/content";

/**
 * The numbers, given room to land. Big green figures on white, with the
 * starting point struck through beside them where there is one.
 *
 * The cell dividers are the parent background showing through a 1px gap, so
 * any cell without a stat in it reads as an empty box. The column count
 * therefore has to match the number of stats exactly, and a trailing odd stat
 * spans the full width on mobile rather than leaving a hole beside it.
 */

// Written out in full so Tailwind can see the class names at build time.
const columns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

export function StatGrid({ stats, onGreen = false }: { stats: Stat[]; onGreen?: boolean }) {
  if (stats.length === 0) return null;

  const sm = columns[Math.min(stats.length, 4)] ?? "sm:grid-cols-4";
  const mobile = stats.length === 1 ? "grid-cols-1" : "grid-cols-2";

  return (
    <dl
      className={`grid ${mobile} ${sm} gap-px overflow-hidden rounded-xl ${
        onGreen ? "bg-white/20" : "bg-line"
      }`}
    >
      {stats.map((s, i) => {
        // A last stat sitting alone on its mobile row fills the row instead.
        const fillsMobileRow = i === stats.length - 1 && stats.length % 2 === 1;

        return (
          <div
            key={s.label}
            className={`p-4 sm:p-5 ${onGreen ? "bg-green-deep" : "bg-white"} ${
              fillsMobileRow ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <dt className="flex items-baseline gap-1.5 whitespace-nowrap sm:gap-2">
              {s.from && (
                <span
                  className={`tnum font-display text-base font-medium line-through sm:text-lg ${
                    onGreen ? "text-white/45" : "text-line-strong"
                  }`}
                >
                  {s.from}
                </span>
              )}
              <span
                className={`tnum font-display text-3xl font-semibold leading-none sm:text-4xl ${
                  onGreen ? "text-white" : "text-green"
                }`}
              >
                {s.value}
              </span>
            </dt>
            <dd
              className={`mt-2.5 text-[13px] font-medium leading-snug ${
                onGreen ? "text-white/80" : "text-soft"
              }`}
            >
              {s.label}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
