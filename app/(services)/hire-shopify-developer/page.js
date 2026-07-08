"use client";

import {
  Store,
  Smartphone,
  Link2,
  Palette,
  Code2,
  ArrowRightLeft,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Store,
    title: "Shopify Setup Services",
    description:
      "Setting up a Shopify store requires more than just creating an account; it needs a strategic approach to ensure your store is optimized. When you hire Shopify developer experts from us, we take care of everything to get you started, from integrating social media to setting up your domain. Our Shopify store development services help you manage inventory, process orders, and interact with customers effortlessly.",
  },
  {
    icon: Smartphone,
    title: "Shopify Mobile App Development",
    description:
      "Our custom Shopify development services focus on creating user-friendly apps for iOS and Android platforms. We prioritize clear navigation, fast load times and advanced functions tailored to your business needs. Our developers will integrate features such as in-app chat messengers, push notification and built-in analytics to keep your customers engaged and informed.",
  },
  {
    icon: Link2,
    title: "Shopify Integration Services",
    description:
      "Our Shopify store development services are designed to expand your store's capabilities and simplify operations. When you work with Book Virtual Assistant, we can smoothly integrate payment systems, shopping carts, CRM systems and other essential tools to enhance processes. This will allow your store to deliver a better shopping experience and optimize backend processes for efficiency.",
  },
  {
    icon: Palette,
    title: "Shopify Theme Development",
    description:
      "Our Shopify store development services focus on creating mobile-friendly, cross-browser-compatible themes that improve your brand's online presence. We work with UI/UX designers to create visually stunning themes. Our developers use their expertise in HTML, CSS and JavaScript to build custom themes that align with your brand's identity.",
  },
  {
    icon: Code2,
    title: "Shopify Web Development",
    description:
      "Our custom Shopify development services are skilled in HTML, CSS, SQL and MySQL, allowing them to create customized e-Commerce solutions according to your objectives. We focus on creating websites that are visually appealing, optimized for speed, security and scalability. We will ensure that your store stands out from your competitors and provide a seamless experience for your customers.",
  },
  {
    icon: ArrowRightLeft,
    title: "Shopify Migration Services",
    description:
      "We can make transitioning your online store to Shopify from platforms like Volusion, BigCommerce and WooCommerce easier and with minimal disruptions to your business. We handle everything from transferring product data and customer information to preserving SEO rankings.Hire Shopify developer professionals who can transition your store smoothly with zero disruption.",
  },
  {
    icon: Wrench,
    title: "Shopify Upgrading & Extension",
    description:
      "Our custom Shopify development services will help you evolve your business to meet your needs and stay competitive. We specialize in upgrading Shopify's basic features such as finance, shipping, inventory management, etc. We also create customized extensions to connect external resources and boost your store's capabilities. Book Virtual Assistant delivers customized solutions for custom apps to streamline operations and connect with third-party apps.",
  },
  {
    icon: ShieldCheck,
    title: "Shopify Maintenance",
    description:
      "We will ensure that your Shopify store is regularly optimized for high performance and maintenance. Our custom Shopify development services will provide you with full maintenance services to keep your website and app running smoothly. Our team will monitor your store, update product catalogs, manage plugins and address any technical issues to prevent downtime. With regular maintenance, your store will remain secure, up-to-date and in-line with latest Shopify updates.",
  },
];

const perkItems = [
  {
    title: "Certified Experts with Proven Experience",
    description:
      "Our Shopify developers, being certified professionals, have experience in managing diverse ecommerce stores, be it a startup or established businesses.",
    image: "/images/services/Free-Trial-3.png",
    imageAlt: "Free Trial NFT Developer from India",
  },
  {
    title: "Customization Solutions",
    description:
      "Whether you need a full-scale eCommerce store or want to revamp your existing one, we deliver solutions that align with your vision.",
    image: "/images/services/Free-Recruitment-2.png",
    imageAlt: "Free Recruitment",
  },
  {
    title: "Cost-Effective Services",
    description:
      "With Book Virtual Assistant, hire Shopify developers online at a fraction of the cost. Choose part-time or full-time developers based on your budget and requirements.",
    image: "/images/services/Zero-Overheads.png",
    imageAlt: "Zero Overheads",
  },
  {
    title: "Commitment to Quality",
    description:
      "Rest assured we aim to deliver error-free, high-performance Shopify stores that drive results.",
    image: "/images/services/Data-Security-5.png",
    imageAlt: "Data Security",
  },
];

