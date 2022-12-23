import Image from "next/image";

// styles
import { Wrapper, Top, Bottom } from "./TestimonialCard.Styles";

const TestimonialCard = ({ image, name, review }) => {
  return (
    <Wrapper>
      <Top>
        {/* <div className="image" image={image}> */}
        <Image src={image} alt="logo" width="65" height="0" />
        {/* </div> */}
      </Top>
      <Bottom>
        <div className="review">{review}</div>
      </Bottom>
      <div className="name">{name}</div>
    </Wrapper>
  );
};

export default TestimonialCard;
