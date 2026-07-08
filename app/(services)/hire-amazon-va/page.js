"use client";

import {
  Database,
  UserCog,
  TrendingDown,
  Package,
  FileText,
  ImageIcon,
  Megaphone,
  Truck,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Database,
    title: "Comprehensive Product Data Entry Services",
    description:
      "The Amazon virtual assistant team at our company are very skilled at handling product data entry with speed and accuracy. Our team manages everything from collecting detailed product data to organizing SKUs and conducting bulk uploads. Our Amazon virtual assistants can improve your store's sales opportunities by keeping product listings precise, updated and optimized with relevant details. This detailed approach reduces errors, enhances customer trust and increases the product visibility on Amazon's platform.",
  },
  {
    icon: UserCog,
    title: "Seller and Vendor Central Account Management",
    description:
      "Our virtual assistant for Amazon services makes it easier to manage the Seller Central and Vendor Central platforms on Amazon. We can adjust account settings, track performance and maintain overall health of the account. We can improve catalog quality and develop data-driven sales strategies to keep your store running smoothly. We also resolve issues, manage inventory and introduce solutions to improve your account's health.",
  },
  {
    icon: TrendingDown,
    title: "Price Monitoring and Optimization",
    description:
      "Our Amazon's virtual assistants monitor market trends, assess the pricing methods of competition and adapt your product pricing to boost profitability. We will ensure that your prices are customer-friendly yet profitable, helping you excel in the marketplace and sustain conversions.",
  },
  {
    icon: Package,
    title: "Efficient Order Processing",
    description:
      "Our Amazon virtual assistants can simplify the order management process and handle everything from shipment tracking and keeping precise records to managing invoices and processing returns or refunds accurately. We can deliver a smooth customer experience by efficiently managing these tasks to build customer loyalty and maintain high seller ratings.",
  },
  {
    icon: FileText,
    title: "Product Listing Creation & Optimization",
    description:
      "Our virtual assistant for Amazon produces SEO optimized product titles, compelling descriptions and targeted keywords to increase search visibility. We will also enhance backend search terms, improve product images and refine metadata to ensure higher rankings and more clicks.",
  },
  {
    icon: ImageIcon,
    title: "Enhanced Product Image Editing",
    description:
      "Our Amazon's virtual assistants are adept at enhancing product images to ensure they are professional, attractive and meet Amazon's strict requirements. We will also craft visually striking images that focus on your products' strengths to drive sales and elevate customer engagement.",
  },
  {
    icon: Megaphone,
    title: "Amazon PPC Campaign Management",
    description:
      "PPC advertising is an excellent tool for increasing your Amazon sales and managing campaigns. We can optimize ad types, choose effective keywords and monitor performance to minimize ACoS and maximize ROI.",
  },
  {
    icon: Truck,
    title: "Support for Amazon FBA Operations",
    description:
      "An Amazon FBA (Fulfillment by Amazon) business involves managing various tasks to support you. We will deliver smooth FBA operations to manage product sourcing, order tracking, customer inquiries, returns, exchanges and payments.",
  },
];

