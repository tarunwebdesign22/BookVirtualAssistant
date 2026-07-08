"use client";

import {
  FileText,
  PenLine,
  TrendingDown,
  Boxes,
  ImageIcon,
  Package,
  MapPin,
  BarChart3,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: FileText,
    title: "eBay Listing Creation and Optimisation",
    description:
      "Our team will assist in creating high-quality listings and milestones that encompass all the elements that contribute to your listings' ranking. Additionally, they investigate and determine the appropriate SEO keywords most relevant to your business so as to assist in enhancing the volume of sales.",
  },
  {
    icon: PenLine,
    title: "eBay Description: Writing for Products",
    description:
      "Product descriptions are essential for listings. Our experts will develop clear product descriptions. Potential consumers can comprehend the merchandise and make educated purchases. SEO-friendly keywords help shoppers comprehend the goods and boost listing ranking.",
  },
  {
    icon: TrendingDown,
    title: "eBay Price Research",
    description:
      "Competitive pricing might give you an edge over your competition. We will undertake pricing research and niche-specific competition analysis to determine the correct price and analyse your major competitor's strategy. Also, we will assist you in creating competitive prices to increase sales and consumers.",
  },
  {
    icon: Boxes,
    title: "eBay Inventory Management",
    description:
      "Inventory management is essential for successful operations. Our virtual assistants will track your inventory purchase and sale orders and warn you when inventory drops below a specific level. This will keep you in stock and expedite orders.",
  },
  {
    icon: ImageIcon,
    title: "Basic Photo Editing & Resizing",
    description:
      "Quality photographs in your ads assist buyers in grasping your product and its benefits. We edit product photos to make them clear and resize them to match your listing and make them appealing to buyers.",
  },
  {
    icon: Package,
    title: "Order Processing",
    description:
      "From client order to delivery, eBay order processing involves multiple processes. Our virtual assistants will ensure smooth processing and notify you of order fulfilment. We'll handle any difficulties too.",
  },
  {
    icon: MapPin,
    title: "Adding tracking to eBay orders",
    description:
      "Tracking your sale order helps you uncover delivery issues. These insights can save expenses and speed client fulfilment. Also, our decade-experienced virtual assistants can help you track eBay orders.",
  },
  {
    icon: BarChart3,
    title: "eBay Competitor Analysis and Market Research",
    description:
      "Sellers must outperform their competitors to survive in a competitive market. Our team will conduct a niche-specific competition analysis to establish optimal pricing and analyse your top rival's approaches. We will help you set competitive prices to attract more customers and boost sales.",
  },
];

