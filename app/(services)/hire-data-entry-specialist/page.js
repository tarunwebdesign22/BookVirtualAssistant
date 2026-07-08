"use client";

import {
  Keyboard,
  Cog,
  RefreshCw,
  Sparkles,
  Database,
  Pickaxe,
  Search,
  FileCheck2,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Keyboard,
    title: "Data Entry",
    description:
      "Our data entry specialists are experts in both online and offline data entry, PDF to Excel conversions, image data entry, legal data input, document data entry, and product data entry for e-commerce platforms, among other areas. Your data entry specialist is up to whatever job you assign.",
  },
  {
    icon: Cog,
    title: "Data Processing",
    description:
      "Among other related jobs, BVA's remote data processing professionals effectively handle insurance claims, order entry, purchase order administration, transaction data processing, records indexing, mailing list compilation, word processing, and formatting.",
  },
  {
    icon: RefreshCw,
    title: "Data Conversion",
    description:
      "Professionals in XML, HTML, PDF, Excel, image-to-doc, form processing, catalog conversion, SGML conversion, ebook conversion, and document conversion BVA's offshore data entry professionals in India specialize in these areas. These are some of the conversion tasks that BVA's staff members handle.",
  },
  {
    icon: Sparkles,
    title: "Data Cleansing",
    description:
      "In order to deliver the clients exactly what they are searching for, virtual assistants and data entry professionals in India additionally possess knowledge in data cleansing and enrichment. Over the past fifteen years, our India-based data entry professionals have cleaned data for several clients.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Effective operation of a contemporary organization depends on database administration. Entire operations can stop without fast access to data if and when required. For database building and migration, as well as CRM database administration, hire BVA's online data input professionals.",
  },
  {
    icon: Pickaxe,
    title: "Data Mining",
    description:
      "Any data-based company has to be efficient in extracting the pertinent information from mountains of data. BVA's offshore data entry professionals in India shine in data mining, database, and address validation to guarantee that you obtain exactly the data you need when you most need it.",
  },
  {
    icon: Search,
    title: "Web Research",
    description:
      "BVA's online data entry professionals are skilled in conducting web research for any job or project you are working on. Along with email, name, and address research, they also do data research, market and legal research, product and service research, and LinkedIn data research.",
  },
  {
    icon: FileCheck2,
    title: "Forms Processing",
    description:
      "Among other related activities your company may need, BVA's triple-vetted data entry professionals shine in form processing, including market research forms, product registration forms, credit card forms, legal procedure research, mortgage forms, and survey forms.",
  },
];

const processSteps = [
  {
    title: "E-commerce Data Entry Services",
    description:
      "Looking to optimize your online store? Hire experienced ecommerce product data entry specialists who have worked across various shopping platforms. Our dedicated resources can tailor custom processes to streamline your product data management, ensuring your catalog runs smoothly and efficiently.",
  },
  {
    title: "ePUB Conversion Services",
    description:
      "Our team of data entry professionals delivers top-notch ePUB conversion and formatting services for a wide range of file types, including PDF, MS Word, QuarkXPress, InDesign, XML, HTML, 3B2, and RTF. By choosing our ePUB Conversion Services, you can reach a broader market, enhance circulation, and increase advertiser value-all while reducing overall costs.",
  },
  {
    title: "Indexing Services",
    description:
      "Efficiently organizing your information can significantly boost your organization's productivity. Our indexing services help structure your data into searchable databases, making information retrieval quick and easy. VE's highly skilled team of data entry experts in India ensures that your indexing process is handled with precision and expertise.",
  },
];

const reasonItems = [
  {
    title: "Save Time and Resources",
    description:
      "Outsourcing data entry tasks allows you to focus on strategic areas of your business while we handle the details.",
    image: "/images/services/audience-targeting.jpg",
    imageAlt: "Save Time and Resources",
  },
  {
    title: "Enhanced Accuracy",
    description:
      "Our professionals are trained to minimize errors, ensuring your data is always accurate and reliable.",
    image: "/images/services/keyword-research.jpg",
    imageAlt: "Enhanced Accuracy",
  },
  {
    title: "Cost Savings",
    description:
      "Hiring in-house staff can be expensive. With us, you get expert services at a fraction of the cost.",
    image: "/images/services/utilizing-gafour.jpg",
    imageAlt: "Cost Savings",
  },
  {
    title: "Scalability",
    description:
      "As your business grows, so do your data needs. Our flexible solutions scale with your requirements.",
    image: "/images/services/competitive-analysis.jpg",
    imageAlt: "Scalability",
  },
  {
    title: "Stress-Free Operations",
    description:
      "Let us take the load off your team with our efficient and dependable data entry services.",
    image: "/images/services/ad-copy-optimization.jpg",
    imageAlt: "Stress-Free Operations",
  },
];

