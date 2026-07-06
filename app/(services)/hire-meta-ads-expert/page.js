"use client";

import {
  Target,
  Users,
  PenLine,
  ScanLine,
  Rocket,
  SlidersHorizontal,
  FlaskConical,
  Building2,
  TrendingUp,
  Eye,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Target,
    title: "Campaign Strategy Development",
    description:
      "We design these campaigns with the help of our professionals, taking into account your particular goals. When it comes to goal achievement, we create campaigns that not only meet your specific objectives but also meet them with success.",
  },
  {
    icon: Users,
    title: "Audience Research & Segmentation",
    description:
      "One thing you ought to grasp is your audience. In today's highly diverse world, we immerse ourselves in audiences to categorize the potential consumers as target market by age, behavior, and interests so that your ads will always make their way to the right people.",
  },
  {
    icon: PenLine,
    title: "Ads Creation and Copywriting",
    description:
      "Our team of professionals works on the unique and engaging text and graphic materials reflecting your consumers' interests. Most of our concentration is on developing action-oriented communication with the appropriate message for your brand.",
  },
  {
    icon: ScanLine,
    title: "Pixel Setup & Conversion Tracking",
    description:
      "When used, Meta Pixel enables the tracking of your website's users' activities, campaign effectiveness, and main conversions. This information enables us to make better decisions that will enhance your future campaigns even more.",
  },
  {
    icon: Rocket,
    title: "Campaign Launch & Management",
    description:
      "Once your campaigns are created, we manage their promotion across both Facebook and Instagram. Through performance tracking, the proficient management team scrutinizes performance and optimizes it not to produce ineffective spending.",
  },
  {
    icon: SlidersHorizontal,
    title: "Continuous Optimization & Budget Control",
    description:
      "Our services ensure the constant optimization and readiness of your campaigns. We always seek to ensure that costs are well controlled while at the same time maximizing every dollar spent as a means of increasing the overall return.",
  },
  {
    icon: FlaskConical,
    title: "A/B Testing and Experimentation",
    description:
      "We use target and control strategies to compare the effects of creative, targeting, and other approaches. By analyzing these results, we refine campaigns to improve performance, ensuring the best approach for your brand.",
  },
];

const differentiatorItems = [
  {
    icon: Building2,
    title: "Experience Across Industries",
    description: "From eCommerce to service businesses, we've run campaigns that deliver results.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description:
      "We are not simply creating traffic for our clients; our campaigns create real-world results such as purchases.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    description:
      "You will understand the location of your ads expenditure and what results you are getting in return.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your business, goals, and audience to set clear campaign objectives.",
  },
  {
    title: "Campaign Setup",
    description: "From defining audiences to creating ad assets, we build your campaign framework.",
  },
  {
    title: "Creative Development",
    description: "Our team designs attention-grabbing visuals and writes compelling ad copy.",
  },
  {
    title: "Strategic Launch",
    description: "With data-backed targeting and optimized bidding, we ensure a successful rollout.",
  },
  {
    title: "Ongoing Optimization",
    description: "Constant monitoring and testing allow us to refine performance for better ROI.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Regular reports detail your campaign's progress, including insights into clicks, reach, and sales.",
  },
];

const testimonials = [
  {
    name: "Emma Scott",
    role: "E-commerce Entrepreneur",
    location: "Los Angeles",
    quote:
      "BVA helped us scale our Instagram campaigns, resulting in a 40% increase in sales in just two months!",
    rating: 5,
  },
  {
    name: "Daniel Hughes",
    role: "SaaS Founder",
    location: "Toronto",
    quote:
      "Their expertise in Meta Ads turned our underperforming campaigns into a lead generation powerhouse.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head",
    location: "London",
    quote:
      "Fantastic team! They managed our Facebook Ads with precision and helped us achieve a 3x ROAS.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How can a Meta Ads expert improve my campaign results?",
    answer:
      "An expert in Meta Ads helps to achieve the goal using the unique features of your audience, high-quality creatives, and decisions based on the data obtained. This helps to make sure that your budget is invested in something tangible, such as leads, sales, or brand recall.",
  },
  {
    question: "Which platforms are part of Meta Ads management?",
    answer:
      "Meta Ads applies to both the Facebook and Instagram platforms. Our team begins by coordinating and running these channels effectively to ensure your brand reaches the many audiences while getting the conversions you need to achieve on these platforms, depending on each of the platform's audience.",
  },
  {
    question: "Do I need a large budget to hire a Meta Ads expert?",
    answer:
      "The answer is no! Small or big, a Meta Ads expert makes sure they apply your money well for the best results. They aim to achieve the highest ROI by directly targeting the audience and improving the campaign all the time.",
  },
  {
    question: "How soon can I expect results from Meta Ads?",
    answer:
      "Often, you may see slight progress in a campaign within the first week, but steady work will always yield the best results in 2–4 weeks. Our specialists routinely review data to achieve desired objectives more quickly and effectively.",
  },
];

