import React from "react";
import ServerFeatures from "../../components/Info";
import { sharedServerData, dedicatedServerData } from "../../data/info.data";
import Title from "../../components/Title";

function InfoContainer() {
  return (
    <div className="container-xxl py-5">
      <div className="container px-lg-5">
        <Title
          title="Shared VS Dedicated Server"
          text="Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita."
        />
        <div className="row g-5 comparison position-relative">
          <div className="col-lg-6 pe-lg-5">
            <ServerFeatures
              title={sharedServerData.title}
              features={sharedServerData.features}
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <ServerFeatures
              title={dedicatedServerData.title}
              features={dedicatedServerData.features}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
