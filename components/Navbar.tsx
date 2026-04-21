export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/deskreboot-logo.svg"
            alt="DeskReboot"
            className="h-10 w-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Partner Login */}
          <a
            href="/partner-login"
            className="
              hidden sm:inline-block
              text-sm
              text-[#6B7280]
              hover:text-[#4A90E2]
              transition-colors duration-200
              font-medium
              relative
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0
              after:bg-[#4A90E2]
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Partner Login
          </a>

          {/* CTA Button */}
        <a
  href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20check%20territory%20availability%20for%20DeskReboot"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#00BFA6]
    hover:bg-[#009e8e]
    text-white
    text-[12px] sm:text-sm
    px-4 sm:px-6
    py-2 sm:py-2.5
    rounded-sm
    transition-all duration-300 ease-in-out
    hover:shadow-md
    hover:-translate-y-[1px]
    active:scale-95
    font-semibold
    whitespace-nowrap
  "
>
  <span className="sm:hidden">CHECK TERRITORY</span>
  <span className="hidden sm:inline">CHECK TERRITORY AVAILABILITY</span>
</a>

        </div>

      </div>
    </header>
  );
}