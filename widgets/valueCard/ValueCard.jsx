import Image from "next/image";

// Styles
import { Bottom, Top, Wrapper } from "./ValueCard.Styles"

const ValueCard = ({icon, title, description}) => {
  return (
    <Wrapper>
      <Top>
        <Image src={icon} alt="logo" width="65" height="0" />
      </Top>
      <Bottom>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </Bottom>
    </Wrapper>
  );
}

export default ValueCard