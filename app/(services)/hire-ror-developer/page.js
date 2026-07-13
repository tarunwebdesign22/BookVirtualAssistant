"use client";

import {
  Globe,
  ShoppingCart,
  Link2,
  Cloud,
  ArrowRightLeft,
  ShieldCheck,
  Rocket,
  Puzzle,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Globe,
    title: "Custom Web Application Development",
    description:
      "Develop custom, high-functionality web applications using Ruby on Rails. The framework that our developers use enables you to achieve the desired speed and efficiency of the work and create high-quality and scalable solutions that support your business needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Revolutionize your web store using enterprise-scale e-commerce solutions built using Ruby on Rails. Our developers design and develop sophisticated and user-friendly one-click shopping carts with such functions as inventory control, integrated payment systems, etc.",
  },
  {
    icon: Link2,
    title: "API development and Integration",
    description:
      "Get improved, specific API development and integration services to boost the functionality of your existing applications. Ruby on Rails provides integrated working between platforms and devices and various third-party services for an integrated experience.",
  },
  {
    icon: Cloud,
    title: "Scalable SaaS Development",
    description:
      "Scale your business effectively with SaaS applications created for managing emerging businesses. ROR website developers are skilled in developing unique cloud platform solutions for your specific business.",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration and Upgrades",
    description:
      "Migrate your legacy applications to the RoR framework or add the RoR applications into existing older RoR applications without much hassle. In order to achieve the best result of migration, the experts at our company guarantee efficient migration without loss of data integrity and their functionality.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance and Support",
    description:
      "Ensure proper maintenance and support for your applications to prevent them from slowing down over time. It fixes bugs, deploys changes, and adds optimizations to offer optimal functionality and quality.",
  },
  {
    icon: Rocket,
    title: "MVP Development for Startups",
    description:
      "Start your new venture without delay by using Ruby on Rails, which has a short development cycle. We assist you in developing an MVP to launch your idea and attract capital.",
  },
  {
    icon: Puzzle,
    title: "Third-party Plugin and Module Development",
    description:
      "Breathe new life into your application with added plugins and modules. Our developers are able to design and implement solutions for your individual needs and make the operations of your business valuable.",
  },
];

const perkItems = [
  {
    title: "Certified Expertise",
    description:
      "Our team comprises certified ROR developers who are eager to share their experience and skills. Our team has years of experience so even if the job seems complicated, it will not be a problem.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Affordable Services",
    description:
      "Get yourself the best ROR developers at an affordable price. Depending on the customer needs and practically possible working hours, they can opt for full-time, part-time or hourly plans.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Tailored Solutions",
    description:
      "We recognize that no two businesses are alike, so we listen to your goals. We customize all our solutions to align with your objectives and deliver exceptional results.",
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
      "Your project's needs, consumer base, organizational objectives, and expectations are taken under consideration by our experienced RoR developer.",
  },
  {
    title: "Strategic Planning",
    description:
      "To produce a thorough project plan, the RoR programmer closely examines your project and technical requirements.",
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
    name: "John D.",
    role: "CEO of a Tech Startup",
    location: "USA",
    quote:
      "The ROR developer we hired from Book Virtual Assistant exceeded our expectations. They delivered a high-performing web app on time and within budget. Their professionalism and technical skills were outstanding.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Product Manager at an E-Commerce Company",
    location: "USA",
    quote:
      "The developer we worked with was exceptional at understanding our needs and transforming them into a scalable solution. The process was seamless, and the results have been phenomenal.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "Founder of a Healthcare Platform",
    location: "USA",
    quote:
      "We needed a HIPAA-compliant application, and the team at Book Virtual Assistant provided us with an ROR developer who delivered beyond what we imagined. Highly recommended!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Why should I hire ROR developers from Book Virtual Assistant?",
    answer:
      "We connect businesses with Ruby on Rails experts with varying industry experience. We guarantee the best solutions within the agreed quality standards because we offer various hiring models.",
  },
  {
    question: "What kind of projects can ROR developers handle?",
    answer:
      "Our developers take on many forms of work, starting with custom web application development, e-commerce solutions, APIs, and system migrations. They have previous work experience in providing solutions for various sectors, for example, healthcare, e-commerce, and education.",
  },
  {
    question: "How do I know the ROR developer is the right fit for my project?",
    answer:
      "What customers really appreciate is that we perform a comprehensive and stringent screening and selection process. You can review the profiles of developers and allocate a specific amount of time to try their work for free.",
  },
  {
    question: "How do you ensure data security during the development process?",
    answer:
      "We protect your ideas, inventions, and other information, among other things, by signing non-disclosure agreements (NDAs) to ensure data security.",
  },
];

export default function HireRorDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Top Ruby on Rails Developers from India",
              description: (
                <>
                  The Ruby on Rails or ROR developers at Book Virtual Assistant are equipped to help your
                  business perform at its best. Outsourcing to Indian-based developers gives you the advantage
                  of cost efficiency and the opportunity to{" "}
                  <span className="font-semibold text-foreground">
                    hire the best Ruby on Rails developers
                  </span>
                  .
                  <br />
                  <br />
                  With flexible pricing plans, expertise in delivering all-around solutions, and dedicated
                  support, we ensure smooth project execution and timely delivery. So if you are here looking
                  to elevate your business with Ruby on Rails development, let us handle the technical
                  complexities for you!
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/ruby-banner-1.png",
              imageAlt: "Hire Top Ruby on Rails Developers from India",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "ror-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why BVA's ROR Developer Specialist Matter",
              items: [
                {
                  value: "5+",
                  label: "Certified ROR Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "50+",
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
                  value: "15+",
                  label: "Years of Average Experience",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "ROR Services for Accelerated Business Growth",
              description: (
                <>
                  ROR is the go-to choice for businesses looking to build high-performance web applications.
                  Thus,{" "}
                  <span className="font-semibold text-foreground">
                    hire the best Ruby on Rails developers
                  </span>{" "}
                  with Book Virtual Assistant, specializing in delivering solutions that drive business
                  success.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "With BVA, You Gain More Than a Developer",
              image: "/images/services/ruby-banner-1.png",
              imageAlt: "Ruby on Rails developers building web apps",
              paragraphs: [
                <>
                  Take a step ahead of your competitors and{" "}
                  <span className="font-semibold text-foreground">
                    hire top Ruby on Rails developers from India
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
              title: "Our Proven 5-Step Approach to ROR Development",
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
              title: "Hire ROR Developer : FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