const pricingPlans = [
  {
    name: "Full-time",
    features: [
      "Dedicated team member",
      "Priority task management",
      "Regular progress updates",
      "Best for long-term projects",
    ],
  },
  {
    name: "Part-time",
    popular: true,
    features: [
      "Flexible scheduling options",
      "Dedicated resource allocation",
      "Ideal for medium-sized tasks",
      "Weekly performance reviews",
    ],
  },
  {
    name: "Hourly",
    features: [
      "Pay-as-you-go model",
      "No long-term commitment",
      "Perfect for ad-hoc or small tasks",
      "Quick turnaround time",
    ],
  },
];

const howToHireSteps = [
  {
    title: "Discuss Your Needs With Us",
    description:
      "We'd like to understand your precise requirements for a data entry expert so that we may align our strategy with your business needs.",
  },
  {
    title: "Schedule A Meeting",
    description:
      "Let us know what you need, and we will guide you about the sound strategies and plans for data entry.",
  },
  {
    title: "Get Started",
    description:
      "Once you've made up your mind, it's time to hire your data entry specialist and begin enjoying the benefits you deserve.",
  },
];

const testimonials = [
  {
    name: "John R.",
    role: "New York",
    location: "USA",
    quote:
      "The data entry experts at BVA have been a game-changer for my business. Their accuracy and speed are unparalleled, saving us countless hours every week.",
    rating: 5,
  },
  {
    name: "Linda S.",
    role: "California",
    location: "USA",
    quote:
      "I was impressed by their attention to detail. The team ensured all my data was entered flawlessly, and they even helped organize it better than I imagined!",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "Texas",
    location: "USA",
    quote:
      "Hiring a data entry expert from Book Virtual Assistant was one of the best decisions for our growing business. Reliable, efficient, and cost-effective.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does a data entry expert do?",
    answer:
      "A data entry expert manages tasks such as entering data into spreadsheets, organizing databases, cleaning and formatting data, and more. They ensure accuracy and efficiency to streamline your operations.",
  },
  {
    question: "How secure are your data entry services?",
    answer:
      "We prioritize security and confidentiality. Our team adheres to strict protocols to protect your sensitive business data.",
  },
  {
    question: "Can I hire a data entry expert for a short-term project?",
    answer: "Yes! Our services are flexible, whether you need a one-time solution or ongoing support.",
  },
  {
    question: "How much does hiring a data entry expert cost?",
    answer:
      "We offer competitive pricing tailored to your business needs. Contact us for a customized quote.",
  },
];

export default function HireDataEntrySpecialistPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the best Data Entry specialists from Book Virtual Assistant",
              description: (
                <>
                  Now is the time to enhance the efficiency of the data management process by choosing to{" "}
                  <span className="font-semibold text-foreground">
                    hire the best data entry specialists
                  </span>{" "}
                  from Book Virtual Assistant. We provide professional data entry skills in data processing
                  and data management for business organizations. Our data entry operators are versatile in
                  dealing with all types of work, ranging from simple entry to complicated database
                  operations.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "data-entry-specialist-service",
            },
            intro: {
              title: "Reasons to Choose Offshore Data Entry Experts from India",
              paragraphs: [
                <>
                  India has become a global hub for outsourcing data entry services due to its skilled
                  workforce, cost-effectiveness, and commitment to quality. With a vast pool of
                  English-speaking professionals and a strong educational foundation, India offers{" "}
                  <span className="font-semibold text-foreground">
                    best freelance data entry experts for hire
                  </span>
                  . Additionally, working across time zones provides businesses with faster turnaround times
                  and round-the-clock support.
                </>,
                <>
                  Book Virtual Assistant, one of the leading data entry outsourcing companies from India,
                  ensures that only the best talent, equipped with relevant skills and certifications, is
                  available to meet your specific business needs.
                </>,
              ],
            },
            services: {
              badge: "Our Services",
              title: "GComplete Data Entry Services: A World of Custom Solutions",
              description:
                "To get the best experience, book a virtual assistant's data entry services online, and it can be your ultimate solution.",
              columns: 3,
              items: serviceItems,
            },
            process: {
              badge: "Our Process",
              title: "BVA's Data Entry Experts: Your Trusted Partner for Success",
              steps: processSteps,
            },
            reasons: {
              badge: "Benefits",
              title: "Benefits of Hiring a Data Entry Expert from Book Virtual Assistant",
              columns: 3,
              items: reasonItems,
            },
            pricing: {
              badge: "Pricing",
              title: "Pricing Plans that Meet Your Needs",
              plans: pricingPlans,
            },
            howToHire: {
              badge: "Get Started",
              title: "Hiring Data Entry Expert Made Simple",
              ctaLabel: "Hire Data Entry Specialist",
              ctaHref: "/contact-us",
              steps: howToHireSteps,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Cheers of Approval",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Data Entry Specialists",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
