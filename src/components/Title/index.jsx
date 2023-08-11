import React from "react";

  const Title = ({ title, text }) => {
    return (
      <div
        className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="mb-3">{title}</h1>
        {text && (<p className="mb-1">{text}</p>
        )}
      </div>
    );
  };
  export default Title;