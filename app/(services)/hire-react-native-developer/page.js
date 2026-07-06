"use client";

import {
  Smartphone,
  Palette,
  RefreshCw,
  Plug,
  Bug,
  Wrench,
  Boxes,
  Zap,
  Puzzle,
  FlaskConical,
  GitBranch,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Smartphone,
    title: "Custom React Native App Development",
    description:
      "We create tailor-made applications that align with your business needs. Our developers take the time to understand your vision and transform it into a fully functional app.",
  },
  {
    icon: Palette,
    title: "React Native UI/UX Design",
    description:
      "User experience is key to an app's success. Our designers and developers collaborate to create visually appealing and user-friendly interfaces that ensure smooth navigation and engagement.",
  },
  {
    icon: RefreshCw,
    title: "App Migration & Upgrades",
    description:
      "Already have an existing app and want to switch to React Native? Our experts can efficiently migrate your app, improving performance and adding new features without disrupting your business operations.",
  },
  {
    icon: Plug,
    title: "Third-Party API Integration",
    description:
      "Enhance your app's capabilities by integrating third-party services such as payment gateways, social media logins, and analytics tools. Our developers ensure seamless API integration for a flawless user experience.",
  },
  {
    icon: Bug,
    title: "App Testing & Quality Assurance",
    description:
      "We follow rigorous testing processes to ensure your app is bug-free, performs well, and provides an exceptional user experience across all devices.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Our relationship doesn't end after the launch. We provide continuous support, updates, and troubleshooting to ensure your app remains efficient and up-to-date with the latest trends.",
  },
];

const perkItems = [
  {
    title: "Cost Savings",
    description:
      "Hiring an in-house team can be expensive. Our developers provide expert services at a fraction of the cost.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial",
  },
  {
    title: "Quick Turnaround",
    description: "We work efficiently to meet deadlines without compromising quality.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Expertise You Can Trust",
    description: "Our developers are highly skilled and bring years of experience to your project.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Focus on Core Business",
    description: "Let us handle your app development while you focus on growing your business.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From ideation to deployment, we provide a comprehensive approach to mobile app development.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Data Security",
  },
];

