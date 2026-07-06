"use client";

import {
  BarChart3,
  Search,
  Globe,
  RefreshCw,
  Layout,
  ShoppingBag,
  Gift,
  UserCheck,
  Receipt,
  SlidersHorizontal,
  Crosshair,
  Key,
  LineChart,
  Binoculars,
  PenLine,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: BarChart3,
    title: "Effective Google Ads Management",
    description:
      "By choosing the best ad management channels to get high conversion rates, we assist you in realizing the full potential of your company. With properly managed Google Ads campaigns for Search, Shopping, and Display Networks, you may increase your return on investment.",
  },
  {
    icon: Search,
    title: "Targeted Search Advertising",
    description:
      "With clever advertising on top search engines like Google, maximize brand awareness and return on investment. Our customized search engine marketing programs help your company go from mediocrity to recognition.",
  },
  {
    icon: Globe,
    title: "Optimized Bing Ad Management",
    description:
      'Ad campaigns on Bing, both search and display, may increase exposure and revenue. Reach the "Premium" search rankings on the Bing results page. Securing highly targeted clicks and excellent ROI is possible with the help of PPC professionals.',
  },
  {
    icon: RefreshCw,
    title: "Strategic Remarketing Campaigns",
    description:
      "Effective remarketing tactics may transform one-time visitors into loyal customers. By bringing back visitors who didn't convert, retargeting helps build relationships with those people and encourages them to stick with your company.",
  },
  {
    icon: Layout,
    title: "Dynamic Display Advertising",
    description:
      "Our PPC professionals create and manage digital ad campaigns to generate the most traffic to your website or landing pages. From ad development to targeted optimization and analytics, we provide results throughout the Google Display Network.",
  },
  {
    icon: ShoppingBag,
    title: "Profitable Shopping Campaigns",
    description:
      "With Google Shopping campaigns—also known as product listing ads—boost sales for online retailers. Our PPC experts make sure your ads highlight the products you sell to the right audience, thus raising awareness and interaction.",
  },
];

const perkItems = [
  {
    icon: Gift,
    title: "Free Trial",
    description: "Test our Google Ads experts with no commitment before you decide to hire.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Google Ads Expert",
    description:
      "Work with a professional who is dedicated solely to your business, ensuring focus and optimal results.",
  },
  {
    icon: Receipt,
    title: "Zero Overhead",
    description:
      "No additional costs for office space, software, or recruitment. We handle everything for you.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Hiring Options",
    description:
      "Whether you need a part-time or full-time expert, we provide flexible solutions tailored to your needs.",
  },
];

const strategyItems = [
  {
    icon: Crosshair,
    title: "Audience Targeting",
    description:
      "We focus on identifying who your ideal consumer is. After conducting research, each demographic is clearly described, as well as user behavior, to guarantee that your ads go to the right audience at the right time.",
  },
  {
    icon: Key,
    title: "Keyword Research",
    description:
      "This is under our keyword research, where we analyze keywords that will give a better conversion rate to the site. This also means that your budget is being spent where it needs to be and is visible to the user when they are most active.",
  },
  {
    icon: LineChart,
    title: "Utilizing GA4",
    description:
      "For the purpose of analysing the customer behaviour across the multiple platforms we ensure the implementation of Google Analytics 4(GA4). With GA4, there is a focus on understanding the actions of your audience better.",
  },
  {
    icon: Binoculars,
    title: "Competitive Analysis",
    description:
      "Before we decide on a campaign strategy that is unique to a client, we examine competitors' campaigns in search of gaps and opportunities to 'tweak' the ad campaign in the client's favor.",
  },
  {
    icon: PenLine,
    title: "Ad Copy Optimization",
    description:
      "The text of an ad is yet another factor that defines how many times the given link will be clicked. Our team produces texts that are persuasive, within brand identity, and invite people to take specific action.",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "It all starts with a meeting to know you better, your business needs, and potential hurdles you may experience. Also, this will help us define clear goals and plan for your Google Ads campaign.",
  },
  {
    title: "Campaign Setup",
    description:
      "Expert technical writers also assist with creating the entire campaign: what keywords are used, the correct ad format (search, display, shopping, etc.), and how ad tracking will be implemented to achieve success.",
  },
  {
    title: "Strategic Implementation",
    description:
      "Once your campaign is set up, we implement our strategic plan. This includes fine-tuning targeting, setting up ad groups, and writing optimized ad copy tailored to your business.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor your Google Ads performance, adjusting bids, keywords, and targeting to improve results. We conduct A/B tests on ad copy and landing pages to enhance engagement and conversion rates.",
  },
  {
    title: "Transparent Reporting",
    description:
      "We believe in transparency, so we provide regular reports that highlight key metrics such as clicks, impressions, and conversions. We highlight in detailed reports how your investment is benefiting you.",
  },
  {
    title: "Growth Strategy & Market Capacity",
    description:
      "We then optimize your campaign as we get data on their performance and amplify your ads to reach more customers and generate better sales. It is modified persistently to maximize the success for the future.",
  },
];

