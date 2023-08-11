import React from "react";
import FooterLink from "./FooterLink";
import { footerLinks, footerServices } from "../../data/footer.data";

function FooterContainer() {
  return (
    <div
      className="container-fluid bg-primary text-white footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="col-lg-5 col-md-12">
        <div className="row gy-5 g-4">
          <div className="col-md-6">
            <h5 className="fw-bold text-white mb-4">About Us</h5>
            {footerLinks.map((link, index) => (
              <FooterLink key={index} title={link.title} url={link.url} />
            ))}
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold text-white mb-4">Our Services</h5>
            {footerServices.map((service, index) => (
              <FooterLink key={index} title={service.title} url={service.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
