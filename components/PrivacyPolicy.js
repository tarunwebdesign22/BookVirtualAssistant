import PageHeader from "./PageHeader";

const employeeInfoPoints = [
  "Our Virtual Assistant collects contact information to communicate with you.",
  "Our Virtual Assistant collects employee information, including financial and bank account details, to provide the services.",
  "Our Virtual Assistant collects employee information, including social security numbers, dates of birth, financial and bank account details, biometric data, geolocation, medical records, and beneficiary information, to provide the services.",
  "Our Virtual Assistant collects employment history and application details to determine eligibility for job openings through our recruiting module.",
];

const clientInfoPoints = [
  "The Internet Protocol (“IP”) address of your Internet Service Provider.",
  "The content you access.",
  "The functions, products, or services you use on the Site or Products.",
  "Your computer’s operating system.",
  "Up-time and other usage statistics about the Site or Products.",
  "Location information.",
  "Your computer’s unique identifier (e.g., CPU serial number).",
  "Web browser used.",
  "The date and time of your visit to the Site or use of the Product.",
];

const sections = [
  {
    title: "1. Overview",
    content:
      "We, at Book Virtual Assistant, consider the privacy of our visitors to be of utmost importance. This privacy policy outlines the types of personal information we receive and collect, and how we use it. We prioritize the privacy of our clients as well as our employees. Your privacy, and the confidentiality of the information you provide to us, are important to us. We take reasonable care to protect your data from loss, misuse, unauthorized access, disclosure, alteration, and destruction. We do not grant access to your personal information except as outlined in this policy.",
  },
  {
    title: "2. Terms",
    content:
      "We do not share or sell the personal information collected on our site to any third parties for their marketing purposes. Book Virtual Assistant is committed to protecting the privacy of our employees, customers, and their employees. As part of this commitment, Book Virtual Assistant has established a privacy program that demonstrates our dedication to complying with privacy laws.",
  },
  {
    title: "3. Information Collection and Use",
    content:
      "Firstly, we strive to collect minimal personal information from our clients to ensure they feel comfortable working with us. Any information requested from the client is solely for product services and to meet legal and regulatory requirements.",
  },
  {
    title: "4. Info that we collect from our Employee",
    list: employeeInfoPoints,
  },
  {
    title: "5. Info that we collect from clients",
    content:
      "Information we collect about your use of our Site or Products may, for example, include:",
    list: clientInfoPoints,
  },
  {
    title: "6. Changes to privacy policy",
    content:
      "We reserve the right to update this Privacy Policy at any time. When changes are made, the updated Privacy Policy will be posted on this site and will take effect immediately. Your continued access to or use of the site or product signifies your acceptance of the updated Privacy Policy.",
  },
  {
    title: "7. Contact us",
    content: (
      <>
        If you have any query regarding our privacy policy you can also directly ask us through mails or
        through our website:{" "}
        <a
          href="mailto:info@bookvirtualassistant.com"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          info@bookvirtualassistant.com
        </a>
      </>
    ),
  },
  {
    title: "8. Security of Collected Information",
    content:
      "We are committed to protecting the security of the information we collect and take reasonable physical, electronic, and administrative safeguards to help prevent unauthorized or inappropriate access or use. You are responsible for maintaining the confidentiality of your passwords, account information, and any other access features related to your use of the Site or Product. Additionally, you must adhere to any applicable Terms of Use or other agreements between you and us or your organization.",
  },
  {
    title: "9. Support",
    content:
      "Our team provides full support in case of any inconvenience. You can contact us directly, and we always strive to ensure you never face any obstacles in our partnership with you.",
  },
  {
    title: "10. Quality",
    content:
      "Our team provides you with the best of our company to ensure your satisfaction with our work. Our specialized team members focus on their respective departments to deliver the best results while prioritizing your requirements. We are ISO-certified and take our work seriously, striving to help you make the most of our website.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        badge="Policy"
        title="Privacy Policy"
        subtitle="We maintain separate privacy policies for both our clients and employees."
      />

      <article className="mx-auto max-w-3xl space-y-8 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
              {section.title}
            </h2>
            {section.content && (
              <p className="mt-3 leading-relaxed text-body">{section.content}</p>
            )}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-body">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}
