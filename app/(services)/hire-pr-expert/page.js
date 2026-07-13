"use client";

import {
  AlertTriangle,
  CalendarDays,
  Star,
  Share2,
  UserPlus,
  BadgeCheck,
  BadgeDollarSign,
  SlidersHorizontal,
  TrendingUp,
  Eye,
  Shield,
  Target,
  Handshake,
  Network,
  BarChart3,
  Cpu,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Plane,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: AlertTriangle,
    title: "Crisis Management and Communication",
    description:
      "When unexpected challenges arise, our PR experts are there to guide you. Crisis management communication is well managed to retain the trust and professionalism of the brand in the view of the audience.",
  },
  {
    icon: CalendarDays,
    title: "Event Promotion and Coverage",
    description:
      "Planning a product launch, webinar, or conference? Our PR specialists advertise and schedule with media channels to get the coverage and audience you need.",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Using the internet for branding can significantly impact a company's success or failure. Our PR specialists deal with negative comments promptly while positive feedback is aggressively promoted.",
  },
  {
    icon: Share2,
    title: "Social Media PR Strategies",
    description:
      "Today's world extends beyond traditional PR approaches. We blend PR with social media to design campaigns that reach your audience and get your brand out there.",
  },
  {
    icon: UserPlus,
    title: "Influencer Collaboration",
    description:
      "We ensure that your business gets associated with the right influencer whose values promote your business and its products.",
  },
];

const highlightItems = [
  {
    icon: BadgeCheck,
    title: "Certified PR Specialists",
    description:
      "Our PR team comprises fully certified PR experts who have an understanding of the markets and executing campaigns for all industries.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Solutions",
    description:
      "Hiring full-time employees for in-house PR departments can be expensive. We present the work of savvy professionals at a price affordable for many.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility",
    description:
      "You can hire a PR specialist for a specific short-term campaign or enjoy long-term cooperation tailored to your needs.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    description:
      "Whether you need more media coverage, greater brand recognition, or both, our specialists focus on tangible outcomes and targets.",
  },
];

const reasonItems = [
  {
    icon: Eye,
    title: "Enhanced Brand Visibility",
    description:
      "A PR expert from BVA will bring your brand to the next level of media visibility. With perfect press releases and the right media outlets, your company will have the focus.",
  },
  {
    icon: Shield,
    title: "Crisis Management",
    description:
      "Whether it's negative publicity or a challenging topic, BVA's professionals promptly address the situation to maintain the integrity of your image.",
  },
  {
    icon: Target,
    title: "Tailored Campaigns",
    description:
      "Our PR specialists develop campaigns based on your needs, transforming product launches, special events, and more into effective strategies that resonate with your audience.",
  },
  {
    icon: Handshake,
    title: "Builds Trust and Credibility",
    description:
      "When your brand appears in respected publications, it creates trust with your target market. BVA helps you establish your business as a leader in your field.",
  },
  {
    icon: Network,
    title: "Stronger Media Relationships",
    description:
      "BVA PR specialists have extensive contacts at popular media outlets that will bring attention to your enterprise and broadcast your brand's message.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "BVA's PR team creates thorough reports and analysis of campaign outcomes so you can understand efficiency and observe measures for constant improvement.",
  },
];

const processSteps = [
  {
    title: "Consultation",
    description:
      "In the first step, we identify your business requirements, issues and objectives. This enables us to connect you with the ideal PR specialist for your campaign.",
  },
  {
    title: "Strategy Planning",
    description:
      "Once onboard, the PR specialist sits down with you to understand your goals and develop the right PR strategy for achieving them.",
  },
  {
    title: "Implementation",
    description:
      "Every aspect in your PR campaign is managed by our PR expert, including writing the press release and responding to media outlets.",
  },
  {
    title: "Monitoring and Reporting",
    description:
      "We follow up your PR activities and report their performances so that you can identify achievements and review your strategies.",
  },
];

const industryItems = [
  {
    icon: Cpu,
    title: "Technology",
    description: "Building stories that portray change and competency.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Maintaining trust and credibility, majoring in a sensitive field.",
  },
  {
    icon: ShoppingBag,
    title: "Retail and E-commerce",
    description: "Brand building and customer-level communication.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "The capacity to clearly articulate concepts and logical arguments.",
  },
  {
    icon: Plane,
    title: "Hospitality and Tourism",
    description: "Promoting experiences that captivate audiences.",
  },
];

