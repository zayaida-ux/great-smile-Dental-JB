import { ShieldCheck, Baby, Sparkles, CalendarDays } from "lucide-react";

const items = [
  { Icon: ShieldCheck, label: "AIA Panel Clinic" },
  { Icon: Baby, label: "Kid-Friendly Care" },
  { Icon: Sparkles, label: "Pain-Free Tech" },
  { Icon: CalendarDays, label: "Open Weekends" },
];

export function ComfortStrip() {
  return (
    <section className="border-y border-border/70 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-10 md:py-12">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center md:flex-row md:gap-4 md:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-clay/40 bg-background text-primary">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-base text-foreground md:text-lg">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
