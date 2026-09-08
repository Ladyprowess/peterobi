import { Link as LinkIcon } from "@/components/Icons";
import type { Source } from "@/lib/evidence";

export function SourceLink({ source }: { source: Source }) {
  return (
    <a href={source.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition hover:border-green hover:shadow-sm">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-tint text-green"><LinkIcon className="size-4" /></span>
      <span>
        <span className="block text-sm font-bold leading-snug text-green-ink group-hover:text-green-mid">{source.title}</span>
        <span className="mt-1 block text-xs text-soft">{source.publisher}{source.date ? ` · ${source.date}` : ""}</span>
      </span>
    </a>
  );
}
