export default function Stakes() {
  return (
    <section className="relative bg-[#ECE7DF] py-20 md:py-28 overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#000_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(28px,4vw,42px)] font-[var(--font-cormorant)] text-[#4F5552] leading-tight">
            Don’t let the "Always-On" culture steal another evening
          </h2>

          <p className="mt-4 text-[#6B6B63] text-[15px] md:text-[16px] font-[var(--font-montserrat)]">
            Choose your tomorrow.
          </p>
        </div>

        {/* Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E3DBCF] shadow-sm">

          {/* LEFT — FAILURE */}
          <div className="bg-[#2F2F2B] text-white p-8 sm:p-10 md:p-14">
            
            <h3 className="text-[20px] md:text-[22px] font-[var(--font-cormorant)] mb-2 text-white/90">
              The Cost of Waiting
            </h3>

            <p className="text-white/60 text-sm mb-8">
              Burnout is expensive
            </p>

            <ul className="space-y-5 text-[15px] md:text-[16px] text-white/80">
              {[
                "Heavy head & burning eyes",
                "Daily body pain that needs a doctor",
                "At the table, but still at the office",
                "Missing your kids while staring at a screen",
                "The ‘blank screen’ burnout",
                "Promotion slipping due to mental fog",
                "“Later…” never comes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="text-lg mt-0.5">❌</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT — SUCCESS */}
          <div className="bg-[#F8F5EE] p-8 sm:p-10 md:p-14 flex flex-col justify-between">

            <div>
              <h3 className="text-[20px] md:text-[22px] font-[var(--font-cormorant)] text-[#4F5552] mb-2">
                The 45-Min Reset
              </h3>

              <p className="text-[#7A7A72] text-sm mb-8">
                Feel the shift in one session
              </p>

              <ul className="space-y-5 text-[15px] md:text-[16px] text-[#5A605D]">
                {[
                  "Light body & clear mind",
                  "Deep sleep that starts naturally",
                  "Phone down. Smile up",
                  "Fully present for the people you love",
                  "Sharp focus, zero mistakes",
                  "Confidence back. Work flows fast",
                  "You’re finally in control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="text-[#6A7F75] text-lg mt-0.5">✅</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

             {/* 🔐 TRUST SIGNALS */}
              <div className="mt-8 flex flex-wrap gap-4 text-[13px] md:text-[14px] text-[#6B6B63] font-[var(--font-montserrat)]">
                <span className="flex items-center gap-1">🔒 Private in-home</span>
                <span className="flex items-center gap-1">✔ Verified therapists</span>
                <span className="flex items-center gap-1">💳 Pay after session</span>
              </div>

            {/* CTA inside success side */}
            <a
              href="https://wa.me/917539924301"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10 inline-block text-center
                bg-[#C2A15F]
                hover:bg-[#6A7F75]
                text-white
                text-[15px] md:text-[16px]
                px-8 py-4
                rounded-full
                transition-all duration-300
                shadow-md hover:shadow-lg hover:scale-[1.03]
              "
            >
              Book Your 45-Min Reset →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}