import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import mobileImg from "../public/images/servicePage/mobile.png";

const mobile = () => {
  return <ServicePage title={"Mobile Development"} image={mobileImg} />;
};

export default mobile;
