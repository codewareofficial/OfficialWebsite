import TeamSection from "../components/TeamSection";
import { coreMembers, semiCoreMembers } from "../data/Team";

const Team = () => {
  const president = coreMembers.length > 0 ? coreMembers[0] : null;
  const restOfCore = coreMembers.length > 1 ? coreMembers.slice(1) : [];

  // --- NEW: Add Faculty and Visionary Data ---
  const faculty = {
    name: "Dr.Kavita Singh",
    role: "Faculty In-Charge",
    photo: "/images/faculty.png", // Make sure to add this image
    linkedin: "#"
  };

  const visionary = {
    name: "Mr.Nikhil Tamrakar",
    role: "Visionary",
    photo: "/images/visionary.png", // Make sure to add this image
    linkedin: "#"
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20 pt-24 md:pt-32">
      <TeamSection
        title="Core Team"
        faculty={faculty}     // NEW
        visionary={visionary} // NEW
        president={president}
        coreTeam={restOfCore}
        semiCoreTeam={[]}
      />

      <TeamSection
        title="Semi-Core Team"
        president={null}
        coreTeam={[]}
        semiCoreTeam={semiCoreMembers}
      />
    </div>
  );
};

export default Team;