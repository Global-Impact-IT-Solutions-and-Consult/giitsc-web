import Image from "next/image";

// styles
import { Content, Overlay, Wrapper } from "./Partners.Styles";

// images
// import dell from "../../public/partners/dell-white.png";
// import ibm from "../../public/partners/ibm-white.png";
// import ms from "../../public/partners/ms-white.png";
// import vmware from "../../public/partners/vmware-white.png";
import oracle from "../../public/icons/partners/oracle.png";
import ms from "../../public/icons/partners/ms.png";
import huawei from "../../public/icons/partners/huawei.png";
import dell from "../../public/icons/partners/dell.png";
import ibm from "../../public/icons/partners/ibm.png";
import vm from "../../public/icons/partners/vm.png";
import hp from "../../public/icons/partners/hp.png";
import cisco from "../../public/icons/partners/cisco.png";

const Partners = () => {
  return (
    <>
      <Wrapper>
        {/* <Overlay> */}
        {/* <h4 className="my-3">Our Partners</h4> */}
        <Content>
          <Image src={vm} alt="vmware" width="143" height="36" />
          <Image src={cisco} alt="cisco" width="69" height="41" />
          <Image src={oracle} alt="oracle" width="155" height="36" />
          <Image src={ibm} alt="ibm" width="79" height="29" />
          <Image src={huawei} alt="huawei" width="60" height="32" />
          <Image src={hp} alt="hp" width="39" height="39" />
          <Image src={ms} alt="microsoft" width="101" height="38" />
          <Image src={dell} alt="dell" width="36" height="36" />
        </Content>
        {/* </Overlay> */}
      </Wrapper>
    </>
  );
};

export default Partners;