const perkItems = [
  {
    title: "Unmatched Expertise",
    description:
      "Our team members bring extensive experience in managing eBay stores and possess in-depth knowledge of the eBay platform and its unique interface.",
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
    title: "Cost-Effective Services",
    description:
      "Opting to employ the help of an eBay expert is a beneficial decision that results in better outcomes than having an internal staff.",
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
      "Based on your needs, we shall provide you with a qualified eBay Expert who meets your demands.",
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
    title: "Optimized Product Listings",
    description:
      "Our eBay specialists craft compelling titles, accurate descriptions, and keyword-rich content that improves your product's visibility and search rankings. This ensures your listings stand out in a crowded marketplace.",
    image: "/images/services/audience-targeting.jpg",
    imageAlt: "Optimized Product Listings",
  },
  {
    title: "Competitive Pricing Strategies",
    description:
      "Staying ahead of the competition requires a smart pricing approach. Our experts analyze market trends and competitor pricing to position your products attractively without compromising your profit margins.",
    image: "/images/services/keyword-research.jpg",
    imageAlt: "Competitive Pricing Strategies",
  },
  {
    title: "Professional Visuals and SEO",
    description:
      "High-quality images and SEO-focused content are critical for capturing buyer attention. Our team ensures your product photos are clear and professional, while the accompanying text is optimized for search engines.",
    image: "/images/services/utilizing-gafour.jpg",
    imageAlt: "Professional Visuals and SEO",
  },
  {
    title: "Effective Store Management",
    description:
      "Our eBay professionals manage inventory, update stock levels, and ensure timely responses to buyer inquiries, helping maintain a seamless shopping experience and positive seller reputation.",
    image: "/images/services/competitive-analysis.jpg",
    imageAlt: "Effective Store Management",
  },
  {
    title: "Data-Driven Insights",
    description:
      "We use analytics to identify best-selling products, customer preferences, and growth opportunities. These insights guide our strategies, ensuring that your eBay store remains competitive and profitable.",
    image: "/images/services/ad-copy-optimization.jpg",
    imageAlt: "Data-Driven Insights",
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
    role: "Los Angeles",
    location: "USA",
    quote:
      "Working with Book Virtual Assistant's eBay experts was a game-changer for my business. They optimized my listings, implemented effective strategies, and significantly increased my sales within weeks. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mark R.",
    role: "Chicago",
    location: "USA",
    quote:
      "I was impressed by the professionalism and expertise of the eBay specialists. They handled everything from inventory management to customer queries with precision, allowing me to focus on other aspects of my business. Their support is invaluable.",
    rating: 5,
  },
  {
    name: "Emily S.",
    role: "New York",
    location: "USA",
    quote:
      "Hiring an eBay expert from Book Virtual Assistant was one of the best decisions I made for my online store. They revamped my product descriptions and titles, which boosted my visibility and sales. Amazing service!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does an eBay expert do?",
    answer:
      "An eBay specialist runs your business, maximises product listings, controls inventory, and applies marketing techniques to boost sales and enhance the general operating performance of your store.",
  },
  {
    question: "How may an eBay specialist help my company?",
    answer:
      "An eBay specialist may increase exposure, attract more business, and promote sales by implementing tactics including keyword optimisation, competitive pricing, and focused marketing campaigns.",
  },
  {
    question: "Is hiring an eBay expert expensive?",
    answer:
      "Hiring a professional saves time and maximises your income. It's a wise investment. Affordable employment policies such as those presented by Book Virtual Assistant provide flexibility.",
  },
  {
    question: "Can a specialist in eBay assist with customer service?",
    answer:
      "Sure! Professional customer assistance from eBay specialists guarantees prompt replies to questions, management of returns, and preservation of favourable buyer feedback.",
  },
];

export default function HireEbayExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire the best Ebay Listing Experts",
              description:
                "Get eBay Product Listing Services from professionals who can help you take your business to a whole next level. Don't be confined to just the basics. In this time of competition, play smart and scale with Book Virtual Assistant experts.",
              ctaLabel: "Share Your Requirement",
              image: "/images/services/ebay-listing-experts-bn.png",
              imageAlt: "Hire the best Ebay Listing Experts",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "ebay-expert-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover the Numbers That Set Us Apart",
              items: [
                {
                  value: "30+",
                  label: "Our eBay Experts",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "2500+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "500+",
                  label: "Satisfied Clients Worldwide",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "14+",
                  label: "Years of Proven Expertise",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "How Can an eBay Virtual Assistant at BVA Assist You?",
              description: (
                <>
                  Book Virtual Assistant provides top-notch, dedicated{" "}
                  <span className="font-semibold text-foreground">eBay product listing services</span> to
                  eCommerce businesses and entrepreneurs.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Why Hire an eBAy Expert from Book Virtual Assistant?",
              paragraphs: [
                <>
                  Book Virtual Assistant is a seasoned provider of ebay services, and our dedicated team will
                  ensure that your company obtains the best results possible.
                </>,
              ],
            },
            perks: {
              items: perkItems,
            },
            howToHireBeforePricing: true,
            howToHire: {
              badge: "Get Started",
              title: "Process for Hiring an eBay Expert",
              description:
                "As for connecting with our services, there can be no trouble or confusion. Follow these steps to hire your eBay expert today:",
              ctaLabel: "Hire eBay Expert",
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
              title: "Winning Strategies of Our eBay Experts",
              description:
                "When it comes to succeeding on eBay, having the right strategies can make all the difference.",
              columns: 3,
              items: strategyItems,
            },
            reasonsAfterTestimonials: true,
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Ebay Expert",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
