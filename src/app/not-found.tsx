import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-gradient-to-b from-brand-lavender/40 to-white px-5 py-20 text-center">
      <div className="max-w-lg rounded-[32px] border border-brand-lavender bg-white p-10 shadow-soft">
        <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
          404 • Page Not Found
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-brand-ink">
          Let&apos;s Get You Back On Track.
        </h1>
        <p className="mt-3 text-sm text-brand-muted">
          The page you are looking for may have moved or does not exist.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Ad-Vridhi Home</span>
        </Link>
      </div>
    </section>
  );
}
