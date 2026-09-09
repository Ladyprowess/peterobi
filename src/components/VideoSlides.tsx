"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { currentStateVideos as slides } from "@/lib/content";
import { ArrowRight } from "@/components/Icons";

/**
 * One clip per row on phones, two on desktop.
 *
 * Scroll snapping rather than a translated track, because the number of
 * visible slides changes with the breakpoint. This way the browser owns the
 * measurement, and touch swiping works natively on phones.
 *
 * preload="none" is deliberate. Only the poster images load until someone
 * presses play, which matters on mobile data.
 */
export function VideoSlides() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [index, setIndex] = useState(0);

  /** Distance between the start of one slide and the next, gap included. */
  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.children[0] as HTMLElement | undefined;
    const second = track.children[1] as HTMLElement | undefined;
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.clientWidth;
  }, []);

  // Anything scrolled out of view stops playing.
  const pauseHidden = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, clientWidth } = track;
    videoRefs.current.forEach((video, i) => {
      const child = track.children[i] as HTMLElement | undefined;
      if (!video || !child) return;
      const left = child.offsetLeft - (track.children[0] as HTMLElement).offsetLeft;
      const visible = left >= scrollLeft - 8 && left + child.clientWidth <= scrollLeft + clientWidth + 8;
      if (!visible && !video.paused) video.pause();
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const s = step();
        if (s > 0) setIndex(Math.round(track.scrollLeft / s));
        pauseHidden();
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [step, pauseHidden]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const s = step();
    if (!track || s <= 0) return;
    const perView = Math.max(1, Math.round(track.clientWidth / s));
    const max = Math.max(0, slides.length - perView);
    const target = Math.min(Math.max(i, 0), max);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * s, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="w-full shrink-0 snap-start lg:w-[calc(50%-0.5rem)]"
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.src}
              poster={slide.poster}
              controls
              preload="none"
              playsInline
              className="aspect-video w-full rounded-xl bg-ink object-cover"
            >
              Your browser cannot play this video.
            </video>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="tnum text-[13px] font-bold text-green-ink" aria-live="polite">
          {index + 1} of {slides.length}
        </p>

        <div className="flex items-center gap-2">
          <div className="mr-1 flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className="grid size-8 place-items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-150 ease-out ${
                    i === index ? "w-5 bg-green" : "w-1.5 bg-line-strong"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous clip"
            className="grid size-11 place-items-center rounded-full border-2 border-line text-green-ink transition-colors duration-100 ease-out hover:border-green hover:bg-tint active:translate-y-px"
          >
            <ArrowRight className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next clip"
            className="grid size-11 place-items-center rounded-full border-2 border-line text-green-ink transition-colors duration-100 ease-out hover:border-green hover:bg-tint active:translate-y-px"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
