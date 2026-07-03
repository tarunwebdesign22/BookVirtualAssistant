import PageHeader from "./PageHeader";
import FaqAccordion from "./FaqAccordion";

export default function FaqPage() {
  return (
    <>
      <PageHeader
        badge="Support"
        title="Need Assistance? We're Here to Help!"
        description="Explore the answers you're looking for below."
      />
      <FaqAccordion />
    </>
  );
}
