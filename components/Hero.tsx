"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
  src="/coworking-hero1.jpg"
  alt="Professional working in a modern coworking space"
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
    scale-100
  "
/>
      {/* LEFT SIDE OVERLAY ONLY */}
     <div className="
  absolute inset-0
  bg-gradient-to-r
  from-white
  via-white/50
  via-30%
  to-transparent
"/>

      {/* Content */}
      <div className="relative flex items-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            {/* Headline */}
            <h1 className="
              text-[clamp(32px,5vw,64px)]
               font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-[#2E2E2E]
            ">
              Stop Losing Your Best Members to Cheaper Co-Workspaces.
            </h1>

            {/* Sub-headline */}
            <p className="
              mt-6
              text-[clamp(16px,2vw,20px)]
              text-[#6B7280]
              leading-relaxed
              max-w-xl
            ">
              Provide an exclusive 15-minute workday reboot that keeps members loyal.
              <br className="hidden sm:block" />
              Zero operational effort. Zero financial risk.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
   href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20start%20my%2030-day%20trial%20for%20DeskReboot"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    bg-[#00BFA6]
    hover:bg-[#009e8e]
    text-white
    text-[14px] sm:text-[16px]
    px-8 sm:px-10 py-4
    rounded-sm
    font-semibold
    transition-all duration-300
    hover:shadow-lg
    hover:-translate-y-[2px]
    active:scale-95
  "
>
  START YOUR 30-DAY TRIAL TODAY
</a>

              <p className="mt-4 text-sm text-[#6B7280]">
                Strict 7 km territorial exclusivity applies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}