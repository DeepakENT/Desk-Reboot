"use client";

import React from "react";

const Warning: React.FC = () => {
  return (
    <section className="w-full bg-[#2C5AA0] py-16 sm:py-20 relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">

        {/* Icon + Badge */}
        <div className="flex justify-center mb-6">
          <div className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            bg-white/10 backdrop-blur-sm
            border border-white/20
            text-white text-sm font-medium
            shadow-sm
          ">
            <span className="text-lg">⚠️</span>
            <span>Limited Availability</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="
          text-[clamp(26px,4vw,40px)]
          font-semibold
          tracking-tight
          leading-tight
          text-white
        ">
          THE 7-KILOMETER LOCKOUT RULE
        </h2>

        {/* Body */}
        <p className="
          mt-6
          text-[15px] sm:text-[18px]
          text-white/90
          leading-relaxed
          max-w-2xl mx-auto
        ">
          We limit our premium amenity to{" "}
          <span className="font-semibold text-white">
            ONE workspace per 7km radius
          </span>.
          <br className="hidden sm:block" />
          Claim your zone before a local competitor locks you out.
        </p>

        {/* Divider (adds structure) */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-[2px] bg-white/30 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Warning;