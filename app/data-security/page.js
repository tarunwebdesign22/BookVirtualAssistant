import Header from "../../components/Header";
import DataSecurity from "../../components/DataSecurity";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Data Security | Book Virtual Assistant",
  description:
    "Unbreakable data protection for your business. ISO 27001:2013 certified, strict access controls, 24/7 monitoring, and CERT-in compliant response—Book Virtual Assistant keeps your information safe.",
};

export default function DataSecurityPage() {
  return (
    <>
      <Header />
      <main>
        <DataSecurity />
      </main>
      <Footer />
    </>
  );
}
