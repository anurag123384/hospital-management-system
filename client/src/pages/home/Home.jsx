
import Hero from "./Hero";
import Services from "./Services";
import Doctors from "./Doctors";
import Footer from "../../components/Footer";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import FAQ from "./FAQ";
import Stats from "./Stats";
import Features from "./Features";

function Home() {
  return (
    <>

      <Hero />

      <Services />

      <Doctors />
      <Stats />
      <Features />

      <Testimonials />

      <CallToAction />

      <FAQ />

      <Footer />
    </>
  );
}

export default Home;