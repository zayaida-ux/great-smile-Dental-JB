import { ArrowUpRight } from "lucide-react";
import aestheticImg from "@/assets/service-aesthetic.jpg";
import restorationsImg from "@/assets/service-restorations.jpg";
import orthoImg from "@/assets/service-ortho.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";

const services = [
  {
    image: aestheticImg,
    alt: "Close-up of a bright, natural smile",
    title: "Aesthetic Dentistry",
    description:
      "Subtle enhancements that honour your natural features — refined, never overdone.",
    items: ["ICON Resin (No-drill)", "Laser Whitening", "Porcelain Veneers"],
  },
  {
    image: restorationsImg,
    alt: "Close-up of a porcelain dental restoration",
    title: "Modern Restorations",
    description:
      "Tooth-coloured, durable restorations crafted to feel and look indistinguishable from your own.",
    items: ["Same-day Fibre Bridges", "Aesthetic Natural Fillings"],
  },
  {
    image: orthoImg,
    alt: "Clear dental aligner on soft cream cloth",
    title: "Orthodontics & Kids",
    description:
      "Gentle, modern alignment for every age — discreet for adults, calming for little ones.",
    items: ["Clear Aligners", "Myobrace Therapy", "Pediatric Care"],
  },
  {
    image: surgeryImg,
    alt: "High-end modern dental clinic with 3D scanner",
    title: "Oral Surgery",
    description:
      "Advanced, minimally-invasive techniques performed with patience and precision.",
    items: ["Gentle Wisdom Tooth Surgery", "Dental Implants"],
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map(({ image, alt, title, description, items }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background transition hover:border-clay"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-serif text-3xl text-foreground md:text-4xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground md:text-[15px]">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-clay" />
                      {it}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/80 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Consult Dr. Tay
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
