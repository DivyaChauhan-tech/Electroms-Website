import React, { useState, useEffect } from "react";
import Button from "./Button";
import hero1 from "../assets/homebanner.svg";
import hero2 from "../assets/homebanner.svg";
import hero3 from "../assets/homebanner.svg";
import hero4 from "../assets/homebanner.svg";
import hero1Mobile from "../assets/homebanner1.jpg";
import hero2Mobile from "../assets/homebanner1.jpg";
import hero3Mobile from "../assets/homebanner1.jpg";
import hero4Mobile from "../assets/homebanner1.jpg";

const slides = [
  { desktop: hero1, mobile: hero1Mobile },
  { desktop: hero2, mobile: hero2Mobile },
  { desktop: hero3, mobile: hero3Mobile },
  { desktop: hero4, mobile: hero4Mobile },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[80vh] flex items-center overflow-hidden mt-8 sm:mt-12"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-10"
            }`}
            style={{ backgroundImage: `url(${isMobile ? slide.mobile : slide.desktop})` }}
          />
        ))}
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="hero-content text-white max-w-[800px] mt-16 sm:mt-24 lg:mt-30">

          <h6 className="font-medium mb-2 text-xs sm:text-sm md:text-base text-white">
            Connecting the World with Innovation
          </h6>

          <h1 className="font-extrabold mb-4
            text-[1.6rem] 
            sm:text-[2.2rem] 
            md:text-[2.8rem] 
            lg:text-[3.2rem] 
            leading-tight">
            Electrom Communications
          </h1>

          <p className="text-white 
            text-xs 
            sm:text-sm 
            md:text-base 
            mb-6 
            leading-relaxed">
            It enables instant global communication, making modern
            telecommunication,
            <br className="hidden md:block" />
            internet, and navigation systems possible.
          </p>

          <Button text="Our Products" href="#products" className="mt-2" variant="solid" />
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              index === current
                ? "bg-white/80 w-7 h-1.5"
                : "bg-[#FF5E14] w-2 h-1.5"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}

export default Hero;
