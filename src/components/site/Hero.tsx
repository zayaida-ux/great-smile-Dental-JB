import { useEffect, useState } from "react";
import slide1 from "@/assets/clinic-treatment-room.webp";
import slide2 from "@/assets/clinic-reception.jpg";
import slide3 from "@/assets/clinic-waiting-bench.jpg";
import slide4 from "@/assets/clinic-hallway.jpg";

const slides = [
  { src: slide1, alt: "Cozy treatment room with dental chair and warm wooden cabinets" },
  { src: slide2, alt: "Warm, sunlit dental reception area" },
  { src: slide3, alt: "Minimalist waiting bench in warm wood tones" },
  { src: slide4, alt: "Softly lit hallway leading to treatment rooms" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:gap-10 md:px-10 md:pb-32 md:pt-16">
        <div className="md:col-span-6 md:pt-12">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-10 bg-clay" />
            Klinik Pergigian Great Smile
          </p>
          <h1 className="font-serif text-[42px] leading-[1.05] text-foreground md:text-[68px]">
            Experience dental care
            <br />
            that feels like a{" "}
            <span className="italic text-primary">retreat.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Johor Bahru's most gentle dental haven. Modern technology meets a soothing,
            anxiety-free atmosphere — designed to feel less like a clinic, more like a quiet cafe.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90"
            >
              WhatsApp Us Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition hover:bg-foreground hover:text-background"
            >
              Our Gentle Approach
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
            <div>
              <div className="font-serif text-2xl text-foreground">5.0★</div>
              <div className="uppercase tracking-[0.2em]">116+ Reviews</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-foreground">10+</div>
              <div className="uppercase tracking-[0.2em]">Years of Care</div>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-sand shadow-[0_30px_80px_-30px_rgba(120,90,60,0.35)]">
            <div className="relative h-[480px] w-full md:h-[640px]">
              {slides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  width={1536}
                  height={1280}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-background" : "w-1.5 bg-background/60"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card/95 px-6 py-5 shadow-xl backdrop-blur md:block">
            <p className="font-serif text-sm italic text-muted-foreground">
              "Cozy Korean cafe vibes,
              <br />
              so aesthetic and welcoming."
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-clay">— Patient, JB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
