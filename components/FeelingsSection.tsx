"use client";

import { useEffect } from "react";

export default function FeelingTense() {

  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="bg-[#ECE7DF] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

        {/* 🧠 STORY HOOK */}
        <div className="text-center max-w-3xl mx-auto fade-up">
          <h2 className="
            text-[clamp(28px,5vw,44px)]
            font-[var(--font-cormorant)]
            leading-[1.2]
            text-[#2F3A36]
          ">
            The always-on culture is stealing your life
          </h2>

          {/* Micro story */}
          <p className="
            mt-6 md:mt-8
            text-[16px] md:text-[18px]
            text-[#5A605D]
            max-w-xl mx-auto
            leading-[1.7]
          ">
            You wake up tired. Push through the day.  
            Come home… <br /> but your mind is still at work.
          </p>
        </div>

        {/* 🎯 PROBLEM CARDS */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

          {[
            {
              title: "Routine",
              desc: "Long hours. No boundary between the office and your bed.",
              icon: (
                <>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )
            },
            {
              title: "Heavy Body",
              desc: "You're winning at work, but arriving home as a ghost.",
              icon: (
                <>
                  <path d="M6 12h12M8 16h8M10 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )
            },
            {
              title: "Absent at Home",
              desc: "You have nothing left for the people who matter most.",
              icon: (
                <>
                  <path d="M12 21s-6-4.5-9-8.5C1 9 3.5 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6 4 4 7.5-3 4-9 8.5-9 8.5z"
                    stroke="currentColor" strokeWidth="2" fill="none"/>
                </>
              )
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                fade-up
                group
                bg-white/50 backdrop-blur-sm
                border border-white/40
                rounded-2xl
                px-7 py-10 md:px-8 md:py-12
                text-center
                space-y-3
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              "
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* ICON */}
              <div className="
                w-14 h-14 mx-auto flex items-center justify-center
                rounded-full bg-[#9CAF88]/15
                mb-2
                group-hover:scale-110 transition
              ">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#9CAF88]">
                  {item.icon}
                </svg>
              </div>

              {/* TITLE */}
              <h3 className="text-[17px] md:text-[18px] font-medium text-[#3F4743]">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="
                text-[14px] md:text-[15px]
                text-[#5A605D]
                leading-[1.7]
                max-w-xs mx-auto
              ">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* 💥 EMOTIONAL PUNCH */}
        <div className="mt-20 md:mt-28 text-center max-w-2xl mx-auto fade-up">
          <p className="
            text-[18px] md:text-[20px]
            text-[#2F3A36]
            leading-[1.7]
          ">
            You’re building a career.  
            But slowly losing your energy, your body… <br /> your presence at home.
          </p>

          <p className="mt-4 text-[16px] md:text-[18px] text-[#5A605D] leading-[1.7]">
            It doesn’t have to be this way.
          </p>
        </div>

        {/* 🚀 CTA */}
        <div className="mt-12 md:mt-16 text-center fade-up">

          <a
            href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
            target="_blank"
            className="
              inline-flex items-center justify-center
              w-full sm:w-auto
              bg-[#C2A15F]
              hover:bg-[#6A7F75]
              text-white
              px-8 py-4
              rounded-full
              text-[16px]
              transition-all duration-200

              shadow-[0_8px_20px_rgba(194,161,95,0.35)]
              hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(194,161,95,0.45)]
              active:translate-y-[2px]
            "
          >
            Book Your 45-Min Reset →
          </a>

          <p className="
  mt-6 md:mt-8
  text-sm
  text-[#6B706D]
">
  Takes 1 minute to book. Home visit. Just real relief.
</p>

        </div>

      </div>

      {/* 🎬 Animation */}
      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s ease;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}