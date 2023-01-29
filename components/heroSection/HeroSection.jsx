import Link from "next/link";

// styles
import { Wrapper, Overlay, Content } from "./HeroSection.Styles";

// Components and widgets
import { Button } from "../../widgets/buttonWidget/ButtonWidget.Styles";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 500], [1, 0]);

  return (
    <Wrapper>
      <Overlay>
        <Content>
          <motion.h1 className="my-3" style={{ opacity: scale }}>
            {/* Welcome to <span>Global Impact!</span> */}
            Technology solutions for a smarter future
          </motion.h1>
          {/* <h4>We are experts in digital marketing and SEO</h4> */}
          {/* <p>Feel free to check out our services</p> */}
          {/* <div className="pair">
          <Link href={"/about"}>
              <Button>About us</Button>
            </Link>
          <Link href={"/about"}>
            <Button>Reach out</Button>
          </Link>
        </div> */}
        </Content>
      </Overlay>
    </Wrapper>
  );
};

export default HeroSection;