const testimonials = [
  {
    name: "Sarah Miller",
    role: "CEO",
    location: "Chicago",
    quote:
      "Book Virtual Assistant's PR expert helped us navigate a challenging crisis. Their strategy not only saved our reputation but also strengthened our customer loyalty.",
    rating: 5,
  },
  {
    name: "David Johnson",
    role: "Marketing Director",
    location: "New York",
    quote:
      "We saw a significant increase in media coverage after hiring a PR expert through BVA. They truly understand how to tell a brand's story.",
    rating: 5,
  },
  {
    name: "Robert Taylor",
    role: "Event Manager",
    location: "Boston",
    quote:
      "Our annual conference lacked media buzz in previous years, but the PR expert from BVA changed everything.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "For my company, what can a PR professional accomplish?",
    answer:
      "By creating gripping stories, interacting with media outlets, and handling crisis communication, a PR professional helps to shape the public view of your business. They assure your audience of your confidence and help guarantee the relevance of your brand.",
  },
  {
    question: "How much hiring a PR specialist from Book Virtual Assistant costs?",
    answer:
      "Your particular requirements and project size will determine the pricing. At BVA, we provide flexible, reasonably priced recruiting choices catered to your needs. Get in touch for a tailored quotation.",
  },
  {
    question: "For a temporary project, may I contract a PR professional?",
    answer:
      "Indeed, we have adaptable schedules. Whether your needs are for ongoing support or assistance with a single campaign, we pair you with a PR professional that suits your goals and timeframe.",
  },
  {
    question: "How will I keep track of PR activity's outcomes?",
    answer:
      "Our PR professionals analyze the success of your campaigns using analytics, thorough performance reports, and frequent updates. This guarantees openness and aids in the improvement of methods for desired results.",
  },
];

const introParagraphs = [
  <>
    If you&apos;re searching for reliable solutions to enhance your brand&apos;s visibility and aim to improve
    audience engagement, as well as build meaningful connections, look no further. Book Virtual Assistant
    prides itself on being an exceptional{" "}
    <span className="font-semibold text-foreground">PR agency for individuals</span> and businesses. Our
    experts listen carefully, plan strategically, and execute flawlessly. Then, we keep refining the
    strategies to maintain that competitive edge in the market.
  </>,
  <>
    Being a reliable ally of the industry, hire expert public relations marketers for unparalleled
    approaches and efficacious outcomes. Building up long-term relations and delivering excellence starts
    from initial stages only.
  </>,
];

export default function HirePrExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "PR Services",
              title: "Hire the Best PR Consultants in India",
              description: (
                <>
                  Our PR service is more than writing press releases and managing crises — it&apos;s about
                  building trust with your target audience. When you{" "}
                  <span className="font-semibold text-primary">
                    hire the best PR consultants in India
                  </span>
                  , you ensure that your message is delivered effectively across diverse platforms.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "Partner With BVA's Professional PR Expert",
              paragraphs: introParagraphs,
              image: "/images/services/seo-expert-bg.webp",
              imageAlt: "PR experts managing brand reputation",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "pr-service",
            },
            services: {
              badge: "Our Services",
              title: "Achieve Greater Success with Our PR Services",
              columns: 3,
              items: serviceItems,
            },
            highlights: {
              badge: "Why BVA",
              title: "Why Choose Book Virtual Assistant for PR Expert Services",
              description:
                "When you hire expert Public Relations Marketers, you opt for gaining a dedicated partner committed to your brand's success.",
              items: highlightItems,
            },
            reasons: {
              badge: "Key Benefits",
              title: "Incredible Benefits of Hiring PR Experts With BVA",
              columns: 3,
              items: reasonItems,
            },
            process: {
              badge: "Our Process",
              title: "Quick Overview of The Process Our PR Expert Follows",
              steps: processSteps,
            },
            industries: {
              badge: "Industries",
              title: "Our PR Experts Have Experience Across Various Industries",
              items: industryItems,
              ctaLabel: "Hire PR Expert",
              ctaHref: "/contact-us",
            },
            testimonials: {
              badge: "Testimonials",
              title: "Client Success Stories",
              items: testimonials,
            },
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
