import React from "react";
import Layout from "../components/Layout";
import tollmanagementsystemBg from "../assets/toll.png";
import aboutImg from "../assets/toll1.png";
import aboutImg1 from "../assets/toll2.png";
import aboutImg2 from "../assets/toll3.png";

export default function Tollmanagementsystem() {
  return (
    <Layout>
      <div className="tollmanagementsystem-page relative">
        <img
          src={tollmanagementsystemBg}
          alt="Toll Management System"
          className="w-full h-40 sm:h-56 md:h-auto object-cover -mt-8 sm:mt-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Toll Management System
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
              Smart & Secure Toll Management Solutions
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Our advanced toll management systems ensure fraud-free
              transactions management resulting in a steady, accurate, and
              traceable flow of vehicle. The entire system is developed to
              reduce expenses on toll operation by governments, prevent
              accidents and slow movement of traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[#c6daf5]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              What Makes Our Advanced Toll Management System So Special?
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              The idea is to utilize the RFID technology to its maximum
              potential. The entire system comprises of RFID tags, RFID reader,
              and related devices. In addition, highly sophisticated software
              will manage the complete process.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              The vehicle with the ‘’pass’’ will have dedicated lanes and the
              system deducts the appropriate amount from the connected account.
              This process will happen in a completely automated manner. Hence,
              there won’t be any traffic jam, pollution, frauds and wastage of
              time.
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
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="flex justify-center md:justify-end mt-6 md:mt-0 order-2 md:order-1">
            <img
              src={aboutImg2}
              alt="Toll Management System"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Advanced Toll Management System is a Problem Solver
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Every year, millions of dollars are wasted at tolls due to poor
              management of tolls. We want to solve this problem with our
              ‘’Advanced Toll Management Solutions’’.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
