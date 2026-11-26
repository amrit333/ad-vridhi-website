import * as simpleIcons from "simple-icons";

interface SimpleIconDef {
  title: string;
  hex: string;
  path: string;
}

const ICON_MAP: Record<string, SimpleIconDef | undefined> = {
  meta: simpleIcons.siMeta,
  facebook: simpleIcons.siFacebook,
  instagram: simpleIcons.siInstagram,
  googleads: simpleIcons.siGoogleads,
  googletagmanager: simpleIcons.siGoogletagmanager,
  googleanalytics: simpleIcons.siGoogleanalytics,
  googlesearchconsole: simpleIcons.siGooglesearchconsole,
  semrush: simpleIcons.siSemrush,
  yoast: simpleIcons.siYoast,
  whatsapp: simpleIcons.siWhatsapp,
  n8n: simpleIcons.siN8n,
  openai: simpleIcons.siOpenai,
  anthropic: simpleIcons.siAnthropic,
  perplexity: simpleIcons.siPerplexity,
  elevenlabs: simpleIcons.siElevenlabs,
  canva: simpleIcons.siCanva,
  wordpress: simpleIcons.siWordpress,
  react: simpleIcons.siReact,
  nextdotjs: simpleIcons.siNextdotjs,
  typescript: simpleIcons.siTypescript,
  tailwindcss: simpleIcons.siTailwindcss,
  github: simpleIcons.siGithub,
  vercel: simpleIcons.siVercel,
  google: simpleIcons.siGoogle,
};

export function ToolBadgeIcon({
  iconSlug,
  fallbackBadge,
  label,
}: {
  iconSlug?: string;
  fallbackBadge: string;
  label: string;
}) {
  const icon = iconSlug ? ICON_MAP[iconSlug] : undefined;

  if (icon) {
    return (
      <span
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lavender/70 p-2"
        title={label}
      >
        <svg
          role="img"
          aria-label={label}
          viewBox="0 0 24 24"
          className="h-5 w-5"
          style={{ fill: `#${icon.hex}` }}
        >
          <path d={icon.path} />
        </svg>
      </span>
    );
  }

  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-electric font-display text-xs font-extrabold tracking-tight text-white"
      aria-label={label}
    >
      {fallbackBadge}
    </span>
  );
}
