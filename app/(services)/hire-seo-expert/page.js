"use client";

import {
  MapPin,
  ShoppingCart,
  Search,
  Layers,
  Smartphone,
  Link2,
  BarChart3,
  Layout,
  Mic,
  FlaskConical,
  Target,
  Lightbulb,
  ClipboardCheck,
  UserCheck,
  ShieldCheck,
  BadgeDollarSign,
  Receipt,
  Users,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: MapPin,
    title: "Targeted Local SEO",
    description:
      "Using Google My Business, company listings, location-specific keywords, local citation-building, and much more, our skilled SEO professionals target the possible clients of a certain area.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    description:
      "Our expert eCommerce SEO work is designed to increase the visibility of your online business. We pay close attention to your categories and items, content marketing, and targeted influencer outreach.",
  },
  {
    icon: Search,
    title: "Keywords Research",
    description:
      "At BVA, we give user intent top priority over just crawlers. Our knowledgeable SEO consultants work on keyword research to understand your target market and how they search online.",
  },
  {
    icon: Layers,
    title: "Full Suite SEO",
    description:
      "Everything from focused keyword research, Google Analytics setup, metadata creation, and backlink gap analysis to penalty-proof link building is covered by our expert search engine optimization services.",
  },
  {
    icon: Smartphone,
    title: "Mobile SEO",
    description:
      "We focus on Mobile-First Indexing for mobile website SEO, including optimizing site speed and responsiveness, plus app store optimization (ASO) and app indexing for Android and iOS apps.",
  },
  {
    icon: Link2,
    title: "On Page and OFF Page SEO",
    description:
      "Tagging, page titles, meta descriptions, link building, guest blogging, influencer outreach, article submission, and press releases are among the optimization operations our SEO experts handle.",
  },
  {
    icon: BarChart3,
    title: "Analysis of Website SEO",
    description:
      "To guarantee your website is correctly optimized to reach desired traffic and goals, its speed, crawlability, searchability, HTML and XML sitemaps, schema, and site migrations are thoroughly checked.",
  },
  {
    icon: Layout,
    title: "Optimizing Landing Pages",
    description:
      "BVA's certified SEO professionals use data-driven insights to optimize your landing pages and campaigns without completely redesigning the page based on assumptions.",
  },
  {
    icon: Mic,
    title: "Voice Search Optimization",
    description:
      "Our technicians optimize each of your websites for voice search. User intent and search behavior are key areas of expertise to help increase your brand's visibility in conversational voice search results.",
  },
];

const highlightItems = [
  {
    icon: FlaskConical,
    title: "Continuous SEO Research",
    description:
      "Our focused SEO team at Book Virtual Assistant is always learning and trying new things to stay ahead in the field.",
  },
  {
    icon: Target,
    title: "Precision Testing",
    description: "To make sure our experiments work, we test hypotheses and evaluate the data.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Insights",
    description:
      "The results of our research and development activities serve as the underpinning for our tried-and-tested SEO techniques.",
  },
];

const reasonItems = [
  {
    icon: ClipboardCheck,
    title: "Get a Free SEO Audit",
    description:
      "To help you make informed decisions on improving your website, Book Virtual Assistant provides an absolutely free SEO Audit.",
  },
  {
    icon: UserCheck,
    title: "Exclusive, Dedicated Employees",
    description:
      "BVA's committed SEO specialists will provide you with the opportunity to experience complete exclusivity and ownership.",
  },
  {
    icon: ShieldCheck,
    title: "Thoroughly Screened Expert",
    description:
      "To make sure you employ the finest, BVA only provides resumes of people who have been pre-screened and tested extensively.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Services",
    description:
      "While other services provide you with SEO experts at a very high cost, we offer you to get the services of such professionals at a rather low price.",
  },
  {
    icon: Receipt,
    title: "No Hidden Costs",
    description:
      "We handle all the facilities; when you hire a resource, you simply pay for that resource's labor.",
  },
  {
    icon: Users,
    title: "A Range of Expertise",
    description:
      "Benefit from a variety of skills with junior, mid-level, and senior SEO professionals, each offering unique domain experience.",
  },
];

const processSteps = [
  {
    title: "Audit",
    description:
      "We start by analyzing your website for KPI, including keyword usage, technical SEO, and competitor performance.",
  },
  {
    title: "Optimization",
    description:
      "On-page and off-page SEO strategies are implemented to enhance visibility and user experience.",
  },
  {
    title: "Link Building",
    description: "We build high-quality backlinks to drive more traffic and improve domain authority.",
  },
  {
    title: "Technical Updates",
    description:
      "From schema markup to site speed optimization, we ensure your website meets modern standards.",
  },
  {
    title: "Monitoring",
    description:
      "Our experts continuously track performance metrics, rankings, and traffic to refine strategies.",
  },
];

