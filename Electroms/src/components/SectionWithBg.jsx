import React from "react";
import bgImg from "../assets/cloud.png";
import AboutSection from "./AboutSection";
import FeatureBox from "./FeatureBox";
import LatestNews from "./LatestNews";

function SectionWithBg() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
        backgroundAttachment: "local"
      }}
    >
      <div className="relative z-10 w-full">
        <div className="py-12 md:py-16 lg:py-20">
          <AboutSection />
        </div>
        <div className="py-12 md:py-16 lg:py-20 px-4">
          <FeatureBox />
        </div>
        <div className="py-12 md:py-16 lg:py-20 px-4">
          <LatestNews />
        </div>
      </div>
    </section>
  );
}

export default SectionWithBg;
