"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CoworkingPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const sendOtp = () => {
    if (!phone) return;

    localStorage.setItem("user_phone", phone);
    router.push("/15min");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-center">

        <h2 className="text-2xl font-semibold text-[#2C5AA0]">
          Get Your Free 15-Min Reset
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          Enter your phone number
        </p>

        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full mt-6 border px-4 py-3 rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={sendOtp}
          className="w-full mt-6 bg-[#00BFA6] text-white py-3 rounded-md"
        >
          CONTINUE
        </button>

      </div>

    </section>
  );
}