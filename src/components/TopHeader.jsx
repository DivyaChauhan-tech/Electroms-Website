import React from 'react'
import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import google from "../assets/google.svg";
import twitter from "../assets/twitter.svg";

function TopHeader() {
  return (
    <div className="w-full bg-[#F0F0F0] fixed top-0 left-0 right-0 z-[9998]">
      <div className="max-w-[1000px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-3 md:py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-3 md:gap-4">

        {/* ✅ CONTACT INFO */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 md:gap-4 text-[9px] sm:text-[10px] md:text-xs text-black text-center sm:text-left">
          <a href="tel:01203221368" className="flex items-center gap-1 whitespace-nowrap hover:text-orange-600 transition">
            {/* <i className="bi bi-telephone text-[8px] sm:text-[9px] md:text-[10px]"></i> 
            <span>0120 3221368</span> */}
          </a>

          <a href="mailto:electromcomm@gmail.com" className="flex items-center gap-1 break-all sm:break-normal hover:text-orange-600 transition">
            {/* <i className="bi bi-envelope text-[8px] sm:text-[9px] md:text-[10px]"></i> 
            <span>electromcomm@gmail.com</span> */}
          </a>
        </div>

        {/* ✅ SOCIAL ICONS */}
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
          {/* <a href="https://www.facebook.com/p/Electrom-Communications-100072271241383/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
            <img src={fb} alt="Facebook" className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
          </a> */}

          {/* <a href="https://in.linkedin.com/company/electrom-communications" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
            <img src={linkedin} alt="LinkedIn" className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
          </a>

          <a href="#" className="hover:scale-125 transition-transform duration-200">
            <img src={google} alt="Google" className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
          </a>

          <a href="https://x.com/electromcomms" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
            <img src={twitter} alt="Twitter" className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
          </a> */}
        </div>

      </div>
    </div>
  );
}

export default TopHeader;
