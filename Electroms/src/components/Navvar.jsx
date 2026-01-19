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
    <nav className="top-[48px] left-0 right-0 z-[9999] bg-[#FFFFFF] border-b border-gray-200 w-full">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center">
          <img src={logo} alt="logo" className="h-[55px] sm:h-[50px]" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black text-2xl"
        >
          ☰
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          } lg:flex items-center gap-4 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-[12px] lg:me-4">
            <li>
              <button
                onClick={() => handleSmoothScroll("home")}
                className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                  activeSection === "home" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                }`}
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => handleSmoothScroll("about")}
                className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                  activeSection === "about" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                }`}
              >
                About Us
              </button>
            </li>

            <li>
              <button
                onClick={() => handleSmoothScroll("latest-news")}
                className={`text-[12px] font-medium px-2 py-1.5 transition-colors cursor-pointer ${
                  activeSection === "latest-news" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                }`}
              >
                Latest News
              </button>
            </li>

            <li>
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
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button 
                onClick={() => handleSmoothScroll("products")}
                className={`text-[12px] font-medium px-2 py-1.5 transition-colors ${
                  activeSection === "products" ? "text-[#FF5E14]" : "text-black hover:text-[#FF5E14]"
                }`}>
                Our Product
              </button>

              {productOpen && (
                <ul className="absolute top-full left-0 bg-white/95 shadow-lg min-w-[220px] p-2 z-50">
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
                        className="block px-3 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <a
            href="tel:0120 3221368"
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF5E14] text-white px-4 py-2 hover:bg-orange-600 transition font-medium text-[14px]"
          >
            <i className="bi bi-telephone"></i> 0120 3221368
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
