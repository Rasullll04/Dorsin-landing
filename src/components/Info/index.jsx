import React from "react";

function Info({ title, features }) {
  return (
    <div>
      <div className="section-title position-relative mx-auto mb-4 pb-4">
        <h3 className="fw-bold mb-0">{title}</h3>
      </div>
      <div className="row gy-3 gx-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-sm-6 wow fadeIn"
            data-wow-delay={`${index * 0.2 + 0.1}s`}
          >
            <i className={feature.iconClass} />
            <h5 className="fw-bold">{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
