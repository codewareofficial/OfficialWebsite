import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatWeDo from "@/components/WhatweDo";
import WhoWeAre from "@/components/WhoweAre";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <WhatWeDo/>
      </div>
  );
};

export default Home;
