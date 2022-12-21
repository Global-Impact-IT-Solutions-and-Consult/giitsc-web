import TestimonialCard from "../../widgets/testimonialCard/TestimonialCard";

// styles
import { Content, Overlay, Wrapper } from "./Testimonials.Styles";

const Testimonials = () => {
  return (
    <>
      <Wrapper>
        <Overlay>
          <div className="heading">Some clients reviews</div>
          <Content>
            <TestimonialCard
              name={"Magaret Jonas"}
              review={
                "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
              }
            />
            <TestimonialCard
              name={"Sharon Hillary"}
              review={
                "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
              }
            />
            <TestimonialCard
              name={"Austin Franklyn"}
              review={
                "Nemo id, vitae magni dolore, cum accusamus fugiat quas beatae, dolores omnis mollitia repellendus eius."
              }
            />
          </Content>
        </Overlay>
      </Wrapper>
    </>
  );
};

export default Testimonials;
