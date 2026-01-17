import React, { useEffect } from "react";
import { initHeroSlider } from "@/animations/heroanimations";

const images = [
  "/images/hero/Mainhero.png",
  "/images/hero/LeaderBoard.png",
  "/images/hero/LeaderBoard-Women.png",
];

const Hero = () => {
  useEffect(() => {
    initHeroSlider();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero Slide"
          className="hero-slide absolute inset-0 w-full h-full object-cover object-center opacity-0"
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">

        </h1>
        <p className="text-lg md:text-xl max-w-2xl">

        </p>
      </div>
    </div>
  );
};

export default Hero;
