"use client";

import {
  Database,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  SearchCheck,
  Users,
  Truck,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Database,
    title: "Data Collection and Integration",
    description:
      "Our specialists gather data from multiple sources, ensuring seamless integration into your systems. From website analytics to CRM data, they compile and organize everything in one place for easy access.",
  },
  {
    icon: ShieldCheck,
    title: "Data Cleaning and Validation",
    description:
      "Raw data can often be messy and inaccurate. Our professionals clean, validate, and refine your datasets to ensure accuracy and reliability, helping you make confident decisions.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Stay ahead of the curve with predictive analytics. Using historical data and advanced modeling, our experts can forecast trends, customer behaviors, and potential risks.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence (BI) Solutions",
    description:
      "Empower your business with custom BI dashboards and reports. Our analytics experts transform complex data into clear, actionable insights, helping you optimize performance and drive growth.",
  },
  {
    icon: SearchCheck,
    title: "Market and Competitor Analysis",
    description:
      "Gain a competitive edge by understanding market trends and your rivals’ strategies. Our data analytics specialists provide detailed insights to refine your approach and stay ahead.",
  },
  {
    icon: Users,
    title: "Customer Analytics",
    description:
      "Understand your customers like never before. By analyzing customer preferences, behaviors, and feedback, we help you improve engagement and build lasting relationships.",
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization",
    description:
      "Streamline your operations with supply chain analytics. Our team identifies inefficiencies, optimizes logistics, and enhances overall productivity.",
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
      "The first potential disadvantage of in-house analysts is the cost-hiring people for a company's analytical team may be costly. Offshore expertise enables us to offer the highest quality analytics services to our clients at a lower price.",
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
      "Once we have a thorough understanding of your needs, we will create a tailored strategy that outlines how our data analytics experts will approach your project. This includes selecting the right tools, defining key performance indicators (KPIs), and setting project timelines.",
  },
  {
    title: "Hire the Right Expert",
    description:
      "After the strategy is developed, we match you with one of our experienced data analytics professionals who possesses the skills required for your specific project.",
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
    name: "Sarah L.",
    role: "Los Angeles",
    location: "USA",
    quote:
      "The data analytics team at Book Virtual Assistant transformed the way we approach decision-making. Their insights have been invaluable!",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Chicago",
    location: "USA",
    quote:
      "I was impressed by their ability to identify trends and opportunities that we had overlooked. They've helped us grow significantly.",
    rating: 5,
  },
  {
    name: "Emily W.",
    role: "New York",
    location: "USA",
    quote:
      "Working with BVA's data analytics experts has been a game-changer for our business. They're reliable, efficient, and incredibly knowledgeable.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does a data analytics expert do?",
    answer:
      "A data analytics expert collects, cleans, and analyzes data to provide actionable insights. They use tools like Excel, Power BI, and Tableau to create reports and dashboards that help businesses make informed decisions.",
  },
  {
    question: "Are your data analytics services secure?",
    answer:
      "Yes, we prioritize data security and confidentiality. Our team follows strict protocols to ensure your information remains protected.",
  },
  {
    question: "Can I hire a data analytics expert for a one-time project?",
    answer:
      "Absolutely! We offer flexible plans, whether you need short-term assistance or ongoing support.",
  },
  {
    question: "Can you help with both structured and unstructured data?",
    answer:
      "Yes, our data analytics experts handle both structured and unstructured data. We work with data from databases, spreadsheets, documents, social media, and more, transforming it into meaningful insights.",
  },
];

export default function HireDataAnalyticsExpertsPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Best Data Analytics in India",
              description: (
                <>
                  Over the past few years, India has emerged as a preferred country for outsourcing data
                  analytics services. Therefore, organizations are sourcing{" "}
                  <span className="font-semibold text-foreground">
                    data analysis and reporting services online
                  </span>{" "}
                  for skilled workforce, reasonable prices, and standard technologies.
                  <br />
                  <br />
                  Today, it's crucial to transform your business processes using online data analytics services.
                  If you are running a business and looking for competent people who can gather, analyze, and
                  interpret data to make efficient decisions, Book Virtual Assistant can help you with this.
                  We provide affordable service packages to small businesses, medium businesses, and big
                  corporations, and our data analytics specialists will work with your profile in mind.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/data-analytics-in-India-bn.png",
              imageAlt: "Hire Best Data Analytics in India",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "data-analytics-experts-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Effortless Data Management with BVA's Data Experts",
              items: [
                {
                  value: "25+",
                  label: "Number of Data Analytics Experts",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "700+",
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
              title: "Accelerate growth with BVA's Data Analytics Services and Solutions",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">online data analytics services</span>{" "}
                  include a range of customized solutions to address your specific needs.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Benefits of Hiring Data Analytics Experts from Book Virtual Assistant",
              image: "/images/services/data-analytics-in-India-bn.png",
              imageAlt: "Data analytics experts reviewing business insights",
              paragraphs: [],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Our Simple 5-Step Process to Hire a Data Analytics Expert",
              description: (
                <>
                  To get the best experience of our{" "}
                  <span className="font-semibold text-foreground">
                    data analysis and reporting services online
                  </span>{" "}
                  , hire the data analytics experts who can transform your business.
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
              title: "Cheers from Satisfied Clients",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Data Analytics Experts",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
