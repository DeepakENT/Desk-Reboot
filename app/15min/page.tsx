"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const timeSlots = [
  "10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","2:00 PM","2:30 PM","3:00 PM",
];

export default function BookingPage() {
  const [phone, setPhone] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  const [success, setSuccess] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [showClosedModal, setShowClosedModal] = useState(false);

  const [bookingOpen, setBookingOpen] = useState(true);

  // ✅ Fetch booking status
  const fetchBookingStatus = async () => {
  const { data, error } = await supabase
    .from("settings")
    .select("booking_open")
    .single();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (data) setBookingOpen(data.booking_open);
};

  // ✅ Fetch booked slots
  const fetchBookedSlots = async () => {
    const today = new Date().toISOString().split("T")[0];

    const { data } = await supabase
      .from("bookings")
      .select("slot")
      .eq("date", today);

    if (data) setBookedSlots(data.map((item) => item.slot));
  };

  // ✅ Count sessions
  const getUserSessionCount = async (phone: string) => {
    const start = new Date();
    start.setDate(1);

    const { data } = await supabase
      .from("bookings")
      .select("id")
      .eq("phone", phone)
      .gte("created_at", start.toISOString());

    return data?.length || 0;
  };

  useEffect(() => {
    const init = async () => {
      await fetchBookingStatus();
      await fetchBookedSlots();
      setLoadingPage(false);
    };

    init();

    // 🔥 auto refresh status
    const interval = setInterval(() => {
      fetchBookingStatus();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ FIXED BOOKING LOGIC
  const handleBooking = async () => {
    if (!phone || !selectedSlot) return;

    setLoading(true);

    // 🔥 ALWAYS CHECK LIVE DB
    const { data } = await supabase
      .from("settings")
      .select("booking_open")
      .limit(1)
      .single();

    if (!data?.booking_open) {
      setLoading(false);
      setShowClosedModal(true);
      return;
    }

    const count = await getUserSessionCount(phone);

    if (count >= 3) {
      setLoading(false);
      setShowUpgrade(true);
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const { error } = await supabase.from("bookings").insert([
      {
        phone,
        slot: selectedSlot,
        date: today,
        session_type: "free",
      },
    ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setPhone("");
      setSelectedSlot("");
      fetchBookedSlots();
    }
  };

  if (loadingPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-semibold text-[#2C5AA0] text-center">
          Book Your Free 15-Min Reset
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          3 free sessions every month
        </p>

        {/* 🚨 CLOSED BANNER */}
        {!bookingOpen && (
          <div className="mt-4 p-3 rounded-md bg-red-50 border border-red-200 text-center">
            <p className="text-sm text-red-600 font-medium">
              ⛔ Booking is currently closed
            </p>
          </div>
        )}

        {/* Phone */}
        <input
          type="tel"
          disabled={!bookingOpen}
          placeholder="Enter phone number"
          className="w-full mt-6 border px-4 py-3 rounded-md disabled:bg-gray-100"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Slots */}
        <div className="mt-6">
          <p className="text-sm mb-3">Select a time slot</p>

          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((slot) => {
              const isBooked = bookedSlots.includes(slot);

              return (
                <button
                  key={slot}
                  disabled={isBooked || !bookingOpen}
                  onClick={() => setSelectedSlot(slot)}
                  className={`
                    py-2 text-sm rounded-md border
                    ${
                      !bookingOpen
                        ? "bg-gray-200 text-gray-400"
                        : isBooked
                        ? "bg-gray-200 text-gray-400"
                        : selectedSlot === slot
                        ? "bg-[#00BFA6] text-white"
                        : "hover:border-[#00BFA6]"
                    }
                  `}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleBooking}
          disabled={loading || !bookingOpen}
          className={`w-full mt-6 py-3 rounded-md font-semibold
            ${
              bookingOpen
                ? "bg-[#00BFA6] text-white"
                : "bg-gray-300 text-gray-500"
            }
          `}
        >
          {bookingOpen
            ? loading
              ? "Booking..."
              : "CONFIRM BOOKING"
            : "BOOKING IS CLOSED"}
        </button>

      </div>

      {/* 🎉 SUCCESS */}
      {success && (
        <Modal
          icon="🎉"
          title="Booking Confirmed!"
          text="Your slot is secured.\nArrive 5 minutes early."
          onClose={() => setSuccess(false)}
        />
      )}

      {/* ⚡ UPGRADE */}
      {showUpgrade && (
        <Modal
          icon="⚡"
          title="Upgrade Required"
          text="You’ve used your 3 free sessions.\nUnlock more with ₹399."
          buttonText="UPGRADE ₹399"
          link="https://wa.me/917539924301"
          onClose={() => setShowUpgrade(false)}
        />
      )}

      {/* ⛔ CLOSED */}
      {showClosedModal && (
        <Modal
          icon="⛔"
          title="Booking Closed"
          text="We are not accepting bookings right now."
          onClose={() => setShowClosedModal(false)}
        />
      )}

    </section>
  );
}

// 🔥 MODAL
function Modal({ icon, title, text, onClose, buttonText, link }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl text-center w-full max-w-sm">

        <div className="text-4xl">{icon}</div>

        <h3 className="mt-2 text-xl font-semibold text-[#2C5AA0]">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
          {text}
        </p>

        {/* 🔥 PRIMARY CTA */}
        {link && (
          <a
            href={link}
            target="_blank"
            className="block mt-5 bg-[#00BFA6] text-white py-3 rounded-md font-semibold"
          >
            {buttonText}
          </a>
        )}

        {/* 🔥 SECONDARY CTA */}
        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500 hover:text-gray-700"
        >
          Maybe later
        </button>

      </div>
    </div>
  );
}