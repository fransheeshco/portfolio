"use client";

import { memo, type FormEvent, useState } from "react";
import { toast } from "sonner";

export const ContactForm = memo(function ContactForm() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    try {
      await toast.promise(
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: formData.get("name"), email: formData.get("email"), message: formData.get("message") }),
        }).then(async (response) => {
          const data = await response.json();
          if (!response.ok || !data.success) throw new Error(data.message || "Failed to send message");
          form.reset();
          return data;
        }),
        { loading: "Sending message...", success: "Message sent successfully.", error: (error) => error.message || "Something went wrong." },
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Your name</span><input name="name" required autoComplete="name" /></label>
      <label><span>Email address</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span>What are you building?</span><textarea name="message" required rows={5} /></label>
      <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"}</button>
    </form>
  );
});
