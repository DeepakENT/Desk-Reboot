"use client";

import React from "react";

export default function BottomCTA() {
  return (
    <section className="w-full bg-[#009E8E] py-20 md:py-28 px-6">

      <div className="max-w-4xl mx-auto text-center text-white">

        {/* 4U HEADLINE (Identity Transformation) */}
        <h2 className="
          text-[clamp(28px,4vw,44px)]
          font-semibold
          leading-tight
          tracking-tight
        ">
          Become the Workspace Everyone Chooses — Not the One They Leave
        </h2>

        {/* 4S BODY (BDF Applied) */}
        <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-white/90">

          <p>
            Stop worrying about empty desks.
            <br />
            Stop losing members to cheaper spaces.
          </p>

          <p>
            When you deploy Focus 15,
            your workspace becomes a place people rely on every day.
          </p>

          <p className="font-medium text-white">
            You’re no longer just managing a space.
            <br />
            You’re leading a high-value community.
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* PRIMARY CTA */}
          <a
            href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20start%20my%2030-day%20trial%20for%20DeskReboot"
            className="
              w-full sm:w-auto
              bg-white
              text-[#009E8E]
              font-semibold
              text-[15px] sm:text-[16px]
              px-8 py-4
              rounded-sm
              transition-all duration-300
              hover:shadow-lg
              hover:-translate-y-[2px]
              active:scale-95
            "
          >
            START YOUR 14-DAY TRIAL TODAY
          </a>

          {/* SECONDARY CTA */}
          <a
            href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20claim%20a%20free%20manager%20reset%20for%20my%20workspace"
            className="
              w-full sm:w-auto
              border border-white
              text-white
              font-semibold
              text-[15px] sm:text-[16px]
              px-8 py-4
              rounded-sm
              transition-all duration-300
              hover:bg-white/10
              hover:-translate-y-[2px]
              active:scale-95
            "
          >
            CLAIM A FREE MANAGER'S RESET
          </a>

        </div>

        {/* MICRO TRUST */}
        <p className="mt-5 text-[13px] text-white/80">
          Takes less than 2 minutes. No commitment required.
        </p>

      </div>

    </section>
  );
}