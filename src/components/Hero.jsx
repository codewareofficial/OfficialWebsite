import React, { useEffect } from "react";
import { initHeroSlider } from "@/animations/heroanimations";

const images = [
  "/images/hero/Mainhero.png",
  "/images/hero/LeaderBoard.png",
  "/images/hero/LeaderBoard-Women.png",
];

const Hero = () => {
  useEffect(() => {
    const cleanup = initHeroSlider();
    return () => cleanup && cleanup();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      {images.map((img, index) => (
        <div
          key={index}
          className="hero-slide absolute inset-0 w-full h-full opacity-0"
        >
          {/* Layer 1: The Blur Backdrop (Fills the whole screen) */}
          <img
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-40"
          />

          {/* Layer 2: The Main Image (Never cropped, sits in the center) */}
          <img
            src={img}
            alt="Hero Slide"
            className="relative w-full h-full object-contain z-10"
          />
        </div>
      ))}

      {/* Overlay: Darkens everything slightly to make text pop */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {/* Your Heading Here */}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-neutral-200">
          {/* Your Tagline Here */}
        </p>
      </div>
    </div>
  );
};

export default Hero;