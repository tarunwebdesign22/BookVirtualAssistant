"use client";

import {
  Layers,
  Globe,
  Monitor,
  Smartphone,
  LayoutTemplate,
  Cloud,
  Brain,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Layers,
    title: "Full Stack Developers",
    description:
      "Hiring a resource with several talents spanning from front-end to back-end development benefits you, owing to our full-stack.NET developers.",
  },
  {
    icon: Globe,
    title: "Web Development Services",
    description:
      "Employ offshore .NET developers with expertise in web application development to create websites that will help you grow your company.",
  },
  {
    icon: Monitor,
    title: "Desktop Application",
    description:
      "Using the Windows Forms, UWP, and WPF platforms, our skilled .NET developers can create a wide range of Windows apps.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Design and develop mobile applications that capture user attention, improve the brand's image, and help customers reach you conveniently.",
  },
  {
    icon: LayoutTemplate,
    title: "CMS Development Services",
    description:
      "Easily update and organize your website with the specialized solutions that allow for the rapid delivery of any content.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Services",
    description:
      "Cloud solutions with security and scalability will definitely assist in bringing changes and enhancements to the company's processes.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "Utilize visual and audio processing, emotion detection, medical diagnostics, etc. with the help of BVA's dedicated.NET developers.",
  },
];

const perkItems = [
  {
    title: "Certified Expertise",
    description:
      "Our team comprises certified .NET developers who are eager to share their experience and skills. Our team has years of experience so even if the job seems complicated, it will not be a problem.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Affordable Services",
    description:
      "Get yourself the best .NET developers at an affordable price. Depending on the customer needs and practically possible working hours, they can opt for full-time, part-time or hourly plans.",
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
      "Your project's needs, consumer base, organizational objectives, and expectations are taken under consideration by our experienced .NET developer.",
  },
  {
    title: "Strategic Planning",
    description:
      "To produce a thorough project plan, the .NET programmer closely examines your project and technical requirements.",
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
    name: "John M.",
    role: "CEO, TechVista Solutions",
    location: "USA",
    quote:
      "Book Virtual Assistant provided us with an exceptional .NET developer who transformed our outdated system into a modern, cloud-based platform. The entire process was smooth, and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Linda S.",
    role: "Founder, EduSmart",
    location: "USA",
    quote:
      "We hired a .NET developer to build our e-learning platform, and the experience was fantastic. They understood our needs perfectly and delivered a secure and user-friendly application on time.",
    rating: 5,
  },
  {
    name: "Alex T.",
    role: "Operations Manager, FinancePro Inc.",
    location: "USA",
    quote:
      "The .NET developer we worked with demonstrated outstanding technical skills and problem-solving abilities. Our application runs flawlessly, and we've already seen improved efficiency.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What type of projects can your .NET developers handle?",
    answer:
      "Custom web apps, enterprise solutions, cloud-based systems, API connections, and legacy system transfer to .NET are just a few of the vast spectrum of tasks our developers specialize in.",
  },
  {
    question: "How do you ensure the quality of development?",
    answer:
      "Throughout the project, we communicate openly, test thoroughly, and adhere to industry standards. Every one of our developers also has pre-vetted experience doing excellent work.",
  },
  {
    question: "Can I hire a .NET developer on an hourly basis?",
    answer:
      "To fit your project needs, we do indeed provide flexible hiring policies, including hourly, part-time, and full-time contracts.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just let us know about your project needs; we will arrange for a qualified .NET developer to contact you. Our developer can start working right away once you have perfected the recruiting plan.",
  },
];

export default function HireDotNetDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Expert .NET Developers And Programmers",
              description: (
                <>
                  We at Book Virtual Assistant bridge the gap to make the process to{" "}
                  <span className="font-semibold text-foreground">hire developers in India</span> a smooth
                  experience. For a competitive price, efficient process, and customized website, our Dot Net
                  developers ensure our clients get the best solutions.
                  <br />
                  <br />
                  Is your business a startup in need of expert developers? Or, are you looking to scale your
                  operations with experienced professionals? Reach out to us for more details and let us help
                  you get to where you need to be.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/dotnet-banner-1.png",
              imageAlt: "Hire Expert .NET Developers And Programmers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "dot-net-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover Why BVA's .Net Developers Matter",
              items: [
                {
                  value: "10+",
                  label: "Dot Net Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "100+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "98%",
                  label: "Satisfied Global Clients",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "15+",
                  label: "Industry Experience",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "Advanced .NET Development Service Moving Your Business Forward",
              description: (
                <>
                  For custom software development services that meet your specific business requirements, you
                  need to{" "}
                  <span className="font-semibold text-foreground">
                    hire expert .NET developers and programmers
                  </span>{" "}
                  that save you time and resources.
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
                  <span className="font-semibold text-foreground">hire Top .NET Developers</span> for
                  exceptional website solutions and benefits:
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our Proven 5-Step Approach to .NET Development",
              steps: processSteps,
            },
            pricing: {
              badge: "Pricing",
              title: "Choose a Plan That Works Best for You",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Learn How They Maximized Savings and Efficiency",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: ".NET Development FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
