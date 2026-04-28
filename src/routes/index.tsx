import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ComfortStrip } from "@/components/site/ComfortStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Reviews } from "@/components/site/Reviews";
import { Technology } from "@/components/site/Technology";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Great Smile Dental JB — Cozy, Gentle Dentistry in Johor Bahru" },
      {
        name: "description",
        content:
          "Klinik Pergigian Great Smile Dental — Johor Bahru's gentle, design-led dental clinic. Aesthetic dentistry, Myobrace, clear aligners & implants by Dr. Tay Ying Xi.",
      },
      { property: "og:title", content: "Great Smile Dental JB — Cozy, Gentle Dentistry" },
      {
        property: "og:description",
        content: "A soothing, anxiety-free dental haven in Taman Century, Johor Bahru.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ComfortStrip />
        <About />
        <Services />
        <Booking />
        <Reviews />
        <Technology />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" />
    </div>
  );
}
