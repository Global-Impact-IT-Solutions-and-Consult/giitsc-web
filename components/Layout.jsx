// components
import Navbar from "./navbar/Navbar";

// styles
import { Wrapper, Overlay } from "./Layout.Styles";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Overlay>
          <Navbar />
          {children}
          <Footer />
        </Overlay>
      </Wrapper>
    </>
  );
};

export default Layout;
