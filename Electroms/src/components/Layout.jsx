import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navvar";
import MapSection from "./MapSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="pt-[130px] sm:pt-[120px]">
        {children}
      </div>
      <MapSection />
      <ContactSection />
      <Footer />
    </>
  );
}
