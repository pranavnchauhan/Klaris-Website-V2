"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  caption?: string;
}

export default function YouTubeFacade({ videoId, title, caption }: YouTubeFacadeProps) {
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  if (activated) {
    return (
      <div className="w-full">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
        {caption && <p className="mt-3 text-center text-xs text-muted-foreground">{caption}</p>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        type="button"
        aria-label={`Play video: ${title}`}
        onClick={() => setActivated(true)}
        className="group relative w-full overflow-hidden rounded-2xl shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer block"
        style={{ aspectRatio: "16/9" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/40">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-medium tracking-wide">
          WATCH
        </div>
      </button>
      {caption && <p className="mt-3 text-center text-xs text-muted-foreground">{caption}</p>}
      <noscript>
        <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noopener noreferrer" className="block text-center text-primary underline mt-2 text-sm">
          {title}: Watch on YouTube
        </a>
      </noscript>
    </div>
  );
}
