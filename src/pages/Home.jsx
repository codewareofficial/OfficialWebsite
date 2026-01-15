import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Codeware — Official Coding Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Building developers. Creating products. Competing globally. Learn,
            build, and grow with the strongest tech community in our college.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button size="lg">Join the Club</Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Competitive Programming",
              desc: "Regular contests, DSA sessions, and interview prep.",
            },
            {
              title: "Real Projects",
              desc: "Build real-world products for portfolio and startups.",
            },
            {
              title: "Hackathons & Events",
              desc: "Participate and host national level competitions.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
