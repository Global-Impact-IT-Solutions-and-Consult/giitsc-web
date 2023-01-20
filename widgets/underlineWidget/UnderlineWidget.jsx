import React from "react";
import { Wrapper, Lines } from "./UnderlineWidget.Styles";

const UnderlineWidget = () => {
  return (
    <Wrapper>
      <span className="text">How we Operate</span>
      <Lines>
        <div className="line1"></div>
        <div className="line2"></div>
      </Lines>
    </Wrapper>
  );
};

export default UnderlineWidget;
