import Header from "../../components/Header";
import RefundPolicy from "../../components/RefundPolicy";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Refund Policy | Book Virtual Assistant",
  description:
    "Transparent refund policy for hiring virtual assistants. Learn about notice periods, refund eligibility, and employee replacement options at Book Virtual Assistant.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <RefundPolicy />
      </main>
      <Footer />
    </>
  );
}