const introParagraphs = [
  <>
    Don&apos;t let poorly managed ads drain your budget. To increase the chances of successful Meta Ads
    campaigns, it is crucial to have special knowledge of ad targeting, creative, and attentiveness. Our{" "}
    <span className="font-semibold text-foreground">Meta Ads Expert</span> focuses on constantly developing
    better-converting campaigns in line with your objectives. Whether you are expanding eCommerce sales or
    marketing a local service, we provide targeted solutions that deliver clear results.
  </>,
  <>
    We review previous campaigns to determine such pitfalls as low-grossing creatives or the wrong audience.
    The detailed analysis of the web traffic in your campaigns and A/B testing allows our experts to make them
    more engaging as well as increase conversion rates. Each ad spend is optimized to generate more than mere
    exposure, leading to amazing ROIs.
  </>,
];

const facebookAdsParagraphs = [
  <>
    If you are looking for ways to boost your online image, getting the top-notch{" "}
    <span className="font-semibold text-foreground">Facebook Ads specialists</span> is what you need. Our{" "}
    <span className="font-semibold text-foreground">Facebook Ads experts in India</span> understand how to
    create impactful campaigns that target the right audience and deliver real results.
  </>,
  <>
    Whether you are interested in sales promotion, improving brand recognition, or attracting more visitors
    to your website, you can be sure that our specialists use methods that are appropriate for your
    organisation&apos;s goals. Right from the selection of the right audience to developing attractive
    advertisements and even measuring effectiveness, we provide it all.
  </>,
  <>
    Through qualified Facebook Ads specialists&apos; professional knowledge of Meta&apos;s advertising tools
    and low-cost approaches, we guarantee complete value for your money spent. We are the organisation you
    need for that growth you have been looking for in your business.
  </>,
];

export default function HireMetaAdsExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "Meta Ads",
              title: "Hire the Best Meta Ads Experts",
              description: (
                <>
                  If there is anything but obvious to all, it is that social media is where most of us spend
                  a good part of the day. However, managing effective campaigns on such social networks as
                  Facebook and Instagram is much more than just promoting posts. Book Virtual Assistant&apos;s
                  Meta Ads Expert crafts tailored advertising campaigns that focus on strategy, expertise, and
                  constant optimization. We will help you turn ad spend into measurable growth with targeted,
                  well-crafted campaigns.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "Drive Results With A Meta Ads Expert at Your Side",
              paragraphs: introParagraphs,
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "meta-ads-service",
            },
            services: {
              badge: "Our Services",
              title: "Tasks Our Meta Ads Experts Can Do For You",
              description:
                "Meta Ads Specialists concentrate on utilizing Meta's advertisement offerings for businesses in an effective manner. With precise, data-oriented, and targeted messages, we increase brand awareness, attract customers' interest, and generate tangible outcomes. Below are the main roles that our experts perform to guarantee the success of your campaigns.",
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Hire the Best Facebook Ads Specialists",
              paragraphs: facebookAdsParagraphs,
            },
            process: {
              badge: "Our Process",
              title: "BVA's Approach to Meta Ads Success",
              steps: processSteps,
            },
            industries: {
              badge: "Why BVA",
              title: "What Makes Us Different?",
              items: differentiatorItems,
              ctaLabel: "Hire Meta Ads Expert",
              ctaHref: "/contact-us",
            },
            testimonials: {
              badge: "Testimonials",
              title: "Check Our Clients' Feedback",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Find Answers to Your FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
