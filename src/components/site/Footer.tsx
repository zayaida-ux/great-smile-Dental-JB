import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
              <span className="font-serif text-lg text-primary">G</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg text-foreground">Great Smile Dental</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Klinik Pergigian · JB
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A gentle, design-led dental haven in the heart of Taman Century, Johor Bahru.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Visit</p>
          <p className="mt-4 font-serif text-base leading-relaxed text-foreground">
            No 12C, Ground Floor, <br />
            Jalan Harimau, Taman Century, JB.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Mon–Fri · 9:30AM–7PM <br />
            Sat–Sun · 10AM–6PM <br />
            <span className="italic">Closed Wednesdays</span>
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Follow</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://facebook.com/GreatSmileDentalJB"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/greatsmiledentalclinicjb"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            @GreatSmileDentalJB <br />
            @greatsmiledentalclinicjb
          </p>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:px-10">
          <p>© 2024 Klinik Pergigian Great Smile Dental</p>
          <p>Crafted with care in Johor Bahru</p>
        </div>
      </div>
    </footer>
  );
}
