"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICES } from "@/data/site-data";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      businessEmail: String(formData.get("businessEmail") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      companyName: String(formData.get("companyName") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      projectDetails: String(formData.get("projectDetails") || "").trim(),
      companyFax: String(formData.get("companyFax") || "").trim(), // honeypot
    };

    if (!payload.fullName || !payload.businessEmail || !payload.phone || !payload.companyName) {
      setStatus({
        type: "error",
        message: "Please complete your name, business email, phone number, and company name.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit enquiry right now.");
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "Thank you! Your Ad-Vridhi enquiry has been received. Our team will respond within 1 business day.",
      });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Submission failed. Please try again or reach us on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot spam protection field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyFax">Leave empty</label>
        <input id="companyFax" name="companyFax" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="businessEmail" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Business Email *
          </label>
          <input
            id="businessEmail"
            name="businessEmail"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765-43210"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Company Name *
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            placeholder="Your company or brand"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="website" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Website URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="industry" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            type="text"
            placeholder="e.g. Real Estate, D2C, Education, SaaS"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Required Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          >
            {SERVICES.map((srv) => (
              <option key={srv.slug} value={srv.title}>
                {srv.title}
              </option>
            ))}
            <option value="Complete Website + Growth Retainer">Complete Website + Growth Retainer</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
            Estimated Monthly Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
          >
            <option value="Under ₹25,000 / month">Under ₹25,000 / month</option>
            <option value="₹25,000 – ₹60,000 / month">₹25,000 – ₹60,000 / month</option>
            <option value="₹60,000 – ₹1,50,000 / month">₹60,000 – ₹1,50,000 / month</option>
            <option value="₹1,50,000+ / month or Custom Project">₹1,50,000+ / month or Custom Project</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectDetails" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-deep">
          Project Details &amp; Goals
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={4}
          placeholder="Tell us about your current bottlenecks, target market, or timeline..."
          className="w-full rounded-xl border border-brand-lavender bg-[#FAF8FF] px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-purple focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft transition hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        <span>{submitting ? "Sending Enquiry..." : "Start Your Project"}</span>
        <Send className="h-4 w-4" />
      </button>

      {status ? (
        <div
          role="status"
          className={`flex items-start gap-2.5 rounded-2xl border p-4 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
          )}
          <span>{status.message}</span>
        </div>
      ) : null}
    </form>
  );
}
