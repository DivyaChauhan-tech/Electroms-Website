import React from "react";
import Layout from "../components/Layout";
import wifisolutionBg from "../assets/wifi.png";
import aboutImg from "../assets/wifi1.png";

export default function Wifisolution() {
  return (
    <Layout>
      <div className="wifisolution-page relative">
        <img src={wifisolutionBg} alt="Wifi Solution" className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Wifi Solution
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="flex justify-center md:justify-end mt-6 md:mt-0 order-2 md:order-1">
            <img
              src={aboutImg}
              alt="Wifi Solution"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Seamless Wi-Fi for Modern Workplaces
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              We live in a connected world. Businesses are increasingly
              dependent on high speed connectivity solutions. Hence, there’s
              huge demand for fast and reliable wireless connectivity solutions.
              Our Wi-Fi solutions provide more speed, capacity, and reliability
              for business-critical applications.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Our Wi-Fi solutions can automatically optimize for high-density
              environments. In simple words, you will get exceptional wireless
              performance all day long. Moreover, you will get compromising
              security for your small or medium sized business.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Let our experts help you with Wi-Fi solutions to meet your
              business goals. Call us or email us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
