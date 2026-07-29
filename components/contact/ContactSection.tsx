"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
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

        if (!res.ok) {
          throw new Error(data.message || "Failed to send message");
        }

        if (!data.success) {
          throw new Error(data.message || "Failed to send message");
        }

        form.reset();
        return data;
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully.",
        error: (err) => err.message || "Something went wrong.",
      },
    );

    setLoading(false);
  }

  return (
    <section className="portfolio-section scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <p className="section-kicker">{"// Contact me"}</p>
        <div className="mt-7 grid gap-10 lg:grid-cols-[0.7fr_1.15fr_0.65fr] lg:gap-12">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em]">
              Let&apos;s build something <span className="text-orange">intelligent together.</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Open to opportunities, collaborations, and great conversations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
            <MinimalInput name="name" placeholder="Name" />
            <MinimalInput name="email" type="email" placeholder="Email" />
            <MinimalTextarea name="message" placeholder="Message" className="sm:col-span-2" />
            <button
              type="submit"
              disabled={loading}
              className={cn(
                "primary-action justify-center sm:col-span-2",
                "disabled:opacity-50",
              )}
            >
              {loading ? "Sending..." : "Send message"}
              <Send className="size-4" />
            </button>
          </form>

          <div>
            <h3 className="text-base font-black">Get in touch</h3>
            <div className="mt-6 flex flex-col items-start gap-5">
              <a className="social-link text-base" href="mailto:francisnelson.dev@gmail.com">
                <Mail className="size-6 text-orange" /> Email
              </a>
              <a className="social-link text-base" href="https://github.com/fransheeshco" target="_blank" rel="noreferrer">
                <FaGithub className="size-6 text-orange" /> GitHub
              </a>
              <a className="social-link text-base" href="https://www.linkedin.com/in/francis-nelson-cejas-b10ba73a9/" target="_blank" rel="noreferrer">
                <FaLinkedin className="size-6 text-orange" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MINIMAL INPUTS ---------------- */

function MinimalInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      required
      className={cn(
        "h-11 w-full border bg-background px-3 text-sm",
        "border-border",
        "outline-none transition-all duration-200",
        "focus:border-orange",
        "placeholder:text-muted-foreground",
        className,
      )}
    />
  );
}

function MinimalTextarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      required
      rows={5}
      className={cn(
        "w-full border bg-background",
        "border-border",
        "px-3 py-3 text-sm resize-none",
        "outline-none transition-all duration-200",
        "focus:border-orange",
        "placeholder:text-muted-foreground",
        className,
      )}
    />
  );
}
