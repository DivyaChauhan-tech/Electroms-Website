import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";

function Navbar() {
   const [open, setOpen] = useState(false);
   const [productOpen, setProductOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("home");
   const navigate = useNavigate();
   const location = useLocation();

   React.useEffect(() => {
     const style = document.createElement('style');
     style.textContent = `ul::-webkit-scrollbar { display: none; }`;
     document.head.appendChild(style);
     return () => document.head.removeChild(style);
   }, []);

  const productPages = ["/vahancare", "/vahanmoney", "/solarenergy", "/wifisolution", "/tollmanagementsystem", "/healthmonitoringsystem", "/moderneducationtechnology", "/mobilevirtualnetwork", "/sattelitebasedmonitoring"];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = ["home", "about", "latest-news", "clients", "products"];
        let current = "home";

        for (let sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200) {
              current = sectionId;
            }
          }
        }
        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else if (productPages.includes(location.pathname)) {
      setActiveSection("products");
    }
  }, [location.pathname]);

  const handleSmoothScroll = (sectionId) => {
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const heading = element.querySelector("h2");
          if (heading) {
            const headerHeight = 150;
            const headingTop = heading.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: headingTop, behavior: "smooth" });
          }
        }
      }
    }, 100);
  };

  return (
    <nav className="fixed left-0 right-0 z-[9999] bg-[#FFFFFF] border-b border-gray-200 w-full top-[0px]">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between px-4 py-4">
        <button onClick={() => handleSmoothScroll("home")} className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="h-[35px] sm:h-[45px] md:h-[55px] brightness-0" />
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black text-2xl"
        >
          ☰
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          } lg:flex items-center gap-4 absolute lg:static top-full right-0 lg:left-0 w-1/2 lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-[12px] lg:me-4 w-full">
             <li className={`${productOpen ? "hidden lg:block" : "block"}`}>
               <button
                 onClick={() => handleSmoothScroll("home")}
                 className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                   activeSection === "home" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                 }`}
               >
                 Home
               </button>
             </li>

             <li className={`${productOpen ? "hidden lg:block" : "block"}`}>
               <button
                 onClick={() => handleSmoothScroll("about")}
                 className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                   activeSection === "about" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                 }`}
               >
                 About Us
               </button>
             </li>

             <li className={`${productOpen ? "hidden lg:block" : "block"}`}>
               <button
                 onClick={() => handleSmoothScroll("latest-news")}
                 className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                   activeSection === "latest-news" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                 }`}
               >
                 Latest News
               </button>
             </li>

             <li className={`${productOpen ? "hidden lg:block" : "block"}`}>
               <button
                 onClick={() => handleSmoothScroll("clients")}
                 className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                   activeSection === "clients" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                 }`}
               >
                 Our Client
               </button>
             </li>

             <li
              className="relative w-full lg:w-auto"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setProductOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) setProductOpen(false);
              }}
             >
              <button 
                onClick={() => setProductOpen(!productOpen)}
                className={`text-[12px] font-medium px-2 py-1.5 transition-colors w-full lg:w-auto flex items-center justify-between lg:justify-start ${
                  activeSection === "products" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                }`}>
                Our Product
                <span className={`lg:hidden ml-2 text-[#FF5E14] transition-transform text-lg ${productOpen ? "rotate-90" : ""}`}>›</span>
              </button>

               {productOpen && (
                 <ul className={`absolute lg:absolute top-full lg:top-full left-0 lg:left-0 right-0 lg:right-auto w-full lg:w-auto lg:min-w-[220px] bg-white/90 lg:bg-white/95 shadow-lg px-0 py-4 lg:py-2 z-50 m-0 lg:m-0 max-h-[40vh] overflow-y-auto`}
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                   {[
                     ["/vahancare", "Vahan Care"],
                     ["/vahanmoney", "Vahan Money"],
                     ["/solarenergy", "Solar Energy"],
                     ["/wifisolution", "Wifi Solution"],
                     ["/tollmanagementsystem", "Toll Management System"],
                     ["/healthmonitoringsystem", "Health Monitoring System"],
                     ["/moderneducationtechnology", "Modern Education Technology"],
                     ["/mobilevirtualnetwork", "Mobile Virtual Network Operator"],
                     ["/sattelitebasedmonitoring", "Satellite Based Monitoring System"],                   
                   ].map(([link, text]) => (
                     <li key={text}>
                       <Link
                         to={link}
                         onClick={() => setOpen(false)}
                         className="block px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-black hover:text-[#FF5E14] hover:bg-gray-300 w-full text-left transition-colors"
                       >
                         {text}
                       </Link>
                     </li>
                   ))}
                 </ul>
               )}
             </li>
           </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
