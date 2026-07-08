"use client";

import {
  FileText,
  Search,
  TrendingUp,
  Palette,
  Boxes,
  Megaphone,
  Headphones,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: FileText,
    title: "Product Listing Optimisation",
    description:
      "In many cases, your listings are the first interface your would-be consumers come across when consulting your catalogs. Our Etsy specialists will correctly set up and complement the descriptions of your items, add appealing pictures, and choose the most relevant keywords to make your products more appealing to the customers and observed in the search in Etsy.",
  },
  {
    icon: Search,
    title: "Etsy SEO Services",
    description:
      "Basically, search engine optimization (SEO) is necessary in order to promote yourself at the top of the list and make sure your site's listings appear in specific categories or keywords. Our team knows Etsy's search engine and improves your product copy, titles, and tags to help your product rank better and get more exposure and buyers.",
  },
  {
    icon: TrendingUp,
    title: "Market Research & Trend Analysis",
    description:
      "With significant amounts of competition in the current world, it's possible to be informed on trends and behaviour patterns to be in a position of enjoying a competitive edge. Our specialists work to find out which items sell well and which niches are popular to help you place your goods correctly and find new directions.",
  },
  {
    icon: Palette,
    title: "Branding & Store Design",
    description:
      "Your store's look plays a significant role in attracting customers. Our Etsy specialists will help you build a cohesive and professional brand image, including shop design, logo creation, banner graphics, and more. A polished look not only builds trust but also creates a memorable experience for your customers.",
  },
  {
    icon: Boxes,
    title: "Inventory Management & Order Handling",
    description:
      "Good customer service involves proper management of your stock and timely delivery. We are able to track inventory levels and put up systems on restocking and order fulfilment; our services prevent frequent stock-outs and delayed deliveries in a business.",
  },
  {
    icon: Megaphone,
    title: "Etsy Marketing & Promotion",
    description:
      "Some products require better market exposure to sell as compared to other products that sell well without much advertising. Our Etsy consultants help manage email campaigns, social media initiatives, and the use of Etsy ads and promotions. Specifically, we will use coupon codes, discounts for a limited time, and free shipping to encourage customers to visit your store more often.",
  },
  {
    icon: Headphones,
    title: "Customer Support Management",
    description:
      "Maintaining positive relationships with customers is essential for repeat business. Therefore, we assist you in handling customers' requests, interacting with them, and addressing the negative comments so that your shop maintains the best image on the internet.",
  },
];