const perkItems = [
  {
    title: "Experienced Professionals",
    description:
      "When it comes to managing online listings or handling PPC, our VA's can do it all for you.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial",
  },
  {
    title: "Flexible Hiring Models",
    description:
      "We will offer you a VA that can work according to your needs, be it for a few hours a week or full-time support.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "You obtain professional services at significantly lower costs compared to when you hire your own personnel.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Personalized Support",
    description:
      "After understanding your business we match you with a VA whose skills align with your specific needs.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
  {
    title: "24/7 Availability",
    description: "Our global team ensures that your Amazon store is managed round the clock.",
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
      "Based on your needs, we shall provide you with a qualified Amazon VA who meets your demands.",
  },
  {
    title: "Start Your Free Trial",
    description:
      "Experience our services with a risk-free trial. Measure the VA's effectiveness and observe changes in your own or your employees' productivity.",
  },
  {
    title: "Scale as Needed",
    description:
      "When your business expands, you don't have to worry about changing your virtual assistant's tasks or hiring new ones.",
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
    name: "Sarah M.",
    role: "California",
    location: "USA",
    quote:
      "Hiring an Amazon VA from Book Virtual Assistant was a game-changer for my eCommerce store. They handled everything from product listing to inventory management with precision. Their expertise saved me countless hours, and my sales have noticeably improved. Highly recommend it!",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Texas",
    location: "USA",
    quote:
      "The Amazon VA I hired was incredibly professional and detail-oriented. They streamlined my operations, optimized my listings, and even helped improve my customer response time. I couldn't have asked for better support!",
    rating: 5,
  },
  {
    name: "Emma T.",
    role: "New York",
    location: "USA",
    quote:
      "Working with Book Virtual Assistant was one of the best decisions for my online store. My Amazon VA managed tasks efficiently, allowing me to focus on scaling my business. Their service was worth every penny!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What qualifications do your Amazon VAs have?",
    answer:
      "Our Amazon Virtual Assistants are competent and experienced personnel who understand how Amazon Seller Central works. These employees possess profuse knowledge about various processes, including product listing optimization, inventory management, pay-per-click advertising, and customer service.",
  },
  {
    question: "Can I hire a VA for only specific tasks?",
    answer:
      "Absolutely! At Book Virtual Assistant, everything is fully customizable. You may require assistance with a one-time need, such as product look-up or a package where we handle your inventory, customer relations, and marketing needs in addition to general services.",
  },
  {
    question: "Is there a trial period, and how does it work?",
    answer:
      "Yes, we offer free trial services to ensure that you determine the VA's capabilities and aptitude to work for your company. In a trial period, it becomes possible to give tasks to the VA and evaluate their interactiveness and work productivity. However, if you are content, you could go for the long-term hiring of the person in question.",
  },
  {
    question: "Can I scale up or down the services as my business grows?",
    answer:
      "Yes, the services we offer are always unique to our clients, meaning you'll be able to receive solutions that are unique to your business. The software makes it easy to increase your VA's hours, tasks, or hire more VAs.",
  },
];

export default function HireAmazonVaPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Amazon Virtual Assistants Online",
              description: (
                <>
                  Book Virtual Assistant takes pride in being one of the best{" "}
                  <span className="font-semibold text-primary">Amazon virtual assistant companies</span> in
                  India. We deliver expert services and dedicated support to help your Amazon business thrive.
                  Our <span className="font-semibold text-primary">Amazon virtual assistants</span> are
                  proficient in the complex and evolving nature of the Amazon platform.{" "}
                  <span className="font-semibold text-primary">Amazon&apos;s virtual assistant</span>{" "}
                  services from Book Virtual Assistant will make sure that your store operates efficiently and
                  delivers exceptional results through advanced strategies, cutting-edge tools, and standard
                  industry practices. Our services include continuous support from our committed team,
                  designed to meet your unique needs. We provide budget friendly pricing options that support
                  your business, making it easier for you to scale without any financial stress.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/amazon-virtual-assistants-online-bn.png",
              imageAlt: "Hire Amazon Virtual Assistants Online",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "amazon-va-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Discover the Numbers That Set Us Apart",
              items: [
                {
                  value: "100+",
                  label: "Amazon Virtual Assistants",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "6000+",
                  label: "Successful Projects",
                  image: "/images/services/suc-project.png",
                  imageAlt: "Successful Projects",
                },
                {
                  value: "1000+",
                  label: "Satisfied Clients Worldwide",
                  image: "/images/services/global-client-1.png",
                  imageAlt: "Satisfied Global Clients",
                },
                {
                  value: "15+",
                  label: "Years of Proven Expertise",
                  image: "/images/services/year-exp-1.png",
                  imageAlt: "Certificate Icon",
                },
              ],
            },
            services: {
              badge: "Our Services",
              title: "What You Can Expect from Our Amazon Store Virtual Assistant Services",
              description: (
                <div className="space-y-4 text-left">
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      With a professional{" "}
                      <span className="font-semibold text-foreground">Amazon virtual assistant</span> from Book
                      Virtual Assistant, you can redefine the way you manage your Amazon business with our
                      reliable and comprehensive support.
                    </li>
                    <li>
                      We offer{" "}
                      <span className="font-semibold text-foreground">Amazon virtual assistant services</span>{" "}
                      that are designed to handle time-consuming administrative tasks and allow you to focus
                      on growth, revenue, and expanding your business.
                    </li>
                    <li>
                      Our{" "}
                      <span className="font-semibold text-foreground">virtual assistant for Amazon</span>{" "}
                      services are customized to help you succeed in the competitive Amazon marketplace for
                      both small sellers and large enterprises.
                    </li>
                  </ul>
                </div>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Why Choose Book Virtual Assistant for Hiring Amazon VAs?",
              paragraphs: [
                <>
                  Book Virtual Assistant understands the specific challenges of managing a successful Amazon
                  store. Our team is skilled and experienced in driving your business to greater heights.
                </>,
                <>
                  When you hire our Amazon virtual assistant, you get:
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Experienced Professionals</li>
                    <li>Flexible Hiring Models</li>
                    <li>Cost-Effective Solutions</li>
                    <li>Personalized Support</li>
                    <li>24/7 Availability</li>
                  </ul>
                </>,
                <>
                  By partnering with Book Virtual Assistant, we will provide you with a trusted partner
                  committed to driving your Amazon success. Our skilled virtual assistant for Amazon can
                  manage your operations to allow you to focus on business growth, revenue expansion and
                  long-term success.
                </>,
              ],
            },
            perks: {
              badge: "Benefits",
              title: "When you hire our Amazon virtual assistant, you get:",
              items: perkItems,
            },
            howToHireBeforePricing: true,
            howToHire: {
              badge: "Get Started",
              title: "How to Hire an Amazon VA with Book Virtual Assistant",
              description:
                "As for connecting with our services, there can be no trouble or confusion. Follow these steps to hire your Amazon VA today:",
              ctaLabel: "Hire Amazon VA",
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
            faqs: {
              badge: "FAQ",
              title: "Common Questions About Hiring an Amazon VA",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
