import React from "react";
import Layout from "../components/Layout";
import healthmonitoringsystemBg from "../assets/health.png";
import aboutImg from "../assets/health1.png";

export default function Healthmonitoringsystem() {
  return (
    <Layout>
      <div className="healthmonitoringsystem-page relative">
        <img src={healthmonitoringsystemBg} alt="Health Monitoring System" className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Health Monitoring System
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">

                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={aboutImg}
              alt="Health Monitoring System"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
             Smart Health Monitoring for Better Living
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Health care is more than just hospitals and doctors’ offices. Our health monitoring system aims to solve this problem. This advanced system enables dependable, convenient collection and transmission of health-related data, allowing users to monitor their health. In simple words, they will become active participants in their own self-care.
            </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              This device will help a multitude of patient populations, including the elderly, middle-aged persons and young people. It works in a completely automated manner and the data is recorded in digital format. In addition, accessing the data is very easy.
            </p>
             <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              With our health monitoring system, people will get access to enhanced health outcomes and improved quality of life. People in rural areas will specially benefit from health monitoring system. To know more, call us or email us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
