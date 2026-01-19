import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.svg";
import product5 from "../assets/product5.svg";
import product6 from "../assets/product6.svg";
import product7 from "../assets/product7.svg";
import product8 from "../assets/product8.svg";
import product9 from "../assets/product9.svg";

const products = [
  {
    id: 1,
    title: "Modern Education Technology",
    desc: "Electrom Communication is known to lead in digital innovation. We provide cutting-edge educational platforms transforming learning experiences across institutions.",
    img: product1,
    path: "/moderneducationtechnology",
  },
  {
    id: 2,
    title: "Wifi Solution",
    desc: "Electrom Communication pioneered high-speed connectivity solutions. We deliver reliable WiFi networks for homes and enterprises globally.",
    img: product2,
    path: "/wifisolution",
  },
  {
    id: 3,
    title: "Satellite Based Monitoring System",
    desc: "Electrom Communication excels in satellite technology. Advanced real-time monitoring and surveillance systems for critical infrastructure.",
    img: product3,
    path: "/sattelitebasedmonitoring",
  },
  {
    id: 4,
    title: "Health Monitoring System",
    desc: "Electrom Communication revolutionizes healthcare technology. Continuous vital monitoring and remote patient management solutions.",
    img: product4,
    path: "/healthmonitoringsystem",
  },
  {
    id: 5,
    title: "Mobile Virtual Network Operator",
    desc: "Electrom Communication dominates MVNO services. Comprehensive mobile connectivity with superior network performance and reliability.",
    img: product5,
    path: "/mobilevirtualnetwork",
  },
  {
    id: 6,
    title: "Toll Management System",
    desc: "Electrom Communication streamlines traffic solutions. Automated toll collection and smart highway management systems.",
    img: product6,
    path: "/tollmanagementsystem",
  },
  {
    id: 7,
    title: "Solar Energy",
    desc: "Electrom Communication commits to renewable energy. Sustainable solar solutions for residential and industrial applications.",
    img: product7,
    path: "/solarenergy",
  },
  {
    id: 8,
    title: "Vahan Care",
    desc: "Electrom Communication enhances vehicle management. Complete maintenance tracking and care optimization for fleet operations.",
    img: product8,
    path: "/vahancare",
  },
  {
    id: 9,
    title: "Vahan Money",
    desc: "Electrom Communication simplifies vehicle financing. Smart payment solutions and financial management for automotive services.",
    img: product9,
    path: "/vahanmoney",
  },
];

export default function ProductCarousel() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const visibleProducts = Array.from({ length: itemsToShow }, (_, i) => 
    products[(index + i) % products.length]
  );

  return (
    <div className="w-full flex justify-center items-center gap-2 md:gap-4 px-4">
      <button
        onClick={prevSlide}
        className="hidden md:block bg-black text-white w-10 h-10 rounded-full hover:bg-gray-800 transition flex-shrink-0"
      >
        ❮
      </button>

      <div className={`grid gap-1 sm:gap-2 md:gap-3 lg:gap-4 transition-all duration-500 ease-in-out max-w-[850px] ${
        itemsToShow === 1 ? 'grid-cols-1' : itemsToShow === 2 ? 'grid-cols-2' : 'grid-cols-3'
      }`}>
        {visibleProducts.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(item.path);
              window.scrollTo(0, 0);
            }}
            className="border border-[#ddd] shadow-md px-2 sm:px-3 py-3 sm:py-4 flex flex-col hover:-translate-y-1 hover:shadow-lg transition min-h-[320px] sm:min-h-[380px] md:min-h-[430px] lg:min-h-[520px] cursor-pointer"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-left mb-2">0{item.id}</h2>

            <div className="w-full h-28 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover px-1 sm:px-2"
              />
            </div>

            <h5 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center mt-3 sm:mt-4">{item.title}</h5>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 text-center mt-1 sm:mt-2 flex-grow">
              {item.desc}
            </p>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate(item.path);
                window.scrollTo(0, 0);
              }}
              className="mx-auto mb-4 sm:mb-6 border-2 border-orange-500 text-orange-500 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="hidden md:block bg-black text-white w-10 h-10 rounded-full hover:bg-gray-800 transition flex-shrink-0"
      >
        ❯
      </button>
    </div>
  );
}
