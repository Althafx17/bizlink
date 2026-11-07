import { AtSign, Camera, Music2 } from "lucide-react";
import { socialLinks } from "@/content/brand";

const icons = { Instagram: Camera, Threads: AtSign, TikTok: Music2 };

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="BizLink social media">
      {socialLinks.map(({ name, href }) => {
        const Icon = name === "Facebook" ? null : icons[name];
        return (
          <li key={name}>
            <a href={href} aria-label={name} className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-current/25 px-3 text-sm hover:underline focus-visible:outline-current">
              {Icon ? <Icon size={17} aria-hidden="true" /> : <span aria-hidden="true" className="text-lg font-bold">f</span>}
              <span>{name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
