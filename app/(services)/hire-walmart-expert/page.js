"use client";

import {
  Award,
  Settings,
  Headphones,
  BarChart3,
  BadgeDollarSign,
  Store,
  FileText,
  Truck,
  TrendingDown,
  Megaphone,
  Package,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const highlightItems = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Our team is highly skilled in Walmart Marketplace to ensure that your store experiences growth and delivers positive results.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "Our services are designed to fulfill your business demands and support both small sellers and large businesses.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We will provide you with regular support to solve issues and enhance the processes.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Our strategies are crafted to produce tangible results to boost visibility and drive conversion rates.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective Plans",
    description:
      "We offer cost-effective pricing to ensure that you get the best services that fit your budget.",
  },
];

const serviceItems = [
  {
    icon: Store,
    title: "Walmart Store Setup",
    description:
      "Our Walmart virtual assistants will guide you through the whole process, which includes account registration and creating a professional seller profile. We will ensure that your store meets Walmart's guidelines so that it is positioned for long lasting success. This includes arranging payment options, establishing shipping choices and confirming all required documents to comply with Walmart's requirements.",
  },
  {
    icon: FileText,
    title: "Product Listing Optimization",
    description:
      "With our Walmart Virtual Assistant Services, you'll get fully optimized product listings. Our Walmart virtual assistants design titles, descriptions and high-quality images to attract customers. We do detailed keyword analysis to use high performing and relevant keywords to boost your search rankings. Our Walmart advertising approach involves enhancing listings to trending searches, higher visibility and click through rates.",
  },
  {
    icon: Truck,
    title: "Walmart Fulfillment Services (WFS)",
    description:
      "Our Walmart virtual assistants manage inventory, shipping operations and maintain compliance with Walmart's guidelines. We offer swift, reliable shipping to increase customer satisfaction and Buy Box success. When you hire Walmart virtual assistants from us, we will handle the fulfillment tasks so you can focus on business growth.",
  },
  {
    icon: TrendingDown,
    title: "Pricing and Buy Box Strategy",
    description:
      "Our Walmart virtual assistant services can create pricing strategies that balance profit margins according to market demands. We evaluate market trends, pricing of competitors and customer behavior to set prices that enhance your product positioning. Our Walmart virtual assistants focus on achieving consistent Buy Box wins to boost your product visibility and sales.",
  },
  {
    icon: Megaphone,
    title: "Walmart Advertising Campaigns",
    description:
      "Our Walmart virtual assistant services include targeted Walmart advertising campaigns which include Sponsored Products and Display Ads. We refine ad content, control budget and track results to achieve high return on investment. We generate traffic and improve conversions for your store through high impact keywords and tactical bidding.",
  },
  {
    icon: Package,
    title: "Order and Return Management",
    description:
      "Our Walmart virtual assistants manage order processing and returns with care and ensure fast delivery with a smooth experience. We track shipments, process refunds, handle customer queries and resolve issues swiftly to maintain your store's reputation and deliver a smooth customer experience.",
  },
];

