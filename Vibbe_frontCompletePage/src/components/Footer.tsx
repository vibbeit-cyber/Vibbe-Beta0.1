import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      {/* MOBILE */}
      <div className="block sm:hidden w-full py-[0.50rem] px-[1rem]">
        <div className="flex flex-col items-center justify-center gap-[0.25rem] text-center">

          <nav className="flex flex-row flex-wrap justify-center items-center gap-[0.75rem]">
            <a href="/privacy" className="text-[0.6rem] text-white">Privacy Policy</a>
            <a href="/terms" className="text-[0.6rem] text-white">Terms And Services</a>
            <a href="/cancellation" className="text-[0.6rem] text-white">Cancellation Policy</a>
            <a href="/cookie" className="text-[0.6rem] text-white">Cookie Policy</a>
          </nav>

          <p className="text-[0.5875rem] text-white opacity-90">
            All rights reserved. {new Date().getFullYear()}, Vibbe.
          </p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex w-full py-[1.25rem] px-[2rem]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <nav className="flex flex-row gap-[1.5rem]">
            <a href="/privacy" className="text-[0.9375rem] text-white">Privacy Policy</a>
            <a href="/terms" className="text-[0.9375rem] text-white">Terms And Services</a>
            <a href="/cookie" className="text-[0.9375rem] text-white">Cookie Policy</a>
            <a href="/cancellation" className="text-[0.9375rem] text-white">Cancellation Policy</a>
          </nav>

          <p className="text-[0.9375rem] text-white">
            All rights reserved. {new Date().getFullYear()}, Vibbe.
          </p>
        </div>
      </div>
    </footer>
  );
}