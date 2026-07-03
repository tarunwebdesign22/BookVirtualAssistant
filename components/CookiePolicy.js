import Link from "next/link";
import PageHeader from "./PageHeader";

const paragraphs = [
  "To improve your experience on our site, Book Virtual Assistant utilizes cookies. Cookies are a common practice that involves placing small files in your computer's browser to store user preferences unique to your device. These files can only be interpreted by the server that provided them. Cookies, by themselves, do not store personally identifiable information. However, if you choose to provide Book Virtual Assistant with personal information via one of our site's features, it may be linked to data contained within a cookie.",
  "Book Virtual Assistant uses cookie data to enhance our site's offerings by analyzing site usage. When you submit data through forms, such as those found on the Contact Us page, or engage with our chat features, cookies may be set to remember your details for future correspondence. In some cases, we also use cookies provided by trusted third parties.",
  "If you wish to control the cookies you accept, you can do so by adjusting your browser settings (refer to your browser's Help section for more information). You can configure your browser to reject cookies or delete existing ones. Please note that disabling cookies may affect the functionality of our site. If you do not modify your browser settings, you will be deemed to have accepted cookies from this website.",
];

export default function CookiePolicy() {
  return (
    <>
      <PageHeader badge="Policy" title="Cookie Policy" />

      <article className="mx-auto max-w-3xl space-y-6 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-body">
            {paragraph}
          </p>
        ))}

        <p className="leading-relaxed text-body">
          Please see our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for more details regarding our use of personal information.
        </p>
      </article>
    </>
  );
}
