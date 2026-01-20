import TeamSection from "../components/TeamSection";
import { coreMembers, semiCoreMembers } from "../data/Team";

const Team = () => {
  // 1. Prepare Core Team Data
  const president = coreMembers.length > 0 ? coreMembers[0] : null;
  const restOfCore = coreMembers.length > 1 ? coreMembers.slice(1) : [];

  return (
    /* IMPROVEMENT: Added 'pt-32' (Desktop) and 'pt-24' (Mobile).
       Since Navbar is h-24 (96px), pt-32 gives it exactly the right
       amount of professional clearance.
    */
    <div className="min-h-screen bg-neutral-950 text-white pb-20 pt-24 md:pt-32">

      {/* --- SECTION 1: CORE TEAM --- */}
      <TeamSection
        title="Core Team"
        president={president}
        coreTeam={restOfCore}
        semiCoreTeam={[]}
      />

      {/* --- SECTION 2: SEMI-CORE TEAM --- */}
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