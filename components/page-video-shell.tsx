"use client";

import React from "react";

type PageVideoShellProps = {
  children: React.ReactNode;
  className?: string;
  poster?: string;
  video?: string;
};

/**
 * PageVideoShell — Converted to Cosmic Shell (Videos completely removed per specification)
 * Uses high-performance CSS cosmic starfield and ambient radial glows from Ayman's portfolio.
 */
export function PageVideoShell({ children, className = "" }: PageVideoShellProps) {
  return (
    <div className={`page-video-shell min-h-screen relative overflow-hidden ${className}`}>
      {/* Background Starfield & Celestial Atmosphere (No Video) */}
      <div className="cosmos" aria-hidden="true">
        <div className="stars" />
        <div className="stars layer2" />
      </div>

      <div className="page-video-content relative z-10">{children}</div>
    </div>
  );
}
