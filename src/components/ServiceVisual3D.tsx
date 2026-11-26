import { ServiceItem } from "@/data/site-data";

export function ServiceVisual3D({ type }: { type: ServiceItem["visualType"] }) {
  switch (type) {
    case "target":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="tGrad" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B70F5" />
              <stop offset="1" stopColor="#5B6CFF" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="28" fill="url(#tGrad)" />
          <circle cx="40" cy="40" r="19" fill="#FFFFFF" />
          <circle cx="40" cy="40" r="10" fill="#F58206" />
          <path d="M58 14L41 39" stroke="#39208C" strokeWidth="4" strokeLinecap="round" />
          <path d="M52 14H62V24" fill="#FFB52E" />
        </svg>
      );
    case "funnel":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="fGrad" x1="12" y1="12" x2="68" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55D9EA" />
              <stop offset="1" stopColor="#5B6CFF" />
            </linearGradient>
          </defs>
          <path d="M14 18H66L47 43V62L33 67V43L14 18Z" fill="url(#fGrad)" />
          <circle cx="29" cy="14" r="5" fill="#F8D7F4" />
          <circle cx="44" cy="11" r="6" fill="#FFB52E" />
          <circle cx="56" cy="15" r="4" fill="#8B70F5" />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="mGrad" x1="14" y1="20" x2="66" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F472B6" />
              <stop offset="1" stopColor="#8B70F5" />
            </linearGradient>
          </defs>
          <path d="M18 34L54 18V56L18 44V34Z" fill="url(#mGrad)" />
          <rect x="23" y="45" width="9" height="17" rx="4" fill="#39208C" />
          <path d="M62 28C66 32 66 42 62 46" stroke="#55D9EA" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "graph":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <rect x="14" y="42" width="11" height="22" rx="4" fill="#C4B5FD" />
          <rect x="30" y="30" width="11" height="34" rx="4" fill="#8B70F5" />
          <rect x="46" y="18" width="11" height="46" rx="4" fill="#5B6CFF" />
          <path d="M16 32L35 20L52 12L66 10" stroke="#F58206" strokeWidth="4" strokeLinecap="round" />
          <circle cx="66" cy="10" r="5" fill="#FFB52E" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <rect x="12" y="16" width="40" height="28" rx="12" fill="#8B70F5" />
          <rect x="28" y="36" width="40" height="28" rx="12" fill="#F58206" />
          <circle cx="40" cy="50" r="3" fill="#FFFFFF" />
          <circle cx="48" cy="50" r="3" fill="#FFFFFF" />
          <circle cx="56" cy="50" r="3" fill="#FFFFFF" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="aiGrad" x1="15" y1="15" x2="65" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55D9EA" />
              <stop offset="0.5" stopColor="#8B70F5" />
              <stop offset="1" stopColor="#F472B6" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="24" fill="url(#aiGrad)" />
          <path d="M40 22L44 36L58 40L44 44L40 58L36 44L22 40L36 36L40 22Z" fill="#FFFFFF" />
        </svg>
      );
    case "laptop":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <rect x="14" y="18" width="52" height="34" rx="6" fill="#39208C" />
          <rect x="19" y="23" width="42" height="24" rx="3" fill="#F0EAFE" />
          <rect x="24" y="28" width="18" height="5" rx="2" fill="#8B70F5" />
          <rect x="24" y="36" width="30" height="4" rx="2" fill="#55D9EA" />
          <path d="M8 54H72L66 62H14L8 54Z" fill="#8B70F5" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-md" fill="none" aria-hidden="true">
          <rect x="10" y="20" width="60" height="40" rx="12" fill="#EF4444" />
          <path d="M35 31L52 40L35 49V31Z" fill="#FFFFFF" />
          <circle cx="62" cy="18" r="7" fill="#FFB52E" />
        </svg>
      );
  }
}
