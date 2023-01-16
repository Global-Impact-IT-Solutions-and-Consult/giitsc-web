// styles
import { Wrapper, CardHolder, CardPair } from "./Services.Styles";

// widgets
import ServiceCard from "../../widgets/serviceCard/ServiceCard";

// icons
import mobile from "../../public/services/pngs/mobile-development.png";
import network from "../../public/services/pngs/cyber-security.png";
import project from "../../public/services/pngs/development.png";
import training from "../../public/services/pngs/education.png";
import web from "../../public/services/pngs/coding.png";
import marketing from "../../public/services/pngs/bullhorn.png";

const Services = () => {
  return (
    <Wrapper>
      <div className="heading">Services</div>
      <CardHolder>
        <ServiceCard
          icon={mobile}
          title={"Mobile Development"}
          description={
            "The team at Giitsc has the skills and years of experience in mobile application development"
          }
        />
        <ServiceCard
          icon={network}
          title={"Networking"}
          description={
            "Our certified experts will analyze your business to determine the best way to keep your network safe from attacks"
          }
        />
        <ServiceCard
          icon={project}
          title={"Project Management"}
          description={
            "We have the best team of project managers with vast experience in project management & consulting"
          }
        />

        <ServiceCard
          icon={training}
          title={"Corporate Training"}
          description={
            "We have a unique training that will help you as an individual, organizations and government agencies in reaching your potentials"
          }
        />
        <ServiceCard
          icon={web}
          title={"Web Development"}
          description={
            "Our website development professionals recognize the value of solid information architecture design and integrative branding"
          }
        />

        <ServiceCard
          icon={marketing}
          title={"Agile Coach"}
          description={
            "Digital marketing is the delivery of advertisements through digital channels like search engines, websites, social media, email, and mobile apps."
          }
        />
        {/* <ServiceCard
          icon={coach}
          title={"Agile Coach"}
          description={
            "Make your teams more flexible, transparent, and efficient by aligning them with Agile values and concepts provided by our agile coaches"
          }
        />
        <ServiceCard
          icon={scrum}
          title={"SCRUM Masters"}
          description={
            "Help your team succeed by getting help on a one-on-one basis or as a group from our SCRUM Masters"
          }
        />
        <ServiceCard
          icon={outsourcing}
          title={"Outsourcing"}
          description={
            "We help you find the most qualified experts to build your projects"
          }
        />
        <ServiceCard
          icon={ai}
          title={"AI"}
          description={
            "We specialize in various AI fields like Robotics, deep learning and machine learning"
          }
        /> */}
      </CardHolder>
    </Wrapper>
  );
};

export default Services;
