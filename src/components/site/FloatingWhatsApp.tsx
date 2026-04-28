import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/60123456789"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Us"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-medium text-whatsapp-foreground shadow-[0_15px_40px_-10px_rgba(40,120,60,0.5)] transition hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
