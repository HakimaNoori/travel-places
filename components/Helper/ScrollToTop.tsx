"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button onClick={scrollToTop} className="bg-rose-700 text-white rounded-full w-12 h-12 flex item-center justify-center focus:outline-none">
          <FaArrowUp className="mt-4"/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
