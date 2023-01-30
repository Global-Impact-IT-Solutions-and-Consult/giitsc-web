import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import mobileImg from "../public/images/servicePage/mobile.png";

const mobile = () => {
  return (
    <ServicePage
      title={"Mobile Development"}
      image={mobileImg}
      description={
        "At our tech company, we specialize in creating custom web solutions that are tailored to meet the unique needs of your business. Our team of experienced developers has the skills and expertise to deliver high-quality, responsive websites that are built to perform."
      }
    />
  );
};

export default mobile;
