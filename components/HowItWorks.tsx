"use client";

import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="
            text-[clamp(28px,4vw,44px)]
            font-semibold
            text-[#2C5AA0]
            leading-tight
            tracking-tight
          ">
            Launch in 3 Simple Steps
          </h2>

          <p className="mt-4 text-[#6B7280] text-[16px]">
            No extra workload. No operational complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 relative">

          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-[#E5E7EB]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">

            {/* Step 1 */}
            <div className="group text-center px-6 py-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
              
              {/* Number */}
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-[#4A90E2] text-white text-sm font-semibold mb-4">
                1
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4">📍</div>

              <h3 className="text-[18px] font-semibold text-[#2E2E2E] mb-3">
                Start Your Free Trial
              </h3>

              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                Claim your 7KM radius exclusive territory and activate your workspace in minutes.
              </p>

            </div>

            {/* Step 2 */}
            <div className="group text-center px-6 py-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">

              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-[#4A90E2] text-white text-sm font-semibold mb-4">
                2
              </div>

              <div className="text-3xl mb-4">⚙️</div>

              <h3 className="text-[18px] font-semibold text-[#2E2E2E] mb-3">
                We Handle Everything
              </h3>

              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                Booking, scheduling, and on-site specialists — fully managed for you.
              </p>

            </div>

            {/* Step 3 */}
            <div className="group text-center px-6 py-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">

              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-[#4A90E2] text-white text-sm font-semibold mb-4">
                3
              </div>

              <div className="text-3xl mb-4">📈</div>

              <h3 className="text-[18px] font-semibold text-[#2E2E2E] mb-3">
                Retain & Grow Revenue
              </h3>

              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                Keep members engaged, reduce churn, and boost new desk sales.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <a
            href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20increase%20member%20retention%20and%20start%20my%2030-day%20trial%20for%20DeskReboot"
            className="
              inline-flex items-center justify-center
              w-full sm:w-auto
              bg-[#00BFA6]
              hover:bg-[#009e8e]
              text-white
              text-[14px] sm:text-[16px]
              px-10 py-4
              rounded-sm
              font-semibold
              transition-all duration-300
              hover:shadow-lg
              hover:-translate-y-[2px]
              active:scale-95
            "
          >
            START YOUR 14-DAY TRIAL TODAY
          </a>

          <p className="mt-4 text-sm text-[#6B7280]">
            Takes less than 2 minutes. No commitment required.
          </p>

        </div>

      </div>
    </section>
  );
}