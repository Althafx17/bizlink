"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./hero-media.module.css";

// Doha footage by Shubham Dutta, Pexels video 3828452, under the Pexels License.
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const attachVideo = () => {
      if (preference.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        setReady(false);
      } else {
        video.src = "/videos/doha-hero.mp4";
        video.load();
        void video.play().catch(() => setPlaying(false));
      }
    };

    // Defer video initialization to idle so LCP and TTI are fast and unblocked
    let idleId: number | undefined;
    let timerId: NodeJS.Timeout | undefined;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(attachVideo);
    } else {
      timerId = setTimeout(attachVideo, 300);
    }

    const onMotionChange = () => {
      attachVideo();
    };

    preference.addEventListener("change", onMotionChange);

    return () => {
      if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      if (timerId) clearTimeout(timerId);
      preference.removeEventListener("change", onMotionChange);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <>
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/doha-hero-poster.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          quality={80}
          className={styles.poster}
        />
        <video
          ref={videoRef}
          className={styles.video}
          data-ready={ready}
          muted
          playsInline
          loop
          preload="none"
          onLoadedData={() => setReady(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setReady(false); setPlaying(false); }}
          tabIndex={-1}
          disablePictureInPicture
        />
      </div>
      {ready && (
        <button
          type="button"
          className={styles.control}
          onClick={togglePlayback}
          aria-label={playing ? "Pause background video" : "Play background video"}
        >
          {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
      )}
    </>
  );
}
