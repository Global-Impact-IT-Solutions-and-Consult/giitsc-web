import React from "react";

// styles
import { Content, Wrapper } from "./Pricing.Styles";
import PricingCard from "../../widgets/pricingCard/PricingCard";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const Pricing = () => {
  return (
    <>
      <Wrapper>
        <UnderlineWidget text={"Pricing"} />
        <Content>
          <PricingCard
            href={"/"}
            title={"Lite"}
            subText={"For individual with personal projects"}
            price={"₦50,000"}
            description={"We have over 5 packages to enable us help you better"}
          />
          <PricingCard
            href={"/"}
            title={"Pro"}
            subText={"For small teams and startups"}
            price={"₦120,000"}
            description={"Unlimited third party integrations"}
            recommended={true}
          />
          <PricingCard
            href={"/"}
            title={"Entreprise"}
            subText={"For big companies with vast projects"}
            price={"₦250,000"}
            description={"We have over 5 packages to enable us help you better"}
          />
        </Content>
      </Wrapper>
    </>
  );
};

export default Pricing;
