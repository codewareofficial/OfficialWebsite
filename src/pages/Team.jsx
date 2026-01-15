import TeamSection from "@/components/TeamSection";
import teamMembers from "@/data/team.json";

const Teams = () => {
  return (
    <div>
      {/* Core Team */}
      <TeamSection title="Core Team" members={teamMembers} />

      {/* You can later add Semi-Core or Alumni like this: */}
      {/* <TeamSection title="Semi-Core Team" members={semiCoreMembers} /> */}
    </div>
  );
};

export default Teams;
