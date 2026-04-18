import { Resend } from "resend";
import { EmailTemplate } from "@/app/api/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL!,
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email, 
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}