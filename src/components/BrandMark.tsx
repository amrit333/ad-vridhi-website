import Link from "next/link";

interface BrandMarkProps {
  size?: "header" | "footer";
}

export function BrandMark({ size = "header" }: BrandMarkProps) {
  const isFooter = size === "footer";
  const imgDimension = isFooter ? 72 : 48;

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3.5 rounded-xl p-1.5 -ml-1.5 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      aria-label="Ad-Vridhi Home"
    >
      <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white p-1">
        {/* Exact unmodified official uploaded logo preserving 1:1 proportions */}
        <img
          src="/assets/ad-vridhi-logo.jpg"
          alt="Ad-Vridhi official logo"
          width={1024}
          height={1024}
          style={{ width: imgDimension, height: imgDimension }}
          className="aspect-square rounded-md object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display font-extrabold tracking-tight text-brand-ink ${
            isFooter ? "text-xl" : "text-lg"
          }`}
        >
          Ad-Vridhi
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">
          Digital Growth Studio
        </span>
      </span>
    </Link>
  );
}
