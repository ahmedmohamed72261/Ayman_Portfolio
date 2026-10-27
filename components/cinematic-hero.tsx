"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, BarChart3, BrainCircuit, CheckCircle2, Database, LineChart, RadioTower, Sparkles, Target } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedBars } from "@/components/scenario-panels";
import { profile, stats } from "@/data/portfolio";
import { HeroMediaScene } from "@/components/hero-media-scene";

export function CinematicHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[var(--nav-height)] text-right">
      <HeroMediaScene />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,22,.97),rgba(10,14,22,.75)_52%,rgba(10,14,22,.94))]" />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-var(--nav-height))] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-kicker">
            <Sparkles className="h-4 w-4 text-teal-300" /> {profile.name} · {profile.nameEn}
          </motion.div>
          <motion.div className="flex flex-wrap gap-2.5 mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            {["خريج نظم معلومات إدارية MIS", "محلل بيانات", "ذكاء الأعمال Power BI", "جامعة طيبة"].map((role) => (
              <span key={role} className="rounded-full border border-teal-400/20 bg-teal-400/[.06] px-3.5 py-1.5 font-mono text-xs font-semibold text-teal-200">
                {role}
              </span>
            ))}
          </motion.div>
          <motion.h1 className="heading-xl aurora-text mt-5 max-w-4xl font-bold leading-tight" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            {profile.headline}
          </motion.h1>
          <motion.p className="muted-copy mt-6 max-w-2xl text-slate-300 leading-relaxed text-base sm:text-lg" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            {profile.subtitle}
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <MagneticButton href="/projects">استعراض المشاريع</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">تواصل معي</MagneticButton>
          </motion.div>
          <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <div className="rounded-2xl border border-teal-400/20 bg-[#121826]/80 p-4 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-sm font-bold text-white"><Target className="h-4 w-4 text-teal-400" /> المجالات المستهدفة</p>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">تحليل البيانات، ذكاء الأعمال، نظم المعلومات الإدارية، دعم التقارير والعمليات</p>
            </div>
            <div className="rounded-2xl border border-purple-400/20 bg-[#121826]/80 p-4 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-sm font-bold text-white"><CheckCircle2 className="h-4 w-4 text-purple-400" /> المهارات الأساسية</p>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-300">Power BI, Excel, Power Query, DAX, SQL, Python، وإعداد لوحات المعلومات</p>
            </div>
          </motion.div>
          <motion.div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            {stats.map((stat) => (
              <div key={stat.label} className="cinema-card rounded-2xl border border-white/10 bg-[#121826]/70 p-4 backdrop-blur-xl text-center">
                <p className="text-2xl font-bold font-mono text-teal-300">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="hidden lg:block" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8, duration: 0.9 }}>
          <div className="media-frame cinema-card overflow-hidden rounded-[2rem] p-6 border border-white/10 bg-[#121826]/80 backdrop-blur-2xl">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.2em] text-teal-300">ملف الأعمال ونماذج القياس</p>
                <h2 className="mt-2 text-2xl font-bold text-white">لوحات Power BI التفاعلية</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300 font-mono">
                <RadioTower className="h-3.5 w-3.5 animate-pulse" /> مباشر
              </span>
            </div>
            <div className="relative z-10 mt-8 grid gap-5">
              <div className="grid grid-cols-3 gap-4">
                {[
                  ["متوسط الحرارة", "25.44°م"],
                  ["إجمالي المبيعات", "$2.30M"],
                  ["إغلاق البلاغات", "97.5%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-xl font-bold font-mono text-teal-200">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[.18em] text-slate-400">مؤشرات الأداء الحيوي</p>
                  <BarChart3 className="h-5 w-5 text-teal-300" />
                </div>
                <AnimatedBars values={[35, 52, 68, 75, 60, 88, 78, 94, 70, 85]} />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  [Database, "تنظيم"],
                  [LineChart, "تحليل"],
                  [BrainCircuit, "نمذجة"],
                  [CheckCircle2, "تقارير"],
                ].map(([Icon, label], index) => (
                  <motion.div key={label as string} className="rounded-2xl border border-white/10 bg-white/[.04] p-4 text-center text-teal-200" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.8 + index * 0.15, repeat: Infinity, delay: index * 0.18 }}>
                    <Icon className="mx-auto h-5 w-5" />
                    <p className="mt-3 text-xs font-semibold text-slate-200">{label as string}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Link href="#signal" className="absolute bottom-7 left-1/2 z-10 grid -translate-x-1/2 place-items-center gap-2 text-xs uppercase tracking-[.22em] text-slate-300">
        <span>استكشف</span>
        <ArrowDown className="h-5 w-5 animate-bounce text-teal-300" />
      </Link>
    </section>
  );
}
