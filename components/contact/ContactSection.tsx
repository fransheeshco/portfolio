"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail, Send } from "lucide-react";
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

    try {
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="portfolio-section contact-section scroll-mt-20">
      <div className="contact-invite">
        <h2>Have an awesome project idea? <span>Let&apos;s discuss.</span></h2>
        <p>Tell me what you&apos;re building, where it&apos;s stuck, or what you want to explore.</p>
        <a href="mailto:francisnelson.dev@gmail.com" className="contact-email">
          <Mail className="size-5" aria-hidden="true" />
          francisnelson.dev@gmail.com
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>

      <div className="skills-ribbon" aria-hidden="true">
        <div>Web development <span>•</span> AI systems <span>•</span> API design <span>•</span> Data visualization <span>•</span> Product thinking <span>•</span></div>
      </div>

      <div className="contact-footer-wrap">
        <div className="contact-footer">
          <div className="contact-footer-heading">
            <h2>Let&apos;s connect there</h2>
            <a href="mailto:francisnelson.dev@gmail.com" className="accent-action">Hire me <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </div>

          <div className="contact-footer-grid">
            <div className="footer-profile">
              <a href="#about" className="footer-brand"><span>FC</span> FRANCIS</a>
              <p>Computer science student building practical software and exploring AI, systems, and ideas worth shipping.</p>
              <div className="footer-socials">
                <a href="https://github.com/fransheeshco" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/francis-nelson-cejas-b10ba73a9/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="mailto:francisnelson.dev@gmail.com" aria-label="Email"><Mail /></a>
              </div>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <h3>Navigation</h3>
              <a href="#about">Home</a>
              <a href="#tech-stack">Services</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certificates</a>
            </nav>

            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a message</h3>
              <div className="contact-fields">
                <MinimalInput name="name" placeholder="Your name" />
                <MinimalInput name="email" type="email" placeholder="Email address" />
                <MinimalTextarea name="message" placeholder="What would you like to build?" />
                <button type="submit" disabled={loading} className={cn("contact-submit", "disabled:opacity-50")}>
                  {loading ? "Sending..." : "Send message"}
                  <Send className="size-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Francis Cejas</span>
            <span>Designed and built with intention.</span>
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
      aria-label={props["aria-label"] ?? props.placeholder}
      required
      className={cn(
        "h-12 w-full rounded-xl border border-white/20 bg-white/8 px-4 text-sm text-white",
        "outline-none transition duration-200 focus:border-[var(--yellow)]",
        "placeholder:text-white/55",
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
      aria-label={props["aria-label"] ?? props.placeholder}
      required
      rows={5}
      className={cn(
        "w-full resize-none rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-sm text-white",
        "outline-none transition duration-200 focus:border-[var(--yellow)]",
        "placeholder:text-white/55",
        className,
      )}
    />
  );
}
