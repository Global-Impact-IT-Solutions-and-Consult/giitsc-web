import Image from 'next/image';

// styles
import { Content, Overlay, Wrapper } from './Partners.Styles'

// images
import dell from '../../public/partners/dell-white.png'
import ibm from '../../public/partners/ibm-white.png'
import ms from '../../public/partners/ms-white.png'
import vmware from '../../public/partners/vmware-white.png'

const Partners = () => {
  return (
    <>
      <Wrapper>
        <Overlay>
          <h4>Our Partners</h4>
          <Content>
            <Image src={dell} alt="logo" width="65" height="0" />
            <Image src={ibm} alt="logo" width="105" height="0" />
            <Image src={ms} alt="logo" width="130" height="0" />
            <Image src={vmware} alt="logo" width="150" height="130" />
          </Content>
        </Overlay>
      </Wrapper>
    </>
  );
}

export default Partners