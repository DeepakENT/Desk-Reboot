export default function Footer() {
  return (
    <footer className="w-full bg-[#F3EFEA] border-t border-[#E2DBD5] py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* CTA Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

          {/* Call Button */}
          <a
            href="tel:+917539924301"
            className="
              flex items-center justify-center gap-2
              w-full md:w-auto
              px-6 py-3
              rounded-full
              border border-[#D6CEC6]
              text-[#4F5552]
              text-[15px]
              font-[var(--font-montserrat)]
              hover:bg-white
              active:scale-95
              transition
            "
          >
            📞 Call Now
          </a>

          {/* WhatsApp Button (Primary) */}
          <a
            href="https://wa.me/917539924301"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              w-full md:w-auto
              px-8 py-3
              rounded-full
              bg-[#C2A15F]
              hover:bg-[#6A7F75]
              text-white
              text-[15px]
              font-[var(--font-montserrat)]
              shadow-md hover:shadow-lg
              active:scale-95
              transition-all duration-300
            "
          >
            💬 Book on WhatsApp
          </a>

        </div>

        {/* Trust Line */}
        <div className="mt-6 text-center text-[13px] text-[#7A7A72] font-[var(--font-montserrat)]">
          🔒 Private in-home • ✔ Verified therapists • 💳 Pay after session
        </div>

        {/* Micro Urgency */}
        <div className="mt-3 text-center text-[13px] text-[#B8954E] font-[var(--font-montserrat)]">
          ⏱️ Evening slots fill up quickly
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-[#E2DBD5] w-full max-w-3xl mx-auto" />

        {/* Bottom */}
        <div className="mt-6 text-center text-[13px] text-[#9A9188] font-[var(--font-montserrat)]">
          © {new Date().getFullYear()} All rights reserved
        </div>

      </div>
    </footer>
  );
}