import { Star } from "lucide-react";

const reviews = [
  {
    text: "Dr. Tay is a beautiful angel. Very patient and detailed in her explanation — I never felt rushed.",
    name: "Sarah L.",
    tag: "Veneers",
  },
  {
    text: "Cozy Korean cafe vibes, so aesthetic and welcoming! Brought my daughter and she actually asked to come back.",
    name: "Aiman R.",
    tag: "Pediatric Care",
  },
  {
    text: "Scaling was thorough yet incredibly gentle. Easily the best dental clinic in JB.",
    name: "Mei Ling C.",
    tag: "Scaling & Polish",
  },
  {
    text: "The space alone calms you down before the appointment even starts. Highly recommend.",
    name: "Daniel W.",
    tag: "Whitening",
  },
];

export function Reviews() {
  return (
    <section className="bg-sand/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-clay" />
              Patient Stories
            </p>
            <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
              Quietly loved <br /> <span className="italic text-primary">across JB.</span>
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-background px-7 py-5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl text-foreground">5.0</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              116+ Google Reviews
            </p>
          </div>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
          <div className="flex snap-x snap-mandatory gap-5 md:grid md:grid-cols-4 md:gap-6">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="flex aspect-square w-[85%] shrink-0 snap-center flex-col justify-between rounded-[1.75rem] border border-border bg-background p-7 md:w-auto md:p-8"
              >
                <div>
                  <div className="mb-5 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-serif text-xl leading-snug text-foreground md:text-2xl">
                    "{r.text}"
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-foreground">{r.name}</span>
                  <span className="text-muted-foreground">{r.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
