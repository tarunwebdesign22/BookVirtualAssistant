"use client";

import {
  Globe,
  AppWindow,
  PenTool,
  ServerCog,
  Link2,
  Database,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description:
      "Our full-stack developers work with you to build efficient and aesthetically pleasing websites that represent your company. From an online store to a corporate website, we maintain outstanding usability for the user.",
  },
  {
    icon: AppWindow,
    title: "End-to-end Application Development",
    description:
      "You can trust us to provide you with an end-to-end application development service. We can address all your front-end, back-end, and database requirements and provide full service.",
  },
  {
    icon: PenTool,
    title: "Front-end Design and Development",
    description:
      "We focus more on delivering quality and easy-to-navigate UI/UX front-end designs by utilizing frameworks such as React, Angular, and Vue.js where necessary.",
  },
  {
    icon: ServerCog,
    title: "Scalable Back-End Solutions",
    description:
      "Our developers create reliable and optimizable back-end frameworks leveraging Node.js, Python, PHP, and others to guarantee your systems' stability under high load.",
  },
  {
    icon: Link2,
    title: "API Integration and Development",
    description:
      "Enhance your corporate operations by applying third-party or developing your own custom API for integrating your systems and applications flawlessly.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "It is therefore essential for any business to manage the data that it receives very effectively. Today, we specialize in database management, from creating the schema and optimizing the databases to incorporating technologies such as MySQL, PostgreSQL, and MongoDB.",
  },
];

const perkItems = [
  {
    title: "Certified Expertise",
    description:
      "Our team comprises certified full stack developers who are eager to share their experience and skills. Our team has years of experience so even if the job seems complicated, it will not be a problem.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Affordable Services",
    description:
      "Get yourself the best full stack developers at an affordable price. Depending on the customer needs and practically possible working hours, they can opt for full-time, part-time or hourly plans.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Tailored Solutions",
    description:
      "We recognize that no two businesses are alike, so we listen and understand your goals. We customize all our solutions to align with your objectives and deliver exceptional results.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Quick Turnaround Time",
    description:
      "We all understand how important time is in the management of any company. Our team works consistently trying to meet the specified deadlines and ensuring that our work is of the best quality.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
];

const processSteps = [
  {
    title: "Understanding Needs",
    description:
      "Your project's needs, consumer base, organizational objectives, and expectations are taken under consideration by our experienced Full Stack developer.",
  },
  {
    title: "Strategic Planning",
    description:
      "To produce a thorough project plan, the full stack programmer closely examines your project and technical requirements.",
  },
  {
    title: "Designing Prototypes",
    description:
      "Design mock-ups and schematics are created to visually outline the project as per the plan.",
  },
  {
    title: "Building the Product",
    description:
      "After receiving approval for the prototype, the development process will start in order to bring your idea to reality.",
  },
  {
    title: "Testing and Deployment",
    description:
      "A perfectly optimized, error-free product is prepared for a seamless launch after extensive testing.",
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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO of Modern Threads",
    location: "USA",
    quote:
      "Hiring a full stack developer through Book Virtual Assistant was the best decision we made for our online store. The developer quickly understood our requirements and delivered a seamless eCommerce platform. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Mike Turner",
    role: "Founder of FinEdge Solutions",
    location: "USA",
    quote:
      "The developer we hired was an absolute pro! They managed both the front-end and back-end development of our financial tracking app. The process was smooth, and the final product exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Roberts",
    role: "Marketing Director at Bright Learners",
    location: "USA",
    quote:
      "Our project was complex, but the full stack developer from Book Virtual Assistant made it look easy. From UI design to backend database setup, everything was handled professionally. We're thrilled with the results!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is the cost of hiring a full stack developer from Book Virtual Assistant?",
    answer:
      "This cost will depend on the abilities of the application developer as well as the features that have to be incorporated, and the timeline that has to be covered. To cater for your financial situation, we developed several staffing programs so that you can hire competent staff from our firm on an hourly basis, part time, or fulltime.",
  },
  {
    question: "Can I hire a developer for a short-term project?",
    answer:
      "Absolutely! Thus, it is easy to understand that based on the necessary organizational and operational requirements, we can easily offer these hiring models. We are capable of providing you with a developer on either a short term basis, perhaps for a few weeks, or on a long term basis, for a few months for instance.",
  },
  {
    question: "What technologies do your developers specialize in?",
    answer:
      "Front-end includes React, Angular, Vue.js, while back-end technologies comprise Node.js, PHP, MySQL, MongoDB, etc., in the possession of our full-stack .",
  },
  {
    question: "How do you ensure quality and timely delivery?",
    answer:
      "We exclusively deal with seasoned programmers that use industry-best standards. The developer keeps open contact and provides frequent updates during the project to guarantee that everything goes accordingly.",
  },
];

export default function HireFullstackDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the Best Full Stack Developers",
              description: (
                <>
                  With constant support, experienced developers, and flexible pricing plans, Book Virtual
                  Assistant's{" "}
                  <span className="font-semibold text-foreground">hire full-stack developer</span> services
                  offer a complete end-to-end solution. Share your requirements with us, including your
                  goals, timeline, and budget, and we will provide the perfect developer accordingly.
                  <br />
                  <br />
                  Many of our specialists are versatile front-end and back-end developers. They can work at
                  the user interface (UI) level and even become responsible for server-side code. Are you in
                  need of someone who can build a responsive website, develop an eCommerce platform, create
                  apps, or handle other tasks? You're in the right hands with us!
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/fullstack-banner-1.png",
              imageAlt: "Hire the Best Full Stack Developers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "fullstack-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why BVA's Full Stack Developer Specialist Matter",
              items: [
                {
                  value: "20+",
                  label: "Certified Full Stack Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "250+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "98%",
                  label: "Client Retention Rate",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "10+",
                  label: "Year Experience",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "Full Stack Services for Accelerated Business Growth",
              description: (
                <>
                  The comprehensive and cost-effective services you get when you{" "}
                  <span className="font-semibold text-foreground">
                    hire a full stack developer from India
                  </span>{" "}
                  help grow your business and ensure an excellent digital presence.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "With BVA, You Gain More Than a Developer",
              image: "/images/services/fullstack-banner-1.png",
              imageAlt: "Full stack developers delivering end-to-end solutions",
              paragraphs: [
                <>
                  Take a step ahead of your competitors and{" "}
                  <span className="font-semibold text-foreground">
                    Hire the best full stack developers
                  </span>{" "}
                  for exceptional website solutions and benefits:
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our Proven 5-Step Approach to Full Stack Development",
              steps: processSteps,
            },
            pricing: {
              badge: "Pricing",
              title: "Choose a Plan That Works Best for You",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "How Our Clients Maximized Savings and Efficiency",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Hire Full Stack Developer: FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
