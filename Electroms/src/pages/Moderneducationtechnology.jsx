import React from "react";
import Layout from "../components/Layout";
import moderneducationtechnologyBg from "../assets/modern.png";
import aboutImg from "../assets/modern1.png";
import about2Img from "../assets/modern2.png";

export default function Moderneducationtechnology() {
  return (
    <Layout>
      <div className="moderneducationtechnology-page relative">
        <img
          src={moderneducationtechnologyBg}
          alt="Modern Education Technology"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Modern Education Technology
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-15 bg-[#c6daf5]">
        <p className="text-[#777] text-sm md:text-sm lg:text-sm text-center max-w-[700px]">
          We plan to provide modern education technology solutions that will help millions of students of all ages in different parts of the world. We will enable every student in rural and urban areas to have access to the best education in the world. We will bring a modern twist to traditional education methodologies.
        </p>
      </div>
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
           <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={aboutImg}
              alt="Modern Education Technology"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Our Talented Research & Development Team
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Electrom Communications has successfully participated in
              development of many advanced projects all over the world and has
              received awards and distinctions for its great solutions. Today,
              our Research & Development facilities are counted among the best
              in the world. We develop and provide products, solutions and
              professional services for both developing and developed nations.
              Electrom Communications has established itself as a global leader
              in innovation, successfully contributing to advanced projects
              across the world. Recognized for its excellence, the company has
              received numerous awards and distinctions for its groundbreaking
              solutions.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              We will setup dedicated smart classrooms where students can attend
              lectures from top universities from the same country and abroad.
              This will help them greatly in having the same education as
              students learning in these colleges. In simple words, they will
              have access to world-class education within their city or village.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[#c6daf5]">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
           <div className="md:pl-4 lg:pl-8">
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
               No More Digital Gap!
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Modern education depends heavily on laptops. But we will solve
              this problem as well. We have specially designed tablets that will
              solve this problem. Students can access learning material even
              when they are offline. This is revolutionary as they don’t have to
              depend on internet connectivity. The rural-urban divide will be
              eliminated.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              If you want to know more about our modern education technology
              solutions, contact us. Our customer representatives will be happy
              to help you.
            </p>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={about2Img}
              alt="Modern Education Technology"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
