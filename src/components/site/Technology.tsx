import techImg from "@/assets/technology.jpg";
import { MapPin, Clock } from "lucide-react";

export function Technology() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
        <div className="md:col-span-7">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-10 bg-clay" />
            Technology & Convenience
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Quiet precision, <br /> <span className="italic text-primary">tangible comfort.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-cream p-6">
              <p className="font-serif text-2xl text-foreground">3D Intraoral Scanning</p>
              <p className="mt-2 text-sm text-muted-foreground">
                No more goopy moulds. A few quiet minutes of scanning replaces traditional
                impressions entirely.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-cream p-6">
              <p className="font-serif text-2xl text-foreground">AIR Polishing</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pain-free stain removal using a fine, warm spray — gentle enough for the most
                sensitive teeth.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Visit Us
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-foreground">
                  No 12C, Ground Floor, <br />
                  Jalan Harimau, Taman Century, <br />
                  Johor Bahru.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Opening Hours
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-foreground">
                  Mon–Fri · 9:30 AM – 7:00 PM <br />
                  Sat–Sun · 10:00 AM – 6:00 PM
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">Closed on Wednesdays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={techImg}
              alt="Modern minimalist intraoral scanner on warm oak counter"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-[420px] w-full object-cover md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
