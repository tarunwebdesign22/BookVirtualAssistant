"use client";

import {
  Layers,
  Code2,
  Globe,
  Smartphone,
  AppWindow,
  Phone,
  Box,
  Building2,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Layers,
    title: "Hybrid App Development",
    description:
      "Hire hybrid app developers in India from Book Virtual Assistants, who are capable of creating your company's app and integrating aspects of online and mobile apps. Our hybrid app development company can build scalable, feature-packed and safe apps suited to your business's needs. We deliver apps that perform efficiently across various platforms and ensure quicker time-to-market (TTM) to develop and launch your apps.",
  },
  {
    icon: Code2,
    title: "React Native Development",
    description:
      "BVA's offshore hybrid app development company in India can effectively create hybrid apps that won't compromise your users' experience. Our hybrid app development services use React Native's cross platform framework to build native components to create high quality hybrid apps. This allows us to build apps that give performance similar to native apps without compromising on user experience.",
  },
  {
    icon: Globe,
    title: "Ionic App Development",
    description:
      "Our hybrid app developers in India are proficient in using the Ionic framework with technologies including CSS, HTML5, AngularJS, ReactJS, etc. to create a cross-platform application. These apps are customized to meet your specific needs and offer a visually appealing interface that runs smoothly across all devices. When you hire hybrid app developer professionals from us, you're choosing versatility and performance.",
  },
  {
    icon: Smartphone,
    title: "Xamarin App Development",
    description:
      "Book Virtual Assistant's offshore hybrid app development company in India is highly skilled in using the Xamarin framework to create scalable, secure, and user-friendly hybrid mobile apps. With Xamarin, we develop apps that run smoothly across various devices, operating systems and platforms, offering high performance and smooth functions. Hire hybrid app developer specialists who know how to leverage Xamarin's full capabilities for your project's success.",
  },
  {
    icon: AppWindow,
    title: "Flutter Development",
    description:
      "Our hybrid app development services can create scalable and user-friendly applications that drive maximum conversions. We use the Flutter framework to create natively built apps from a single codebase to ensure consistency across many platforms. When you hire hybrid app developer teams with BVA, you will get visually stunning and high performing apps that enhance user engagement and support your business goals.",
  },
  {
    icon: Phone,
    title: "PhoneGap Development",
    description:
      "With Book Virtual Assistant's expert hybrid app development company, you may create a highly complex hybrid mobile application that employs the PhoneGap framework programmed with technologies including CSS, HTML, and JavaScript. We deliver apps that integrate web technologies with native capabilities to ensure a good user experience across various devices.",
  },
  {
    icon: Box,
    title: "Titanium App Development",
    description:
      "Our hybrid app developers have expertise in creating cross-platform native apps by using the Titanium SDK, based on JavaScript, and providing access to a range of native UI and non-visual components. When you hire hybrid app developer teams from BVA, we will ensure that your app is user-friendly and works across all platforms with high performance.",
  },
  {
    icon: Building2,
    title: "Enterprise Hybrid App Development",
    description:
      "For both iOS and Android environments, our hybrid app development company can create scalable, responsive, native-like apps. We are experienced at creating business apps to meet demanding workloads and are capable of supporting your operational needs.",
  },
];

const perkItems = [
  {
    title: "Free Trial",
    description:
      "Test our hybrid developers before committing, ensuring you're completely satisfied.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial",
  },
  {
    title: "Dedicated Expert",
    description: "Work with a developer solely focused on your project.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Dedicated Expert",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Eliminate overhead costs like office space, software, and recruitment.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Cost-Effective Solutions",
  },
  {
    title: "Flexible Hiring Models",
    description:
      "Hire part-time, full-time, or on a project basis—whatever suits your needs.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Flexible Hiring Models",
  },
];

const processSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Analyzing your company app needs, BVA's hybrid app developer will provide complete transparency on development cost, feasibility, and TAT.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our knowledgeable hybrid app designers will draft a UI/UX design plan and produce a prototype for your review and approval.",
  },
  {
    title: "App Development",
    description:
      "With your permission, your offshore hybrid app developer will begin the app development process, applying the necessary framework and/or language.",
  },
  {
    title: "App Module Testing",
    description:
      "Your hybrid mobile app developer and tester will load and bug test using a custom testing suite following system integration.",
  },
  {
    title: "deployment and support",
    description:
      "After that, the remote hybrid app developers at BVA will implement the app in the user's surroundings and provide continuous assistance to maintain the security and upgrade your app.",
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
    name: "Sarah L.",
    role: "San Francisco",
    location: "USA",
    quote:
      "Book Virtual Assistant's hybrid developers delivered an app that exceeded our expectations. The team was professional, efficient, and easy to work with.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Chicago",
    location: "USA",
    quote:
      "We hired a hybrid developer for our eCommerce app, and the results were outstanding. The app works perfectly on both iOS and Android.",
    rating: 5,
  },
  {
    name: "Emma J.",
    role: "New York",
    location: "USA",
    quote:
      "The developer we hired through Book Virtual Assistant was knowledgeable and quick to adapt to our needs.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is a hybrid developer?",
    answer:
      "A hybrid developer specializes in creating apps that run on multiple platforms using a single codebase. They use frameworks like React Native, Flutter, and Ionic to ensure compatibility across platforms.",
  },
  {
    question: "How secure are your hybrid development services?",
    answer:
      "We prioritize security by following strict protocols to safeguard your app and data throughout the development process.",
  },
  {
    question: "Can I hire a developer for a short-term project?",
    answer:
      "Yes! Whether you need a developer for a few weeks or an ongoing project, we offer flexible hiring options.",
  },
  {
    question: "What is the cost of hiring a hybrid developer?",
    answer:
      "Our pricing is competitive and depends on your specific project needs. Contact us for a customized quote.",
  },
];

export default function HireHybridDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Dedicated Hybrid Developers",
              description: (
                <>
                  Have you ever thought about the benefits of hiring hybrid{" "}
                  <span className="font-semibold text-primary">app development services</span> to expand
                  your business? Book Virtual Assistant (BVA) is India&apos;s leading hybrid app development
                  company. We will ensure that you connect with the best{" "}
                  <span className="font-semibold text-primary">hybrid app developers</span> who specialize
                  in creating apps that offer the best performance for users who are on smartphones, tablets
                  and desktops.
                  <br />
                  <br />
                  When you{" "}
                  <span className="font-semibold text-primary">hire hybrid app developer</span> team from
                  Book Virtual Assistant, you will ensure that your app is optimized for every platform
                  through our expert{" "}
                  <span className="font-semibold text-primary">hybrid app development services</span>,
                  whether it&apos;s iOS, Android, or a website. We use advanced technologies and clever
                  strategies to help businesses achieve their goals with apps that are versatile, efficient
                  and give a smooth user experience.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/hire-dedicated-hybrid-developers-bn.png",
              imageAlt: "Hire Dedicated Hybrid Developers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "hybrid-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why Businesses Trust Us: The Numbers Say It All",
              items: [
                {
                  value: "10+",
                  label: "Hybrid App Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "100+",
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
            intro: {
              title: "Why Hire Hybrid App Developers from Book Virtual Assistant",
              image: "/images/services/hire-dedicated-hybrid-developers-bn.png",
              imageAlt: "Hire Dedicated Hybrid Developers",
              paragraphs: [
                <>
                  Connect with hybrid app developers who specialize in apps that perform well on smartphones,
                  tablets, and desktops. Our team helps you build versatile experiences across iOS, Android,
                  and the web.
                </>,
                <>
                  When you hire a hybrid app developer team from Book Virtual Assistant, your app is optimized
                  for every platform with advanced technologies and strategies that deliver a smooth, efficient
                  user experience.
                </>,
              ],
            },
            services: {
              badge: "Our Services",
              title: "Comprehensive Hybrid App Development for Multi-Device Success",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">hybrid app development service</span> will
                  give businesses excellent solutions to bring innovation to their digital platforms. As a
                  leading{" "}
                  <span className="font-semibold text-foreground">hybrid app development company</span>, our
                  developers are skilled at creating apps that perform optimally and reduce development time
                  and costs. Our focus is on cross-platform compatibility to ensure that your business
                  reaches a broader market without lowering quality or experience.
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
                  <span className="font-semibold text-foreground">
                    hire dedicated hybrid developers
                  </span>
                  , we offer some exclusive benefits for your business success:
                </>
              ),
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Bring Your Idea to Life with Our 5-Step App Process",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">
                    best freelance hybrid app developer
                  </span>{" "}
                  services follow a process that makes it seamless and efficient to ensure you get top-notch
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
              title: "Success Stories from Our Clients",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "FAQs About Hiring Hybrid Developers",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
