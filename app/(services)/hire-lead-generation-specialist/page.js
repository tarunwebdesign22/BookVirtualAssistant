"use client";

import {
  Building2,
  Users,
  Mail,
  Network,
  Phone,
  Database,
  Target,
  Share2,
  MessageCircle,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Building2,
    title: "B2B Lead Generation",
    description:
      "Our specialists help you target businesses that align with your services or products. We use data-driven strategies to identify key decision-makers, engage them through personalized outreach, and convert them into long-term clients.",
  },
  {
    icon: Users,
    title: "B2C Lead Generation",
    description:
      "Looking to reach individual customers? Our experts create targeted campaigns using email marketing, social media outreach, and content marketing to connect with potential buyers and drive sales.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Email remains one of the most effective channels for lead generation. Our professionals craft compelling email sequences, personalized messages, and automated follow-ups to nurture leads and increase conversions.",
  },
  {
    icon: Network,
    title: "LinkedIn Lead Generation",
    description:
      "LinkedIn is a powerful platform for connecting with professionals and businesses. Our specialists optimize your LinkedIn presence, conduct outreach campaigns, and build valuable connections that result in high-quality leads.",
  },
  {
    icon: Phone,
    title: "Cold Calling & Appointment Setting",
    description:
      "Sometimes, a direct approach is the best way to generate leads. Our experienced professionals handle cold calling, set up appointments, and ensure you're always connected with potential clients who are genuinely interested in your offerings.",
  },
  {
    icon: Database,
    title: "CRM Management",
    description:
      "Keeping track of leads can be overwhelming. Our team helps you organize, track, and manage your leads within your CRM system, ensuring nothing falls through the cracks and opportunities are maximized.",
  },
];

