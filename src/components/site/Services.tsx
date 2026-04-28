import { Sparkles, Wrench, Smile, Stethoscope, ArrowUpRight } from "lucide-react";

const services = [
  {
    Icon: Sparkles,
    title: "Aesthetic Dentistry",
    items: ["ICON Resin (No-drill)", "Laser Whitening", "Porcelain Veneers"],
    span: "md:col-span-7 md:row-span-2",
    tall: true,
  },
  {
    Icon: Wrench,
    title: "Modern Restorations",
    items: ["Same-day Fibre Bridges", "Aesthetic Natural Fillings"],
    span: "md:col-span-5",
  },
  {
    Icon: Smile,
    title: "Orthodontics & Kids",
    items: ["Clear Aligners", "Myobrace Therapy", "Pediatric Care"],
    span: "md:col-span-5",
  },
  {
    Icon: Stethoscope,
    title: "Oral Surgery",
    items: ["Gentle Wisdom Tooth Surgery", "Dental Implants"],
    span: "md:col-span-7",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-clay" />
              Specialised Services
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
              Care, considered <br />
              <span className="italic text-primary">beautifully.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every treatment is paired with thoughtful pacing — because how care feels matters as
            much as the care itself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-[minmax(220px,auto)]">
          {services.map(({ Icon, title, items, span, tall }) => (
            <article
              key={title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border bg-background p-8 transition hover:border-clay md:p-10 ${span}`}
            >
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-sand text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className={`font-serif text-foreground ${tall ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                  {title}
                </h3>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground md:text-[15px]">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-clay" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#booking"
                className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground transition group-hover:text-primary"
              >
                Consult Dr. Tay
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
