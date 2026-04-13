"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Image */}
        <Image
          src="/hero_final.jpg"
          alt="Professional in-home relaxation massage"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="
            object-cover
            object-[85%_center]
            sm:object-[80%_center]
            md:object-[75%_center]
            lg:object-[70%_center]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

        {/* Content */}
        <div className="relative flex items-center min-h-screen py-20 md:py-0">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

            <div className="max-w-xl sm:max-w-2xl text-left">

              {/* Headline */}
              <h1 className="
                opacity-0 translate-y-6 animate-fadeUp
                text-[clamp(30px,6vw,64px)]
                font-[var(--font-cormorant)]
                leading-[1.08]
                tracking-[-0.015em]
                text-[#2F3A36]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)]
              ">
                Drop the Weight.
                <span className="block">Show up Fresh</span>
              </h1>

              {/* Subtext */}
              <div className="
                mt-6
                opacity-0 translate-y-6 animate-fadeUp delay-200
                text-[clamp(15px,2.2vw,20px)]
                font-[var(--font-montserrat)]
                text-[#3F4743]
                leading-[1.7]
              ">
                <p>You don’t need a week off.</p>

                <p className="mt-2">
                  45 minute reset — 30 min body, 15 min mind.
                </p>

                {/* Benefits */}
                <ul className="
                  mt-6
                  space-y-4
                  bg-white/60 backdrop-blur-sm
                  px-5 py-4
                  rounded-xl
                  w-full sm:w-fit
                ">
                  <li className="flex items-start gap-3">
                    <span className="text-[#9CAF88] text-lg mt-[2px]">✓</span>
                    <span>Clear the mental fog</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-[#9CAF88] text-lg mt-[2px]">✓</span>
                    <span>Sleep deeper</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-[#9CAF88] text-lg mt-[2px]">✓</span>
                    <span>Show up for your family</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 opacity-0 translate-y-6 animate-fadeUp delay-500">
                <a
                  href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-full sm:w-auto
                    bg-[#C2A15F]
                    hover:bg-[#6A7F75]
                    text-white
                    text-[16px] sm:text-[18px]
                    px-10 sm:px-12 py-4 sm:py-5
                    rounded-full
                    transition-all duration-200 ease-out
                    shadow-[0_8px_20px_rgba(194,161,95,0.35)]
                    hover:shadow-[0_12px_28px_rgba(194,161,95,0.45)]
                    hover:-translate-y-1
                    active:translate-y-[2px]
                    active:shadow-[0_4px_10px_rgba(194,161,95,0.25)]
                  "
                >
                  Book Your 45-Min Reset →
                </a>

                <p className="mt-6 md:mt-8 text-sm text-[#2F3A36]">
                  Limited slots each day. Home visit. No stress.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div
        className={`
          fixed bottom-0 left-0 w-full z-50
          bg-white/90 backdrop-blur-md
          p-4 border-t border-gray-200
          sm:hidden
          transition-transform duration-300
          ${showSticky ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <a
          href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block w-full text-center
            bg-[#C2A15F]
            text-white
            py-4 rounded-full
            text-[16px]
            shadow-lg
          "
        >
          Book Now →
        </a>
      </div>
    </>
  );
}