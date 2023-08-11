import React from "react"
import AboutData from "../../data/about.data"
function About (){
    return (
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title position-relative mb-4 pb-4">
                <h1 className="mb-2">Welcome to GreenHost</h1>
              </div>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit clita duo justo
                magna dolore erat amet
              </p>
              <div className="row g-3">
                {AboutData.map((counter, index) => (
                  <div
                    key={index}
                    className={`col-sm-4 wow fadeIn`}
                    data-wow-delay={`${index * 0.2 + 0.1}s`}
                  >
                    <div className="bg-light rounded text-center p-4">
                      <i
                        className={`fa ${counter.icon} fa-2x text-primary mb-2`}
                      />
                      <h2 className="mb-1" data-toggle="counter-up">
                        {counter.count}
                      </h2>
                      <p className="mb-0">{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <img
                className="img-fluid wow zoomIn"
                data-wow-delay="0.5s"
                src="img/about.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;   