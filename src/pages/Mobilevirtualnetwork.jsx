import React from "react";
import Layout from "../components/Layout";
import mobilevirtualnetworkBg from "../assets/mobile.png";
import aboutImg from "../assets/mobile1.png";

export default function Mobilevirtualnetwork() {
  return (
    <Layout>
      <div className="mobilevirtualnetwork-page relative">
        <img src={mobilevirtualnetworkBg} alt="Mobile Virtual Network Operator" className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Mobile Virtual Network Operator
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
             <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={aboutImg}
              alt="Mobile Virtual Network Operator"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Affordable & Global 3G/4G MVNO Services
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Our powerful 3G/4G MVNO services support suitable low cost pricing strategies. We plan to tap new subscribers and gain significant market share globally. We offer end-to-end service, including national and international voice, SMS, data, international roaming services and other core network functions.
            </p>
                        <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Our Mobile Virtual Network Services aim to best meet the mobile demands of our customers. We believe that mobile industry is booming and MVNO is the right way to enter this competitive market. Our services are available in both prepaid and post-paid modes. If you want to know more about our MVNO venture, call us or email us.
            </p>
          </div>

       
        </div>
      </section>
    </Layout>
  );
}