const howToHireSteps = [
  {
    title: "Discuss Your Needs With Us",
    description:
      "We'd like to understand your precise requirements for an SEO expert so that we may align our strategy with your business needs.",
  },
  {
    title: "Schedule A Meeting",
    description:
      "Let us know what you need, and we will guide you about the sound strategies and plans for SEO.",
  },
  {
    title: "Get Started",
    description:
      "Once you've made up your mind, it's time to hire your SEO specialist and begin enjoying the benefits you deserve.",
  },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Marketing Manager",
    location: "USA",
    quote: "BVA's SEO team took our rankings to new heights — extremely satisfied with the results.",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    role: "CEO",
    location: "UK",
    quote:
      "Their expert guidance helped us grow online visibility quickly. Highly recommend BVA's services!",
    rating: 5,
  },
  {
    name: "Laura Martinez",
    role: "Digital Marketing Director",
    location: "Spain",
    quote:
      "Professional, efficient, and results-driven SEO experts. Our traffic and sales have significantly increased.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Are You Capable of Delivering Assured SEO Results?",
    answer:
      "Alas, we cannot predict the rank; however, we will use the best white hat SEO techniques that will largely contribute to your website's success and organic growth.",
  },
  {
    question: "What guarantees the quality of the outcome that you offer your customers?",
    answer:
      "We aim to meet quality standards since we always update our company on current trends, conduct data analyses, and implement the right methods. Our strategies aim to drive traffic to your site and enhance the rankings of your specific business.",
  },
  {
    question: "How can I connect with the right SEO professional for the job?",
    answer:
      "For our SEO professionals, we only choose those that fit into the specific requirements of your project. Because of this, we ensure that when you come to us, we connect you with the right professionals equipped with the knowledge and skills that would enable us to achieve your goals.",
  },
  {
    question: "How can I maintain communication with my SEO expert?",
    answer:
      "You can reach your expert in SEO via email, phone, or even through the messaging system that we make available to you. We strive to keep you informed and engaged throughout the entire process.",
  },
];

const introParagraphs = [
  <>
    There are certain difficulties that only experienced SEO specialists can solve, and without their help,
    it can be problematic to expand your business when the competition is rather high. This is why many
    businesses choose to{" "}
    <span className="font-semibold text-foreground">hire professional SEO experts</span> from India—the
    country that has a great and rather vast pool of the IT workforce. Book Virtual Assistant, one of the
    reputed SEO outsourcing companies in India, connects you with SEO professionals who have the expertise
    to help your website rank higher on Google.
  </>,
  <>
    Organizing the keywords and user trends, then developing unique strategies for your business needs—we
    manage all phases intensively. Additionally, we understand all the ways, from enhancing local SEO
    services and developing search engine-friendly websites to increasing rankings and identifying
    realistic and attainable objectives.
  </>,
];

export default function HireSeoExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "SEO Services",
              title: "Hire Certified SEO Expert",
              description: (
                <>
                  We work on creating SEO strategies that connect with your audience while meeting search
                  engine standards.{" "}
                  <span className="font-semibold text-primary">Hire our SEO expert</span> to elevate your
                  online presence and grow your business with customized, results-driven solutions.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "The Smart Move to Hire SEO Experts from India for Your Business",
              paragraphs: introParagraphs,
              image: "/images/services/seo-expert-bg.webp",
              imageAlt: "SEO experts analyzing search rankings and growth strategies",
            },
            contactForm: {
              title: "Share Your Requirement",
            },
            services: {
              badge: "Our Services",
              title: "Get Organic Visibility with Our Comprehensive SEO Services",
              description:
                "An all-around SEO approach is now what you need. BVA's skilled SEO experts can help you build your brand's reputation in a crowded market by providing custom services that fit your business's needs.",
              columns: 3,
              items: serviceItems,
            },
            highlights: {
              badge: "Stay Ahead Online",
              title: "Outsource SEO Services to Virtual Assistant and Stay Ahead Online",
              items: highlightItems,
            },
            reasons: {
              badge: "Why BVA",
              title: "Reasons to Outsource SEO Services to BVA",
              columns: 3,
              items: reasonItems,
            },
            process: {
              badge: "Our Process",
              title: "BVA's SEO Experts: 5-Step Process",
              steps: processSteps,
            },
            howToHire: {
              badge: "Get Started",
              title: "How to Hire an SEO Expert Made Simple",
              ctaLabel: "Hire SEO Expert",
              ctaHref: "/contact-us",
              steps: howToHireSteps,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Why Agencies Trust BVA for SEO Services",
              description:
                "Real feedback from businesses that scaled their organic visibility with our SEO team.",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Get All Your SEO Services FAQs Here",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
