import React from 'react';
import { useState } from "react";
import achievementsBg from "../assets/achievements.svg";
import sideImg from "../assets/achievement-s.svg";

const slides = [
  {
    title: "Our Achievements",
    desc: "Achievements highlight progress, credibility, and excellence, making them essential for building reputation and motivation. This prestigious recognition reflects our commitment to innovation, customer satisfaction, and rapid expansion in the telecom industry.",
  },
  {
    title: "Industry Recognition",
    desc: "Our continuous efforts and dedication have helped us achieve recognition in the telecom industry across multiple national and international platforms.",
  },
  {
    title: "Growth & Expansion",
    desc: "With constant innovation and customer-first approach, we have rapidly expanded our services across multiple regions.",
  },
];

export default function Achievements() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="bg-[#051A53] py-8 md:py-12 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${achievementsBg})` }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-center md:text-left flex flex-col justify-between min-h-[270px] mt-8 md:mt-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {slides[index].title}
            </h2>

            <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
              {slides[index].desc}
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-3 self-start">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200 transition"
            >
              ❯
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={sideImg}
            alt="Achievements"
            className="w-full max-w-[480px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
