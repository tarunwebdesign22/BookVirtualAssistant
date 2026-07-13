"use client";

import {
  Globe,
  Palette,
  PenTool,
  Puzzle,
  ArrowRightLeft,
  Gauge,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Are you a budding start-up? No worries, as companies of all sizes can benefit from our services. Thus, we can assist you develop a website that perfectly aligns with your vision and goals.",
  },
  {
    icon: Palette,
    title: "Theme Development",
    description:
      "For a more personalized and effective connection with your target audience, our WordPress experts may build custom themes or excellent creative themes for your company website.",
  },
  {
    icon: PenTool,
    title: "Custom Theme Designing",
    description:
      "Does your company website require a bespoke theme? Custom themes and interesting templates created in several formats by BVA's knowledgeable WordPress designers can help to make your website unique.",
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description:
      "Employ BVA's WordPress plugin developers to create affordable, personalized plug-ins with seamless cross-platform capabilities for any kind of use case.",
  },
  {
    icon: ArrowRightLeft,
    title: "Upgrade & Migration",
    description:
      "Ready to switch from your present CMS to WordPress? Get in touch with WordPress developers online to make the upgrading and migration process a breeze.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Invest in a team of WordPress experts that understand the significance of site speed and optimize all aspects of the platform-including but not limited to code, media, files, databases, plugins, etc.",
  },
  {
    icon: FlaskConical,
    title: "Website Testing Solutions",
    description:
      "Testing has become a crucial ability for WordPress developers these days. End-to-end testing is carried out by BVA's committed WordPress programmers to provide a website free of errors.",
  },
  {
    icon: ShieldCheck,
    title: "Support & Maintenance",
    description:
      "Employ our WordPress specialists to handle all of your support and upkeep needs, including content updates, website optimization, and data backups.",
  },
];

const perkItems = [
  {
    title: "Certified Expertise",
    description:
      "Our team comprises certified WordPress developers who are eager to share their experience and skills. Our team has years of experience so even if the job seems complicated, it will not be a problem.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Affordable Services",
    description:
      "Get yourself the best WordPress developers at an affordable price. Depending on the customer needs and practically possible working hours, they can opt for full-time, part-time or hourly plans.",
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
    title: "Project Understanding",
    description:
      "Your specialized WordPress developer spends the necessary amount of time studying your project's purpose, target audience, and company requirements to reduce the risk of misunderstandings.",
  },
  {
    title: "Strategic Planning",
    description:
      "After reviewing the technical aspects, the WordPress programmer develops a roadmap that is essential for the project's success.",
  },
  {
    title: "Design Blueprint",
    description:
      "Depending on the set goals, we create a detailed wireframe and design architecture to capture the overall look and feel of the project.",
  },
  {
    title: "Development Phase",
    description:
      "The development process occurs after the design blueprint is done, which simply means making your website or blog functional with all relevant features incorporated.",
  },
  {
    title: "Quality Assurance & Launch",
    description:
      "This helps in identifying any flaws and guarantees that there are no bugs in the website before its launch.",
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
    name: "Sara Thompson",
    role: "Founder of Thompson Consulting",
    location: "USA",
    quote:
      "BVA's WordPress developers truly understood our business needs and delivered exactly what we wanted. Our site is faster, more secure, and optimized for SEO, leading to a significant increase in our online traffic. Highly recommend it!",
    rating: 5,
  },
  {
    name: "Mark Williams",
    role: "CEO of Fresh Goods Co.",
    location: "USA",
    quote:
      "Working with Book Virtual Assistant was a great experience. We are already seeing an increase in sales, thanks to their expertise in WordPress and SEO.",
    rating: 5,
  },
  {
    name: "Emily Garcia",
    role: "Marketing Director at E-Com Solutions",
    location: "USA",
    quote:
      "We hired Book Virtual Assistant for ongoing website maintenance and development. They've been incredibly responsive and have always kept our site running smoothly.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Why should I pay a WordPress developer rather than doing it myself?",
    answer:
      "Although constructing a site that is both professional and useful calls for skill, WordPress is user-friendly. Without technical understanding, optimizing your site for performance, SEO, security, and mobile friendliness can be challenging, but a WordPress developer ensures this.",
  },
  {
    question: "Hiring a WordPress developer will set you back, right?",
    answer:
      "Hiring a WordPress developer would cost differently depending on the extent of your project. While sophisticated, specialized development projects will demand more money, basic website designs might be less expensive. At Book Virtual Assistant, our affordable prices reflect your particular requirements.",
  },
  {
    question: "Developing a WordPress website takes what length of time?",
    answer:
      "Factors like design intricacy, specific functionality, and content needs determine the chronology for creating a WordPress website. However, a website can take anywhere from a few weeks (1 or 2) to a couple of months.",
  },
  {
    question: "Once my WordPress site is online, what continuous help is available?",
    answer:
      "For maintenance, security upgrades, backups, and performance optimization, we provide continuous assistance. Our staff will make sure your site keeps working long after launch.",
  },
];

export default function HireWordpressDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Top WordPress Developers",
              description: (
                <>
                  We believe that when it comes to Internet presence, a website is the primary and the most
                  important element. Which is why we recommend not settling for anything less than the best.
                  Opt for Book Virtual Assistant's{" "}
                  <span className="font-semibold text-foreground">hire WordPress developer</span> service and
                  get a dedicated WordPress developer committed to bringing your vision to life.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/wordpress-banner-1.png",
              imageAlt: "Hire Top WordPress Developers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "wordpress-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover Why BVA's WordPress Experts Matter",
              items: [
                {
                  value: "30+",
                  label: "Wordpress Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "4000+",
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
              title: "Accelerate Your Growth with Our WordPress Services",
              description: (
                <>
                  When you choose to{" "}
                  <span className="font-semibold text-foreground">
                    hire a WordPress developer in India
                  </span>
                  , you get the advantage of skilled Indian developers offering you the following WordPress
                  solutions:
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "We Offer More Than Development Services",
              image: "/images/services/wordpress-banner-1.png",
              imageAlt: "WordPress developers building websites",
              paragraphs: [
                <>
                  Take a step ahead of your competitors and{" "}
                  <span className="font-semibold text-foreground">
                    hire Top WordPress Developers
                  </span>{" "}
                  for exceptional website solutions and long-term benefits:
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "BVA's 5-Step WordPress Process for Success",
              steps: processSteps,
            },
            pricing: {
              badge: "Pricing",
              title: "Choose a Plan That Works Best for You",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Why We the Are Best Choice for Our Clients",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Hire WordPress Developer: Find Answers to Your FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
