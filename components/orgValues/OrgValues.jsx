import Image from 'next/image';
import ValueCard from '../../widgets/valueCard/ValueCard';

// styles
import { Wrapper, Overlay, Content } from './OrgValues.Styles'

// icons
import lock from "../../public/icons/lock.png";
import plane from "../../public/icons/mail.png";
import robot from "../../public/icons/robot.png";

const OrgValues = () => {
  return (
    <Wrapper>
      {/* <Overlay> */}
      <div className="heading">Why GIITSC?</div>
      <Content>
        <ValueCard
          icon={lock}
          title={"Fully Secured"}
          description={
            "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
          }
        />
        <ValueCard
          icon={plane}
          title={"Simplify Communication"}
          description={
            "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
          }
        />
        <ValueCard
          icon={robot}
          title={"Automate Workflow"}
          description={
            "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
          }
        />
      </Content>
      {/* </Overlay> */}
    </Wrapper>
  );
}

export default OrgValues