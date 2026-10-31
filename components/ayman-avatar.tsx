"use client";

import React from "react";
import { Sparkles, Terminal } from "lucide-react";
import { cn } from "@/components/utils";

interface AymanAvatarProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  glow?: boolean;
  interactive?: boolean;
}

export function AymanAvatar({
  size = "md",
  className = "",
  glow = true,
  interactive = true,
}: AymanAvatarProps) {
  const sizeClasses = {
    xs: "h-8 w-8 text-xs",
    sm: "h-10 w-10 text-sm",
    md: "h-16 w-16 text-xl",
    lg: "h-24 w-24 text-3xl",
    xl: "h-32 w-32 text-4xl",
    full: "w-full h-full text-5xl",
  }[size];

  return (
    <div
      className={cn(
        "relative rounded-full flex items-center justify-center select-none overflow-hidden shrink-0",
        "border border-teal-400/50 bg-gradient-to-br from-[#16253b] via-[#0d1624] to-[#050811]",
        glow && "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
        interactive && "group transition-all duration-300 hover:scale-105 hover:border-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]",
        sizeClasses,
        className
      )}
      title="أيمن يحيى الشهري"
      aria-label="شعار حرف أيمن الشهري"
    >
      {/* Concentric subtle tech ring */}
      <div className="absolute inset-1 rounded-full border border-teal-400/20 border-dashed pointer-events-none" />

      {/* Radial center highlight */}
      <div className="absolute inset-0 bg-radial from-teal-400/15 via-transparent to-transparent pointer-events-none" />

      {/* Subtle particle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 rounded-full blur-sm pointer-events-none" />

      {/* Main Character Monogram: Arabic 'أ' with English 'AY' undertone */}
      <div className="relative z-10 flex flex-col items-center justify-center leading-none">
        <span
          className="font-black bg-gradient-to-b from-teal-200 via-teal-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(45,212,191,0.6)]"
          style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Tahoma, Cairo, Arial, sans-serif" }}
        >
          أ
        </span>
        {(size === "md" || size === "lg" || size === "xl" || size === "full") && (
          <span className="text-[0.45em] font-mono tracking-widest text-teal-300/80 uppercase font-bold mt-0.5">
            AY
          </span>
        )}
      </div>

      {/* Orbit Corner Dots */}
      <span className="absolute top-1 right-2 h-1 w-1 rounded-full bg-teal-400/80 shadow-[0_0_6px_#2dd4bf]" />
      <span className="absolute bottom-1 left-2 h-1 w-1 rounded-full bg-sky-400/80 shadow-[0_0_6px_#38bdf8]" />
    </div>
  );
}

/**
 * High-end Executive Monogram Showcase Card
 * Used in the About page & Executive biography in place of a photograph
 */
export function AymanExecutiveIdentityCard() {
  return (
    <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden border border-teal-400/30 shadow-2xl bg-gradient-to-br from-[#0f172a] via-[#090d16] to-[#04060d] flex flex-col items-center justify-between p-6 group">
      {/* Background Cyber Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(45,212,191,0.14),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Top Header Pills */}
      <div className="relative z-10 w-full flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/40 bg-slate-950/80 px-3 py-1 text-[0.7rem] font-mono text-teal-300 backdrop-blur-md shadow-md">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
          <span>متاح للفرص المهنية</span>
        </span>
        <span className="text-[0.7rem] font-mono font-medium text-teal-300 bg-slate-950/80 px-3 py-1 rounded-full border border-teal-400/30 backdrop-blur-md">
          المدينة المنورة
        </span>
      </div>

      {/* Center Character Monogram & Insignia */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
        {/* Pulsing Concentric Aura */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full border border-teal-400/20 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-8 rounded-full border border-sky-400/10 pointer-events-none" />
          
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full border-2 border-teal-400/60 bg-gradient-to-b from-[#132238] to-[#070b14] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(45,212,191,0.35)] group-hover:shadow-[0_0_55px_rgba(45,212,191,0.55)] transition-all duration-500">
            {/* Arabic Main Initial "أ" */}
            <span
              className="text-6xl sm:text-7xl font-black bg-gradient-to-b from-white via-teal-200 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(45,212,191,0.7)] transform group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Tahoma, Cairo, Arial, sans-serif" }}
            >
              أ
            </span>
            <span className="text-[11px] font-mono tracking-[0.25em] text-teal-300 uppercase font-black -mt-1">
              AYMAN
            </span>
          </div>
        </div>

        {/* Full Name Below Monogram */}
        <h3 className="mt-5 text-xl sm:text-2xl font-black text-white tracking-wide text-center drop-shadow-md">
          أيمن يحيى الشهري
        </h3>
        <p className="text-xs font-mono font-medium text-teal-300/90 mt-1 text-center">
          Ayman Yahya Alshehri
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-[0.72rem] font-mono text-teal-300">
          <Sparkles className="h-3 w-3 text-teal-400" />
          <span>MIS Graduate · Data & BI Analyst</span>
        </div>
      </div>

      {/* Bottom Status & Key Stats */}
      <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-between text-[0.75rem] font-mono text-slate-300">
        <span className="flex items-center gap-1 text-teal-300">
          <Terminal className="h-3.5 w-3.5" />
          <span>Taibah Univ. (MIS)</span>
        </span>
        <span className="text-slate-400">Power BI · DAX · SQL</span>
      </div>
    </div>
  );
}
