import { gsap } from "gsap";

export const initHeroSlider = () => {
  const slides = document.querySelectorAll(".hero-slide");

  let current = 0;

  // Show first slide
  gsap.set(slides[0], { opacity: 1 });

  setInterval(() => {
    const next = (current + 1) % slides.length;

    gsap.to(slides[current], {
      opacity: 0,
      scale: 1.05,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      slides[next],
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    current = next;
  }, 4000);
};