const processSteps = [
  {
    title: "Understanding Your Requirements",
    description:
      "We start by diving deep into your business goals, target audience, and feature requirements. Our React Native development team provides a clear roadmap, outlining costs, feasibility, and more.",
  },
  {
    title: "Designing the User Experience",
    description:
      "Our skilled UI/UX designers craft intuitive and visually appealing designs that enhance user engagement. A detailed prototype is created for your feedback, ensuring the final design aligns with your vision and business needs.",
  },
  {
    title: "Development and Integration",
    description:
      "Once the design is approved, our experienced React Native developers get to work. They build your app using the latest frameworks and best coding practices.",
  },
  {
    title: "Testing for Perfection",
    description:
      "Quality assurance is at the heart of our process. Our QA experts rigorously test the app across multiple devices and platforms to identify and resolve any bugs, ensuring flawless functionality.",
  },
  {
    title: "Deployment and Ongoing Support",
    description:
      "We provide continuous support, updates, and maintenance to keep your app secure, up-to-date, and running smoothly as your business grows.",
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

const strategyItems = [
  {
    icon: Boxes,
    title: "Modular Architecture",
    description:
      "We break down complex functionalities into reusable components, making development faster and easier to maintain.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Our developers focus on optimizing app speed and responsiveness through efficient coding practices and memory management techniques.",
  },
  {
    icon: Puzzle,
    title: "Third-Party Plugin Integration",
    description:
      "To enhance your app's functionality, we seamlessly integrate reliable third-party plugins without compromising security or performance.",
  },
  {
    icon: FlaskConical,
    title: "Continuous Testing",
    description:
      "We implement automated and manual testing at every stage to identify and fix potential issues early in the development process.",
  },
  {
    icon: GitBranch,
    title: "Agile Development",
    description:
      "Our team follows agile methodologies, ensuring flexibility, regular updates, and continuous improvements based on your feedback.",
  },
];

const testimonials = [
  {
    name: "Sarah J.",
    role: "New York",
    location: "USA",
    quote:
      "The team at Book Virtual Assistant delivered an outstanding mobile app for our business. The process was smooth, and they understood our vision perfectly.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "California",
    location: "USA",
    quote:
      "Hiring a React Native developer from BVA was the best decision for our startup. They provided excellent support and helped us launch on time!",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "Texas",
    location: "USA",
    quote:
      "I'm impressed by their professionalism and expertise. They transformed our ideas into a functional app that exceeded our expectations!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is React Native, and why should I use it?",
    answer:
      "React Native is a popular framework for building mobile apps that work on both iOS and Android using a single codebase. It offers cost savings, faster development, and a seamless user experience.",
  },
  {
    question: "How much does it cost to hire a React Native developer?",
    answer:
      "The cost depends on the complexity of your app and the developer's experience. Contact us for a customized quote.",
  },
  {
    question: "Will my app be scalable for future growth?",
    answer:
      "Absolutely! Our developers ensure your app is scalable and can grow alongside your business.",
  },
  {
    question: "How do you ensure the security of my app idea?",
    answer:
      "We prioritize confidentiality and sign non-disclosure agreements (NDAs) to protect your intellectual property.",
  },
];

export default function HireReactNativeDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the Best React Native Developers",
              description: (
                <>
                  For efficient cross-platform app development, you need to{" "}
                  <span className="font-semibold text-primary">
                    hire the best React Native development services company
                  </span>
                  . At Book Virtual Assistant, our experienced developers ensure that your mobile applications
                  showcase the best performance and user experience to your target audience. Our programmers
                  specialize in creating scalable, performance-driven, feature-rich apps fit for your company
                  objectives. Our staff is ready to produce outstanding outcomes, whether your demand is for a
                  new app from scratch or an improvement to an existing one.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/hire-the-best-react-native-developers-bn.png",
              imageAlt: "Hire the Best React Native Developers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "react-native-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why Businesses Trust Us: The Numbers Say It All",
              items: [
                {
                  value: "15+",
                  label: "React Native Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "50+",
                  label: "Projects Successfully Delivered",
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
              title: "Comprehensive React Native Development Services",
              description: (
                <>
                  When you{" "}
                  <span className="font-semibold text-foreground">hire the best react native developers</span>{" "}
                  from Book Virtual Assistant, you get access to a wide range of services that cover every aspect
                  of app development.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            perks: {
              badge: "Perks",
              title: "Additional Perks of Working with Us",
              description: (
                <>
                  Apart from providing highly skilled professionals to{" "}
                  <span className="font-semibold text-foreground">hire react native developer</span>, we offer
                  some exclusive benefits for your business success:
                </>
              ),
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Turn Your Vision into Reality with Our 5-Step Development Process",
              description: (
                <>
                  <span className="font-semibold text-foreground">
                    Hire Top React Native Developers Right Now!
                  </span>{" "}
                  We follow a process that makes it effective and efficient to ensure you get top-notch
                  results.
                </>
              ),
              steps: processSteps,
            },
            pricing: {
              badge: "Pricing",
              title: "Pricing Plans that Meet Your Needs",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "What Our Clients Say",
              description:
                "We take pride in the success of our clients. Here's what they have to say about our React Native development services:",
              items: testimonials,
            },
            reasons: {
              badge: "Strategies",
              title: "Proven Strategies Our React Native Developers Use for Successful App Development",
              description:
                "Our React Native developers follow a well-structured approach to ensure your app meets the highest standards.",
              columns: 3,
              items: strategyItems,
            },
            reasonsAfterTestimonials: true,
            faqs: {
              badge: "FAQ",
              title: "Frequently Asked Questions",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
