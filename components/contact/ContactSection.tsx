"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    setLoading(true);

    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to send");

        form.reset();
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully.",
        error: (err) => err.message || "Failed to send message.",
      },
    );

    setLoading(false);
  }

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-5xl space-y-10">
        <h2 className="text-center text-3xl font-bold">Contact</h2>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* LEFT - FORM */}
          <div className="w-full md:flex-[3]">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  For collaborations, inquiries, or just a chat — feel free to
                  send a message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  autoComplete="off"
                />

                {/* Name */}
                <div className="flex gap-3">
                  <Input name="firstName" placeholder="First name" />
                  <Input name="lastName" placeholder="Last name" />
                </div>

                {/* Email */}
                <Input name="email" type="email" placeholder="Email" />

                {/* Message */}
                <Textarea name="message" placeholder="Message" />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "w-full rounded-md px-4 py-2 text-sm font-medium transition",
                    "bg-primary text-primary-foreground",
                    "hover:opacity-90",
                    "disabled:opacity-50",
                  )}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT - LINKS */}
          <div className="w-full md:flex-[2] space-y-2 md:pl-8">
            <ContactItem
              icon={<FaEnvelopeOpen />}
              label="Email"
              value="francisnelson.dev@gmail.com"
              href="mailto:francisnelson.dev@gmail.com"
            />

            <ContactItem
              icon={<FaFacebook />}
              label="Facebook"
              value="Francis Nelson Cejas"
              href="https://www.facebook.com/francisnelson.cejas"
            />

            <ContactItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="Francis Nelson Cejas"
              href="https://www.linkedin.com/in/francis-nelson-cejas-b10ba73a9/"
            />

            <ContactItem
              icon={<FaGithub />}
              label="GitHub"
              value="fransheeshco"
              href="https://github.com/fransheeshco"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INPUT COMPONENTS (THEME CONSISTENT) ---------------- */

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      required
      className={cn(
        "w-full rounded-md border bg-background px-3 py-2 text-sm",
        "outline-none transition",
        "border-input",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
    />
  );
}

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      required
      rows={6}
      className={cn(
        "w-full resize-none rounded-md border bg-background px-3 py-2 text-sm",
        "outline-none transition",
        "border-input",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
    />
  );
}

/* ---------------- CONTACT ITEM ---------------- */

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-md p-3 transition hover:bg-muted"
    >
      <div className="text-primary">{icon}</div>

      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </a>
  );
}
