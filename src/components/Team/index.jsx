import React from "react";

function TeamMember({ name, designation, image, socialMedia }) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
        <div className="text-center p-4">
          <img className="img-fluid rounded-circle mb-4" src={image} alt="" />
          <h5 className="fw-bold mb-1">{name}</h5>
          <small>{designation}</small>
        </div>
        <div className="d-flex justify-content-center bg-primary p-3">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              className="btn btn-square text-primary bg-white m-1"
              href={item.link}
            >
              <i className={item.iconClass} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
