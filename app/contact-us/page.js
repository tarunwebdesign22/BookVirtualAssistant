import Header from "../../components/Header";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us | Book Virtual Assistant",
  description:
    "Drop us your requirements. Our team will get back to you within 1 business day. Reach Book Virtual Assistant via phone, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
