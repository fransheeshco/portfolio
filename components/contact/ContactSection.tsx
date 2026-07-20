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
    <section id="contact" className="w-full bg-[linear-gradient(180deg,transparent,rgba(249,115,22,0.06))] px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-xl space-y-10 rounded-[2rem] border border-orange/10 bg-card/80 p-7 shadow-[0_18px_55px_rgba(41,27,14,0.08)] sm:p-10">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black leading-snug">
            You got something you want to <span className="text-orange">make?</span>
          </h2>

          <p className="text-sm text-muted-foreground">
            Or maybe just want to debate? Don't be shy, send me an email.
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
              "rounded-full border border-orange bg-orange text-white shadow-[0_12px_28px_rgba(234,88,12,0.2)]",
              "hover:bg-orange-dark",
              "disabled:opacity-50",
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
        "w-full bg-transparent border-0 border-b-2",
        "border-border",
        "px-0 py-2 text-sm resize-none",
        "outline-none transition-all duration-200",
        "focus:border-orange",
        "placeholder:text-muted-foreground",
        className,
      )}
    />
  );
}
