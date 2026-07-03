import Header from "../../components/Header";
import CaseStudiesPage from "../../components/CaseStudiesPage";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Case Studies | Book Virtual Assistant",
  description:
    "Read Book Virtual Assistant case studies on social media marketing, guest posting, back office operations, and client growth campaigns.",
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
