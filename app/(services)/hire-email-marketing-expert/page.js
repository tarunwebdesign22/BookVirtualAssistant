"use client";

import {
  Send,
  HeartHandshake,
  ShoppingCart,
  Newspaper,
  Receipt,
  Megaphone,
  Inbox,
  TrendingUp,
  Database,
  Users,
  Clock,
  BadgeDollarSign,
  Heart,
  Timer,
  Sparkles,
  Target,
  BadgeCheck,
  Eye,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Send,
    title: "Targeted Cold Emails",
    description:
      "Hire email marketing experts to send sales emails to potential buyers. Our professionals excel in gathering email addresses through online research, targeting prospects that align with your ideal customer profile.",
  },
  {
    icon: HeartHandshake,
    title: "Subscriber Nurturing Emails",
    description:
      "Hire an email marketing expert from India to create automated email series for subscribers. This approach builds trust, strengthens relationships, and guides subscribers down the sales funnel.",
  },
  {
    icon: ShoppingCart,
    title: "Cart Recovery Emails",
    description:
      "Do not let potential customers get out of your hands easily. Outsource an email marketing specialist to develop messages for circumstances where customers abandon shopping cart items.",
  },
  {
    icon: Newspaper,
    title: "Customized Newsletter Campaigns",
    description:
      "We specialize in personalizing email newsletters to resonate with your target market. Subscribers receive curated campaigns tailored to their preferences and interests.",
  },
  {
    icon: Receipt,
    title: "Tailored Transactional Emails",
    description:
      "Personalize your transactional messages. Our email marketing specialists are well-versed in using various transactional email services and tools.",
  },
  {
    icon: Megaphone,
    title: "Effective Promotional Emails",
    description:
      "Boost your brand with promotional campaigns. Send offers, discounts, free trials, and vouchers to captivate your audience and increase sales and revenue.",
  },
  {
    icon: Inbox,
    title: "Engaging Inbound Emails",
    description:
      "Focus on users already showing interest in your brand. Hire remote email marketing specialists to craft emails that drive engagement and encourage purchases.",
  },
  {
    icon: TrendingUp,
    title: "Upselling and Cross-Selling Emails",
    description:
      "Never miss an opportunity to increase sales. Leverage our expertise in cross-selling and upselling to promote additional products and new launches effectively.",
  },
  {
    icon: Database,
    title: "Optimized Email Database Management",
    description:
      "Our email marketing experts go beyond collecting data; they refine and filter it to ensure that each email reaches the right audience with relevant and personalized content.",
  },
];

const highlightItems = [
  {
    icon: Users,
    title: "Access to Exceptional Talent",
    description: "India offers a vast pool of skilled email marketing experts.",
  },
  {
    icon: Clock,
    title: "Round-the-Clock Support",
    description: "With BVA, your business operations run seamlessly, day and night.",
  },
  {
    icon: BadgeDollarSign,
    title: "Significant Cost Efficiency",
    description: "Avoid the high costs of hiring in-house employees.",
  },
];

const reasonItems = [
  {
    icon: Heart,
    title: "Build Stronger Relationships",
    description:
      "Through properly designed campaigns, you may develop and maintain client confidence, thereby setting up a sort of loyalty base.",
  },
  {
    icon: TrendingUp,
    title: "Increase Sales and Conversions",
    description:
      "Limited-time offers create demand. An expert ensures the maximum conversion effectiveness for each campaign.",
  },
  {
    icon: Timer,
    title: "Save Time and Resources",
    description:
      "Our experts will free up your in-house team so that they can focus on other crucial aspects without feeling overburdened.",
  },
  {
    icon: Sparkles,
    title: "Stay Ahead of Trends",
    description:
      "Our professionals keep themselves apprised on new tools, current trends and methods that ensure your campaigns are top notch.",
  },
];

const processSteps = [
  {
    title: "Define Goals",
    description:
      "To begin with, it is crucial to determine which goals you want to achieve using each campaign: engagement, sales, or brand awareness.",
  },
  {
    title: "Crafting the Design",
    description:
      "Our email marketing specialists develop and invite the creation of templates that reflect your company's image with customizable look and style.",
  },
  {
    title: "Write an Engaging Copy",
    description:
      "Creating captivating and convincing material that speaks to your audience, we provide your emails with the necessary substance and call to action.",
  },
  {
    title: "Testing for Perfection",
    description:
      "We pre-check the responsive design and the content of the email before sending it out to the targeted audience.",
  },
  {
    title: "Monitoring Performance",
    description:
      "Our team monitors important parameters such as clicks, actions, and spam-related concerns to ensure ideal campaign performance.",
  },
];

