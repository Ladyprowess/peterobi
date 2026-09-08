"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Copy, WhatsApp, XMark } from "./Icons";

/** The page URL never changes under us, so nothing needs to re-subscribe. */
const noSubscribe = () => () => {};

/**
 * WhatsApp first, deliberately. It is how political argument actually travels
 * in Nigeria.
 */
export function ShareRow({
  message,
  onGreen = false,
  className = "",
}: {
  message: string;
  onGreen?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const url = useSyncExternalStore(
    noSubscribe,
    useCallback(() => `${window.location.origin}${window.location.pathname}`, []),
    useCallback(() => "", []),
  );

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${message} ${url}`);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard blocked. The share links still work, so stay quiet. */
    }
  }

  const wa = `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`;
  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    message,
  )}&url=${encodeURIComponent(url)}`;

  const base = onGreen
    ? "inline-flex min-h-11 items-center gap-2 rounded-lg border-2 border-white/30 px-3.5 text-[14px] font-bold text-white transition-colors duration-100 ease-out hover:bg-white/10 active:translate-y-px"
    : "inline-flex min-h-11 items-center gap-2 rounded-lg border-2 border-line px-3.5 text-[14px] font-bold text-green-ink transition-colors duration-100 ease-out hover:border-green hover:bg-tint active:translate-y-px";

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <a href={wa} target="_blank" rel="noopener noreferrer" className={base}>
        <WhatsApp className={onGreen ? "size-4" : "size-4 text-green"} />
        Send on WhatsApp
      </a>

      <a href={x} target="_blank" rel="noopener noreferrer" className={base}>
        <XMark className="size-3.5" />
        Post
      </a>

      <button type="button" onClick={copy} className={base}>
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
