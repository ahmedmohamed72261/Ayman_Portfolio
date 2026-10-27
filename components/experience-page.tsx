"use client";

import {
  Award,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  HeartHandshake,
  LineChart,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { PageVideoShell } from "@/components/page-video-shell";
import { DataPipelineFlow } from "@/components/data-flow";
import {
  experiences,
  certifications,
  education,
  profile,
  stats,
} from "@/data/portfolio";

function GradientTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-l from-teal-300 via-slate-100 to-purple-300 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

function Kicker({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
      <Icon className="h-3.5 w-3.5 text-teal-300" />
      <span>{label}</span>
    </div>
  );
}

export function ExperiencePageClient() {
  const [activeTab, setActiveTab] = useState<string>("All");

  return (
    <PageVideoShell>
      <div className="relative w-full pt-28 pb-24 overflow-hidden text-right">
        {/* Background Ambient Glows */}
        <div
          className="pointer-events-none absolute top-20 right-1/4 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-[150px] -z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-[45%] left-10 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] -z-10"
          aria-hidden="true"
        />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO HEADER & IMPACT STATS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-4">
            <Kicker icon={Briefcase} label="04 / الخبرات المهنية والتطبيق الميداني" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
            <GradientTitle>الخبرات العملية والمسار المهني</GradientTitle>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            مساهمات عملية في تنظيم البيانات وتحديث السجلات، وإعداد التقارير الدورية ولوحات المعلومات التفاعلية في جمعية رواد الأعمال بالمدينة المنورة وبلدية وادي هشبل.
          </p>

          {/* Impact Stats Grid */}
          <div className="mt-8 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-2xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-lg hover:border-teal-400/60 transition"
              >
                <span className="block text-2xl font-black text-teal-300 font-mono">
                  {s.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Workflow Pipeline Banner */}
          <div className="mt-10 w-full max-w-5xl">
            <DataPipelineFlow
              compact
              stages={[
                {
                  key: "collect",
                  label: "01. تنظيم ومراجعة السجلات",
                  detail: "إدخال وتحديث البيانات ومراجعة دقتها وتصحيح الأخطاء لضمان الجودة.",
                  signal: "scope",
                },
                {
                  key: "clean",
                  label: "02. المعالجة في Excel وPower Query",
                  detail: "تنظيف الجداول وتجهيز المتغيرات وربط المصادر المختلفة في نموذج موحد.",
                  signal: "system",
                },
                {
                  key: "deploy",
                  label: "03. بناء لوحات Power BI",
                  detail: "تصميم لوحات تفاعلية بصرية تحسب مؤشرات الأداء الحيوية والفلاتر الزمنية.",
                  signal: "release",
                },
                {
                  key: "output",
                  label: "04. استخراج النتائج ودعم القرار",
                  detail: "إعداد تقارير دورية تساند مديري الأعمال ورواد الأعمال في المتابعة الفورية.",
                  signal: "growth",
                },
              ]}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — PRACTICAL EXPERIENCE TRACKS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <Kicker icon={Rocket} label="محطات الخبرة الميدانية" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>الخبرات والتكليفات العملية</GradientTitle>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              أدوار مساندة في تحليل البيانات والدعم الإداري والتقني وإعداد التقارير الدورية.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="p-6 sm:p-8 rounded-3xl border border-teal-400/30 bg-[#121826]/85 backdrop-blur-xl shadow-xl hover:border-teal-400/60 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-teal-400 mb-1 inline-block">
                      المحطة 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="self-start sm:self-auto rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 text-xs font-mono font-bold text-teal-300">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono text-slate-400 font-bold">أبرز المسؤوليات والمهام:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — CERTIFICATIONS & ACCREDITED TRAINING
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <Kicker icon={Award} label="برامج التأهيل المهني" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>البرامج والدورات التدريبية المعتمدة</GradientTitle>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              تطوير مستمر للأدوات التقنية والتحليلية عبر معاهد تدريبية رائدة بإجمالي أكثر من 185 ساعة تدريبية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => {
              const parts = cert.split(" — ");
              const title = parts[0];
              const details = parts[1] || "";

              return (
                <div
                  key={cert}
                  className="p-6 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-teal-400/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-teal-400/10 text-teal-300 border border-teal-400/20 group-hover:scale-110 transition-transform">
                        <Award className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 font-mono">
                      {details}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-teal-300">
                    <span>مكتمل ومعتمد</span>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-teal-400/30 bg-gradient-to-b from-[#121826]/90 to-[#0a0e16]/90 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center">
            <Kicker icon={HeartHandshake} label="فرص العمل والتعاون" />

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 max-w-2xl">
              هل تبحث عن محلل بيانات ونظم معلومات يدعم نمو أعمالك؟
            </h2>

            <p className="mt-4 text-base text-slate-300 max-w-xl leading-relaxed">
              يسعدني تقديم حلول بصرية وتحليلية متقدمة في Power BI وExcel وSQL تسهم في تحسين سير العمل وجودة المتابعة.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`}>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>راسلني عبر الإيميل</span>
                </span>
              </MagneticButton>
              <MagneticButton href="/projects" variant="secondary">
                <span>استعراض مشاريع Power BI</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </PageVideoShell>
  );
}
