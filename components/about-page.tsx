"use client";

import {
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronLeft,
  Database,
  GraduationCap,
  HeartHandshake,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/magnetic-button";
import { PageVideoShell } from "@/components/page-video-shell";
import { AymanExecutiveIdentityCard } from "@/components/ayman-avatar";
import {
  certifications,
  education,
  experiences,
  languages,
  profile,
  skills,
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

export function AboutPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = containerRef.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const animatedElements = el.querySelectorAll(".about-fade-in");
      animatedElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const methodologySteps = [
    {
      num: "01",
      title: "تحليل البيانات",
      desc: "استخراج المؤشرات والنتائج باستخدام Excel وSQL وPython لدعم فهم العمليات والاتجاهات.",
      icon: Database,
      color: "text-teal-300",
      border: "hover:border-teal-400/40",
    },
    {
      num: "02",
      title: "لوحات المعلومات",
      desc: "عرض مؤشرات الأداء بصريًا وتفاعليًا باستخدام Power BI وExcel لسهولة المتابعة وسرعة القراءة.",
      icon: BarChart3,
      color: "text-purple-300",
      border: "hover:border-purple-400/40",
    },
    {
      num: "03",
      title: "جودة البيانات",
      desc: "مراجعة السجلات وتصحيح الأخطاء والتحقق من الدقة قبل بناء النماذج والتقارير.",
      icon: ShieldCheck,
      color: "text-amber-300",
      border: "hover:border-amber-400/40",
    },
    {
      num: "04",
      title: "دعم الأعمال",
      desc: "تنظيم المعلومات وإعداد التقارير الإدارية والتنفيذية لتمكين متخذي القرار من رؤية المشهد بدقة.",
      icon: HeartHandshake,
      color: "text-rose-300",
      border: "hover:border-rose-400/40",
    },
  ];

  return (
    <PageVideoShell>
      <div ref={containerRef} className="relative w-full pt-28 pb-24 overflow-hidden text-right">
        {/* Background Ambient Glows */}
        <div
          className="pointer-events-none absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[150px] -z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-[40%] left-10 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] -z-10"
          aria-hidden="true"
        />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO / HEADER BANNER
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="about-fade-in mb-4">
            <Kicker icon={UserCheck} label="01 / نبذة عني · نظم المعلومات وتحليل البيانات" />
          </div>

          <h1 className="about-fade-in text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
            <GradientTitle>نبذة عن {profile.name}</GradientTitle>
          </h1>

          <p className="about-fade-in mt-2 font-mono text-sm sm:text-base text-teal-300">
            {profile.nameEn} · {profile.titleEn}
          </p>

          <p className="about-fade-in mt-4 text-lg sm:text-xl font-semibold text-slate-200 max-w-3xl leading-snug">
            {profile.headline}
          </p>

          <p className="about-fade-in mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {profile.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          <div className="about-fade-in mt-8 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-xl flex flex-col items-center text-center shadow-lg hover:border-teal-400/60 transition-all">
              <GraduationCap className="h-6 w-6 text-teal-400 mb-1" />
              <span className="text-xl font-bold text-white font-mono">MIS B.Sc.</span>
              <span className="text-xs text-slate-400 mt-0.5">جامعة طيبة</span>
            </div>
            <div className="p-4 rounded-2xl border border-purple-400/30 bg-[#121826]/80 backdrop-blur-xl flex flex-col items-center text-center shadow-lg hover:border-purple-400/60 transition-all">
              <BarChart3 className="h-6 w-6 text-purple-400 mb-1" />
              <span className="text-xl font-bold text-white font-mono">6+ Dashboards</span>
              <span className="text-xs text-slate-400 mt-0.5">Power BI متقدم</span>
            </div>
            <div className="p-4 rounded-2xl border border-amber-400/30 bg-[#121826]/80 backdrop-blur-xl flex flex-col items-center text-center shadow-lg hover:border-amber-400/60 transition-all">
              <Award className="h-6 w-6 text-amber-400 mb-1" />
              <span className="text-xl font-bold text-white font-mono">185+ ساعة</span>
              <span className="text-xs text-slate-400 mt-0.5">تدريب مهني معتمد</span>
            </div>
            <div className="p-4 rounded-2xl border border-rose-400/30 bg-[#121826]/80 backdrop-blur-xl flex flex-col items-center text-center shadow-lg hover:border-rose-400/60 transition-all">
              <MapPin className="h-6 w-6 text-rose-400 mb-1" />
              <span className="text-lg font-bold text-white">المدينة المنورة</span>
              <span className="text-xs text-slate-400 mt-0.5">المملكة العربية السعودية</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="about-fade-in mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/projects">
              <span className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span>استعراض المشاريع</span>
              </span>
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} variant="secondary">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>راسلني عبر الإيميل</span>
              </span>
            </MagneticButton>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — EXECUTIVE BIOGRAPHY & CORE SNAPSHOT
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="about-fade-in mb-6">
            <Kicker icon={BrainCircuit} label="02 / السيرة المهنية" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>الخلفية والخبرات المهنية</GradientTitle>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Right Col (in RTL): Executive Monogram & Status Card */}
            <div className="about-fade-in lg:col-span-5 relative group rounded-3xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between">
              <AymanExecutiveIdentityCard />
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-xs font-mono text-teal-300">{profile.titleEn}</p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-mono">Power BI</span>
                  <span className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-mono">Excel</span>
                  <span className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-mono">SQL</span>
                  <span className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-mono">Python</span>
                  <span className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-mono">MIS</span>
                </div>
              </div>
            </div>

            {/* Left Col: Main Bio & Core Snapshot */}
            <div className="about-fade-in lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl border-r-4 border-teal-400 bg-teal-400/10 text-teal-200 text-sm sm:text-base font-semibold">
                  <Quote className="h-6 w-6 text-teal-300 flex-shrink-0" />
                  <span>
                    &ldquo;أحوّل البيانات إلى قرارات أوضح من خلال تنظيمها وتحليلها وعرض النتائج في تقارير ولوحات معلومات تفاعلية.&rdquo;
                  </span>
                </div>

                <p className="text-base text-slate-300 leading-relaxed">
                  {profile.intro}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  أهتم بتطبيق التقنية لتحسين سير العمل ودعم اتخاذ القرار، وأسعى إلى تطوير مهاراتي باستمرار في المجالات التقنية وتحليل الأعمال والمعلومات، دون الاقتصار على مسمى وظيفي واحد، مع تركيز دائم على جودة البيانات وموثوقية السجلات وسرعة استخراج المؤشرات الحيوية.
                </p>
              </div>

              {/* Personal Details Snapshot Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>المؤهل: بكالوريوس نظم المعلومات الإدارية (MIS)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>الجامعة: جامعة طيبة — المدينة المنورة</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>الأدوات الأساسية: Power BI, Excel, SQL, Python, Word</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>التدريب: دبلوم ودورات تحليل بيانات مهنية متخصصة</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — METHODOLOGY & VALUE DELIVERED
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="about-fade-in text-center max-w-3xl mx-auto mb-10">
            <Kicker icon={Workflow} label="03 / القيمة ومنهجية العمل" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>القيمة التي أقدمها</GradientTitle>
            </h2>
            <p className="mt-3 text-base text-slate-300">
              منهجية دقيقة لتحويل البيانات الأولية إلى رؤى استراتيجية تدعم المتابعة وسرعة اتخاذ القرار.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`about-fade-in p-6 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-xl ${step.border} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl border border-white/10 bg-white/5 ${step.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-teal-300 transition-colors">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 text-[0.7rem] font-mono text-teal-400 flex items-center justify-between">
                    <span>المرحلة {step.num}</span>
                    <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — EDUCATION & CERTIFICATIONS
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="about-fade-in mb-8">
            <Kicker icon={Award} label="04 / التعليم والشهادات التدريبية" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>التأهيل الأكاديمي والتدريب المهني</GradientTitle>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              تطوير مستمر للمهارات التقنية والتحليلية من خلال برامج تدريبية متخصصة ومعتمدة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Education Block */}
            <div className="about-fade-in lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-teal-400/30 bg-[#121826]/80 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-teal-400/10 text-teal-300 border border-teal-400/30">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-teal-300">الدرجة الجامعية</span>
                  <h3 className="text-lg font-bold text-white">{education[0].degree}</h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-teal-200 mt-2">{education[0].school}</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {education[0].details}
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="about-fade-in lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={cert}
                  className="p-5 rounded-2xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-teal-400/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-teal-400/10 text-teal-300 border border-teal-400/20 group-hover:scale-110 transition-transform">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono text-teal-400/80">0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {cert.split(" — ")[0]}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      {cert.split(" — ")[1] || ""}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[0.7rem] font-mono text-teal-300">
                    معتمد ومكتمل
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — EXPERIENCES
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="about-fade-in mb-8">
            <Kicker icon={Rocket} label="05 / الخبرات العملية والتدريب" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              <GradientTitle>التطبيق العملي والميداني</GradientTitle>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="about-fade-in p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#121826]/80 backdrop-blur-xl shadow-xl hover:border-teal-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-mono font-bold text-teal-300">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {exp.role}
                  </h3>

                  <p className="text-sm font-semibold text-purple-300 mt-1">
                    {exp.company}
                  </p>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                    {exp.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
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
            SECTION 6 — CONTACT CTA
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
          <div className="about-fade-in p-8 sm:p-12 rounded-3xl border border-teal-400/30 bg-gradient-to-b from-[#121826]/95 to-[#0a0e16]/95 backdrop-blur-2xl shadow-2xl text-center flex flex-col items-center">
            <Kicker icon={HeartHandshake} label="06 / التواصل والتعاون" />

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 max-w-2xl">
              مهتم بالفرص المهنية والتعاون في تحليل البيانات ونظم المعلومات
            </h2>

            <p className="mt-4 text-base text-slate-300 max-w-xl leading-relaxed">
              يسعدني التواصل لمناقشة الفرص الوظيفية والمشاريع التقنية ولوحات المعلومات.
            </p>

            {/* Languages */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-xs font-mono font-semibold text-teal-200"
                >
                  🌐 {lang}
                </span>
              ))}
            </div>

            {/* Contact buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`}>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{profile.email}</span>
                </span>
              </MagneticButton>
              <MagneticButton href={`tel:${profile.phone}`} variant="secondary">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{profile.phone}</span>
                </span>
              </MagneticButton>
              <MagneticButton href={profile.linkedin} target="_blank" variant="secondary">
                <span>حساب LinkedIn</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </PageVideoShell>
  );
}
