import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Solutions from "../components/Solutions";
import KeyBenefits from "../components/KeyBenefits";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Solutions />
        <KeyBenefits />
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
