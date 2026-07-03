import Header from "../../components/Header";
import CookiePolicy from "../../components/CookiePolicy";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Cookie Policy | Book Virtual Assistant",
  description:
    "Learn how Book Virtual Assistant uses cookies to improve your experience, analyze site usage, and remember your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <CookiePolicy />
      </main>
      <Footer />
    </>
  );
}