const perkItems = [
  {
    title: "Unmatched Expertise",
    description:
      "Our team members bring extensive experience in managing Etsy stores and possess in-depth knowledge of the Etsy platform and its unique interface.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
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
      "Opting to employ the help of an Etsy expert is a beneficial decision that results in better outcomes than having an internal staff.",
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
      "Based on your needs, we shall provide you with a qualified Etsy expert who meets your demands.",
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
      "Our experts craft compelling product titles, descriptions, and tags that not only highlight your products but also make them discoverable through relevant keywords.",
    image: "/images/services/audience-targeting.jpg",
    imageAlt: "Optimized Product Listings",
  },
  {
    title: "Eye-Catching Product Photography",
    description:
      "High-quality, appealing images are a must on Etsy. We help showcase your products in the best light, ensuring they grab customers' attention instantly.",
    image: "/images/services/keyword-research.jpg",
    imageAlt: "Eye-Catching Product Photography",
  },
  {
    title: "Personalized Marketing Plans",
    description:
      "By analyzing your target audience, our experts create tailored marketing campaigns, including promotions, discounts, and email outreach, to drive traffic and boost sales.",
    image: "/images/services/utilizing-gafour.jpg",
    imageAlt: "Personalized Marketing Plans",
  },
  {
    title: "Shop Branding and Aesthetic",
    description:
      "Our team refines your shop's branding—logos, banners, and overall design—to build a professional and cohesive appearance that builds trust.",
    image: "/images/services/competitive-analysis.jpg",
    imageAlt: "Shop Branding and Aesthetic",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Using analytics, we track performance metrics such as conversion rates and traffic sources. These insights guide adjustments to keep your shop growing and thriving.",
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
    name: "Sarah J.",
    role: "Austin, TX",
    location: "USA",
    quote:
      "Hiring an Etsy expert from Book Virtual Assistant was the best decision for my store. They optimized my listings and introduced creative strategies that tripled my sales within months!",
    rating: 5,
  },
  {
    name: "Mike L.",
    role: "Chicago, IL",
    location: "USA",
    quote:
      "The Etsy expert I hired took care of everything, from keyword optimization to customer engagement. Their knowledge and dedication were evident from day one, and I couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Seattle, WA",
    location: "USA",
    quote:
      "I was struggling to gain visibility on Etsy, but their expert completely turned things around. My shop now ranks higher, and my revenue has increased significantly. Highly recommend their services!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What will an Etsy expert do for my store?",
    answer:
      "With an eye towards increasing the performance of your business, an Etsy specialist helps maximise your listings, increase the SEO of your store, design successful marketing strategies, and offer customer care.",
  },
  {
    question: "Can an Etsy specialist assist with the branding for my store?",
    answer:
      "Certainly! Our professionals help you to build a professional and coherent brand by developing logos, banners, and product pictures that capture the character of your shop.",
  },
  {
    question: "How affordable is it to hire an Etsy expert?",
    answer:
      "One reasonably priced substitute for hiring full-time staff is appointing an Etsy specialist. For companies, we provide reasonably priced rates depending on the degree of help required, thereby saving costs.",
  },
  {
    question: "Can I anticipate immediate results?",
    answer:
      "Our professional plans aim to gradually increase your shop's exposure and sales, even though results may not be immediate. We will assist in your tracking of development and required correction of course.",
  },
];

export default function HireEtsyExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire an Etsy Expert to Optimize Your Store",
              description: (
                <>
                  Tired of managing every aspect of your Etsy store on your own? Or struggling with the high
                  costs of hiring in-house staff? Then, Book Virtual Assistant&apos;s, an India-based virtual
                  assistant company with over 15 years of experience,{" "}
                  <span className="font-semibold text-foreground">expert Etsy marketer services</span> is the
                  answer. From boosting your revenue, optimizing the product listings, and enhancing customer
                  support, you get the comprehensive solution for your Etsy business.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/etsy-expert-to-optimize-your-store-bn.png",
              imageAlt: "Hire an Etsy Expert to Optimize Your Store",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "etsy-expert-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover the Numbers That Set Us Apart",
              items: [
                {
                  value: "15+",
                  label: "Our ETSY Experts",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "250+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "100+",
                  label: "Satisfied Clients Worldwide",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "8+",
                  label: "Years of Proven Expertise",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "How Can an Etsy Virtual Assistant at BVA Assist You?",
              description: (
                <>
                  Book Virtual Assistant provides the opportunity to{" "}
                  <span className="font-semibold text-foreground">
                    hire expert Etsy marketers for on demand services
                  </span>{" "}
                  , which covers all aspects of your Etsy business, including:
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Why Should You Hire an Etsy Virtual Assistant from Book Virtual Assistant?",
              paragraphs: [
                <>
                  Book Virtual Assistant is a seasoned provider of Etsy services, and our dedicated team will
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
              title: "Process for Hiring an Etsy Expert",
              description: (
                <>
                  As for connecting with our services, there can be no trouble or confusion. Follow these steps
                  to{" "}
                  <span className="font-semibold text-foreground">
                    hire Etsy marketing experts online
                  </span>{" "}
                  :
                </>
              ),
              ctaLabel: "Hire Etsy Expert",
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
              title: "What Our Clients Say About Hiring Etsy Experts",
              items: testimonials,
            },
            reasons: {
              badge: "Strategies",
              title: "Winning Strategies of Our ETSY Experts",
              description:
                "At Book Virtual Assistant, your business can access expert Etsy marketer services, and what makes us stand out is the flexibility of the VA model. It enables you to increase or decrease the level of VA support services depending on the activities of your eCommerce business.",
              columns: 3,
              items: strategyItems,
            },
            reasonsAfterTestimonials: true,
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring Etsy Experts",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
