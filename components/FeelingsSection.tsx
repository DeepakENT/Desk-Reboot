"use client";

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="
            text-[clamp(30px,4vw,44px)]
            font-semibold
            text-[#2E2E2E]
            leading-tight
          ">
            Free coffee doesn't protect your renewal rates.
          </h2>

          <p className="
            mt-6
            text-[16px] sm:text-[18px]
            text-[#6B7280]
            leading-relaxed
          ">
            Your members are battling the “2:00 PM Crash.” When daily desk fatigue
            and brain fog set in, productivity drops—and eventually,
            they blame your workspace.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: PROBLEM CARDS */}
          <div className="space-y-5">

            {/* Card 1 */}
            <div className="
              flex items-start gap-4
              p-5 rounded-xl
              bg-[#F9FAFB]
              border border-gray-200
              transition-all duration-300
              hover:shadow-md hover:-translate-y-[2px]
            ">
              <span className="text-[#00BFA6] text-lg mt-1">✕</span>
              <p className="text-[#4B5563] leading-relaxed">
                <strong className="text-[#2E2E2E]">The Commodity Trap:</strong>{" "}
                Desks and Wi-Fi make you identical to cheaper competitors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="
              flex items-start gap-4
              p-5 rounded-xl
              bg-[#F9FAFB]
              border border-gray-200
              transition-all duration-300
              hover:shadow-md hover:-translate-y-[2px]
            ">
              <span className="text-[#00BFA6] text-lg mt-1">✕</span>
              <p className="text-[#4B5563] leading-relaxed">
                <strong className="text-[#2E2E2E]">The Cost of Churn:</strong>{" "}
                Fatigued members leave. Empty desks quietly drain your revenue.
              </p>
            </div>

            {/* Card 3 */}
            <div className="
              flex items-start gap-4
              p-5 rounded-xl
              bg-[#F9FAFB]
              border border-gray-200
              transition-all duration-300
              hover:shadow-md hover:-translate-y-[2px]
            ">
              <span className="text-[#00BFA6] text-lg mt-1">✕</span>
              <p className="text-[#4B5563] leading-relaxed">
                <strong className="text-[#2E2E2E]">The Loyalty Gap:</strong>{" "}
                Basic amenities no longer secure lease renewals.
              </p>
            </div>

            {/* Callout */}
            <div className="
              mt-6
              p-5
              rounded-xl
              bg-[#F5F7FA]
              border border-gray-200
            ">
              <p className="
                text-[#2E2E2E]
                font-semibold
                text-[18px]
                leading-relaxed
              ">
                You need a premium differentiator to turn your space into a place
                they never want to leave.
              </p>
            </div>

          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg">

            <div className="grid grid-cols-2 h-full">

              {/* Left Image */}
              <img
                src="/tired-worker.png"
                alt="Frustrated desk worker"
                className="w-full h-full object-cover"
              />

              {/* Right Image */}
              <img
                src="/empty-desk.png"
                alt="Empty coworking desk"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Overlay gradient (premium touch) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>

            {/* Divider */}
            <div className="absolute inset-y-0 left-1/2 w-[2px] bg-white/70"></div>

          </div>

        </div>

      </div>
    </section>
  );
}