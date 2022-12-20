// components
import Navbar from "./navbar/Navbar";

// styles
import { Wrapper, Overlay } from "./Layout.Styles";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Overlay>
          <Navbar />
          {children}
        </Overlay>
      </Wrapper>
    </>
  );
};

export default Layout;
