import Header from "../../components/Header";
import Infrastructure from "../../components/Infrastructure";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Infrastructure | Book Virtual Assistant",
  description:
    "Explore Book Virtual Assistant's modern VA infrastructure — high-speed internet, backup systems, ergonomic offices, hardware, software, video conferencing, and recording studio facilities.",
};

export default function InfrastructurePage() {
  return (
    <>
      <Header />
      <main>
        <Infrastructure />
      </main>
      <Footer />
    </>
  );
}
