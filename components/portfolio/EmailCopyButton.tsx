"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard.");
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <button className="button-secondary" type="button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied" : "Copy email"}</button>;
}
