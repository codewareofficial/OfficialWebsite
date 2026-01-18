import TeamSection from "../components/TeamSection";
import { coreMembers, semiCoreMembers } from "../data/Team";

const Team = () => {
  // 1. Prepare Core Team Data
  // Extract President (Index 0) and the rest of the Core team
  const president = coreMembers.length > 0 ? coreMembers[0] : null;
  const restOfCore = coreMembers.length > 1 ? coreMembers.slice(1) : [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20">

      {/* --- SECTION 1: CORE TEAM ---
          Layout: President (Top) + Core Members (Centered Flex)
      */}
      <TeamSection
        title="Core Team"
        president={president}      // Renders top center
        coreTeam={restOfCore}      // Renders centered flex (President style)
        semiCoreTeam={[]}          // Empty (No grid here)
      />

      {/* --- SECTION 2: SEMI-CORE TEAM ---
          Layout: Grid (Rows of 3)
      */}
      <TeamSection
        title="Semi-Core Team"
        president={null}           // No President in this section
        coreTeam={[]}              // No centered flex members
        semiCoreTeam={semiCoreMembers} // Renders in the 3-column Grid
      />

    </div>
  );
};

export default Team;