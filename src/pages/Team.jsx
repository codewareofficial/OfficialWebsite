import TeamSection from "../components/TeamSection";
import { coreMembers, semiCoreMembers } from "../data/Team";

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Core Team */}
      <TeamSection title="Core Team" members={coreMembers} />

      {/* Semi-Core Team */}
      <TeamSection title="Semi-Core Team" members={semiCoreMembers} />
    </div>
  );
};

export default Team;
