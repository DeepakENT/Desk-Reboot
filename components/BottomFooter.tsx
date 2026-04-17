"use client";

import React from "react";

export default function BottomFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 px-6">

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

        {/* Left - Copyright */}
        <p className="text-[13px] text-[#6B7280]">
          © {new Date().getFullYear()} DeskReboot. All rights reserved.
        </p>

        {/* Right - Optional Links */}
        <div className="flex items-center gap-4 text-[13px] text-[#6B7280]">

          <a
            href="#"
            className="hover:text-[#4A90E2] transition-colors duration-200"
          >
            Privacy
          </a>

          <a
            href="#"
            className="hover:text-[#4A90E2] transition-colors duration-200"
          >
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
}