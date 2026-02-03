import React from 'react';

const data = [
  {
    id: 1,
    title: "We Breathe And Live Innovation",
    desc: "Electrom Communications is known to lead the way when it comes to innovation. Our global delivery model focuses on the best resources to be drawn from our vast talent pool to offer ideal solutions for competitive business environments.",
    img: new URL("../assets/Mission1.png", import.meta.url).href,
    bg: "bg-orange-600",
  },
  {
    id: 2,
    title: "Affordable And Advanced Solutions",
    desc: "Going forward, we provide innovative low-cost solutions to our clients. In this way, we take care of their budget needs in the right way. This has helped us to maintain a very strong foothold and customer base in different geographies.",
    img: new URL("../assets/Mission2.png", import.meta.url).href,
    bg: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Global Innovation Leadership",
    desc: "As our business grows, we plan to work towards the dream of a truly better world. This means that everyone has access to cutting-edge technology solutions. We make sure that everything we do help in this cause.",
    img: new URL("../assets/Mission3.png", import.meta.url).href,
    bg: "bg-orange-600",
  },
];

export default function MissionVision() {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          Our Mission And Vision
        </h2>
        <p className="text-center text-xs sm:text-sm text-[#777] max-w-2xl mx-auto">
          At Electrom Communications, our mission is to redefine global
          connectivity through cutting-edge electromagnetic communication
          technologies
        </p>
      </div>

      {/* ✅ Cards */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#ddd] shadow-lg p-4 sm:p-5 text-center hover:shadow-xl transition"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
            >
              <img src={item.img} alt={item.title} className="w-6" />
            </div>

            {/* Title */}
            <h5 className="font-bold text-sm sm:text-base md:text-lg mb-3 max-w-xs mx-auto px-2">{item.title}</h5>

            {/* Description */}
            <p className="text-sm text-gray-500 px-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
