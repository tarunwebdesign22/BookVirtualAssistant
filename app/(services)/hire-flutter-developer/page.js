"use client";

import {
  Smartphone,
  AppWindow,
  Palette,
  MonitorSmartphone,
  TabletSmartphone,
  Globe,
  Server,
  Rocket,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Smartphone,
    title: "Mobile App Development Services",
    description:
      "Our Flutter app developers in India are dedicated to creating the most efficient code in the shortest amount of time when it comes to developing scalable, secure, and visually appealing web and mobile applications that can operate on multiple platforms, such as iOS and Android.",
  },
  {
    icon: AppWindow,
    title: "Custom Flutter App Development",
    description:
      "Being a top Flutter app development company in India, BVA gives you flexibility for native app-like performance and lets you easily deploy your fully developed Flutter app across several platforms, including iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Development Services",
    description:
      "Our Flutter UI/UX designers from BVA exceed the competition in terms of UI and UX since they have outstanding expertise creating aesthetically beautiful and intriguing mobile app strategies.",
  },
  {
    icon: MonitorSmartphone,
    title: "iOS App Development",
    description:
      "Using the Dart programming language, BVA's Flutter mobile app developers produce high-performance, simple-to-maintain iOS apps. This increases internet visibility and allows your target audience's reach to be expanded.",
  },
  {
    icon: TabletSmartphone,
    title: "Android App Development",
    description:
      "Use BVA's Flutter Android development professionals in India who are skilled in creating, testing, and releasing natively developed Android apps with expanded features, providing a quicker time to market.",
  },
  {
    icon: Globe,
    title: "Web app development",
    description:
      "Our Google-certified Flutter team is skilled in creating engaging, beautiful, and adaptable websites. These features will enable you to help reinvent your company and have a competitive edge over others.",
  },
  {
    icon: Server,
    title: "Server-side API development",
    description:
      "Virtual Assistant's remote Flutter app developers are masters in creating very tailored server-side APIs. Our Flutter developers provide APIs like these to give your application seamless capability.",
  },
  {
    icon: Rocket,
    title: "MVP and Fast Prototyping",
    description:
      "Use our MVP and prototype tools to help our BVA's Flutter developers forecast the ultimate look of your project and its feasibility. Using this approach can help you significantly lighten your responsibilities.",
  },
];

const perkItems = [
  {
    title: "Free Trial",
    description:
      "Test our Flutter developers before committing, ensuring you're completely satisfied.",
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
      "Hire part-time, full-time, or on a project basis-whatever suits your needs.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Flexible Hiring Models",
  },
];

const processSteps = [
  {
    title: "Project Analysis",
    description:
      "Engage the services of a dedicated Flutter app developer from India who is familiar with your requirements and objectives in order to determine the scope of the project.",
  },
  {
    title: "Planning & Preparation",
    description:
      "For the purpose of developing your application in the most efficient method possible, your remote Flutter developer from India will finish all of the technical documentation that pertains to sprints, releases, work breakdown structures (WBSs), project plans, and scrums.",
  },
  {
    title: "Design & Prototype",
    description:
      "An offshore Flutter user interface and user experience designer from India will complete the design and develop a prototype that is fully functioning before sending it to you for approval.",
  },
  {
    title: "Development",
    description:
      "The skilled Flutter programmers at BVA will build up the backend architecture and execute frontend integration in order to give your completed app its final form.",
  },
  {
    title: "QA Testing",
    description:
      "An extensive testing process is carried out by your team of Flutter app developers in order to offer an app that is optimized, devoid of bugs, and operates without any interruptions.",
  },
  {
    title: "Deployment",
    description:
      "Following the completion of our quality assurance testing, we will put the application live so that you can immediately begin reaping the benefits it offers.",
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
    name: "Emily Carter",
    role: "CEO",
    location: "TechWave Solutions",
    quote:
      "Our app idea was stuck until we hired Flutter developers from BVA. Their expertise turned our concept into a functional app loved by users.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Business Owner",
    location: "Delhi",
    quote:
      "The BVA team built an app for us in record time without compromising quality. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    location: "New York",
    quote:
      "Our MVP was delivered on time and worked flawlessly across platforms. Great team to work with!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How does Flutter benefit app development?",
    answer:
      "Flutter allows you to build apps for multiple platforms using a single codebase, reducing development time and costs. Our developers ensure you get a top-quality app that meets all your business needs.",
  },
  {
    question: "Can I see progress during the development process?",
    answer:
      "Absolutely! We provide regular updates and demo versions during each development phase to ensure your feedback is incorporated.",
  },
  {
    question: "How long does it take to develop an app with Flutter?",
    answer:
      "The timeline depends on the complexity of your app. For a simple app, it may take 2-3 months, while more complex projects could take longer.",
  },
  {
    question: "Can I hire Flutter developers part-time?",
    answer:
      "Yes! We offer flexible hiring models, allowing you to hire developers on a part-time, full-time, or project basis as per your requirements.",
  },
];

export default function HireFlutterDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Dedicated Flutter App Developers for Hire",
              description: (
                <>
                  Flutter has emerged as a top choice for building feature-rich, high-performing apps for both
                  Android and iOS. By choosing{" "}
                  <span className="font-semibold text-primary">
                    best freelance flutter developers for hire
                  </span>{" "}
                  from Book Virtual Assistant, you ensure that your app idea turns into a robust, scalable
                  reality while staying budget-friendly.
                  <br />
                  <br />
                  Right from the design architecture of the app to the final stage of deploying the app into
                  the market, our team makes sure everything goes through a positive scrutiny. From the
                  creation of a basic MVP for a startup to complex applications for a company that requires
                  additional programs, we shall assist you.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/dedicated-flutter-app-developers-for-hire-bn.png",
              imageAlt: "Dedicated Flutter App Developers for Hire",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "flutter-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why Businesses Trust Us: The Numbers Say It All",
              items: [
                {
                  value: "15+",
                  label: "Experienced Flutter Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "200+",
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
              title: "Why Hire Flutter Developers from Book Virtual Assistant",
              image: "/images/services/dedicated-flutter-app-developers-for-hire-bn.png",
              imageAlt: "Dedicated Flutter App Developers for Hire",
              paragraphs: [
                <>
                  Flutter has emerged as a top choice for building feature-rich, high-performing apps for both
                  Android and iOS. By choosing best freelance Flutter developers from Book Virtual Assistant,
                  you ensure that your app idea turns into a robust, scalable reality while staying
                  budget-friendly.
                </>,
                <>
                  Right from the design architecture of the app to the final stage of deploying the app into
                  the market, our team makes sure everything goes through positive scrutiny—from a basic MVP
                  for a startup to complex applications for growing companies.
                </>,
              ],
            },
            services: {
              badge: "Our Services",
              title: "Build Scalable Mobile & Web Apps with Flutter Solutions",
              description: (
                <>
                  For innovative and scalable app solutions,{" "}
                  <span className="font-semibold text-foreground">
                    hire top Flutter app development services
                  </span>{" "}
                  that will help your business grow in delivering exceptional user experiences.
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
                  Apart from{" "}
                  <span className="font-semibold text-foreground">
                    dedicated flutter app developers for hire
                  </span>
                  , we offer some exclusive benefits for your business success:
                </>
              ),
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "BVA'S 6-step Flutter App Development Process for High-quality Apps",
              steps: processSteps,
            },
            pricing: {
              badge: "Pricing",
              title: "Pricing Plans that Meet Your Needs",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Customer Success Stories",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Hire Flutter Developer: FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
