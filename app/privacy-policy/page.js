import Header from "../../components/Header";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | Book Virtual Assistant",
  description:
    "Learn how Book Virtual Assistant collects, uses, and protects personal information for clients and employees. Read our full privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
