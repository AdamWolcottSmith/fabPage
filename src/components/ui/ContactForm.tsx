import { useState } from "react";

// Simple email format check — matches the server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form state machine: idle → submitting → success/error
type FormStatus = "idle" | "submitting" | "success" | "error";

// Shape of the form data sent to the API
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot: string;
}

// Tracks which fields have validation errors
interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field — hidden from real users, bots auto-fill it
    _honeypot: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Track which fields have validation errors for aria-invalid
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the field error when the user starts typing
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FieldErrors];
        return next;
      });
    }
  };

  // Client-side validation — checks required fields and email format
  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run client-side validation first
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);

      // Focus the first field with an error so the user sees it
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");

      // Reset the form after 5 seconds so the user can send another message
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          _honeypot: "",
        });
        setFieldErrors({});
      }, 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.",
      );
    }
  };

  // Success state — brief confirmation, auto-resets
  if (status === "success") {
    return (
      <div className="border-3 border-brutal-border p-8">
        <h3 className="mb-4 text-2xl font-bold uppercase">MESSAGE SENT</h3>
        <p className="text-brutal-muted">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Server error banner */}
      {status === "error" && (
        <div
          role="alert"
          className="border-3 border-brutal-border bg-brutal-bg p-4 text-sm font-bold uppercase"
        >
          {errorMessage}
        </div>
      )}

      {/* Honeypot field — visually hidden, only bots fill this */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          opacity: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <label htmlFor="_honeypot">Leave this empty</label>
        <input
          type="text"
          id="_honeypot"
          name="_honeypot"
          value={formData._honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-brutal-muted"
        >
          NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          placeholder="Your name"
          className="w-full border-3 border-brutal-border bg-transparent px-4 py-3 font-mono text-sm focus:outline-3 focus:outline-current"
        />
        {fieldErrors.name && (
          <p
            id="name-error"
            role="alert"
            className="mt-1 text-xs font-bold uppercase"
          >
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-brutal-muted"
        >
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          placeholder="your@email.com"
          className="w-full border-3 border-brutal-border bg-transparent px-4 py-3 font-mono text-sm focus:outline-3 focus:outline-current"
        />
        {fieldErrors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-xs font-bold uppercase"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-brutal-muted"
        >
          SUBJECT
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          placeholder="What's this about?"
          className="w-full border-3 border-brutal-border bg-transparent px-4 py-3 font-mono text-sm focus:outline-3 focus:outline-current"
        />
        {fieldErrors.subject && (
          <p
            id="subject-error"
            role="alert"
            className="mt-1 text-xs font-bold uppercase"
          >
            {fieldErrors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold uppercase tracking-wide text-brutal-muted"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          placeholder="Tell me about your project..."
          rows={8}
          className="w-full resize-y border-3 border-brutal-border bg-transparent px-4 py-3 font-mono text-sm leading-relaxed focus:outline-3 focus:outline-current"
        />
        {fieldErrors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1 text-xs font-bold uppercase"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="border-3 border-brutal-border px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-brutal-text hover:text-brutal-bg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
};

export default ContactForm;
