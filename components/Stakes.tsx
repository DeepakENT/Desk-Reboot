"use client";

import React from "react";

export default function Stakes() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="
            text-[clamp(26px,4vw,40px)]
            font-semibold
            text-[#2C5AA0]
            leading-tight
            tracking-tight
          ">
            Don’t Get Stuck Competing on Price Like Every Other Workspace
          </h2>

          <p className="mt-4 text-[#6B7280] text-[15px] sm:text-[16px]">
            Without a retention system, churn becomes inevitable.
          </p>
        </div>

        {/* Body */}
        <div className="mt-8 max-w-2xl mx-auto text-center text-[#2E2E2E] text-[15px] sm:text-[16px] leading-relaxed space-y-4">

          <p>
            If you only offer desks, coffee, and Wi-Fi,
            your workspace becomes a commodity.
          </p>

          <p>
            When members feel drained, they don’t upgrade.
            <br />
            They leave.
          </p>

          <p className="font-medium">
            And that costs you more than you think.
          </p>

        </div>

        {/* Stakes Cards */}
       <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

  {[
    {
      icon: "📉",
      title: "Lose High-Value Members",
      desc: "Your best tenants quietly move to cheaper alternatives nearby."
    },
    {
      icon: "💸",
      title: "Rising Acquisition Costs",
      desc: "You spend more replacing members than retaining them."
    },
    {
      icon: "🏢",
      title: "Empty Desks Kill Energy",
      desc: "Vacant seats weaken your community and reduce perceived value."
    }
  ].map((item, i) => (
    <div
      key={i}
      className="
        group
        rounded-xl
        p-6
        bg-[#1F2937]
        text-white
        border border-[#374151]
        transition-all duration-300
        hover:bg-[#111827]
        hover:shadow-xl
        hover:-translate-y-[2px]
      "
    >

      {/* Icon */}
      <div className="text-2xl mb-3 opacity-90">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-semibold mb-2 text-white">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
        {item.desc}
      </p>

    </div>
  ))}

</div>

        {/* Subtle Close */}
        <div className="mt-12 text-center">
          <p className="text-[#2E2E2E] font-medium text-[15px] sm:text-[16px]">
            The problem isn’t pricing.
            <br />
            It’s the experience you offer.
          </p>
        </div>

      </div>
    </section>
  );
}