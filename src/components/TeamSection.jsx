import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamSection = ({ title, members, cardsPerRow = 3 }) => {
  // Split members into rows
  const rows = [];
  for (let i = 0; i < members.length; i += cardsPerRow) {
    rows.push(members.slice(i, i + cardsPerRow));
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">{title}</h2>

        {rows.map((rowMembers, rowIndex) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          const centerIndex = Math.floor(rowMembers.length / 2);

          return (
            <div
              ref={ref}
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-16"
            >
              {rowMembers.map((member, i) => {
                // Center first, then sides together
                const delay = i === centerIndex ? 0 : 0.25;

                return (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{
                      delay,
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    className="w-full max-w-sm"
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                      {/* IMAGE */}
                      <div className="h-72 w-full">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* INFO */}
                      <CardContent className="text-center py-6">
                        <h3 className="text-xl font-semibold">
                          {member.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {member.role}
                        </p>

                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-primary hover:underline"
                          >
                            LinkedIn
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
