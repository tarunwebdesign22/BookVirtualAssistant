import Header from "../../components/Header";
import AwardsRecognition from "../../components/AwardsRecognition";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Awards & Recognition | Book Virtual Assistant",
  description:
    "Explore Book Virtual Assistant awards, certifications, and industry recognition including Amazon, Shopify, Google Ads, Clutch, and Meta Business Partner credentials.",
};

export default function AwardsRecognitionPage() {
  return (
    <>
      <Header />
      <main>
        <AwardsRecognition />
      </main>
      <Footer />
    </>
  );
}
