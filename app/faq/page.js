import Header from "../../components/Header";
import FaqPage from "../../components/FaqPage";
import Footer from "../../components/Footer";

export const metadata = {
  title: "FAQ | Book Virtual Assistant",
  description:
    "Find answers about hiring virtual assistants, onboarding timelines, cost benefits, time zones, industries served, and how to get started with Book Virtual Assistant.",
};

export default function FaqRoutePage() {
  return (
    <>
      <Header />
      <main>
        <FaqPage />
      </main>
      <Footer />
    </>
  );
}
