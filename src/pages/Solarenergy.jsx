import React from "react";
import Layout from "../components/Layout";
import solarenergyBg from "../assets/solar.png";
import aboutImg from "../assets/solar1.png";
import aboutImg1 from "../assets/solar2.png";
import aboutImg2 from "../assets/solar3.png";

export default function Solarenergy() {
  return (
    <Layout>
      <div className="solarenergy-page relative">
        <img src={solarenergyBg} alt="Solar Energy" className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Solar Energy
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
           <div className="flex justify-center md:justify-end mt-6 md:mt-0 order-2 md:order-1">
             <img
               src={aboutImg}
               alt="Toll Management System"
               className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
             />
           </div>
           <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
               Powering a Cleaner Future with Solar Energy
             </h2>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               Solar Energy holds the potential to provide clean power for homes,
               communities and businesses. It will help in reducing the need for
               fossil fuel generation and help create jobs, enabling families and
               businesses to save money, and cut greenhouse emissions. Most
               importantly, it is a rapidly growing industry.
             </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               We are preparing many amazing solar products such as solar
               batteries, panels, etc. And this is only the beginning, and we are
               in the process of developing many other marvellous solutions for
               the renewable energy industry.
             </p>
           </div>
         </div>
       </section>

       <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[#c6daf5]">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
           <div className="md:pl-4 lg:pl-8">
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
               Driving Innovation & Impact in Solar Energy
             </h2>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               We have formulated extensive research and development programmes
               to explore opportunities in the solar energy sector. We will
               influence millions of lives around the world.
             </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
               We have a team that shares the company's vision and commitment of
               renewable energy, an enviable and innovative product range, a
               track record that any organization would be proud of in such a
               short span of time.
             </p>
           </div>
           <div className="flex justify-center md:justify-end mt-6 md:mt-0">
             <img
               src={aboutImg1}
               alt="Toll Management System"
               className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
             />
           </div>
         </div>
       </section>

       <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 lg:gap-12 items-center">
          <div className="flex justify-center md:justify-end mt-6 md:mt-0 order-2 md:order-1">
            <img
              src={aboutImg2}
              alt="Toll Management System"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Cutting-Edge Solar Power Technology for a Brighter Tomorrow
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              We promise you the best of cutting-edge solar power technology in
              the industry. If you want to know more, call us or email us. We
              will be happy discuss our upcoming solar energy products.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
