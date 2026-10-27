import Link from "next/link";
import { GitBranch, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(150,180,210,0.14)] py-12 bg-[#0a0e16]/80 backdrop-blur-md relative z-20">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-right">
        <div>
          <p className="text-base font-bold text-white">{profile.name} · {profile.nameEn}</p>
          <p className="mt-1 text-sm text-slate-300">
            {profile.title} | {profile.location}
          </p>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            © {currentYear} {profile.nameEn}. جميع الحقوق محفوظة.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300 hover:bg-teal-400/10"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href={`tel:${profile.phone}`}
            aria-label="Phone"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300 hover:bg-teal-400/10"
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-purple-400/40 hover:text-purple-300 hover:bg-purple-400/10"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300 hover:bg-teal-400/10"
          >
            <GitBranch className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
