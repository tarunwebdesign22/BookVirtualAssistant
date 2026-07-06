import Header from "../../components/Header";
import HowToWorkWithUs from "../../components/HowToWorkWithUs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "How to Work With Us | Book Virtual Assistant",
  description:
    "Discover Book Virtual Assistant's unique outsourcing model — dedicated employee and team models, skilled professionals, flexible support, and cost-effective virtual assistant solutions from India.",
};

export default function HowToWorkWithUsPage() {
  return (
    <>
      <Header />
      <main>
        <HowToWorkWithUs />
      </main>
      <Footer />
    </>
  );
}
