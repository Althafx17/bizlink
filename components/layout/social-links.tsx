import { AtSign, Camera, Music2 } from "lucide-react";
import { socialLinks } from "@/content/brand";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const icons = { Instagram: Camera, Threads: AtSign, TikTok: Music2, Facebook: FacebookIcon };

export function SocialLinks({ featured = false }: { featured?: boolean }) {
  return (
    <ul className={featured ? "grid w-full grid-cols-2 gap-3 sm:grid-cols-4" : "flex flex-wrap gap-2"} aria-label="BizLink social media">
      {socialLinks.map(({ name, href }) => {
        const Icon = icons[name as keyof typeof icons] || FacebookIcon;
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Follow BizLink on ${name}`}
              className={featured
                ? "group inline-flex min-h-[76px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-white/[0.07] px-4 py-3 text-sm font-bold text-sky-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] transition-all hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/15 hover:text-white hover:shadow-[0_12px_28px_rgba(0,180,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                : "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-current/25 px-3 text-sm hover:underline focus-visible:outline-current transition-colors"}
            >
              <span className={featured ? "flex size-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 transition-colors group-hover:bg-cyan-300 group-hover:text-[#071426]" : undefined}>
                <Icon size={featured ? 19 : 16} />
              </span>
              <span>{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
