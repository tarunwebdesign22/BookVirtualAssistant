import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us | Hire Virtual Assistants from India for Expert Support",
  description:
    "Learn about Book Virtual Assistant's Noida headquarters at Logix Cyber Park. Discover our history, modern workspace, and commitment to delivering exceptional remote services worldwide.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
