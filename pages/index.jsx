// components
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSection/HeroSection";
import WhyUs from "../components/whyUs/WhyUs";
import Partners from "../components/partners/Partners";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Partners />
      <Testimonials />
      <WhyUs />
      <Footer />
    </>
  );
}
