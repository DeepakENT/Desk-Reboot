import Image from "next/image";

export default function Experience() {
  return (
    <section className="bg-[#F4F1EC] py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[clamp(26px,3vw,38px)] font-[var(--font-cormorant)] text-[#4F5552] leading-[1.15] tracking-tight">
            45-minute Stress Reset
          </h2>
        </div>

        {/* Card */}
        <div className="relative bg-[#ECE7DF] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* LEFT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              {/* Icon */}
              <div className="mb-10">
                <Image
                  src="/empathy-icon.png"
                  alt="Empathy"
                  width={84}
                  height={84}
                  className="opacity-90"
                />
              </div>

              {/* Label */}
              <p className="text-[#7A8F85] text-xs tracking-[0.2em] uppercase mb-6">
                We understand
              </p>

              {/* Content */}
              <div className="max-w-md text-[#5A605D] text-[16px] leading-[1.75]">

                <p className="mb-6">
                  We know the feeling of not being fully present.
                </p>

                <p className="mb-6">
                  Your body is here.<br />
                  Your mind is still at work.
                </p>

                <p className="mb-8">
                  Even at home… you’re still carrying the day.
                </p>

                <p className="mb-8">
                  So we created this service.
                </p>

                <p className="mb-6">
                  Because we saw too many high-performers losing their sleep,
                  their energy, and their family time…
                </p>

                <p className="text-[#4F5552] font-medium">
                  To a cycle that never ends.
                </p>

              </div>

              {/* CTA */}
              <div className="mt-12 w-full sm:w-auto">
                <a
                  href="https://wa.me/917539924301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block sm:inline-block
                    text-center
                    bg-[#C2A15F]
                    hover:bg-[#6A7F75]
                    text-white
                    text-[15px]
                    px-10 py-4
                    rounded-full
                    transition-all duration-300
                    ease-out
                    shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                    hover:scale-[1.03]
                    hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]
                  "
                >
                  Book Your 45-Min Reset →
                </a>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              {/* Icon */}
              <div className="mb-10">
                <Image
                  src="/authority-icon.png"
                  alt="Authority"
                  width={84}
                  height={84}
                  className="opacity-90"
                />
              </div>

              {/* Label */}
              <p className="text-[#7A8F85] text-xs tracking-[0.2em] uppercase mb-6">
                The solution
              </p>

              {/* List */}
              <ul className="max-w-md text-[#5A605D] text-[16px] space-y-6">

                <li className="flex items-start gap-4">
                  <span className="text-[#7A8F85] mt-[5px]">✓</span>
                  <span>
                    <strong className="text-[#4F5552]">
                      45-minute Stress Reset
                    </strong>
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-[#7A8F85] mt-[5px]">✓</span>
                  <span>
                    <strong className="text-[#4F5552]">
                      30 min Physical Recovery
                    </strong><br />
                    Release deep-seated tension
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-[#7A8F85] mt-[5px]">✓</span>
                  <span>
                    <strong className="text-[#4F5552]">
                      15 min Mental Decompression
                    </strong><br />
                    Clear a stressed, overloaded mind
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-[#7A8F85] mt-[5px]">✓</span>
                  <span>
                    <strong className="text-[#4F5552]">
                      Zero commitment
                    </strong><br />
                    Just the recovery you need, when you need it
                  </span>
                </li>

              </ul>

            </div>

          </div>

          {/* Divider */}
          <div className="hidden md:block absolute top-20 bottom-20 left-1/2 w-px bg-[#8E8E85]/30" />

        </div>

      </div>
    </section>
  );
}