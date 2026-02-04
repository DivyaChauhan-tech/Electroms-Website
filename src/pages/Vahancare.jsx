import React from "react";
import Layout from "../components/Layout";
import vahancareBg from "../assets/vahancare.png";
import aboutImg from "../assets/vahancare1.png";

export default function Vahancare() {
  return (
    <Layout>
      <div className="vahancare-page relative">
        <img src={vahancareBg} alt="Vahancare" className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Vahan Care
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
           <div className="flex justify-center md:justify-end mt-6 md:mt-0 order-2 md:order-1">
            <img
              src={aboutImg}
              alt="Vahan Care"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Vahan Care: One-Stop Digital Solution for Car Owners
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Nothing is fragmented like the automobile industry. At Electrom
              Technology, we aim to solve this problem. Car owners will get
              pre-appointment service and repair, parts sales, emergency
              services and even ambulance services. The idea is to solve all the
              worries of car owners through a digitalized solution.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              The pre-appointment service aims to solve car owners’ service and
              repair problems. And emergency service will help individuals
              stranded on roads. Most importantly, they can also purchase
              automobile parts through web or app. Our experts are working to
              provide all the required solutions to car owners.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              We want to change the automobile industry. Moreover, we are
              looking for partnerships, suggestions, etc. Call us or email to
              know more about Vahan Care.
            </p>
          </div>

         
        </div>
      </section>
    </Layout>
  );
}
