import React from "react";
function FeatureBox() {
  return (
    <>
      <section className="max-w-[1000px] mx-auto px-5 -mt-5 relative z-20">
        <div className="bg-[#051A53] border-l-[8px] border-[#FF5E14] p-8 text-white shadow-lg max-w-[600px]">
          <h1 className="font-bold text-sm mb-3">
            Revolutionizing Global Connectivity
          </h1>

          <p className="text-sm leading-snug mb-3">
            At Electrom Communications, we are committed to revolutionizing
            global connectivity through advanced technology and innovation.
          </p>

          <ul className="space-y-2 text-[12px]">
            {[
              "Global Impact",
              "Advanced Solutions For All",
              "Shaping The Future Of Connectivity",
              "Leading In Innovation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#FF5E14] text-xl leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="hidden md:block"></div>
        </div>
      </section>
    </>
  );
}

export default FeatureBox;
