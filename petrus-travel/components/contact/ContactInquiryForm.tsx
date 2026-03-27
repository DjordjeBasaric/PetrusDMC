"use client";

import { useState } from "react";
import type { ContactFormContent } from "@/types/content";
import type { Language } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";

interface ContactInquiryFormProps {
  copy: ContactFormContent;
  lang: Language;
}

export function ContactInquiryForm({ copy, lang }: ContactInquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<"generic" | "not_configured" | null>(
    null,
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const website = fd.get("website");
    if (website && String(website).trim()) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorKind(null);

    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
      website: "",
      locale: lang,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      if (data.error === "not_configured") {
        setErrorKind("not_configured");
      } else {
        setErrorKind("generic");
      }
      setStatus("error");
    } catch {
      setErrorKind("generic");
      setStatus("error");
    }
  }

  const labelClass =
    "block font-montserrat text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50";
  const inputClass =
    "mt-2 w-full rounded-lg border border-burgundy/15 bg-white px-4 py-3 font-montserrat text-base text-black outline-none ring-burgundy/0 transition-[box-shadow,border-color] placeholder:text-black/35 focus:border-burgundy/40 focus:ring-2 focus:ring-burgundy/20";

  return (
    <div className="mt-14 border-t border-burgundy/15 pt-14">
      <h3 className="font-playfair text-2xl font-semibold text-black sm:text-3xl">
        {copy.title}
      </h3>
      <p className="mt-2 font-montserrat text-sm text-black/55">{copy.privacyHint}</p>

      <form
        className="relative mt-8 space-y-6"
        onSubmit={handleSubmit}
        noValidate
        aria-label={copy.title}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              {copy.nameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={200}
              autoComplete="name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              {copy.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={320}
              autoComplete="email"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            {copy.companyLabel}{" "}
            <span className="font-normal normal-case tracking-normal text-black/40">
              ({copy.companyOptionalHint})
            </span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={200}
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            {copy.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={8000}
            rows={6}
            className={`${inputClass} resize-y min-h-[140px]`}
          />
        </div>

        <div className="sr-only">
          <label htmlFor="contact-website">{copy.honeypotAriaLabel}</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-lg bg-burgundy px-8 py-3.5 font-montserrat text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? copy.sendingLabel : copy.submitLabel}
          </button>
        </div>

        <div role="status" aria-live="polite" className="font-montserrat text-sm">
          {status === "success" ? (
            <p className="text-black/80">{copy.successMessage}</p>
          ) : null}
          {status === "error" && errorKind === "not_configured" ? (
            <p className="text-burgundy">{copy.errorNotConfigured}</p>
          ) : null}
          {status === "error" && errorKind === "generic" ? (
            <p className="text-burgundy">{copy.errorMessage}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
