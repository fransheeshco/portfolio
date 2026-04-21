export const runtime = "nodejs";

import { Resend } from "resend";
import { EmailTemplate } from "@/app/api/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL!,
      subject: `New message from ${name}`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: error?.message || "Email failed to send",
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (err: any) {
    console.error("API crash:", err);

    return Response.json(
      {
        success: false,
        message: err?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}