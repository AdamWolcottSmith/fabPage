// Serverless function for contact form submissions
// Sends email via Resend — deployed as a Vercel serverless function

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Input length limits to prevent resource exhaustion
const MAX_NAME = 100;
const MAX_EMAIL = 254; // RFC 5321
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

// Simple email format check
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Allowed origins — add your production domain here
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://wolcott.works",
  "https://www.wolcott.works",
];

// Escape HTML to prevent injection in the email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate Content-Type
  const contentType = req.headers["content-type"];
  if (!contentType || !contentType.includes("application/json")) {
    return res
      .status(415)
      .json({ error: "Content-Type must be application/json" });
  }

  // CSRF protection — verify request comes from our site
  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Validate environment variables exist
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_EMAIL_FROM ||
    !process.env.CONTACT_EMAIL_TO
  ) {
    console.error("[contact] Missing required environment variables");
    return res.status(500).json({ error: "Server configuration error." });
  }

  const { name, email, subject, message, _honeypot } = req.body;

  // Honeypot check — bots fill hidden fields, real users don't.
  // Return silent success so bots think it worked.
  if (_honeypot) {
    return res.status(200).json({ success: true });
  }

  // Validate required fields and max lengths
  const errors: string[] = [];

  if (!name || !name.trim()) {
    errors.push("Name is required");
  } else if (name.trim().length > MAX_NAME) {
    errors.push("Name is too long");
  }

  if (!email || !email.trim()) {
    errors.push("Email is required");
  } else if (email.trim().length > MAX_EMAIL) {
    errors.push("Email is too long");
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push("Email format is invalid");
  } else if (/[\r\n]/.test(email.trim())) {
    // Prevent email header injection via newlines
    errors.push("Email contains invalid characters");
  }

  if (!subject || !subject.trim()) {
    errors.push("Subject is required");
  } else if (subject.trim().length > MAX_SUBJECT) {
    errors.push("Subject is too long");
  }

  if (!message || !message.trim()) {
    errors.push("Message is required");
  } else if (message.trim().length > MAX_MESSAGE) {
    errors.push("Message is too long");
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(", ") });
  }

  // Send the email via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email.trim(),
      subject: `Contact Form: ${subject.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject.trim())}</p>
        <hr />
        <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
}
