import React from 'react'
import heroImg from "../assets/aboutus.svg";
import Button from "./Button";

function About() {
  return (
    <section id="about" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
         <div className="flex justify-center md:justify-start mt-6 md:mt-0 order-2 md:order-1">
           <img
             src={heroImg}
             alt="About Image"
             className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
           />
         </div>

         <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            About Us
          </h2>

          <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
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
          
          <Button
            text="Read More"
            href="/about"
            className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm "
          />
        </div>

      </div>
    </section>
  );
}

export default About;