const perkItems = [
  {
    title: "Increased Sales Opportunities",
    description:
      "Our specialists focus on finding prospects that match your target audience, giving your sales team more opportunities to close deals.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial",
  },
  {
    title: "Cost Savings",
    description:
      "Hiring an in-house team can be expensive. Our virtual assistants offer expert services at a fraction of the cost without compromising quality.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Time Efficiency",
    description:
      "Outsourcing lead generation lets you concentrate on your core business activities while we handle the heavy lifting of prospecting and nurturing leads.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Access to the Latest Tools",
    description:
      "Our experts are equipped with the latest lead generation tools and software to ensure efficient tracking, automation, and analysis of your campaigns.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
  {
    title: "Flexible Hiring Options",
    description:
      "Whether you need short-term support for a campaign or a dedicated specialist for ongoing projects, we offer flexible hiring solutions to meet your business goals.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Data Security",
  },
];

const processSteps = [
  {
    title: "Understanding Your Business Needs",
    description:
      "We begin by analyzing your business goals, target audience, and lead generation requirements. Our experts will work with you to outline a customized strategy that aligns with your objectives.",
  },
  {
    title: "Strategy Development",
    description:
      "Our lead generation specialists create a tailored action plan using proven tactics such as email marketing, social media outreach, and targeted campaigns to attract potential customers effectively.",
  },
  {
    title: "Implementation and Execution",
    description:
      "Once the strategy is finalized, our specialists put the plan into action. They utilize the latest tools and industry best practices to capture and nurture leads that convert into loyal customers.",
  },
  {
    title: "Performance Tracking and Optimization",
    description:
      "We continuously monitor the performance of your lead generation campaigns, analyzing data to identify trends and areas for improvement. Our goal is to maximize your ROI and deliver consistent growth.",
  },
  {
    title: "Ongoing Support and Growth",
    description:
      "Our partnership doesn't end with lead generation. We provide ongoing support, updates, and guidance to help your business scale effectively and maintain a steady flow of high-quality leads.",
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

const strategyItems = [
  {
    icon: Target,
    title: "Identifying Your Ideal Customer Profile",
    description:
      "By analyzing market trends and customer behavior, our specialists pinpoint the right audience, ensuring that your efforts target those most likely to convert.",
  },
  {
    icon: Share2,
    title: "Multi-Channel Approach",
    description:
      "Utilizing a mix of channels—such as social media, email, and search engines—helps maximize reach and engage potential leads through various touchpoints.",
  },
  {
    icon: MessageCircle,
    title: "Personalized Engagement",
    description:
      "Crafting tailored messages based on customer preferences and behaviors enhances connections and increases the likelihood of conversions.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    description:
      "Our specialists continuously analyze key metrics to refine strategies, focusing on what works best to drive consistent growth and optimize lead generation efforts.",
  },
  {
    icon: HeartHandshake,
    title: "Lead Nurturing Techniques",
    description:
      "Building trust through follow-ups, educational content, and strategic touchpoints helps guide leads through the buying journey and improves conversion rates.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "New York",
    location: "USA",
    quote:
      "Working with Book Virtual Assistant has transformed our sales pipeline. Their team consistently delivers high-quality leads, allowing us to focus on closing deals.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "California",
    location: "USA",
    quote:
      "We were struggling to generate leads until we hired BVA's specialists. Their approach is strategic, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Robert L.",
    role: "Texas",
    location: "USA",
    quote:
      "I highly recommend BVA's lead generation services. They've helped us expand our reach and improve our customer acquisition efforts.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does a lead generation specialist do?",
    answer:
      "A lead generation specialist identifies potential customers, nurtures them through various channels, and helps convert them into paying clients through strategic outreach and follow-ups.",
  },
  {
    question: "How can lead generation benefit my business?",
    answer:
      "Lead generation helps businesses build a pipeline of potential customers, leading to increased sales, better brand awareness, and sustainable growth.",
  },
  {
    question: "Can I hire a lead generation specialist for a short-term project?",
    answer:
      "Yes! We offer flexible hiring options, whether you need short-term assistance or long-term support for your business.",
  },
  {
    question: "How much does it cost to hire a lead generation expert?",
    answer:
      "Our pricing is tailored to your specific needs. Contact us today to get a customized quote based on your business requirements.",
  },
];

export default function HireLeadGenerationSpecialistPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Lead Generation Specialists",
              description: (
                <>
                  To boost the growth of your business, it&apos;s time you{" "}
                  <span className="font-semibold text-primary">hire the best lead generation experts</span>{" "}
                  from Book Virtual Assistant. As a leading outsourcing India-based company, we don&apos;t
                  compromise with the quality of service. Our lead generation specialists not only generate
                  high-quality leads but also nurture them effectively with proven strategies and advanced
                  tools.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/hire-lead-generation-specialist-bn.png",
              imageAlt: "Hire Lead Generation Specialists",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "lead-gen-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Why Businesses Trust Us: The Numbers Say It All",
              items: [
                {
                  value: "50+",
                  label: "Lead Generation Specialists",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "500+",
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
              title: "Comprehensive Lead Generation Services Tailored for Your Business",
              description: (
                <>
                  When you{" "}
                  <span className="font-semibold text-foreground">hire a top lead generation professional</span>{" "}
                  from Book Virtual Assistant, you get access to a wide range of services customized to fit
                  your business needs.
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
                  <span className="font-semibold text-foreground">hire lead generation specialist</span>, we
                  offer some exclusive benefits for your business success:
                </>
              ),
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "Simplified Hiring Process to Find the Right Lead Generation Specialist",
              description: (
                <>
                  Get started with the{" "}
                  <span className="font-semibold text-foreground">
                    best freelance lead generation experts for hire!
                  </span>{" "}
                  Our step-by-step approach ensures a smooth hiring process, helping you connect with skilled
                  professionals who can drive real business growth.
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
              title: "Hear From Our Happy Clients",
              items: testimonials,
            },
            reasons: {
              badge: "Strategies",
              title: "Strategies Our Lead Generation Specialist Can Implement for Your Business Growth",
              description:
                "Effective lead generation goes beyond just finding potential customers—it's about implementing the right strategies to attract, engage, and convert them into loyal clients.",
              columns: 3,
              items: strategyItems,
            },
            reasonsAfterTestimonials: true,
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring a Lead Generation Specialist",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
