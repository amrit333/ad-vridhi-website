import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot anti-spam trap
    if (body.companyFax && String(body.companyFax).trim().length > 0) {
      return NextResponse.json({ ok: true, message: "Thank you for your enquiry." });
    }

    const fullName = String(body.fullName || "").trim();
    const businessEmail = String(body.businessEmail || "").trim();
    const phone = String(body.phone || "").trim();
    const companyName = String(body.companyName || "").trim();

    if (!fullName || !businessEmail || !phone || !companyName) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Optional server-side notification hook (Resend / Formspree / Webhook)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "ad-vridhi-website",
          submittedAt: new Date().toISOString(),
          fullName,
          businessEmail,
          phone,
          companyName,
          website: body.website || "",
          industry: body.industry || "",
          service: body.service || "",
          budget: body.budget || "",
          projectDetails: body.projectDetails || "",
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      message: `Thank you, ${fullName}. Your enquiry for ${companyName} has been received. Founder Amritpal Singh will reply at ${businessEmail} within 1 business day.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please try again." },
      { status: 400 }
    );
  }
}
