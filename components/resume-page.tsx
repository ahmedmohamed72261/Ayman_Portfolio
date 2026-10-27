"use client";

import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Copy,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { PageVideoShell } from "@/components/page-video-shell";
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

export function ResumePageClient() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  function copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  }

  function handlePrint() {
    window.print();
  }

  return (
    <PageVideoShell>
      <div className="relative w-full pt-28 pb-24 overflow-hidden text-right">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute top-20 right-1/2 translate-x-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-[150px] -z-10 print-hide"
          aria-hidden="true"
        />

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO HEADER & RECRUITER ACTIONS (HIDDEN ON PRINT)
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pb-10 print-hide">
          <div className="mb-4">
            <Kicker icon={FileCheck2} label="05 / السيرة الذاتية والمؤهلات المهنية" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl drop-shadow-2xl">
            <GradientTitle>السيرة الذاتية والمؤهلات</GradientTitle>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            استعراض متكامل للمؤهل الأكاديمي والخبرات العملية والبرامج التدريبية المعتمدة في تحليل البيانات ونظم المعلومات.
          </p>

          {/* Quick Action Strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-[#121826]/80 px-6 py-3 text-xs font-mono font-bold text-slate-200 hover:border-teal-400/60 hover:text-teal-300 transition backdrop-blur-md shadow-lg cursor-pointer"
            >
              <Printer className="h-4 w-4 text-teal-400" />
              <span>طباعة السيرة الذاتية</span>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(profile.email, "Email")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#121826]/80 px-5 py-3 text-xs font-mono font-bold text-slate-200 hover:border-teal-400/40 hover:text-teal-300 transition backdrop-blur-md shadow-lg cursor-pointer"
            >
              <Copy className="h-3.5 w-3.5 text-teal-400" />
              <span>{copiedText === "Email" ? "تم نسخ الإيميل ✅" : "نسخ الإيميل"}</span>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(profile.phone, "Phone")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#121826]/80 px-5 py-3 text-xs font-mono font-bold text-slate-200 hover:border-teal-400/40 hover:text-teal-300 transition backdrop-blur-md shadow-lg cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 text-teal-400" />
              <span>{copiedText === "Phone" ? "تم نسخ الرقم ✅" : "نسخ الهاتف"}</span>
            </button>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — PRINT-OPTIMIZED EXECUTIVE RESUME DOCUMENT SHELL
            ═══════════════════════════════════════════════════════════════════ */}
        <section className="container-shell mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="print-resume-document p-6 sm:p-10 rounded-3xl border border-teal-400/30 bg-[#121826]/90 backdrop-blur-2xl shadow-2xl space-y-8">
            {/* Document Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/10 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Profile Photo Avatar */}
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl border-2 border-teal-400/40 bg-slate-900 overflow-hidden shadow-xl print-hide">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-mono font-bold text-teal-300 print-badge">
                    <Sparkles className="h-3.5 w-3.5 print-hide" />
                    <span>{profile.title}</span>
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {profile.name} · {profile.nameEn}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    {profile.intro}
                  </p>

                  {/* Contact information badges */}
                  <div className="pt-1 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-teal-400 print-hide" />
                      <span>{profile.location}</span>
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-1.5 text-teal-300 hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5 print-hide" />
                      <span>{profile.email}</span>
                    </a>
                    <a
                      href={`tel:${profile.phone}`}
                      className="flex items-center gap-1.5 text-teal-300 hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5 print-hide" />
                      <span>{profile.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section: Education ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" />
                <span className="font-bold">المؤهل الأكاديمي</span>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="p-5 rounded-2xl border border-white/10 bg-black/20 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono text-teal-300 font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-purple-300">{edu.school}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Section: Experiences & Training ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-mono text-xs uppercase tracking-wider">
                <FileText className="h-4 w-4" />
                <span className="font-bold">الخبرات العملية والتدريب</span>
              </div>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="p-5 rounded-2xl border border-white/10 bg-black/20 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-white">{exp.role}</h4>
                        <p className="text-xs font-mono font-semibold text-purple-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-teal-300">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                      {exp.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[0.68rem] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section: Professional Certifications ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-mono text-xs uppercase tracking-wider">
                <Award className="h-4 w-4" />
                <span className="font-bold">الشهادات والدورات التدريبية المعتمدة</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-4 rounded-xl border border-white/10 bg-black/20 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section: Skills Matrix ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span className="font-bold">المهارات والأدوات التقنية</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 text-xs text-slate-200 font-mono"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Section: Languages ── */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="font-bold text-white">اللغات:</span>
                {languages.map((l) => (
                  <span key={l} className="text-teal-300">
                    {l}
                  </span>
                ))}
              </div>

              <div className="print-hide">
                <Link
                  href="/contact"
                  className="text-teal-300 hover:underline font-bold"
                >
                  تواصل مباشرة مع {profile.name} ←
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageVideoShell>
  );
}
