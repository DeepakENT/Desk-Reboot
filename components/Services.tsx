"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Services() {
  const [active, setActive] = useState(0);
  const detailRef = useRef(null);

  // ✅ Fix refresh scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const phases = [
    {
      title: "Neck & Cervical",
      img: "/neck.webp",
      steps: [
        "Long, slow strokes from your neck to collarbone",
        "Gentle kneading on the side of your neck",
        "Soft pressure at the base of your skull",
      ],
    },
    {
      title: "Shoulders & Trapezius",
      img: "/shoulders.webp",
      steps: [
        "We use smooth,flowing forearm strokes across your upper back",
        "Work into tighter shoulder muscles",
        "Apply steady, rhythmic pressure along shoulders",
      ],
    },
    {
      title: "Lower Back",
      img: "/lowerback.webp",
      steps: [
        "We use flowing movements with forearms across your lower back",
        "Apply pressure to tight muscles",
        "Feel the Warm still hand",
      ],
    },
    {
      title: "Clear Mind",
      img: "/mind.webp",
      steps: [
        "We gently massage your scalp and temples",
        "We release tension from your forehead and around your eyes",
        "We finish with a gentle ear massage",
      ],
    },
  ];

  const handleClick = (index: number) => {
    setActive(index); // ✅ No scroll
  };

  const progress = ((active + 1) / phases.length) * 100;

  return (
    <section className="w-full bg-[#efe9e1] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(26px,4vw,38px)] font-[var(--font-cormorant)] text-[#6C6259]">
            Your Relaxation Journey
          </h2>
        </div>

        {/* 🔥 Progress Bar */}
        <div className="relative mb-12">

          {/* Base */}
          <div className="h-[2px] bg-[#D8D0C9] w-full rounded-full" />

          {/* Active line */}
          <div
            className="h-[2px] bg-[#C6A45F] absolute top-0 left-0 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />

          {/* Dots */}
          <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= active
                    ? "bg-[#C6A45F] scale-110"
                    : "bg-[#D8D0C9]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔥 Image Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative h-[140px] md:h-[200px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 group
              ${
                active === index
                  ? "scale-[1.05] shadow-[0_15px_40px_rgba(0,0,0,0.15)] ring-2 ring-[#C6A45F]"
                  : "hover:scale-[1.03]"
              }`}
            >
              <Image
                src={phase.img}
                alt={phase.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end justify-center p-4">
                <h3 className="text-white text-sm md:text-base font-medium">
                  {phase.title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        {/* 🔥 Detail Section */}
        <div
          ref={detailRef}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#E8E3DA]"
        >
          <h3 className="text-[24px] md:text-[28px] font-[var(--font-cormorant)] text-[#5C534A]">
            {phases[active].title}
          </h3>

          <div className="mt-6 space-y-4 text-[#6C6259] text-sm md:text-base">
            {phases[active].steps.map((step, i) => (
              <p key={i} className="opacity-0 animate-fadeIn">
                • {step}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#6C6259] text-sm">
            <span>↓ Cortisol</span>
            <span>↑ Oxytocin</span>
            <span>0 Mental Tabs</span>
          </div>

          <button className="bg-[#C6A45F] hover:bg-[#6A7F75] text-white px-8 py-3 rounded-full hover:scale-105 transition">
             Book Your 45-Min Reset →
          </button>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}