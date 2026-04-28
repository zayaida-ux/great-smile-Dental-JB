import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
            <span className="font-serif text-lg text-primary">G</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-wide text-foreground">Great Smile</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Dental · JB
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:+60123456789"
            aria-label="Call clinic"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-accent md:flex"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#booking"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90 md:inline-block"
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-accent"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6 md:px-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 font-serif text-2xl text-foreground transition hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-4 flex gap-3 md:hidden">
              <a
                href="tel:+60123456789"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-xs uppercase tracking-[0.2em]"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-primary px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-primary-foreground"
              >
                Book
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
