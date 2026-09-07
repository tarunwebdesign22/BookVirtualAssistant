import Header from "../../components/Header";
import CaseStudiesPage from "../../components/CaseStudiesPage";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Case Studies | Virtual Assistant for Business Success Stories",
  description:
    "Explore Book Virtual Assistant case studies across digital marketing, software development, ecommerce, and graphic designing.",
};

export default function CaseStudiesRoutePage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesPage />
      </main>
      <Footer />
    </>
  );
}