const partnerItems = [
  {
    icon: BadgeCheck,
    title: "Trust Our Expertise",
    description: "Our team of experts follows the newest trends and techniques.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Options",
    description: "Premium email marketing services at a fraction of in-house costs.",
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "Every campaign aims for demonstrable results.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and thorough reports keep you informed throughout.",
  },
];

const testimonials = [
  {
    name: "Lisa H.",
    role: "E-commerce Business Owner",
    quote:
      "Book Virtual Assistant's email marketing expert transformed the way we engage with our audience. Our open rates doubled, and we saw a 30% increase in sales.",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "SaaS Founder",
    quote:
      "The team at Book Virtual Assistant took the stress out of email marketing. Their campaigns not only look great but also deliver real results. It's been a game-changer for our business!",
    rating: 5,
  },
  {
    name: "Rachel G.",
    role: "Digital Marketing Manager",
    quote:
      "We've worked with several email marketing professionals in the past, but none have been as thorough and effective as Book Virtual Assistant. They helped us refine our strategy and consistently achieved fantastic open rates and conversions.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How soon will I get results?",
    answer:
      "Results relate to your audience and company objectives. In the first few campaigns, though, open rates and involvement should show obvious improvement.",
  },
  {
    question: "Can you handle large subscriber lists?",
    answer:
      "Indeed, our staff has managed campaigns for companies with both small and large email audiences.",
  },
  {
    question: "Do you give consistent updates?",
    answer:
      "Certainly! As we believe in 100% transparency, our team will send thorough analyses every week or bi-weekly to keep you updated with how our strategies are performing.",
  },
  {
    question: "Is mail marketing still useful in 2025?",
    answer:
      "Indeed, one of the most dependable and reasonably priced ways to increase interaction and revenue is still email marketing.",
  },
];

const introParagraphs = [
  <>
    When it is about driving results, email marketing stands out as a proven marketing strategy for
    encouraging action from the target audience. It is a method that can turn a lead into a customer by
    passing information, offers, or the latest news to the new customer&apos;s mailbox.
  </>,
  <>
    Employing email marketers from Virtual Employee can help you achieve unprecedented levels of sales and
    income. As an experienced and results-driven{" "}
    <span className="font-semibold text-foreground">email marketing agency</span>, we have been giving our
    clients measurable outcomes, which range from emails for eCommerce to innovative cold emails for
    business-to-business communication.
  </>,
];

export default function HireEmailMarketingExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "Email Marketing",
              title: "Hire Professional Email Marketing Experts for Your Business",
              description: (
                <>
                  Email marketing is not merely about newsletters but communications, engagement, delivering
                  value, and driving action. You can{" "}
                  <span className="font-semibold text-primary">hire an email marketing expert</span> from
                  Book Virtual Assistant who specializes in creating amazing email marketing campaigns that
                  engage your audience and help advance your business forward.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "Book Virtual Assistant: Your Trusted Email Marketing Agency",
              paragraphs: introParagraphs,
              image: "/images/services/seo-expert-bg.webp",
              imageAlt: "Email marketing experts crafting campaigns",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "email-service",
            },
            services: {
              badge: "Our Services",
              title: "Hire Dedicated Experts for Comprehensive Email Marketing Services",
              description:
                "Driving results through emails can be achieved with the help of those who know the strategies behind the campaigns. Hire an email marketing expert to maximize your outreach and conversions.",
              columns: 3,
              items: serviceItems,
            },
            highlights: {
              badge: "Outsource to India",
              title: "Why You Should Outsource Email Marketing Services to India",
              items: highlightItems,
            },
            reasons: {
              badge: "Key Benefits",
              title: "Benefits of Hiring Email Marketing Expert with BVA",
              columns: 2,
              items: reasonItems,
            },
            process: {
              badge: "Our Process",
              title: "The Custom Process BVA's Email Marketing Experts Use",
              steps: processSteps,
            },
            industries: {
              badge: "Why BVA",
              title: "Why Book Virtual Assistant is Your Perfect Partner",
              items: partnerItems,
              ctaLabel: "Hire Email Marketing Expert",
              ctaHref: "/contact-us",
            },
            testimonials: {
              badge: "Testimonials",
              title: "Our Clients Love The Results We Deliver",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "FAQs: Hiring an Email Marketing Expert",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
