import React from "react";
import Title from "../../components/Title";
import TeamMember from "../../components/Team";
import { teamMembers } from "../../data/team.data";

function TeamContainer() {
  return (
    <div className="container-xxl py-5">
      <div className="container px-lg-5">
        <Title
          title="Our Team Members"
          text="Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita."
        />
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              socialMedia={member.socialMedia}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default TeamContainer;
