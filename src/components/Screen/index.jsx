import React from "react";
import Title from "../Title";
import ScreenData from "../../data/screen.data";
function ScreenDiv() {
  return (
    <div className="container-xxl domain mb-5" style={{ marginTop: "90px" }}>
      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Title
              title="Search Your Domain"
              text="Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita."
            />
            <div
              className="position-relative w-100 my-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Enter your domain name"
              />
              <button
                type="button"
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                Search
              </button>
            </div>

            <div className="row g-3 wow fadeInUp" data-wow-delay="0.5s">
              {ScreenData.map((domain, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"
                >
                  <h5 className="fw-bold text-primary mb-1">{domain.name}</h5>
                  <p className="mb-0">{domain.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ScreenDiv;
