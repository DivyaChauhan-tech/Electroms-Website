import React, { useEffect, useRef } from "react";
import mainImg from "../assets/latestnewsvc.svg";
import { newsData } from "../data/newsdata";

const styles = `
  .news-scroll {
    pointer-events: none;
  }
  .news-scroll > * {
    pointer-events: auto;
  }
  .news-scroll::-webkit-scrollbar {
    display: none;
  }
`;

function LatestNews() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.3;
    let scrollPosition = 0;
    let animationId;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        scrollPosition += scrollSpeed;
        if (scrollPosition > maxScroll) {
          scrollPosition = 0;
        }

        container.scrollTop = scrollPosition;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section
        id="latest-news"
        className="w-full px-4 sm:px-6 lg:px-8 pb-2 md:pb-2 lg:pb-2"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="max-w-[1000px] mx-auto pt-32 md:pt-40 lg:pt-52">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Latest News
          </h2>
          <p className="text-center text-xs sm:text-sm text-[#777] max-w-2xl mx-auto mb-6 md:mb-10">
            At Electrom Communications, our mission is to redefine global
            connectivity through cutting-edge electromagnetic communication
            technologies
          </p>

          <div className="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-4 lg:items-end">
            <div className="w-full lg:w-1/2">
              <img
                src={mainImg}
                alt="Latest"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded"
              />
            </div>
            <div
              ref={scrollContainerRef}
              className="w-full lg:w-1/2 flex flex-col gap-2 lg:mb-0 max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] overflow-y-auto news-scroll"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {newsData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 border p-2 sm:p-3 bg-white border border-[#ddd]"
                >
                  <img
                    src={item.img}
                    alt="news logo"
                    className="w-[35px] sm:w-[40px] md:w-[45px] flex-shrink-0"
                  />

                  <div className="text-[14px] sm:text-[15px] text-black leading-snug flex-1 overflow-hidden">
                    <p className="line-clamp-2">{item.text}</p>
                    {/* <span className="block text-[12px] sm:text-[13px] text-gray-600 mt-1">
                      {item.date}
                    </span> */}

                    {/* <a
                      href="#"
                      className="inline-block mt-2 sm:mt-2 text-[#FF5E14] font-bold text-[11px] sm:text-[12px]"
                    >
                      Read More{" "}
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-[#FF5E14] text-white rounded-full text-[9px] font-bold ml-1">
                        →
                      </span>
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
