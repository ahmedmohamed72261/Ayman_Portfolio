"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  BarChart3,
  Layers,
  Briefcase,
  FileText,
  Mail,
  X,
  Compass,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { cn } from "@/components/utils";
import { AymanAvatar } from "@/components/ayman-avatar";

const links = [
  { href: "/", label: "الرئيسية", icon: Home, desc: "نبذة واستعراض المشاريع" },
  { href: "/projects", label: "الأعمال", icon: BarChart3, desc: "لوحات Power BI التفاعلية" },
  { href: "/skills", label: "المهارات", icon: Layers, desc: "Power BI, Excel, SQL, Python" },
  { href: "/experience", label: "الخبرات", icon: Briefcase, desc: "رواد الأعمال وبلدية وادي هشبل" },
  { href: "/about", label: "نبذة عني", icon: User, desc: "خريج MIS من جامعة طيبة" },
  { href: "/resume", label: "المؤهلات", icon: FileText, desc: "السيرة والشهادات المعتمدة" },
  { href: "/contact", label: "تواصل معي", icon: Mail, desc: "بيانات التواصل المباشرة" },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile bottom sheet menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Main 4 quick tab shortcuts for bottom dock
  const quickTabs = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/projects", label: "الأعمال", icon: BarChart3 },
    { href: "/skills", label: "المهارات", icon: Layers },
    { href: "/resume", label: "المؤهلات", icon: FileText },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP HEADER & MOBILE TOP BAR
          ═══════════════════════════════════════════════════════════════════ */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
          scrolled
            ? "border-[rgba(150,180,210,0.18)] bg-[#0a0e16]/85 backdrop-blur-2xl shadow-xl shadow-black/40"
            : "border-transparent bg-gradient-to-b from-[#0a0e16]/90 to-transparent"
        )}
      >
        <nav
          className="container-shell flex h-[var(--nav-height)] items-center justify-between"
          aria-label="التنقل الرئيسي"
        >
          {/* Logo & Avatar */}
          <Link
            href="/"
            className="group flex items-center gap-3 py-1 px-2 rounded-2xl transition-all focus:outline-none"
          >
            <AymanAvatar size="sm" interactive={false} />

            <div className="flex flex-col text-right justify-center">
              <span className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors whitespace-nowrap">
                {profile.name}
              </span>
              <span className="text-[11px] font-mono text-teal-300/80 whitespace-nowrap">
                {profile.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(({ href, label }) => {
              const active =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white",
                    active &&
                      "bg-teal-400/15 text-teal-300 border border-teal-400/30 shadow-[0_0_12px_rgba(45,212,191,0.2)] font-semibold"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Top Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs font-mono font-bold text-teal-300 backdrop-blur-md hover:bg-teal-400/20 active:scale-95 transition"
            aria-label="فتح القائمة"
          >
            <Compass className="h-4 w-4" />
            <span>القائمة</span>
          </button>
        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE FLOATING BOTTOM DOCK BAR
          ═══════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="التنقل السفلي للهاتف"
        className="fixed bottom-4 inset-x-4 z-40 lg:hidden flex items-center justify-between rounded-full border border-teal-400/30 bg-[#0a0e16]/90 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
      >
        <div className="flex w-full items-center justify-around">
          {quickTabs.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative flex flex-col items-center justify-center py-1.5 px-3 rounded-full text-[10px] font-bold transition-all duration-300",
                  active
                    ? "text-teal-300 bg-teal-400/15 border border-teal-400/30 shadow-[0_0_12px_rgba(45,212,191,0.25)]"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Icon className={cn("h-4 w-4 mb-0.5", active ? "text-teal-300" : "text-slate-400")} />
                <span>{label}</span>
                {active && (
                  <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
                )}
              </Link>
            );
          })}

          {/* More Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "flex flex-col items-center justify-center py-1.5 px-3 rounded-full text-[10px] font-bold text-slate-400 hover:text-white transition",
              open && "text-teal-300 bg-teal-400/15 border border-teal-400/30"
            )}
          >
            <Compass className="h-4 w-4 mb-0.5 text-teal-400 animate-pulse" />
            <span>المزيد</span>
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE SLIDE-UP GLASSMORPHIC BOTTOM SHEET DRAWER
          ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-[#0a0e16]/85 backdrop-blur-md lg:hidden"
            />

            {/* Bottom Sheet Drawer Shell */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[88vh] overflow-y-auto rounded-t-3xl border-t border-teal-400/30 bg-[#121826]/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden flex flex-col justify-between"
            >
              <div>
                {/* Drawer Drag Indicator & Header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-1.5 rounded-full bg-white/20 mb-4" />
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AymanAvatar size="sm" interactive={false} />
                      <div className="text-right">
                        <h3 className="text-sm font-bold text-white leading-tight">
                          {profile.name}
                        </h3>
                        <p className="text-[11px] font-mono text-teal-300 mt-0.5">
                          {profile.title}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white"
                      aria-label="إغلاق القائمة"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links Grid */}
                <div className="grid gap-2">
                  {links.map(({ href, label, icon: Icon, desc }) => {
                    const active =
                      pathname === href || (href !== "/" && pathname.startsWith(href));
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200",
                          active
                            ? "border-teal-400/40 bg-teal-400/10 text-white"
                            : "border-white/5 bg-white/[0.02] text-slate-300 hover:bg-white/[0.06] hover:border-white/10"
                        )}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={cn(
                              "p-2.5 rounded-xl border",
                              active
                                ? "border-teal-400/40 bg-teal-400/20 text-teal-300"
                                : "border-white/10 bg-white/5 text-slate-400"
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-right">
                            <span className="block text-sm font-bold">{label}</span>
                            <span className="block text-xs text-slate-400">{desc}</span>
                          </div>
                        </div>
                        <ChevronLeft className="h-4 w-4 text-slate-500" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Contact Info */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-teal-300">
                  <Sparkles className="h-3 w-3" /> {profile.locationEn}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-teal-300 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
