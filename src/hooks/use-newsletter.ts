"use client";
import { useState } from "react";
type Status = "idle" | "loading" | "success" | "error";

export function useNewsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isGmail = email.endsWith("@gmail.com");
  const canSubmit = isGmail && email.length > 0 && name.length > 0;

  async function handleSubmit() {
    if (!canSubmit) {
      setMessage("Please enter a valid @gmail.com address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    // --- Auto-collect metadata ---
    const ua = navigator.userAgent;

    // Browser detection
    const browser = /Edg/.test(ua)
      ? "Edge"
      : /OPR|Opera/.test(ua)
        ? "Opera"
        : /Chrome/.test(ua)
          ? "Chrome"
          : /Safari/.test(ua)
            ? "Safari"
            : /Firefox/.test(ua)
              ? "Firefox"
              : "Unknown";

    // OS detection
    const os = /Windows NT 10/.test(ua)
      ? "Windows 10/11"
      : /Windows NT 6\.1/.test(ua)
        ? "Windows 7"
        : /Windows/.test(ua)
          ? "Windows"
          : /Mac OS X/.test(ua)
            ? "macOS"
            : /Android/.test(ua)
              ? "Android"
              : /iPhone|iPad/.test(ua)
                ? "iOS"
                : /Linux/.test(ua)
                  ? "Linux"
                  : "Unknown";

    // Location via free IP geolocation (no key needed)
    let location = "Unknown";
    try {
      const geo = await fetch("https://ipapi.co/json/").then((r) => r.json());
      location = [geo.city, geo.region, geo.country_name]
        .filter(Boolean)
        .join(", ");
    } catch {
      // silent fail — location stays "Unknown"
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, location, browser, os }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setMessage("You're in! Check your inbox for updates.");
        setName("");
        setEmail("");
      }
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    status,
    setStatus,
    message,
    setMessage,
    isGmail,
    canSubmit,
    handleSubmit,
  };
}
