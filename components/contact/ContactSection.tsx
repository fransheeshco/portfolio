"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
        if (!res.ok) throw new Error(data.error || "Failed to send");
        form.reset();
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully.",
        error: (err) => err.message || "Failed to send message.",
      }
    );

    setLoading(false);
  }

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-xl space-y-10">
        
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold leading-snug">
            Let’s build something meaningful together.
          </h2>

          <p className="text-sm text-muted-foreground">
            Have an idea, project, or just want to connect? Send me a message.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <MinimalInput name="name" placeholder="Your Name" />
          <MinimalInput name="email" type="email" placeholder="Your Email" />
          <MinimalTextarea name="message" placeholder="Your Message" />

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full mt-4 px-4 py-2 text-sm font-medium transition",
              "border border-primary text-primary",
              "hover:bg-primary hover:text-primary-foreground",
              "disabled:opacity-50"
            )}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

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
        "w-full bg-transparent border-0 border-b-2",
        "border-border", // theme-aware base line
        "px-0 py-2 text-sm",
        "outline-none transition-all duration-200",
        "focus:border-primary", // consistent in both themes
        "placeholder:text-muted-foreground",
        className
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
        "w-full bg-transparent border-0 border-b-2",
        "border-border",
        "px-0 py-2 text-sm resize-none",
        "outline-none transition-all duration-200",
        "focus:border-primary",
        "placeholder:text-muted-foreground",
        className
      )}
    />
  );
}