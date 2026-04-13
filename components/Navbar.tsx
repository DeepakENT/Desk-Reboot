export default function Navbar() {
  return (
    <header className="w-full bg-[#F4F1EC] border-b border-[#E8E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[70px] sm:h-[80px] flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* SVG Logo */}
          <img
  src="/sh_logo.svg"
  alt="SoftHour"
  className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] object-contain"
/>
          {/* Brand Text */}
          <div className="leading-tight">
            <span className="block text-[18px] sm:text-[26px] font-[var(--font-cormorant)] text-[#4F5552] tracking-[0.04em]">
              Soft Hour
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-[#9B9488]">
              In-Home Massage
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
  href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#B89B5E]
    hover:bg-[#6A7F75]
    text-white
    text-[13px] sm:text-sm
    px-4 sm:px-6
    py-2 sm:py-2.5
    rounded-full
    transition-all
    duration-300
    ease-in-out
    hover:scale-105
    hover:shadow-lg
    active:scale-95
  "
>
  Book Now
</a>

      </div>
    </header>
  );
}