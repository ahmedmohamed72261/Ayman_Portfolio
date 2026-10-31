"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { AymanAvatar } from "@/components/ayman-avatar";

const STAGES = [
  "تهيئة بيئة تحليل البيانات ولوحات Power BI...",
  "تحميل بيانات المشاريع ومؤشرات الأداء...",
  "مراجعة دقة السجلات وجودة البيانات...",
  "جاهز للاستعراض · مرحبًا بك في ملف الأعمال",
];

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => setVisible(false), 100);
      return () => clearTimeout(t);
    }

    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 5;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [reduced]);

  // Derived stage without extra synchronous setState in effect
  const stageIndex = progress < 25 ? 0 : progress < 55 ? 1 : progress < 85 ? 2 : 3;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0e16] px-4 text-white overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Ambient Cosmic Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.14)_0,transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(177,140,255,0.12)_0,transparent_55%)] pointer-events-none" />

          {/* Central High-Tech Loader Ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer Counter-Rotating HUD Ticks */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-dashed border-teal-400/30"
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Glowing Orbit Ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-transparent border-t-teal-400 border-r-teal-400/40 shadow-[0_0_25px_rgba(45,212,191,0.4)]"
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Character Avatar */}
            <AymanAvatar size="lg" className="z-10" />
          </div>

          {/* Percentage Counter */}
          <div className="mt-8 flex items-baseline gap-1 font-mono">
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(45,212,191,0.6)]">
              {progress}
            </span>
            <span className="text-lg font-bold text-teal-400">%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="mt-4 w-full max-w-xs sm:max-w-md h-1.5 rounded-full bg-slate-900 border border-white/10 p-0.5 overflow-hidden shadow-inner">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-400 via-purple-400 to-amber-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>

          {/* Animated Dynamic Status Stage */}
          <div className="mt-5 h-6 flex items-center justify-center">
            <motion.div
              key={stageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 rounded-full bg-teal-950/60 border border-teal-400/30 px-4 py-1 text-xs font-mono text-teal-200 shadow-md backdrop-blur-md"
            >
              <Cpu className="h-3.5 w-3.5 text-teal-400 animate-spin" />
              <span>{STAGES[stageIndex]}</span>
            </motion.div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-teal-400/80" />
            <span>{profile.name} · {profile.titleEn}</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
