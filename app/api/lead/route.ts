import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  timeline?: string;
  details?: string;
};

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = data.name?.trim();
  const phone = data.phone?.trim();
  const email = data.email?.trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and email are required." },
      { status: 422 },
    );
  }

  // ──────────────────────────────────────────────────────────────
  // Integration point: forward this lead to email / CRM / webhook.
  // e.g. Resend, SendGrid, HubSpot, or a Vercel-connected service.
  // For now we log the qualified lead so the form is fully functional
  // and ready to wire to a delivery provider.
  // ──────────────────────────────────────────────────────────────
  console.log("[Meca Homes] New lead:", {
    name,
    phone,
    email,
    projectType: data.projectType,
    location: data.location,
    budget: data.budget,
    timeline: data.timeline,
    details: data.details,
  });

  return NextResponse.json({ ok: true });
}
