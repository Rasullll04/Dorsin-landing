import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";
function Hero() {
  return (
    <div className="container-xxl position-relative p-0">
      <Navbar/>
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-lg-6 pt-5 text-center text-lg-start">
              <h1 className="display-4 text-white mb-4 animated slideInLeft">
                Shared Hosting
              </h1>
              <p className="text-white animated slideInLeft">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd.
              </p>
              <h1 className="text-white mb-4 animated slideInLeft">
                <small
                  className="align-top fw-normal"
                  style={{ fontSize: "15px", lineHeight: "25px" }}
                >
                  Starting:
                </small>
                <span>$2.49</span>
                <small
                  className="align-bottom fw-normal"
                  style={{ fontSize: "15px", lineHeight: "33px" }}
                >
                  / Mo
                </small>
              </h1>
              <Button title="Getting Started Now" p={" py-3 px-5"} />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <img
                className="img-fluid animated zoomIn"
                src="img/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
