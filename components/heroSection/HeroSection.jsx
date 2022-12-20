import Link from 'next/link';

// styles
import { Wrapper, Overlay, Content } from './HeroSection.Styles';

// Components and widgets
import { Button } from '../../widgets/buttonWidget/ButtonWidget.Styles';


const HeroSection = () => {
  return (
    <Wrapper>
      {/* <Overlay> */}
        <Content>
          <h1>
            {/* Welcome to <span>Global Impact!</span> */}
            Welcome to Global Impact!
          </h1>
          <h4>We are experts in digital marketing and SEO</h4>
          {/* <p>Feel free to check out our services</p> */}
          <div className="pair">
            {/* <Link href={"/about"}>
              <Button>About us</Button>
            </Link> */}
            <Link href={"/about"}>
              <Button>Reach out</Button>
            </Link>
          </div>
        </Content>
      {/* </Overlay> */}
    </Wrapper>
  );
}

export default HeroSection