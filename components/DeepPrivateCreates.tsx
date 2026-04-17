"use client";

import Image from "next/image";

export default function DeepPrivateCreates() {
  return (
    <section className="relative bg-[#F5F7FA] py-16 sm:py-20 md:py-28 overflow-hidden">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none 
        bg-[radial-gradient(circle_at_25%_25%,#000_1px,transparent_1px)] 
        bg-[length:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* 4U HEADLINE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="
            text-[clamp(26px,4vw,42px)]
            font-semibold
            text-[#2C5AA0]
            leading-tight
            tracking-tight
          ">
            Turn Your Workspace Into a High-Retention Asset in Just 15 Minutes a Day
          </h2>

          {/* 4S BODY */}
          <p className="mt-5 text-[#374151] text-[15px] sm:text-[16px] leading-relaxed">
            When members feel better, they stay longer.
            <br />
            When they stay longer, your revenue stabilizes.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — BENEFITS */}
          <div className="space-y-6">

            {[
              {
                title: "Increase Lease Renewals",
                desc: "Members feel physically recharged. They stay because they can’t get this anywhere else."
              },
              {
                title: "Close Tours Faster",
                desc: "Let prospects experience a reset during visits. The decision becomes easy."
              },
              {
                title: "Create a High-Energy Floor",
                desc: "Remove brain fog. Replace it with focus, clarity, and productivity."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-4
                  bg-white
                  p-6
                  rounded-xl
                  border border-gray-100
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-[2px]
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="
                  w-9 h-9 flex items-center justify-center
                  rounded-full bg-[#00BFA6] text-white text-sm mt-1
                ">
                  ✔
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-[#2E2E2E] text-[16px] sm:text-[17px] font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-[#6B7280] text-[14px] sm:text-[15px] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative group">

            <div className="
              rounded-2xl overflow-hidden
              shadow-[0_18px_45px_rgba(0,0,0,0.08)]
            ">
              <Image
                src="/coworking-success.png"
                alt="Happy productive professionals in coworking space"
                width={800}
                height={600}
                className="
                  object-cover w-full h-full
                  transition-transform duration-700
                  md:group-hover:scale-[1.05]
                "
              />
            </div>

            {/* PROOF BAR */}
            <div className="
              absolute bottom-4 left-4 right-4
              bg-white/95 backdrop-blur-md
              rounded-lg px-4 py-3
              shadow-md
              text-center
              text-[13px] sm:text-[14px]
              text-[#374151]
            ">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Workspaces with retention systems see higher renewals
              </span>
            </div>

          </div>

        </div>

        {/* CLOSING (EMOTIONAL + LOGICAL) */}
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p className="
            text-[clamp(20px,2.5vw,26px)]
            font-semibold
            text-[#2E2E2E]
            leading-relaxed
          ">
            This isn’t a perk.
            <br />
            It’s your competitive advantage.
          </p>
        </div>

      </div>
    </section>
  );
}