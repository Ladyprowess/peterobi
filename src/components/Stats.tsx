import type { Stat } from "@/lib/content";

/**
 * The numbers, given room to land. Big green figures on white, with the
 * starting point struck through beside them where there is one.
 */
export function StatGrid({ stats, onGreen = false }: { stats: Stat[]; onGreen?: boolean }) {
  if (stats.length === 0) return null;

  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-xl sm:grid-cols-4 ${
        onGreen ? "bg-white/20" : "bg-line"
      }`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={`p-4 sm:p-5 ${onGreen ? "bg-green-deep" : "bg-white"}`}
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
      ))}
    </dl>
  );
}
