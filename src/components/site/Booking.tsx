import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Aesthetic Dentistry",
  "Whitening / Veneers",
  "Clear Aligners / Myobrace",
  "Pediatric Care",
  "Wisdom Tooth / Implants",
  "General Check-up & Scaling",
];
const days = ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"];

export function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const [day, setDay] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setDay(null);
      toast.success("Booking request received", {
        description: "Dr. Tay's team will reach out via WhatsApp shortly.",
      });
    }, 700);
  };

  return (
    <section id="booking" className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-12 text-center">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-clay" />
            Reserve Your Visit
            <span className="h-px w-8 bg-clay" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
            A quiet hour, <br /> <span className="italic text-primary">just for you.</span>
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-border bg-cream p-8 shadow-[0_20px_60px_-30px_rgba(120,90,60,0.25)] md:p-12"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="Your Name">
              <input
                required
                name="name"
                placeholder="Jane Tan"
                className="input-cozy"
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input
                required
                name="phone"
                type="tel"
                placeholder="+60 12 345 6789"
                className="input-cozy"
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Service">
              <select required name="service" defaultValue="" className="input-cozy">
                <option value="" disabled>Select a treatment…</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Preferred Day
            </p>
            <div className="flex flex-wrap gap-2">
              {days.map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDay(d)}
                  className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition ${
                    day === d
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-clay"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Please note: we are closed on Wednesdays.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 w-full rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Request Appointment"}
          </button>
        </form>
      </div>

      <style>{`
        .input-cozy {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 14px 22px;
          font-size: 14px;
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: border-color .2s, box-shadow .2s;
        }
        .input-cozy:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
