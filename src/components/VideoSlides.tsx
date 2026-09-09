"use client";

import { useEffect, useRef, useState } from "react";
import { currentStateVideos as slides } from "@/lib/content";
import { ArrowRight } from "@/components/Icons";

/**
 * Every clip is served as 16:9 landscape and every player sits in a 16:9 box,
 * so nothing is letterboxed and nothing shifts as you move between slides.
 *
 * preload="none" is deliberate. Five videos is far too much to pull down on
 * mobile data, so only the poster image loads until someone presses play.
 */
export function VideoSlides() {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Moving to another slide stops whatever was playing behind you.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  const go = (next: number) =>
    setIndex((next + slides.length) % slides.length);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-ink">
        <div
          className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="w-full shrink-0"
              aria-hidden={i !== index}
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
                tabIndex={i === index ? 0 : -1}
                className="aspect-video w-full bg-ink object-cover"
              >
                Your browser cannot play this video.
              </video>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p className="min-w-0 flex-1 text-[15px] leading-snug text-soft" aria-live="polite">
          <span className="tnum font-bold text-green-ink">
            {index + 1}/{slides.length}
          </span>{" "}
          {slides[index].caption}
        </p>

        <div className="flex items-center gap-2">
          <div className="mr-1 flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to clip ${i + 1}`}
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
            onClick={() => go(index - 1)}
            aria-label="Previous clip"
            className="grid size-11 place-items-center rounded-full border-2 border-line text-green-ink transition-colors duration-100 ease-out hover:border-green hover:bg-tint active:translate-y-px"
          >
            <ArrowRight className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
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
