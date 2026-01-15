import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const TeamSection = ({ title, members }) => {
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Center-out order for animation
  const centerOutOrder = () => {
    const len = members.length;
    if (len % 2 === 0) {
      const mid1 = len / 2 - 1;
      const mid2 = len / 2;
      const left = Array.from({ length: mid1 }, (_, i) => i).reverse();
      const right = Array.from({ length: len - mid2 - 1 }, (_, i) => mid2 + 1 + i);
      return [mid1, mid2, ...left, ...right];
    } else {
      const mid = Math.floor(len / 2);
      const left = Array.from({ length: mid }, (_, i) => i).reverse();
      const right = Array.from({ length: len - mid - 1 }, (_, i) => mid + 1 + i);
      return [mid, ...left, ...right];
    }
  };

  const order = centerOutOrder();

  return (
    <section className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">{title}</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
        >
          {order.map((index) => {
            const member = members[index];
            return (
              <motion.div
                key={member.id || member.name}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{
                  delay: Math.abs(index - members.length / 2) * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className="w-full max-w-xs md:max-w-sm"
              >
                <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  {/* IMAGE PART */}
                  <div className="h-64 w-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* DESCRIPTION PART */}
                  <CardContent className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary mt-2 inline-block hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
