import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-[#F4F1EC] py-20 md:py-28 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[clamp(32px,4vw,44px)] font-[var(--font-cormorant)] text-[#4F5552] leading-tight">
            The Stress Reset Roadmap
          </h2>

          <div className="mt-6 h-px bg-[#E5DFD6] w-full" />

          <p className="mt-6 text-[#5A605D] text-[16px] md:text-[17px] font-[var(--font-montserrat)] leading-relaxed">
            Start with one session. Feel the difference immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Step Card */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
            
            <div className="text-3xl text-[#6A7F75] mb-4">⏱️</div>

            <h3 className="text-[18px] md:text-[20px] font-[var(--font-montserrat)] text-[#4F5552] mb-3">
              Choose Your Slot
            </h3>

            <p className="text-[#5A605D] text-[15px] md:text-[16px] leading-relaxed">
              Pick a 45-minute time that fits your day. 
            </p>
          </div>

          {/* Step Card */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
            
            <div className="text-3xl text-[#6A7F75] mb-4">🧘</div>

            <h3 className="text-[18px] md:text-[20px] font-[var(--font-montserrat)] text-[#4F5552] mb-3">
              The 30 / 15 Reset
            </h3>

            <p className="text-[#5A605D] text-[15px] md:text-[16px] leading-relaxed">
              30 minutes to release physical tension. <br /> 15 minutes to calm and clear your mind.
            </p>
          </div>

          {/* Step Card */}
          <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
            
            <div className="text-3xl text-[#6A7F75] mb-4">✨</div>

            <h3 className="text-[18px] md:text-[20px] font-[var(--font-montserrat)] text-[#4F5552] mb-3">
              Step Out Refreshed
            </h3>

            <p className="text-[#5A605D] text-[15px] md:text-[16px] leading-relaxed">
             Clear mind. Present at home. <br /> Ready for tomorrow.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-[#E5DFD6] w-full max-w-4xl mx-auto" />

        {/* Trust Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-[#4F5552] font-[var(--font-montserrat)] text-[15px] md:text-[16px]">

          <div className="flex items-center gap-2">
            <span className="text-[#6A7F75]">🔓</span>
            No contracts
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#6A7F75]">💰</span>
            No hidden fees
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#6A7F75]">⏱️</span>
            45 minutes only
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#6A7F75]">🧼</span>
            Clean setup
          </div>

        </div>

      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center px-6">

        <h2 className="text-[clamp(26px,4vw,48px)] font-[var(--font-cormorant)] text-[#4F5552] leading-tight max-w-2xl mx-auto">
          Ready to rest — fully on your terms?
        </h2>

        <a
          href="https://wa.me/917539924301"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8 inline-block
            bg-[#C2A15F]
            hover:bg-[#6A7F75]
            text-white
            text-[15px] md:text-[16px]
            px-10 py-4
            rounded-full
            transition-all duration-300
            shadow-md hover:shadow-lg hover:scale-[1.02]
          "
        >
          Book Your 45-Min Reset →
        </a>

      </div>

    </section>
  );
}