import React from "react";
import aboutImg from "../assets/about.svg";

function AboutSection() {
  return (
    <section id="about-section" className="relative w-full flex items-center">
      <div className="max-w-[1000px] mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        <div className="text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            We are Electrom Communications
          </h2>
          <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-white/90 text-justify">
            Electrom Communication, a leading technology company, touches a
            billion lives through ground-breaking solutions. With presence in
            both emerging and developed economies, we have become an active
            global player. Our entrepreneurship spirit, coupled with
            innovativeness, has been recognized as industry’s best. Electrom
            Communication is a global leader in technology and innovation,
            shaping the future through groundbreaking solutions that touch over
            a billion lives.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-full max-w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
