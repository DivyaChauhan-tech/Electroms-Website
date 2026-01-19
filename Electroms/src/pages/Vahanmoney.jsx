import React from "react";
import Layout from "../components/Layout";
import vahanmoneyBg from "../assets/vahanmoney.png";
import aboutImg from "../assets/vahanmoney1.png";

export default function Vahanmoney() {
  return (
    <Layout>
      <div className="vahanmoney-page relative">
        <img src={vahanmoneyBg} alt="Vahan Money" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">
            Vahan Money
          </h1>
        </div>
      </div>

      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={aboutImg}
              alt="Vahan Money"
              className="w-full sm:w-5/6 md:w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto"
            />
          </div>
          <div className="md:pl-4 lg:pl-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Vahan Money: Smart, Secure & Seamless Toll Payments
            </h2>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Vahan Money provides payment gateway, one-tap pay solutions to
              manage your movement convenient and interruption-free. The wallet
              supports payments at tolls across the length and breadth of the
              country. The mobile wallet works in completely automated manner;
              ending long queues outside tolls and adding up to increased
              revenue for authorities.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Vahan Money is the mobile wallet that will revolutionize the toll
              collection process as we know it. Most importantly, payments
              happen securely and quickly. Setting up an account is also very
              convenient and safe. In simple words, Vahan Money will make things
              simpler for millions of users on a global basis. The wallet can be
              loaded with the help of debit card, credit card, net banking, etc.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              Millions of dollars are wasted every year because of slow movement
              of vehicles at toll collection points. However, this would change
              with the introduction of Vahan Money.
            </p>
            <p className="text-[#777] text-[11px] sm:text-xs md:text-xs lg:text-sm leading-relaxed md:leading-relaxed mb-5 md:mb-6 text-justify">
              If you want to know more about Vahan Money, call us or email us.
              We will happy to explain the benefits of our mobile wallet.
            </p>
          </div>

        
        </div>
      </section>
    </Layout>
  );
}
