import { NextResponse } from "next/server";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";

const leads: LeadFormValues[] = [];

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = leadFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    leads.push(parsed.data);
    console.info("[lead]", {
      name: parsed.data.name,
      email: parsed.data.email,
      availability: parsed.data.availability,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[lead] submission failed", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
