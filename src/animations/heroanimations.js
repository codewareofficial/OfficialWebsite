import { gsap } from "gsap";

export const initHeroSlider = () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  let current = 0;

  // Initial State: Show first slide
  gsap.set(slides[0], { opacity: 1 });

  const timer = setInterval(() => {
    const next = (current + 1) % slides.length;

    // 1. Transition OUT current slide
    gsap.to(slides[current], {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

    // 2. Transition IN next slide with a subtle scale-down effect
    gsap.fromTo(
      slides[next],
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    current = next;
  }, 5000); // 5 seconds gives people time to actually read the leaderboard

  // Return cleanup function to prevent memory leaks
  return () => clearInterval(timer);
};