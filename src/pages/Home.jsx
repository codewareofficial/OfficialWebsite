import Hero from "../components/Hero"; // Your About content is likely in here
import Events from "./Events";
import Team from "./Team";
import Connect from "./Connect";

const Home = () => {
  return (
    <div className="bg-neutral-950">
      {/* 1. Hero & About (Wrapped together) */}
      <Hero />

      {/* 2. Events Section */}
      <Events />

      {/* 3. Team Section (The one with the President fix) */}
      <Team />

      {/* 4. Connect Section */}
      <Connect />
    </div>
  );
};

export default Home;