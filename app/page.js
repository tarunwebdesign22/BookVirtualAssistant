import Header from "../components/Header";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Solutions from "../components/home/Solutions";
import KeyBenefits from "../components/home/KeyBenefits";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";
import LetsConnect from "../components/home/LetsConnect";
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
        <LetsConnect />
      </main>
      <Footer />
    </>
  );
}
