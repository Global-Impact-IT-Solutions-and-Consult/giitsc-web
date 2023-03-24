import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import mobileImg from "../public/images/servicePage/mobile.png";
import Pricing from "../components/pricing/Pricing";

const mobile = () => {
  return (
    <>
      <ServicePage
        title={"Mobile Development"}
        image={mobileImg}
        description={
          "At our tech company, we specialize in creating custom web solutions that are tailored to meet the unique needs of your business. Our team of experienced developers has the skills and expertise to deliver high-quality, responsive websites that are built to perform."
        }
      />
      <Pricing
        c1_href="/"
        c1_title={"Lite"}
        c1_subText={"For individual with personal projects"}
        c1_price={"₦50,000"}
        c1_description={"We have over 5 packages to enable us help you better"}
        c2_href="/"
        c2_title={"Lite"}
        c2_subText={"For individual with personal projects"}
        c2_price={"₦120,000"}
        c2_description={"We have over 5 packages to enable us help you better"}
        c3_href="/"
        c3_title={"Lite"}
        c3_subText={"For individual with personal projects"}
        c3_price={"₦180,000"}
        c3_description={"We have over 5 packages to enable us help you better"}
      />
    </>
  );
};

export default mobile;
