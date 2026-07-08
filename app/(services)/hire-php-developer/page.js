"use client";

import {
  Globe,
  Blocks,
  Puzzle,
  ShieldCheck,
  Cloud,
  Link2,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Globe,
    title: "PHP Web Development",
    description:
      "Employ an experienced PHP developer proficient in creating safe and high-performance bespoke websites and online apps using PHP frameworks.",
  },
  {
    icon: Blocks,
    title: "Custom Module Development",
    description:
      "Engage a specialized PHP developer for bespoke module creation and the effortless building of dynamic web pages and interactive apps",
  },
  {
    icon: Puzzle,
    title: "PHP Extension Development",
    description:
      "From BVA, hire a PHP developer to enable particular features and guarantee seamless operation of your company website and applications.",
  },
  {
    icon: ShieldCheck,
    title: "PHP Site Maintenance",
    description:
      "For premium support and maintenance services to attain high-end performance and safeguard your website, hire a PHP developer.",
  },
  {
    icon: Cloud,
    title: "PHP Cloud Solutions",
    description:
      "Cloud services like PaaS, SaaS, IaaS, and other PHP backend solutions are no problem for BVA's domain-certified PHP web designers.",
  },
  {
    icon: Link2,
    title: "API Integration Development",
    description:
      "With a bespoke PHP API, BVA's PHP web development services assist in integrating your devices, platforms, and other apps.",
  },
  {
    icon: RefreshCw,
    title: "PHP upgrades and integrations",
    description:
      "Hire a PHP developer in India to enhance your current programs using PHP, whether it is on Python, .NET, Node.js, or any popular framework.",
  },
  {
    icon: ShoppingCart,
    title: "PHP eCommerce Development",
    description:
      "Hire committed PHP developers to assist you in creating websites and eCommerce businesses utilizing PHP and MySQL for a strong online presence.",
  },
];

const perkItems = [
  {
    title: "Certified Expertise",
    description:
      "Our team comprises certified PHP developers who are eager to share their experience and skills. Our team has years of experience so even if the job seems complicated, it will not be a problem.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Affordable Services",
    description:
      "Get yourself the best PHP developers at an affordable price. Depending on the customer needs and practically possible working hours, they can opt for full-time, part-time or hourly plans.",
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
      "Your project's needs, consumer base, organizational objectives, and expectations are taken under consideration by our experienced PHP developer.",
  },
  {
    title: "Strategic Planning",
    description:
      "To produce a thorough project plan, the PHP programmer closely examines your project and technical requirements.",
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
    name: "Sarah M.",
    role: "eCommerce Manager",
    location: "USA",
    quote:
      "Book Virtual Assistant made hiring PHP developers a breeze. The team quickly understood our needs and delivered exceptional results. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Startup Founder",
    location: "USA",
    quote:
      "The developer assigned to our project was professional, skilled, and committed. Our website was up and running ahead of schedule, exceeding our expectations.",
    rating: 5,
  },
  {
    name: "Rebecca S.",
    role: "Marketing Head",
    location: "USA",
    quote:
      "The flexible hiring model helped us stay within budget. The developer was knowledgeable, communicative, and a true asset to our project.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Why would I want to hire a full-time PHP coder instead of a freelancer?",
    answer:
      "Engaging a committed developer guarantees responsibility, consistency, and excellence. We screen our developers at Book Virtual Assistant to ensure they perform excellent work, adhering to industry best standards.",
  },
  {
    question: "Can I hire a developer for a short-term project?",
    answer:
      "To fit your particular requirements, we do indeed provide flexible recruiting models with short-term and project-based choices.",
  },
  {
    question: "How do you ensure the developer understands my project requirements?",
    answer:
      "We start with a thorough meeting to learn your technical requirements and business goals. Working directly with you, our developers guarantee consistent updates and open communication throughout the project.",
  },
  {
    question: "Do you provide post-project support?",
    answer:
      "Of course! We provide maintenance and support tools to keep your website working correctly, safe, and updated.",
  },
];

export default function HirePhpDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the Best PHP Developers in India",
              description: (
                <>
                  If you are considering a custom-built website, an e-commerce solution, or an interactive
                  web application, PHP experts can make a significant difference. Starting from a competitive
                  price, Book Virtual Assistant provides the best solutions to{" "}
                  <span className="font-semibold text-foreground">hire top PHP developers</span> for a great
                  experience and better results. Your website might be doing good, but just good isn't enough.
                  It's time to be exceptional with our PHP development services.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/php-banner-1.png",
              imageAlt: "Hire the Best PHP Developers in India",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "php-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover Why BVA's PHP Experts Matter",
              items: [
                {
                  value: "25+",
                  label: "Certified PHP Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "500+",
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
              title: "PHP Solutions for Accelerated Business Expansion",
              description: (
                <>
                  The decision to{" "}
                  <span className="font-semibold text-foreground">
                    hire a PHP developer in India
                  </span>{" "}
                  means accessing top-notch talent with the services that can deliver real results for your
                  business.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "With BVA, You Gain More Than a Developer",
              paragraphs: [
                <>
                  Take a step ahead of your competitors and{" "}
                  <span className="font-semibold text-foreground">hire Top PHP Developers</span> for
                  exceptional website solutions and benefits:
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our Proven 5-Step Approach to PHP Development",
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
              title: "PHP Development FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