const processSteps = [
  {
    title: "Analysis",
    description:
      "The hired Shopify programmers carefully examine your needs before creating a custom app or shop.",
  },
  {
    title: "Planning",
    description:
      "After a thorough assessment of the technical aspects, we create an executable project plan.",
  },
  {
    title: "Prototype",
    description:
      "After creating a prototype using design elements and mock-ups, your Shopify developers share it with you.",
  },
  {
    title: "Development",
    description:
      "After your committed Shopify developer starts working on the project, they make as many changes as necessary.",
  },
  {
    title: "Test & Launch",
    description: "Website developers provide you a bug-free product by testing each product.",
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
    name: "Emily Davis",
    role: "Retail Business Owner",
    location: "USA",
    quote:
      "Book Virtual Assistant transformed our online store into a thriving eCommerce business. Their Shopify developers understood our needs and delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "John Miller",
    role: "Tech Entrepreneur",
    location: "USA",
    quote:
      "The team at Book Virtual Assistant made our migration to Shopify seamless. We couldn't have asked for better support.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Owner, Trendy Treasures, California",
    location: "USA",
    quote:
      "Their team was always available, offering support and innovative ideas that made a real difference to our business.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How may a Shopify developer help my online store flourish?",
    answer:
      "Customizing the appearance of your shop, improving site performance, and including necessary functionality can help a Shopify developer increase user experience. We guarantee flawless operation, therefore increasing client satisfaction and sales.",
  },
  {
    question: "Is hiring a committed Shopify developer reasonably affordable?",
    answer:
      "Indeed, assigning a committed Shopify developer guarantees you professional help catered to your requirements. This reduction in trial-and-error costs enables faster, more efficient solutions.",
  },
  {
    question: "If I bring on a developer, would I still have control over my Shopify store?",
    answer:
      "Surely! Working with you, a Shopify developer executes your idea. Your store will always be within your control and access; their knowledge will help you to improve it.",
  },
  {
    question: "How long are Shopify development projects taking to finish?",
    answer:
      "The course of your project will determine the chronology. Whether it's a straightforward modification or a sophisticated shop layout, our designers will clearly provide a schedule throughout the consulting stage.",
  },
];

export default function HireShopifyDeveloperPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              title: "Hire Shopify Developers for Your Store",
              description: (
                <>
                  Your online store need the best platforms, and Shopify has become one of the most popular
                  solutions for building impressive and effective e-Commerce stores. To take full advantage of
                  Shopify and create a smooth shopping experience, you must{" "}
                  <span className="font-semibold text-foreground">hire Shopify developers</span>. At Book
                  Virtual Assistant, we have skilled and talented Shopify developers who will help transform
                  your ideas into reality with{" "}
                  <span className="font-semibold text-foreground">
                    Shopify store development services
                  </span>
                  . Our developers specialize in{" "}
                  <span className="font-semibold text-foreground">
                    custom Shopify development services
                  </span>{" "}
                  committed to turning your store into a fully functioning one and providing an excellent user
                  experience for your customers.
                  <br />
                  <br />
                  Whether you are launching a new store, upgrading an existing one or requiring regular
                  maintenance, ourShopify store development services are customized to meet your unique
                  business needs. By choosing Book Virtual Assistant, you will gain access to professionals
                  who are capable of the platform's capabilities and are committed to delivering tailored
                  solutions that drive growth and customer satisfaction.
                </>
              ),
              ctaLabel: "Share Your Requirement",
              image: "/images/services/shopify-banner-1.png",
              imageAlt: "Hire Shopify Developers for Your Store",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "shopify-developer-service",
            },
            stats: {
              badge: "Trust Us",
              title: "Effortless eCommerce with BVA's Shopify Experts",
              items: [
                {
                  value: "50+",
                  label: "Number of Shopify Certified Developers",
                  image: "/images/services/inho-dev.png",
                  imageAlt: "In-House Developers",
                },
                {
                  value: "2500+",
                  label: "Online Stores Delivered",
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
              title: "Transform your Store with Expert Shopify Development Services",
              description: (
                <>
                  Book Virtual Assistant offers high quality{" "}
                  <span className="font-semibold text-foreground">
                    Shopify store development services
                  </span>{" "}
                  to businesses worldwide. Our developers provide you with innovation, precision and a
                  customer-centric approach to every project. We have outlined the comprehensive Shopify
                  services that we offer to elevate your e-commerce store to the next level.
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            introSecondary: {
              title: "Unbeatable Savings Await You at BVA!",
              paragraphs: [],
            },
            perks: {
              items: perkItems,
            },
            process: {
              badge: "Our Process",
              title: "BVA's 5-Stage Shopify Development Process",
              steps: processSteps,
            },
            intro: {
              title: "Why choose Book Virtual Assistant for Shopify Development?",
              paragraphs: [
                <>
                  By choosing to <span className="font-semibold text-foreground">hire Shopify developers</span>{" "}
                  from us, you will gain access to a team that is fully committed to your goals. We focus on
                  clear communications, on-time-delivery and customized solutions to make sure that your
                  Shopify Store exceeds your expectations. Whether you are a small business or a large one,
                  ourShopify store development services are designed to meet your requirements.
                </>,
              ],
            },
            pricing: {
              badge: "Pricing",
              title: "Pricing Plans that Meet Your Needs",
              plans: pricingPlans,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Meet Our Happy Clients!",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "Common Shopify Development FAQs",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
