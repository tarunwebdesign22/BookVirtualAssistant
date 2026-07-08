"use client";

import {
  Code2,
  Globe,
  MonitorSmartphone,
  Smartphone,
  LayoutTemplate,
  Cloud,
  Brain,
  Users,
  Clock4,
  BadgeDollarSign,
  Handshake,
  Rocket,
  ClipboardList,
  ScanSearch,
  MonitorPlay,
  MapPin,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Code2,
    title: "Full Stack Developers",
    description:
      "Hiring a resource with several talents spanning from front-end to back-end development allows our full-stack .NET developers to provide you an edge.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Hire offshore.NET specialists with expertise in web application development to create websites that propel your company forward.",
  },
  {
    icon: MonitorSmartphone,
    title: "Desktop Application",
    description:
      "Our professional .NET developers are skilled in the creation of a wide variety of Windows apps using the Windows Forms, Windows Presentation Foundation, and Windows Presentation Foundation platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "BVA's ASP.net programmers are experts in Xamarin, which is a tool that helps reduce the amount of time needed for development by concurrently constructing hybrid mobile applications for both iOS and Android.",
  },
  {
    icon: LayoutTemplate,
    title: "CMS Development",
    description:
      "Our committed .NET engineers are well-versed in the most recent Content Management Systems (CMS), like Umbraco, DotNetNuke, and Kentico, among others.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "BVA's expert .NET programmers will provide you with the greatest cloud-based apps that they have created, and you will also gain hands-on experience with the Microsoft Azure Platform.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "To assist you in taking advantage of vision and voice processing, emotion recognition, medical diagnostics, and other capabilities, the dedicated.NET programmers at BVA are available.",
  },
];

const perkItems = [
  {
    title: "Experienced Professionals",
    description:
      "Our VAs are well-versed in real estate operations and tools like Zillow, MLS, and CRM systems.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Flexible Hiring Options",
    description:
      "Whether you need a full-time assistant or someone for a specific project, we've got you covered.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Get top-tier support without the overhead costs of hiring in-house staff.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Dedicated Support",
    description:
      "Enjoy 24/7 availability and personalized assistance tailored to your business.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
  {
    title: "Seamless Onboarding",
    description: "Our team ensures a smooth transition, allowing you to focus on your clients.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
];

const reasonItems = [
  {
    icon: ClipboardList,
    title: "Bid Management",
    description:
      "We organize incoming bids, track deadlines, and provide a detailed roadmap for the next steps in your property dealings.",
  },
  {
    icon: ScanSearch,
    title: "3D Touring",
    description:
      "Showcase properties in a visually stunning and interactive format to attract more buyers.",
  },
  {
    icon: MonitorPlay,
    title: "Website Creation and Maintenance",
    description:
      "Build a strong online presence with a professional website that highlights your listings and services.",
  },
  {
    icon: MapPin,
    title: "Google Listing Management",
    description:
      "Optimize your Google presence to ensure potential clients can easily find and connect with your business.",
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
      "We'd like to understand your precise requirements for a real estate expert so that we may align our strategy with your business needs.",
  },
  {
    title: "Schedule A Meeting",
    description:
      "Let us know what you need, and we will guide you about the sound strategies and plans.",
  },
  {
    title: "Get Started",
    description:
      "Once you've made up your mind, it's time to hire your real estate specialist and begin enjoying the benefits you deserve.",
  },
];

const testimonials = [
  {
    name: "Mark T.",
    role: "Real Estate Agent, California",
    location: "USA",
    quote:
      "Hiring a real estate VA from Book Virtual Assistant was one of the best decisions I've made for my business. They handle my listings, schedule, and lead follow-ups so efficiently that I now have more time to focus on closing deals. Their professionalism and attention to detail are unmatched!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Property Investor, Florida",
    location: "USA",
    quote:
      "I was skeptical about hiring a virtual assistant at first, but the team at Book Virtual Assistant proved me wrong. My VA not only manages my market research and CMAs but also keeps my social media updated. Their services are reliable, cost-effective, and have significantly improved my workflow.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Real Estate Broker, New York",
    location: "USA",
    quote:
      "The transaction coordination services provided by my VA are a game-changer. Every deadline is tracked, and I don't have to worry about missing important details. The daily updates and transparent communication make working with Book Virtual Assistant a seamless experience. Highly recommend them!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What tasks can a real estate VA handle?",
    answer:
      "A real estate VA can manage property listings, lead generation, market research, administrative tasks, and social media, among other responsibilities.",
  },
  {
    question: "How much does it cost to hire a real estate VA?",
    answer:
      "Hiring a VA is cost-effective compared to in-house staff. Book Virtual Assistant offers competitive pricing with flexible plans to suit your needs.",
  },
  {
    question: "Can a VA help with real estate transactions?",
    answer:
      "Yes! Our VAs are trained to coordinate transactions, track deadlines, and manage documents to ensure smooth operations.",
  },
  {
    question: "How do I monitor my VA's performance?",
    answer:
      "We provide daily updates, task tracking, and detailed reports to help you monitor your VA's performance and ensure accountability.",
  },
];

export default function HireRealEstateVaPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the Best Real Estate Virtual Assistants",
              description: (
                <>
                  Reduce the workload of your daily tasks by outsourcing your real estate business's virtual
                  assistance from Book Virtual Assistant. Whether it is listing management or client
                  interactions, our specialists keep your operation smooth so you can focus on getting the
                  sales.{" "}
                  <span className="font-semibold text-foreground">
                    Hire expert real estate virtual assistants
                  </span>{" "}
                  for a dependable va as it is the effective approach to growing a real estate company in the
                  current world.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/hire-real-estate-va-bn.png",
              imageAlt: "Hire the Best Real Estate Virtual Assistants",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "real-estate-va-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover the Numbers That Set Us Apart",
              items: [
                {
                  value: "10+",
                  label: "Real Estate Virtual Assistants",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "100+",
                  label: "Satisfied Clients Worldwide",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "150+",
                  label: "Daily Queries Resolved",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "8+",
                  label: "Years of Proven Expertise",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "Hire Expert Real Estate Virtual Assistants Services",
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Why Book Virtual Assistant Stands Out",
              paragraphs: [
                <>
                  Choosing the right VA provider can make all the difference. Here's why Book Virtual
                  Assistant is the top choice for{" "}
                  <span className="font-semibold text-foreground">
                    dedicated Real Estate Virtual Assistants:
                  </span>
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            reasons: {
              badge: "Our Services",
              title: "Why Outsource Your Real Estate Work to BVA?",
              description:
                "At Book Virtual Assistant, our dedicated real estate virtual assistants cover all aspects of real estate support to help your business thrive.",
              columns: 2,
              items: reasonItems,
            },
            pricing: {
              badge: "Pricing",
              title: "Pricing Plans that Meet Your Needs",
              plans: pricingPlans,
            },
            howToHire: {
              badge: "Get Started",
              title: "Hiring Real Estate VA Made Simple",
              ctaLabel: "Hire Real Estate VA",
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
              title: "Common Questions About Real Estate VA Services",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
