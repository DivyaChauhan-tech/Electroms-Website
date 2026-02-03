import React from 'react'
function Button({ text, href = "#", className = "", variant = "outline", onClick }) {
  const variants = {
    solid: "bg-[#FF5E14] text-white hover:bg-orange-600",
    outline: "bg-white text-[#FF5E14] border-2 border-[#FF5E14] hover:bg-[#FF5E14] hover:text-white"
  };

  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (onClick) {
        onClick();
      } else {
        const sectionId = href.substring(1);
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
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-block text-[14px] font-medium px-4 py-2 transition ${variants[variant]} ${className}`}
    >
      {text}
    </a>
  );
}

export default Button;
