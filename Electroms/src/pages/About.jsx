import React from "react";
import Layout from "../components/Layout";
import about from "../assets/a.svg";
import aboutImg from "../assets/a1.png";
import about2Img from "../assets/a2.png";

export default function About() {
  return (
    <Layout>
      <div className="moderneducationtechnology-page relative">
        <img src={about} alt="Modern Education Technology" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-15 bg-[#c6daf5] space-y-1">
        <p className="text-[#777] text-sm md:text-sm lg:text-sm text-center max-w-[700px]">
          Electrom Communications has successfully participated in development of many advanced projects all over the world and has received awards and distinctions for its great solutions.
        </p>
        <p className="text-[#777] text-sm md:text-sm lg:text-sm text-center max-w-[700px] mt-2">
          Today, our Research & Development facilities are counted among the best in the world. We develop and provide products, solutions and professional services for both developing and developed nations.
        </p>
      </div>
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
           <div className="flex justify-center md:justify-end mt-6 md:mt-0">
             <img
               src={aboutImg}
               alt="about us"
               className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
             />
           </div>
           <div className="md:pl-4 lg:pl-8">
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
               Electrom Communications: Innovate. Excel. Serve.
             </h2>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               Innovation: Electrom Communications prides itself on being an
               innovative company. We succeed on creativity and ingenuity in
               research and development. Our innovations differentiate us from
               the rest of the pack.
             </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               Excellence: We always excel in whatever we do. We focus on
               resolving the challenges with keeping in mind the needs of our
               clients. We specially focus on all the countless and unseen
               details that result in great results.
             </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               Responsible: We work towards the benefit of societies around the
               globe, by ensuring that people have access to advanced
               technologies. Moreover, we also try to develop new technological
               solutions that actually benefit people.
             </p>
           </div>
         </div>
       </section>
       <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[#c6daf5]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Electrom Communications: Leadership in Action
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Electrom Communications is a company of strength. And our strength
              is derived from our capable leadership team. Our senior level
              managers and middle level management team comprises of the best
              professionals in the telecom industry.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              If you want to know about our products, services, upcoming
              projects or anything else, call us or email us. Our customer
              representative team will get back to you.
            </p>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={about2Img}
              alt="About us"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
