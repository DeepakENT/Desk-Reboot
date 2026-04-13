export default function BottomCTA() {
  return (
    <section className="w-full bg-[#ECE7DF] py-24 md:py-32 px-6">

      <div className="max-w-3xl mx-auto text-center">

        {/* Headline */}
        <h2 className="
          text-[clamp(30px,4vw,48px)]
          font-[var(--font-cormorant)]
          text-[#4F5552]
          leading-tight
        ">
          Trade 45 minutes for a clear mind and deep sleep
        </h2>

        {/* Subheading */}
        <p className="
          mt-6
          text-[clamp(16px,2vw,20px)]
          font-[var(--font-montserrat)]
          text-[#5A605D]
          leading-relaxed
        ">
          Reclaim your focus. Reclaim your family — today.
        </p>

        
        {/* Subtle Reinforcement (No Repetition) */}
<div className="mt-6 text-[13px] text-[#7A7A72] font-[var(--font-montserrat)]">
  Designed for busy professionals who can’t afford burnout
</div>

<div className="mt-2 text-[13px] text-[#6A7F75] font-[var(--font-montserrat)]">
  One session is enough to feel the shift
</div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="https://wa.me/917539924301"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-[#C2A15F]
              hover:bg-[#6A7F75]
              text-white
              text-[16px] sm:text-[18px]
              font-[var(--font-montserrat)]
              px-12 py-5
              rounded-full
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]
              active:scale-95
              transition-all duration-300
            "
          >
            Book Your 45-Min Reset →
          </a>
        </div>

        {/* Friction Remover */}
        <p className="mt-4 text-[13px] text-[#7A7A72] font-[var(--font-montserrat)]">
           Book instantly on WhatsApp.
        </p>

      </div>
    </section>
  );
}

