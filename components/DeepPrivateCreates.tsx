import Image from "next/image";

export default function DeepPrivateCreates() {
  return (
    <section className="relative bg-[#F4F1EC] py-20 md:py-28 overflow-hidden">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none 
        bg-[radial-gradient(circle_at_25%_25%,#000_1px,transparent_1px)] 
        bg-[length:60px_60px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-[var(--font-cormorant)] text-[#4F5552] leading-tight">
            What 45 Minutes Can Reset
          </h2>

          <p className="mt-4 text-[#6B6B63] text-[15px] md:text-[16px] font-[var(--font-montserrat)]">
            Not temporary relief — a full nervous system reset designed for real stress.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — Benefit Cards */}
          <div className="space-y-6">

            {[
              {
                title: "Clear Head, No Fog",
                desc: "That heavy, cloudy feeling lifts. You think faster, respond better."
              },
              {
                title: "Body Feels Light Again",
                desc: "Neck, shoulders, back — tension melts without needing medication."
              },
              {
                title: "Deep Sleep Comes Naturally",
                desc: "You fall asleep faster. No scrolling. No racing thoughts."
              },
              {
                title: "Present at Home",
                desc: "You’re actually there — with your family, not your phone."
              },
              {
                title: "Work Feels Effortless",
                desc: "Sharper focus. Fewer mistakes. Tasks flow without resistance."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-4
                  bg-white/70 backdrop-blur-sm
                  p-5 rounded-xl
                  shadow-sm hover:shadow-md
                  transition duration-300
                "
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6A7F75] text-white text-sm mt-1">
                  ✓
                </div>

                <div>
                  <h4 className="text-[#4F5552] text-[16px] md:text-[17px] font-[var(--font-montserrat)]">
                    {item.title}
                  </h4>
                  <p className="text-[#6B6B63] text-[14px] md:text-[15px] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT — Image + overlay proof */}
          <div className="relative group">

            <div className="rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <Image
                src="/deep-rest.jpg"
                alt="Relaxed woman after stress relief session"
                width={700}
                height={500}
                className="
                  object-cover w-full h-full
                  transition-transform duration-700 ease-out
                  md:group-hover:scale-[1.04]
                "
              />
            </div>

            {/* Floating Proof Card */}
            <div className="
              absolute bottom-4 left-4 right-4
              bg-white/90 backdrop-blur-md
              rounded-xl px-4 py-3
              shadow-md
              text-center
              text-[13px] md:text-[14px]
              text-[#5A605D]
              font-[var(--font-montserrat)]
            ">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Most clients feel lighter after just one session
              </span>
            </div>

          </div>

        </div>

        {/* Closing Identity Line */}
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p className="
            text-[clamp(20px,2.5vw,26px)]
            font-[var(--font-cormorant)]
            text-[#4F5552]
            leading-relaxed
          ">
            You don’t just relax. You return to control.
          </p>
        </div>

      </div>
    </section>
  );
}