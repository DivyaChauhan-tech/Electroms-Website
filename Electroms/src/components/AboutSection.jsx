import React from "react";
import aboutImg from "../assets/about.svg";

function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative w-full flex items-center"
    >
      <div className="max-w-[1000px] mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        <div className="text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            We are Electrom Communications
          </h2>
          <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-white/90 text-justify">
            Electrom Communications has successfully participated in development
            of many advanced projects all over the world and has received awards
            and distinctions for its great solutions. Today, our Research &
            Development facilities are counted among the best in the world. We
            develop and provide products, solutions and professional services
            for both developing and developed nations. Electrom Communications
            has established itself as a global leader in innovation,
            successfully contributing to advanced projects across the world.
            Recognized for its excellence, the company has received numerous
            awards and distinctions for its groundbreaking solutions.
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
