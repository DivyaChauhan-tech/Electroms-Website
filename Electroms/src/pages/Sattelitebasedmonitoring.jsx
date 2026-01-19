import React from "react";
import Layout from "../components/Layout";
import sattelitebasedmonitoringBg from "../assets/sattelite.png";
import sattelitebasedmonitoring from "../assets/sattelite1.png";

export default function Sattelitebasedmonitoring() {
  return (
    <Layout>
      <div className="sattelitebasedmonitoring-page relative">
        <img
          src={sattelitebasedmonitoringBg}
          alt="Satellite Based Monitoring System"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Satellite Based Monitoring System
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={sattelitebasedmonitoring}
              alt="Satellite Based Monitoring System"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto rounded-lg"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Real-Time Satellite Monitoring for a Safer, Smarter World
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              We plan to launch a satellite-based monitoring system, capable of
              collecting detailed and accurate data on different parameters.
              This information will be collected around the globe on a real time
              basis.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              The satellite based monitoring system is developed to solve
              different issues like pollution, weather forecasting, monitoring
              of natural and human-induced emergencies and disasters, etc. It
              will help private and government agencies to respond better to
              different problems.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              The main benefit of satellite based monitoring system is its
              ability to work in real time. The centralized centre will collect
              satellite images as the source of unbiased and up-to-date data. If
              you want to know more about our exciting satellite based
              monitoring system, call us or email us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
