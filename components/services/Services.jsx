// styles
import { Wrapper, CardHolder, CardPair } from "./Services.Styles"

// widgets
import ServiceCard from "../../widgets/serviceCard/ServiceCard";

// images
import mobile from '../../public/services/mobile1.png'
import PM2 from '../../public/services/PM2.jpg'
import web from '../../public/services/web1.png'
import security from '../../public/services/security.jpg'


const Services = () => {
  return (
    <Wrapper>
      <div className="heading">Our Services</div>
      <CardHolder>
        <CardPair>
          <ServiceCard
            image={mobile}
            title={"Mobile Application"}
            description={
              "The team at Giitsc has the skills and extensive years of experience in both iOS and Android APP Development"
            }
          />
          <ServiceCard
            image={web}
            title={"Web Development"}
            description={
              "Our website development professionals recognize the value of solid information architecture design and integrative branding"
            }
          />
        </CardPair>
        <CardPair>
          <ServiceCard
            image={security}
            title={"Network Security"}
            description={
              "Our certified experts will analyze your business to determine the best way to keep your network safe from attacks"
            }
          />
          <ServiceCard
            image={PM2}
            title={"Project Management"}
            description={
              "We have the best team of project managers with vast experience in project management & consulting"
            }
          />
        </CardPair>
      </CardHolder>
    </Wrapper>
  );
}

export default Services