import { useRef, useState, type FormEvent } from "react";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { profile } from "../data/portfolio";
import { cn } from "../utils/cn";

/**
 * Optional form backend. Set VITE_FORM_ENDPOINT (e.g. https://formspree.io/f/xxxx) in a
 * `.env` file to POST submissions as JSON. Without it, the form falls back to opening
 * the visitor's email client — and says so honestly instead of claiming "sent".
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim();

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; text: string }
  | { kind: "info"; text: string }
  | { kind: "error"; text: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  const name = v.name.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length < 2) e.name = "Name must be at least 2 characters.";
  else if (name.length > 80) e.name = "Name must be under 80 characters.";

  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "That doesn't look like a valid email address.";

  const msg = v.message.trim();
  if (!msg) e.message = "Please write a message.";
  else if (msg.length < 10) e.message = `Message is a bit short — ${10 - msg.length} more character(s) please.`;
  else if (msg.length > 2000) e.message = "Message must be under 2000 characters.";
  return e;
}

const field =
  "w-full rounded-xl border bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-all focus:border-ink focus:bg-paper focus:ring-4 focus:ring-accent-bright/15 focus:outline-none";

export default function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const honeypot = useRef<HTMLInputElement>(null);
  const loadedAt = useRef(Date.now());

  const set = (k: keyof Values, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors((prev) => ({ ...prev, [k]: validate(next)[k] }));
    if (status.kind === "error" || status.kind === "success") setStatus({ kind: "idle" });
  };

  const blur = (k: keyof Values) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors((prev) => ({ ...prev, [k]: validate(values)[k] }));
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status.kind === "loading") return;

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    const firstBad = (Object.keys(found) as (keyof Values)[])[0];
    if (firstBad) {
      (document.getElementById(`cf-${firstBad}`) as HTMLElement | null)?.focus();
      return;
    }

    // Spam protection: hidden honeypot field and a minimum fill time. Bots get a silent no-op.
    if (honeypot.current?.value) {
      // Only automated form-fillers populate the hidden field; nothing is sent.
      setStatus({ kind: "idle" });
      return;
    }
    if (Date.now() - loadedAt.current < 2500) {
      setStatus({ kind: "error", text: "That was very quick — please try sending again in a moment." });
      return;
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({
        kind: "info",
        text: `Your email app should now be open with the message pre-filled. It is only delivered once you press Send there — or write directly to ${profile.email}.`,
      });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus({ kind: "success", text: "Message sent — thank you! I'll get back to you soon." });
      setValues({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
      loadedAt.current = Date.now();
    } catch {
      setStatus({
        kind: "error",
        text: `Sorry, your message couldn't be sent. Please try again or email ${profile.email} directly.`,
      });
    }
  };

  const loading = status.kind === "loading";

  const input = (
    k: keyof Values,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>,
  ) => (
    <div>
      <label htmlFor={`cf-${k}`} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={`cf-${k}`}
        name={k}
        value={values[k]}
        onChange={(e) => set(k, e.target.value)}
        onBlur={() => blur(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `cf-${k}-err` : undefined}
        disabled={loading}
        className={cn(field, errors[k] ? "border-red-500" : "border-line")}
        {...props}
      />
      <FieldError id={`cf-${k}-err`} text={errors[k]} />
    </div>
  );

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-line bg-paper p-6 shadow-xl shadow-ink/5 sm:p-8"
      aria-label="Contact form"
    >
      {input("name", "Name", { type: "text", autoComplete: "name", placeholder: "Your name", maxLength: 80 })}
      {input("email", "Email", {
        type: "email",
        autoComplete: "email",
        placeholder: "you@example.com",
        inputMode: "email",
      })}

      <div>
        <div className="mb-1.5 flex items-baseline justify-between">
          <label htmlFor="cf-message" className="text-sm font-medium text-ink">
            Message
          </label>
          <span className="font-mono text-[0.7rem] text-muted">{values.message.length}/2000</span>
        </div>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          disabled={loading}
          placeholder="Tell me about the opportunity or idea…"
          className={cn(field, "resize-y", errors.message ? "border-red-500" : "border-line")}
        />
        <FieldError id="cf-message-err" text={errors.message} />
      </div>

      {/* Honeypot — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Leave this field empty
          <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl hover:shadow-accent/25 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-ink disabled:hover:shadow-none"
      >
        {loading ? (
          <>
            <LuLoaderCircle size={16} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            {ENDPOINT ? "Send message" : "Compose email"}
            <LuSend size={15} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <div aria-live="polite" role="status">
        {status.kind !== "idle" && status.kind !== "loading" && (
          <p
            className={cn(
              "flex gap-2.5 rounded-xl border p-3.5 text-sm leading-relaxed",
              status.kind === "success" && "border-green-300 bg-green-50 text-green-900",
              status.kind === "info" && "border-amber-300 bg-amber-50 text-amber-900",
              status.kind === "error" && "border-red-300 bg-red-50 text-red-900",
            )}
          >
            {status.kind === "error" ? (
              <LuCircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden />
            ) : (
              <LuCircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden />
            )}
            {status.text}
          </p>
        )}
      </div>

      {!ENDPOINT && (
        <p className="text-xs leading-relaxed text-muted">
          This form opens your email app with the message ready to send.
        </p>
      )}
    </form>
  );
}

function FieldError({ id, text }: { id: string; text?: string }) {
  return (
    <p id={id} className="mt-1.5 min-h-0 text-xs font-medium text-red-700" role={text ? "alert" : undefined}>
      {text}
    </p>
  );
}
