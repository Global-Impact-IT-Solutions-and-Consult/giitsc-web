// styles
import { Wrapper, CardHolder, CardPair } from "./Services.Styles";

// widgets
import ServiceCard from "../../widgets/serviceCard/ServiceCard";

// images
import mobile from "../../public/services/mobile1.png";
import ai from "../../public/services/ai2.jpg";
import PM2 from "../../public/services/PM2.jpg";
import web from "../../public/services/web1.png";
import training from "../../public/services/training.jpg";
import security from "../../public/services/security.jpg";
import outsourcing from "../../public/services/outsourcing.jpg";
import scrum from "../../public/services/scrum.jpg";
import coach from "../../public/services/coach.webp";

const Services = () => {
  return (
    <Wrapper>
      <div className="heading">Our Services</div>
      <CardHolder>
        {/* <CardPair> */}
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
        {/* </CardPair> */}
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
        <ServiceCard
          image={coach}
          title={"Agile Coach"}
          description={
            "Make your teams more flexible, transparent, and efficient by aligning them with Agile values and concepts provided by our agile coaches"
          }
        />
        <ServiceCard
          image={scrum}
          title={"SCRUM Masters"}
          description={
            "Help your team succeed by getting help on a one-on-one basis or as a group from our SCRUM Masters"
          }
        />
        <ServiceCard
          image={outsourcing}
          title={"Outsourcing"}
          description={
            "We help you find the most qualified experts to build your projects"
          }
        />
        <ServiceCard
          image={ai}
          title={"AI"}
          description={
            "We specialize in various AI fields like Robotics, deep learning and machine learning"
          }
        />
        <ServiceCard
          image={training}
          title={"Corporate Training"}
          description={
            "Find the best career path for you and work towards being an elite with our corporate training and courses"
          }
        />
      </CardHolder>
    </Wrapper>
  );
};

export default Services;
