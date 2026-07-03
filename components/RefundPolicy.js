import PageHeader from "./PageHeader";

const policyPoints = [
  "Either you or Book Virtual Assistant can end the contract by providing a 15-day written notice.",
  "If you prefer a longer notice period, we can accommodate this, as long as you agree to a notice of equal length.",
  "If your assigned employee's performance is significantly below expectations, we offer a full refund.",
  "If the employee's performance meets expectations but does not fully satisfy your needs, we will charge for the days worked and refund any remaining balance.",
  "Instead of a refund, you also have the option to replace the employee if you're not satisfied. Any unused balance can be credited toward the new hire.",
  "To be eligible for a refund or replacement, you must notify us as early as possible, ideally within the first week of employment. Delayed feedback may limit available options, and if the dissatisfaction is communicated later, the original 15-day or one-month notice policy (whichever was agreed upon) will apply for service termination.",
];

export default function RefundPolicy() {
  return (
    <>
      <PageHeader
        badge="Policy"
        title="Refund Policy"
        subtitle="We believe in fair and transparent policies."
        description="Book Virtual Assistant's refund policy outlines notice periods, refund eligibility, and employee replacement options, ensuring a clear and fair process for clients."
      />

      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <ul className="list-disc space-y-4 pl-5 leading-relaxed text-body">
          {policyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </>
  );
}
