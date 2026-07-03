import Header from "../../components/Header";
import TestimonialPage from "../../components/TestimonialPage";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Testimonials | Book Virtual Assistant",
  description:
    "Read what our clients say about Book Virtual Assistant. Real feedback from businesses worldwide on our virtual assistant and remote staffing services.",
};

export default function TestimonialRoutePage() {
  return (
    <>
      <Header />
      <main>
        <TestimonialPage />
      </main>
      <Footer />
    </>
  );
}
