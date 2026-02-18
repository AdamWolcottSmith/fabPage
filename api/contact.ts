// Serverless function for contact form submissions
// Sends email via Resend — deployed as a Vercel serverless function

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Simple email format check — no need for a library on a 4-field form
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const { name, email, subject, message, _honeypot } = req.body;

  // Honeypot check — bots fill hidden fields, real users don't.
  // Return silent success so bots think it worked.
  if (_honeypot) {
    return res.status(200).json({ success: true });
  }

  // Validate required fields
  const errors: string[] = [];

  if (!name || !name.trim()) {
    errors.push("Name is required");
  }

  if (!email || !email.trim()) {
    errors.push("Email is required");
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push("Email format is invalid");
  }

  if (!subject || !subject.trim()) {
    errors.push("Subject is required");
  }

  if (!message || !message.trim()) {
    errors.push("Message is required");
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(", ") });
  }

  // Send the email via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email.trim(),
      subject: `Contact Form: ${escapeHtml(subject.trim())}`,
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
  } catch {
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
}
