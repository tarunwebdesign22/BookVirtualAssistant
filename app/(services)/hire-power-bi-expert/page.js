"use client";

import {
  Database,
  LayoutDashboard,
  Activity,
  TrendingUp,
  AppWindow,
  RefreshCw,
  Smartphone,
  ArrowRightLeft,
  GraduationCap,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Database,
    title: "Data Integration and Preparation",
    description:
      "Seamlessly connect disparate data sources, including Excel, SQL databases, cloud applications, and more. Our experts ensure your data is clean, consistent, and ready for analysis.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboard Development",
    description:
      "We design intuitive dashboards tailored to your specific KPIs and business objectives. Whether you're tracking sales, marketing performance, or operational efficiency, our dashboards bring clarity to complex datasets.",
  },
  {
    icon: Activity,
    title: "Real-Time Data Reporting",
    description:
      "Access up-to-date insights with live data reporting. Our specialists configure Power BI to update automatically, ensuring you're always working with the latest information.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Data Analytics",
    description:
      "Go beyond standard reporting with predictive analytics and trend analysis. Our Power BI experts use advanced tools to help you forecast future outcomes and stay ahead of the competition.",
  },
  {
    icon: AppWindow,
    title: "Power BI Embedded Solutions",
    description:
      "Integrate Power BI with your custom applications using embedded solutions. This allows your internal teams and clients to access insights directly within the tools they already use.",
  },
  {
    icon: RefreshCw,
    title: "Power BI Report Automation",
    description:
      "Save time and effort with automated reporting solutions. Our experts set up workflows that generate periodic reports, reducing manual intervention and ensuring timely insights.",
  },
  {
    icon: Smartphone,
    title: "Power BI Mobile Optimization",
    description:
      "Access your dashboards and reports on the go with mobile-optimized solutions. Our team ensures your data visualizations look great and function seamlessly across devices.",
  },
  {
    icon: ArrowRightLeft,
    title: "Power BI Migration Services",
    description:
      "Switching to Power BI from another platform? Our migration services ensure a smooth transition, preserving data integrity and minimizing downtime.",
  },
  {
    icon: GraduationCap,
    title: "Power BI Training and Support",
    description:
      "Not just implementation-our experts provide training to your team, empowering them to leverage Power BI effectively. We also offer ongoing support for troubleshooting and updates.",
  },
];

const perkItems = [
  {
    title: "Improved Decision-Making",
    description:
      "Get timely and accurate business intelligence and insights through predictive models and risk management analytics.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "The first potential disadvantage of in-house analysts is the cost-hiring people for a company's analytical team may be costly. Offshore expertise enables us to offer the highest quality Power BI services to our clients at a lower price.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Time-Saving Processes",
    description:
      "Allow our professional services to take the burden of data management and analysis so that you can concentrate on running your business.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Enhanced Productivity",
    description:
      "Skilled personnel reduce procedural bottlenecks and identify opportunities for enhancing productivity among your employees.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
  {
    title: "Customizable Support",
    description:
      "Whether it's for a short-term assignment or for a business partnership that spans years, our services are fully customizable to fit you perfectly.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
];

const processSteps = [
  {
    title: "Discuss Your Needs",
    description:
      "We begin by understanding your unique business requirements. Our team will schedule a consultation to learn about your data challenges, goals, and any specific metrics you want to track.",
  },
  {
    title: "Custom Strategy Development",
    description:
      "Once we have a thorough understanding of your needs, we will create a tailored strategy that outlines how our Power BI experts will approach your project. This includes selecting the right tools, defining key performance indicators (KPIs), and setting project timelines.",
  },
  {
    title: "Hire the Right Expert",
    description:
      "After the strategy is developed, we match you with one of our experienced Power BI professionals who possesses the skills required for your specific project.",
  },
  {
    title: "Collaboration and Data Analysis",
    description:
      "Our data expert will begin analyzing your data, generating reports, and providing insights. Throughout the process, we maintain open communication, keeping you updated with progress.",
  },
  {
    title: "Actionable Insights and Ongoing Support",
    description:
      "Once the analysis is complete, you will receive detailed reports with actionable insights that you can use to make informed business decisions. Get the ongoing support to ensure you continue to get the most value from your data over time.",
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
    role: "Chicago, IL",
    location: "USA",
    quote:
      "The Power BI experts at Book Virtual Assistant transformed how we analyze sales data. Their dashboards are intuitive and help us spot trends in real time.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "New York, NY",
    location: "USA",
    quote:
      "I needed custom Power BI reports for my marketing campaigns. The team at BVA exceeded my expectations with their professionalism and insights.",
    rating: 5,
  },
  {
    name: "Linda K.",
    role: "Los Angeles, CA",
    location: "USA",
    quote:
      "Outsourcing Power BI services to Book Virtual Assistant was the best decision for our growing business. Reliable, efficient, and cost-effective.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does a Power BI expert do?",
    answer:
      "A Power BI expert manages tasks like data modeling, visualization, report generation, and system integration. They help businesses turn raw data into actionable insights.",
  },
  {
    question: "Is Power BI suitable for small businesses?",
    answer:
      "Absolutely! Power BI's scalability makes it ideal for businesses of all sizes. Whether you're a startup or a large corporation, it offers valuable insights to drive growth.",
  },
  {
    question: "Can I customize the scope of services offered by a Power BI expert?",
    answer:
      "Absolutely! Our Power BI experts provide tailored solutions based on your specific business needs, ensuring a perfect fit for your data analytics goals.",
  },
  {
    question: "How soon can I hire a Power BI expert and get started?",
    answer:
      "We ensure a quick onboarding process. Once you discuss your requirements with us, your dedicated Power BI expert can start working on your project within a few days.",
  },
];

export default function HirePowerBiExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the Best Microsoft Power BI Specialists",
              description: (
                <>
                  Lost in the data complexities? Couldn't find reliable experts? Book Virtual Assistant is
                  here to assist you with top-notch service to{" "}
                  <span className="font-semibold text-foreground">hire Power BI Developers Online</span> .
                  Choose a plan as per your needs and budget to experience outstanding results. From data
                  modeling to visualization tools, our Power BI experts know the ABCs of offering the clients
                  best analytics solutions.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/hire-power-bi-expert-bn.png",
              imageAlt: "Hire the Best Microsoft Power BI Specialists",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "power-bi-expert-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Effortless Data Management with BVA's Power BI Experts",
              items: [
                {
                  value: "10+",
                  label: "Number of Power BI Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "250+",
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
              title: "Services Our Microsoft Power BI Developers Provide",
              description: (
                <>
                  <span className="font-semibold text-foreground">
                    Hire the best Microsoft Power BI specialists
                  </span>{" "}
                  offering customized services to meet your analytics and reporting needs.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Benefits of Hiring Power BI Experts from Book Virtual Assistant",
              image: "/images/services/hire-power-bi-expert-bn.png",
              imageAlt: "Power BI experts creating dashboards and reports",
              paragraphs: [],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our Simple 5-Step Process to Hire a Power BI Expert",
              description: (
                <>
                  To get the best experience of our{" "}
                  <span className="font-semibold text-foreground">
                    Hire Power BI Developers online
                  </span>{" "}
                  services, hire the data experts who can transform your business.
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
              title: "Testimonials: What Our Clients Say",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Frequently Asked Questions About Hiring Power BI Experts",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
