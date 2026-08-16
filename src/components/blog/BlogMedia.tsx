"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type BlogMediaKind = "cracked" | "community" | "food";

type GalleryItem = {
  src: string;
  alt: string;
  focus?: "center" | "upper" | "lower";
};

const galleries: Record<
  Exclude<BlogMediaKind, "food">,
  { label: string; items: GalleryItem[] }
> = {
  cracked: {
    label: "cracked people",
    items: [
      {
        src: "/img/blog/blr/cracked-builders.jpg",
        alt: "three builders together at ship it",
        focus: "upper",
      },
      {
        src: "/img/blog/blr/cracked-work.jpg",
        alt: "a laptop and monitor at a busy work desk",
      },
      {
        src: "/img/blog/blr/cracked-coffee.jpg",
        alt: "coffee, sandwiches and a conversation in blr",
      },
    ],
  },
  community: {
    label: "the community",
    items: [
      {
        src: "/img/blog/blr/community-friends.jpg",
        alt: "five friends taking a photo together",
      },
      {
        src: "/img/blog/blr/community-room.jpg",
        alt: "builders talking together at an evening gathering",
        focus: "lower",
      },
      {
        src: "/img/blog/blr/community-city.jpg",
        alt: "an ai coding billboard above blr traffic",
        focus: "lower",
      },
    ],
  },
};

function MediaCarousel({ kind }: { kind: Exclude<BlogMediaKind, "food"> }) {
  const { label, items } = galleries[kind];
  const trackRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const trigger = triggerRefs.current[lightboxIndex];
        setLightboxIndex(null);
        requestAnimationFrame(() => trigger?.focus());
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null ? null : Math.max(0, current - 1),
        );
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? null : Math.min(items.length - 1, current + 1),
        );
      }
      if (event.key === "Tab") {
        const controls = Array.from(
          lightboxRef.current?.querySelectorAll<HTMLButtonElement>(
            "button:not(:disabled)",
          ) || [],
        );
        const first = controls.at(0);
        const last = controls.at(-1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [items.length, lightboxIndex]);

  const closeLightbox = () => {
    const trigger =
      lightboxIndex === null ? null : triggerRefs.current[lightboxIndex];
    setLightboxIndex(null);
    requestAnimationFrame(() => trigger?.focus());
  };

  const moveTo = (next: number) => {
    const track = trackRef.current;
    const slide = track?.children.item(next) as HTMLElement | null;

    if (!track || !slide) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActive(next);
  };

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const slides = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const nextDistance = Math.abs(
        slide.getBoundingClientRect().left - trackLeft,
      );

      if (nextDistance < distance) {
        distance = nextDistance;
        closest = index;
      }
    });

    setActive(closest);
  };

  return (
    <figure className="post-media-block">
      <div className="post-media-header">
        <figcaption>{label}</figcaption>
        <div className="post-media-navigation">
          <span aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="previous photo"
            disabled={active === 0}
            onClick={() => moveTo(active - 1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="next photo"
            disabled={active === items.length - 1}
            onClick={() => moveTo(active + 1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="post-media-track"
        onScroll={updateActive}
      >
        {items.map((item, index) => (
          <button
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            type="button"
            aria-label={`open photo ${index + 1} of ${items.length}`}
            className={`post-media-frame post-media-focus-${item.focus || "center"}`}
            key={item.src}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 820px) 86vw, 640px"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null &&
        createPortal(
          <div
            ref={lightboxRef}
            className="post-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${label} photo ${lightboxIndex + 1} of ${items.length}`}
            onClick={closeLightbox}
          >
            <div className="post-lightbox-topbar">
              <span>{label}</span>
              <div className="post-lightbox-controls">
                <span>
                  {String(lightboxIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label="previous full photo"
                  disabled={lightboxIndex === 0}
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex(lightboxIndex - 1);
                  }}
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="next full photo"
                  disabled={lightboxIndex === items.length - 1}
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex(lightboxIndex + 1);
                  }}
                >
                  →
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="close full photo"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeLightbox();
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            <div
              className="post-lightbox-stage"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                fill
                sizes="100vw"
                priority
              />
            </div>
          </div>,
          document.body,
        )}
    </figure>
  );
}

function BlogVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return;

    const syncPlayback = () => {
      if (reduceMotion.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback();
    reduceMotion.addEventListener("change", syncPlayback);
    return () => reduceMotion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <figure className="post-media-block post-video-block">
      <div className="post-media-header">
        <figcaption>not dosa</figcaption>
        <span>00:27</span>
      </div>
      <video
        ref={videoRef}
        className="post-video"
        poster="/img/blog/blr/not-dosa-poster.jpg"
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="a phone testing a dosa recognition demo"
      >
        <source src="/img/blog/blr/not-dosa.m4v" type="video/x-m4v" />
      </video>
    </figure>
  );
}

export default function BlogMedia({ kind }: { kind: BlogMediaKind }) {
  if (kind === "food") return <BlogVideo />;
  return <MediaCarousel kind={kind} />;
}