const perkItems = [
  {
    title: "Unmatched Expertise",
    description:
      "The members of our team hold extensive experience in working with Walmart and have extensive insights into the Walmart interface.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial",
  },
  {
    title: "Tailored Solutions",
    description:
      "Every business is unique. We give specific business solutions that can meet the objectives and needs of your particular line of business.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Opting to employ the help of a Walmart expert is a beneficial decision that results in better outcomes than having an internal staff.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Dedicated Support",
    description:
      "It means that our specialists work together with your team, providing the necessary support 24/7 to make your store profitable.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
];

const howToHireSteps = [
  {
    title: "Share Your Requirements",
    description:
      "Describe your work, particular assignments, and objectives for your business.",
  },
  {
    title: "Connect with a Virtual Assistant",
    description:
      "Based on your needs, we shall provide you with a qualified Walmart Expert who meets your demands.",
  },
  {
    title: "Start Your Free Trial",
    description:
      "Experience our services with a risk-free trial. Measure the expert's effectiveness and observe changes in your own or your employees' productivity.",
  },
  {
    title: "Scale as Needed",
    description:
      "When your business expands, you don't have to worry about changing your virtual assistant's tasks or hiring new ones.",
  },
];

const strategyItems = [
  {
    title: "Accurate Market Research",
    description:
      "Understanding current trends and consumer preferences helps identify opportunities and ensure that product offerings align with market demand.",
    image: "/images/services/audience-targeting.jpg",
    imageAlt: "Accurate Market Research",
  },
  {
    title: "Efficient Pricing Strategies",
    description:
      "Keeping prices competitive while maintaining value fosters trust and encourages customer loyalty.",
    image: "/images/services/keyword-research.jpg",
    imageAlt: "Efficient Pricing Strategies",
  },
  {
    title: "Clear and Detailed Product Information",
    description:
      "Highlighting accurate product details ensures customer satisfaction and reduces returns, leading to better ratings and reviews.",
    image: "/images/services/utilizing-gafour.jpg",
    imageAlt: "Clear and Detailed Product Information",
  },
  {
    title: "Customer Feedback Integration",
    description:
      "Regularly analyzing customer feedback helps refine product offerings and improve overall store performance.",
    image: "/images/services/competitive-analysis.jpg",
    imageAlt: "Customer Feedback Integration",
  },
  {
    title: "Proactive Performance Tracking",
    description:
      "Monitoring store metrics and making adjustments ensures steady growth and alignment with marketplace standards.",
    image: "/images/services/ad-copy-optimization.jpg",
    imageAlt: "Proactive Performance Tracking",
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
    name: "Sarah T.",
    role: "New York",
    location: "USA",
    quote:
      "Hiring a Walmart expert from Book Virtual Assistant was a game-changer for our business. They optimized our listings, improved our sales performance, and provided valuable insights that helped us grow on the platform.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Los Angeles",
    location: "USA",
    quote:
      "The Walmart specialist we hired was incredibly knowledgeable and proactive. They streamlined our operations, managed our inventory effectively, and ensured our store consistently met performance standards.",
    rating: 5,
  },
  {
    name: "Emily P.",
    role: "Austin",
    location: "USA",
    quote:
      "Book Virtual Assistant's Walmart expert exceeded our expectations. From setting up promotions to enhancing product visibility, their support helped us increase sales and boost our brand's reputation.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is a Walmart specialist, and why should I hire one?",
    answer:
      "A Walmart expert is a professional adept at running Walmart Marketplace locations. To enable your company to flourish on Walmart, they take care of chores such as store layout, product listings, promotion, and compliance.",
  },
  {
    question: "How may a Walmart specialist help my company?",
    answer:
      "Save time, cut costs, and increase sales with professionally optimized listings and smart advertising by working with a Walmart specialist.",
  },
  {
    question: "Which Walmart consultant would be best for my company?",
    answer:
      "We match your particular demands and business objectives to an expert. Before deciding, look at their experience and profile.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We provide hourly, part-time, and full-time hiring schedules, among other flexible choices. Get in touch for tailored pricing depending on your needs.",
  },
];

export default function HireWalmartExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Best Walmart Experts for Hire",
              description: (
                <>
                  Improve your Walmart store&apos;s results with our expert{" "}
                  <span className="font-semibold text-primary">Walmart Virtual Assistant Services</span>.
                  Our tools simplify operations, enhance structure and achieve tangible results for both new
                  and existing Walmart stores. Our{" "}
                  <span className="font-semibold text-primary">Walmart virtual assistants</span> will ensure
                  your store&apos;s success in this challenging market. By choosing our{" "}
                  <span className="font-semibold text-primary">Walmart Virtual Assistant Services</span>, you
                  will have enhanced sales, increased revenue, compelling ads and keyword optimized content.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/walmart-experts-for-hire-bn.png",
              imageAlt: "Best Walmart Experts for Hire",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "walmart-expert-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover the Numbers That Set Us Apart",
              items: [
                {
                  value: "25+",
                  label: "Walmart Experts",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "1000+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "250+",
                  label: "Satisfied Clients Worldwide",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "10+",
                  label: "Years of Proven Expertise",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            highlightsBeforeServices: true,
            highlights: {
              badge: "Why BVA",
              title: "Why Choose Our Walmart Virtual Assistant Services?",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">Walmart Virtual Assistant Services</span>{" "}
                  are customized to simplify demanding tasks and help your Walmart store achieve its full
                  potential. Book Virtual Assistant unites industry experience with custom strategies to
                  deliver impressive results.
                  <br />
                  <br />
                  Here&apos;s why our services stand out:
                </>
              ),
              items: highlightItems,
            },
            services: {
              badge: "Our Services",
              title: "Services Offered by Our Walmart Experts",
              description: (
                <>
                  Our{" "}
                  <span className="font-semibold text-foreground">Walmart Virtual Assistant Services</span>{" "}
                  include a broad range of services to improve and enhance every aspect of your store.
                  Here&apos;s how{" "}
                  <span className="font-semibold text-foreground">our Walmart virtual assistants</span> help
                  you succeed:
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Why Hire a Walmart Expert from Book Virtual Assistant?",
              paragraphs: [
                <>
                  When you{" "}
                  <span className="font-semibold text-foreground">hire Walmart virtual assistants</span> from
                  Book Virtual Assistant, you hire a reliable{" "}
                  <span className="font-semibold text-foreground">Walmart virtual assistants service</span>{" "}
                  provider that is widely known for achieving outstanding results. We have a dedicated staff
                  committed to your store&apos;s success and to providing you with personalized support and
                  strategic data insights. Our proficiency enables launching new stores, optimizing listings
                  and scaling advertising efforts effectively.
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            howToHireBeforePricing: true,
            howToHire: {
              badge: "Get Started",
              title: "Process for Hiring a Walmart Expert",
              description:
                "As for connecting with our services, there can be no trouble or confusion. Follow these steps to hire your Walmart expert today:",
              ctaLabel: "Hire Walmart Expert",
              ctaHref: "/contact-us",
              steps: howToHireSteps,
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
            reasons: {
              badge: "Strategies",
              title: "Winning Strategies of Our Walmart Experts",
              description:
                "Success on Walmart's platform requires more than just listing products—it's about employing smart strategies to gain a competitive edge.",
              columns: 3,
              items: strategyItems,
            },
            reasonsAfterTestimonials: true,
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Walmart Expert",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
