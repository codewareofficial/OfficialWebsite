import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "./teamData";

// Custom hook to detect screen size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Calculate 3D position for cards in fan arc
function getCard3DPosition(index, totalCards, visibleCount, width) {
  if (visibleCount === 0) {
    return { x: 0, y: 0, z: -100, rotateY: 0, opacity: 0 };
  }

  // First 3 cards: fixed positions
  if (index < 3) {
    const positions = [
      { x: -120, z: 60, rotateY: -20 }, // Left
      { x: 0, z: 0, rotateY: 0 }, // Center
      { x: 120, z: 60, rotateY: 20 }, // Right
    ];
    return {
      ...positions[index],
      y: 0,
      opacity: 1,
    };
  }

  // Remaining cards: distribute in arc
  const remainingCards = Math.max(0, visibleCount - 3);
  if (remainingCards === 0 || index >= visibleCount) {
    return { x: 0, y: 0, z: -100, rotateY: 0, opacity: 0 };
  }

  // Calculate arc for remaining cards
  const cardIndex = index - 3;
  const arcAngle = Math.min(remainingCards * 15, 60);
  const startAngle = -arcAngle / 2;
  const angleStep = remainingCards > 1 ? arcAngle / (remainingCards - 1) : 0;
  const angle = startAngle + angleStep * cardIndex;
  const angleRad = (angle * Math.PI) / 180;

  // Responsive spacing
  const spacing = width < 640 ? 80 : width < 1024 ? 100 : 150;
  const radius = spacing * (remainingCards > 1 ? 1.5 : 1);
  const x = Math.sin(angleRad) * radius;
  const z = 40 + Math.abs(Math.cos(angleRad) - 1) * 30;
  const rotateY = angle * 0.8;

  return {
    x,
    y: 0,
    z,
    rotateY,
    opacity: 1,
  };
}

function MemberCard({ member, index, visibleCount, width }) {
  const position = getCard3DPosition(index, teamMembers.length, visibleCount, width);

  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        z: -100,
        rotateY: 0,
        opacity: 0,
      }}
      animate={{
        x: position.x,
        y: position.y,
        z: position.z,
        rotateY: position.rotateY,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
        mass: 1,
      }}
      className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 relative flex flex-col items-center px-6 py-8"
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        width: width < 640 ? "280px" : "320px",
        maxWidth: "100%",
        margin: "0 auto",
        boxShadow: position.opacity > 0
          ? "0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(244, 67, 54, 0.2)"
          : "none",
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={position.opacity > 0 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: index * 0.1,
        }}
        className="w-24 h-24 rounded-full bg-linear-to-tr from-red-400 via-pink-400 to-orange-400 mb-4 flex items-center justify-center shadow-lg ring-4 ring-red-100"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-22 h-22 rounded-full object-cover border-4 border-white"
        />
      </motion.div>

      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors mb-2">
        {member.name}
      </h3>

      <p className="text-gray-600 font-medium pb-2">{member.role}</p>

      <div className="flex flex-wrap gap-2 justify-center pt-2">
        {member.tech.map((t) => (
          <span
            key={t}
            className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full font-semibold shadow-md"
            style={{
              filter: "drop-shadow(0 0 8px #f87171)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const Team = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const { width } = useWindowSize();

  const handleNext = () => {
    if (visibleCount < teamMembers.length) {
      setVisibleCount((prev) => Math.min(prev + 3, teamMembers.length));
    }
  };

  const handlePrev = () => {
    if (visibleCount > 0) {
      setVisibleCount((prev) => Math.max(prev - 3, 0));
    }
  };

  const handleReset = () => {
    setVisibleCount(0);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-zinc-800 py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ y: -60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 36,
            mass: 0.9,
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-xl"
        >
          Meet Our <span className="text-red-500">Coding Club</span> Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
          className="text-lg md:text-xl text-gray-300 mt-2 max-w-2xl mx-auto mb-10"
        >
          Driven by a passion for code, design, and building awesome things.
        </motion.p>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={visibleCount === 0}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            Reset
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={visibleCount >= teamMembers.length}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            Next
          </motion.button>
        </div>

        {/* 3D Container with perspective */}
        <div
          style={{
            perspective: "1000px",
            perspectiveOrigin: "50% 50%",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
          className="py-12"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              transformStyle: "preserve-3d",
              width: "100%",
              position: "relative",
            }}
          >
            {teamMembers.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                visibleCount={visibleCount}
                width={width}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
