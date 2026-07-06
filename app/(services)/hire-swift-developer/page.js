"use client";

import {
  Smartphone,
  Cpu,
  Lightbulb,
  Tablet,
  PencilRuler,
  Tv,
  Watch,
  MonitorCog,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Smartphone,
    title: "Custom iOS App Development",
    description:
      "If you want to build highly customized Swift iOS applications, you need to hire specialist Swift developers in India. Using essential technical methods, these applications concentrate on the requirements of your company as well as your long-term objectives for achievement.",
  },
  {
    icon: Cpu,
    title: "IoT App Development",
    description:
      "Swift professionals at BVA are skilled in dealing with Internet of Things frameworks and provide excellent Internet of Things app development services to enable you to remotely control your Internet of Things-based devices. With the use of AI and ML, they will aid you in customizing your user experiences by providing you with expected insights.",
  },
  {
    icon: Lightbulb,
    title: "Swift iOS App Consultation",
    description:
      "From concept to execution, your remote offshore Swift engineers will support you at every level alongside our development team. They will assist you in finding important answers for issues involving the development of your iOS app.",
  },
  {
    icon: Tablet,
    title: "iPad App Development",
    description:
      "Developers of BVAs Swift apps have experience creating apps for all iPhone devices as well as iPad. Modern technologies like Xcode let developers create enterprise-grade, pixel-perfect, safe, fast-deployable iPad apps.",
  },
  {
    icon: PencilRuler,
    title: "iOS App UI/UX Designing",
    description:
      "Hire UI/UX Designer in India utilizing Apple Human Interface Guidelines to create aesthetically pleasing and very interesting iOS Apps. On Apple's App Store, these apps stand out for a unique brand identification.",
  },
  {
    icon: Tv,
    title: "Apple tvOS App Development",
    description:
      "Our BVA Swift developers are experts in designing gorgeous apps and exciting games for Apple TV. They can also design stunning apps perfect for streaming video using predetermined layouts and JavaScript APIs.",
  },
  {
    icon: Watch,
    title: "Apple watchOS App Development",
    description:
      "New APIs and the SwiftUI framework let BVA's Swift developers create native, stand-alone watchOS apps. Our iOS expertise will enable you to get strong iOS apps catered to your tastes.",
  },
  {
    icon: MonitorCog,
    title: "MacOS App Development",
    description:
      "The BVA iOS developers have great knowledge in producing programs for several Mac OS. They can create your perfect OS and apps, then publish them to the Mac App Store from having built a range of outstanding ones before.",
  },
];

const perkItems = [
  {
    title: "Free Trial",
    description:
      "Test our swift developers before committing, ensuring you're completely satisfied.",
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
    title: "Understanding Your Requirements",
    description:
      "As an offshore development company, we take the time to understand your unique needs, ensuring the final iOS app aligns perfectly with your business objectives.",
  },
  {
    title: "Crafting the Wireframe and UI/UX Design",
    description:
      "Next, we focus on designing a user-centric interface. Our experienced UI/UX designers create a detailed wireframe and an interactive prototype, giving you a clear view of the app's flow and functionality.",
  },
  {
    title: "Architecture, Design & Development",
    description:
      "Our team of dedicated Swift developers uses industry-leading techniques to build a robust app architecture and database design. By following best practices in custom app development, we write clean, efficient code that ensures high functionality and performance.",
  },
  {
    title: "Rigorous Testing and Quality Assurance",
    description:
      "Before your app goes live, we leave no room for error. Our skilled testers and QA specialists conduct thorough testing to ensure the app is free of bugs, performs flawlessly, and provides a seamless experience.",
  },
  {
    title: "Launch and Deployment",
    description:
      "Once your app is polished and ready, our Swift developers prepare for its deployment. Following your launch plan, we ensure the app is made live efficiently, ready for your users to explore and enjoy.",
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
    role: "Los Angeles",
    location: "USA",
    quote:
      "I hired a Swift developer from Book Virtual Assistant, and it was the best decision for our app development. Their professionalism and technical expertise exceeded our expectations!",
    rating: 5,
  },
  {
    name: "Mark P.",
    role: "New York",
    location: "USA",
    quote:
      "Our app migration to Swift was seamless, thanks to the expert we hired through BVA. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Emily T.",
    role: "Chicago",
    location: "USA",
    quote:
      "Working with BVA's Swift developers was a game-changer. They delivered our app on time and with exceptional quality.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What can a Swift developer do for my business?",
    answer:
      "Swift developers specialize in creating iOS apps, integrating APIs, migrating apps to Swift, and maintaining app performance. They can bring your app idea to life with precision and innovation.",
  },
  {
    question: "How much does it cost to hire a Swift developer?",
    answer:
      "Costs vary depending on the scope and complexity of your project. Contact us for a custom quote tailored to your needs.",
  },
  {
    question: "Are your Swift developers experienced?",
    answer:
      "Absolutely! All our Swift developers are thoroughly vetted and have proven expertise in creating high-quality apps.",
  },
  {
    question: "Can I hire a Swift developer for a short-term project?",
    answer:
      "Yes! We offer flexible hiring options, whether you need a developer for a one-time project or long-term support.",
  },
];

export default function HireSwiftDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Best Swift Developers For Hire",
              description: (
                <>
                  Are you searching for{" "}
                  <span className="font-semibold text-primary">
                    dedicated Swift developers for hire
                  </span>
                  ? Book Virtual Assistant, an India-based leading outsourcing company, can help you bring
                  the best of innovation and expertise to your iOS app development. We introduce you to
                  highly skilled Swift developers that help you to build powerful and relevant applications
                  for your business. From the simple app that only serves as a complement to a website to
                  comprehensive software for a large business or organization, our Swift developers always
                  deliver with efficiency and design in mind.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/best-swift-developers-for-hire-bn.png",
              imageAlt: "Best Swift Developers For Hire",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "swift-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why Businesses Trust Us: The Numbers Say It All",
              items: [
                {
                  value: "15+",
                  label: "Experienced Swift Developers",
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
              title: "Transform Ideas with Expert Swift Developers",
              description: (
                <>
                  Our Swift App Development Services are a clear example of how a smooth and effective
                  development process can be. Thus,{" "}
                  <span className="font-semibold text-foreground">
                    hire Dedicated Swift App Developers
                  </span>{" "}
                  from us and ensure outstanding quality and functionality for your iOS apps.
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
                    dedicated swift developers for hire
                  </span>
                  , we offer some exclusive benefits for your business success:
                </>
              ),
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our 5-Step Swift App Development Process",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">
                    Hire Swift App Developers
                  </span>{" "}
                  service simplifies the entire app development process, ensuring efficiency and excellence at
                  every stage of the journey.
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
              title: "Success Stories from Happy Clients",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Swift Developers",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
