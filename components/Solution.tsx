"use client";

import React from "react";

const Solution: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] rounded-xl overflow-hidden group">
          <img
            src="/desk-reset.png"
            alt="Desk worker experiencing a 15-minute reset"
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="max-w-xl">

          {/* 4U HEADLINE */}
          <h2 className="
            text-[clamp(26px,4vw,42px)]
            font-semibold
            text-[#2C5AA0]
            leading-[1.15]
            tracking-tight
          ">
           Give your members an exclusive perk they refuse to leave behind.
          </h2>

          {/* 4S NARRATIVE */}
          <div className="mt-6 space-y-4 text-[#374151] text-[15px] sm:text-[16px] leading-relaxed">


            <p>
              Focus 15 fixes that.
            </p>

            <p>
              In just 15 minutes, we remove desk fatigue,
              clear brain fog, and restore energy.
            </p>

            <p>
              The result?
              <br />
              Members feel better working in your space.
              <br />
              And they stay longer.
            </p>

          </div>

          {/* BENEFIT HOOK */}
          <div className="mt-6">
            <span className="
              inline-block
              bg-[#00BFA6]/10
              text-[#00BFA6]
              font-semibold
              px-4 py-2
              text-[15px]
              rounded-sm
            ">
              100% FREE for your members. Zero effort for your team.
            </span>
          </div>

          {/* BENEFITS (FEATURE → BENEFIT) */}
          <div className="mt-8 space-y-5">

            {[
              {
                title: "Stand Out Instantly",
                desc: "Stop competing on price. Become the workspace people choose for how it makes them feel."
              },
              {
                title: "Increase Retention",
                desc: "Energized members don’t look for alternatives. They renew."
              },
              {
                title: "Zero Extra Work",
                desc: "We handle everything. No scheduling. No management. No effort from your team."
              },
              {
                title: "Protect Your Revenue",
                desc: "Keeping just a few desks filled covers the entire investment."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">

                <span className="
                  text-[#00BFA6]
                  mt-[2px]
                  transition-transform
                  group-hover:scale-110
                ">
                  ✔
                </span>

                <p className="text-[#4B5563] leading-relaxed text-[15px] sm:text-[16px]">
                  <strong className="text-[#2E2E2E]">{item.title}:</strong>{" "}
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20increase%20member%20retention%20and%20start%20my%2030-day%20trial%20for%20DeskReboot"
              className="
                inline-flex items-center justify-center
                w-full sm:w-auto
                bg-[#00BFA6]
                hover:bg-[#009e8e]
                text-white
                text-[14px] sm:text-[16px]
                px-8 py-4
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

            <p className="mt-3 text-sm text-[#6B7280]">
              Takes less than 2 minutes. No commitment.
            </p>

          </div>



        </div>
      </div>
    </section>
  );
};

export default Solution;