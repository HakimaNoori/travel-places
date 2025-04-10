"use client";
import { use, useEffect } from "react";
import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import News from "./News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import Review from "./Review/Review";
import WhyChoose from "./WhyChoose/WhyChoose";
import AOS from "aos";
import "aos/dist/aos.css";



const Heme = () => {
  useEffect(() => { 
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose /> 
      <Review />
      <News />
      <NewsLetter />
    </div>
  );
};

export default Heme;
