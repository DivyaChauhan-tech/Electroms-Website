import React from "react";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";

const clientsData = [
  { id: 1, img: c1, name: "Client 1" },
  { id: 2, img: c2, name: "Client 2" },
  { id: 3, img: c3, name: "Client 3" },
  { id: 4, img: c4, name: "Client 4" },
  { id: 5, img: c5, name: "Client 5" },
  { id: 6, img: c6, name: "Client 6" },
];

export default function OurClient() {
  const extendedClients = [...clientsData, ...clientsData];

  return (
    <section id="clients" className="w-full py-10 md:py-10 lg:py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          Our Clients
        </h2>
        <p className="text-center text-xs sm:text-sm text-[#777] max-w-2xl mx-auto mb-8 md:mb-10">
          We are proud to work with leading organizations across various industries
        </p>

        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .carousel {
              animation: scroll 15s linear infinite;
            }
          `}</style>
          <div className="carousel flex gap-2 md:gap-3 lg:gap-4 w-full">
            {extendedClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center justify-center h-12 sm:h-16 md:h-20 w-1/3 md:w-1/6 flex-shrink-0"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
