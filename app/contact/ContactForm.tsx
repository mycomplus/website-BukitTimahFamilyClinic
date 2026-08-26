"use client";

import { FormEvent, useState } from "react";

const endpoint = "https://formspree.io/f/xgawgpzo";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const isSubmitting = submitState === "submitting";

  return (
    <form className="contact-form" action={endpoint} method="POST" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Phone number
        <input name="phone" type="tel" autoComplete="tel" required placeholder="Your phone number" />
      </label>
      <label>
        Email address
        <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </label>
      <label>
        Enquiry type
        <select name="enquiryType" defaultValue="Appointment enquiry" required>
          <option>Appointment enquiry</option>
          <option>General enquiry</option>
          <option>Medical services</option>
          <option>Health screening</option>
          <option>Vaccination</option>
          <option>Other</option>
        </select>
      </label>
      <label className="form-wide">
        Message
        <textarea name="message" required rows={5} placeholder="How can our clinic help?" />
      </label>
      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-primary form-wide" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending enquiry…" : "Send enquiry"}
      </button>
      <div className="form-status form-wide" aria-live="polite">
        {submitState === "success" ? <p className="form-success">Thank you. Your enquiry has been sent to our clinic team.</p> : null}
        {submitState === "error" ? <p className="form-error">We could not send your enquiry. Please try again or call the clinic directly.</p> : null}
      </div>
    </form>
  );
}
