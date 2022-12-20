import Image from "next/image";
import Link from "next/link";
import { Button } from "../buttonWidget/ButtonWidget.Styles";

// Styles
import { Wrapper, Top, Bottom } from "./ServiceCard.Styles"


const ServiceCard = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Top>
        <Image src={image} alt="logo" width="250" height="150" />
      </Top>
      <Bottom>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="buttonPart">
        <Link href={"/about"}>
          <button>
            Explore
          </button>
          {/* <Button width={"110px"} height={"45px"} >Explore</Button> */}
        </Link>
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default ServiceCard