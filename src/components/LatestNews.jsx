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
        <div className="max-w-[1500px] mx-auto pt-32 md:pt-40 lg:pt-52">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            Latest News
          </h2>

          <div className="flex flex-col justify-center items-center">
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

                  <div className="text-[12px] sm:text-[14px] md:text-[15px] text-black leading-snug flex-1">
                    <p>{item.text}</p>
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