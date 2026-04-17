"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function PartnerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const email = `${username}@desk.com`;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Invalid username or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold text-[#2C5AA0] text-center">
          Partner Login
        </h2>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full border px-4 py-3 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#00BFA6] text-white py-3 rounded-md"
          >
            LOGIN
          </button>

        </div>

      </div>
    </section>
  );
}