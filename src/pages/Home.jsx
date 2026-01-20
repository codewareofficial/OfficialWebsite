import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection"; // New unified component

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <AboutSection />
      {/* You can add your Join or Events sections below this later */}
    </div>
  );
};

export default Home;