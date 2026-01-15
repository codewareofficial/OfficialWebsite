import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhoWeAre from "@/components/WhoweAre";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      </div>
  );
};

export default Home;
