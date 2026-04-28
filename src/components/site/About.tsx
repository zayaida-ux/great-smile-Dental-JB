import aboutImg from "@/assets/about-philosophy.jpg";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:gap-20 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={aboutImg}
              alt="Quiet ceramic mug on linen by warm window light"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[460px] w-full object-cover md:h-[600px]"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-10">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-10 bg-clay" />
            Our Philosophy
          </p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
            Where your smile <br /> meets <span className="italic text-primary">serenity.</span>
          </h2>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-[17px]">
            <p>
              Led by <span className="text-foreground">Dr. Tay Ying Xi</span> — a dentist celebrated
              for her gentle touch and quiet attentiveness — Great Smile Dental was founded on a
              simple belief: a dental visit can, and should, feel like a moment of calm in your day.
            </p>
            <p>
              Dr. Tay specialises in{" "}
              <span className="text-foreground">Myofunctional Therapy (Myobrace)</span> for growing
              children and <span className="text-foreground">aesthetic smile makeovers</span> for
              adults — combining clinical precision with an unhurried, conversational approach.
            </p>
            <p>
              Every detail of our space — from the linen curtains to the soft music — is designed
              to soften the edges of dental fear. Sit back, breathe, and let us take care of the
              rest.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="font-serif text-lg italic text-foreground">— Dr. Tay Ying Xi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