const testimonials = [
  {
    name: "Ava Mitchell",
    role: "Marketing Director",
    location: "New York",
    quote:
      "Book Virtual Assistant transformed our Google Ads strategy, driving higher conversions and ROI!",
    rating: 5,
  },
  {
    name: "Liam Walker",
    role: "CEO",
    location: "London",
    quote:
      "Their expert Google Ads management helped us boost traffic and reduce ad spend effectively.",
    rating: 5,
  },
  {
    name: "Sophia Brown",
    role: "Business Owner",
    location: "Sydney",
    quote:
      "Fantastic results! Our sales increased dramatically with their customized Google Ads campaigns.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How specifically does Google Ads benefit a business?",
    answer:
      "When using Google Ads, you have an effective tool to deliver targeted ads to the targeted audience. From driving more traffic to generating leads or sales, our Google Ads specialists will work to meet your business needs.",
  },
  {
    question: "Is it possible to get results in the first days of launching Google Ads?",
    answer:
      "As with any form of advertising, the success of your campaigns depends on your line of business, and your settings may yield results in as little as two weeks. We have specialized employees who are constantly managing and fine-tuning your campaigns for continuous enhancement.",
  },
  {
    question: "Is it necessary to spend a lot of money in order to launch Google Ads campaigns?",
    answer:
      "This is absolutely not the case! A key advantage of Google Ads is that it can cooperate with any amount of money, and our specialists will necessarily select balanced and efficient tactics for you. We ensure optimal use of every dollar to maximize your return on investment.",
  },
  {
    question: "Can I put a pause on or alter my campaigns in between at any given time?",
    answer:
      "Absolutely! Google Ads campaigns are fully customizable, and we can make alterations to your specific campaigns at any time to meet specific needs of your business.",
  },
];

const introParagraphs = [
  <>
    Avoid diluting your efforts and squandering money that you have worked so hard to earn on irrelevant
    keywords. To sum up, an efficient PPC campaign requires the expertise of the best Google Ads experts
    and a precise, brand-focused, and actively managed approach within the designated timeframe. With the
    right team, every click, like, and engagement is an important possibility.
  </>,
  <>
    That&apos;s why we prioritize strategies over the time it takes to work on them. In this case, even before
    we start, we will take our time to review your past campaigns, determining all the lapses and the place
    where you&apos;re losing clicks. We regularly compare and use tests like the &apos;what if/else&apos;
    principle to avoid losses. Of course, most advertising models are based on &apos;pay per click,&apos; and
    let us make every single one of them worthwhile.
  </>,
];

export default function HireGoogleAdsExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "Google Ads",
              title: "Hire the Best Google Ads Experts",
              description: (
                <>
                  Google Ads can help you to attract traffic, boost sales and get closer to the clients more
                  than before. When you hire a dedicated{" "}
                  <span className="font-semibold text-primary">Google Ads expert</span> from Book Virtual
                  Assistant, you are assured that all your advertising dollar goes into productive use for
                  maximum returns.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "About us : Your Trusted Google Ads Partner",
              paragraphs: introParagraphs,
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "google-ads-service",
            },
            services: {
              badge: "Our Services",
              title: "Track Results With BVA's Google Ad Services",
              description:
                "Hire the best Google Ads specialists at BVA and optimise your ads using the best approach. Our team of professionals takes time and effort to ensure that the campaigns developed fully meet your company's requirements. From a wide range of our satisfied clients, we provide measurable results in your company's success.",
              columns: 3,
              items: serviceItems,
            },
            highlights: {
              badge: "Perks",
              title: "Additional Perks of Working with Us",
              items: perkItems,
            },
            reasons: {
              badge: "Strategies",
              title: "Winning Strategies for Your Google Ads Success",
              description: (
                <>
                  Looking to grow your business?{" "}
                  <span className="font-semibold text-foreground">Hire the best Google Ads specialists</span>{" "}
                  who understand exactly how to approach and plan the perfect strategy.
                </>
              ),
              columns: 3,
              items: strategyItems,
            },
            process: {
              badge: "Our Process",
              title: "A 6-Step Approach to Advertising Success",
              description: (
                <>
                  We follow a structured process to ensure that every campaign, managed by the{" "}
                  <span className="font-semibold text-foreground">best Google Ads experts</span>, is efficient
                  and effective from start to finish.
                </>
              ),
              steps: processSteps,
            },
            testimonials: {
              badge: "Testimonials",
              title: "What Our Customer-Focused Marketing Delivers",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Google Ads Expert FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
