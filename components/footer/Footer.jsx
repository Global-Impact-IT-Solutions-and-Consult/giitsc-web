import Link from "next/link";
import Image from "next/image";

// styles
import { Wrapper, Overlay, Content, Top, TopLeft, TopRight, Bottom } from "./Footer.Styles"

// logo
import logo from "../../public/images/GIITSC_LOGO.png"

const Footer = () => {
  return (
    <Wrapper>
      <Overlay>
        <Content>
          <Top>
            <TopLeft>
              <Link href="/" className="logoPart">
                <Image src={logo} alt="logo" width="65" height="35" />
                <span>GIITSC</span>
              </Link>
              <h5>
                Our mission is to serve as a technology consultant providing
                solutions to businesses of all sizes. Our certified experts
                partners with our customers to develop customized,
                cost-effective solutions that reduce expense, increase
                efficiency, and provide the competitive advantage you need to
                take your business to the next level.
              </h5>
            </TopLeft>
            <TopRight>
              <h4>Useful Links</h4>
              <div className="topRightBottom">
                <Link href="/">Services</Link>
                <Link href="/">About us</Link>
                <Link href="/">Contact us</Link>
              </div>
            </TopRight>
          </Top>
          <Bottom>&#169; GIITSC 2022. All Rights Reserved</Bottom>
        </Content>
      </Overlay>
    </Wrapper>
  );
}

export default Footer