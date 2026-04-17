"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Card */}
        <div className="relative bg-[#F9FAFB] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* LEFT (EMPATHY) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

             
              {/* Sub-headline */}
              <p className="text-[#4A90E2] text-xs tracking-[0.2em] uppercase mb-6">
                Losing your best members to burnout is frustrating.
              </p>

              {/* Body */}
              <div className="max-w-md text-[#2E2E2E] text-[16px] leading-[1.7]">
                <p className="text-[#2E2E2E] text-[16px] leading-[1.7]">
  You work hard to build a premium workspace.
  <br /><br />
  It hurts to watch fatigued tenants leave for cheaper competitors.
  <br /><br />
You deserve a building completely filled with{" "}
<strong>loyal, thriving professionals.</strong>
</p>
              </div>

            </div>

            {/* RIGHT (AUTHORITY) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              
              {/* Sub-headline */}
              <p className="text-[#4A90E2] text-xs tracking-[0.2em] uppercase mb-6">
                We have engineered the ultimate 15-minute reset.
              </p>

              {/* Body */}
              <div className="max-w-md text-[#2E2E2E] text-[16px] leading-[1.7] space-y-6">

                <p>
                  You do not need another ignored amenity. You need a proven retention asset.
                  As Workday Reset Specialists, we deliver:
                </p>

                {/* Trust / Benefits */}
                <ul className="space-y-5 text-[15px]">

                  <li className="flex items-start gap-4">
                    <span className="text-[#00BFA6] mt-[3px]">⚡</span>
                    <span>
                      <strong>Frictionless Relief:</strong><br />
                      A 15-minute system engineered to erase desk fatigue.
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-[#00BFA6] mt-[3px]">📈</span>
                    <span>
                      <strong>Maximum Retention:</strong><br />
                      Keep your tenants energized and highly engaged.
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="hidden md:block absolute top-20 bottom-20 left-1/2 w-px bg-[#E5E7EB]" />

        </div>

      </div>
    </section>
  );
}