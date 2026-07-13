"use client";

import {
  PhoneIncoming,
  Headphones,
  PhoneOutgoing,
  MessagesSquare,
  Ticket,
  UserCog,
  Building2,
  Cpu,
  Clock,
  MessageSquare,
  Shield,
  TrendingUp,
  Wheat,
  Car,
  PackageCheck,
  GraduationCap,
  Clapperboard,
  Landmark,
  UtensilsCrossed,
  HeartPulse,
  Hotel,
  Truck,
  Scale,
  Factory,
  Building,
  Pill,
  ShoppingBag,
  Home,
  Radio,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: PhoneIncoming,
    title: "Inbound Call Handling",
    description:
      "Our team addresses questions about products, services and accounts with expertise and target 80% call resolution within 20 seconds. This provides clients with reliable, friendly support to enhance their satisfaction in fields like retail, hospitality and telecom.",
  },
  {
    icon: Headphones,
    title: "Technical Assistance",
    description:
      "We offer skilled technical assistance, addressing software problems and helping clients with complex processes. Our staff will provide support via phone, email and live chat to ensure smooth support for fields like IT, manufacturing and healthcare.",
  },
  {
    icon: PhoneOutgoing,
    title: "Telemarketing and Lead Generation",
    description:
      "Our marketing experts enhance growth by advertising your products or services to turn inquiries into sales. We will target your desired audience by using data-driven approaches to enhance revenue for businesses in finance, real estate and e-Commerce.",
  },
  {
    icon: MessagesSquare,
    title: "Multichannel Support",
    description:
      "In addition to phone support, we also provide email, social media, and chat services to ensure you get a uniform brand identity across all channels. This will provide easy access for clients in areas like entertainment, education and logistics.",
  },
  {
    icon: Ticket,
    title: "Ticketing Programs",
    description:
      "Our automatic inquiry tracking system monitors clients' requests and ensures that no inquiry goes unaddressed. This is ideal for sectors like automotive or public sector services, where effective inquiry management is essential.",
  },
  {
    icon: UserCog,
    title: "Virtual Assistant Expertise",
    description:
      "Our global virtual assistant team manages administrative, technical and marketing tasks to ensure end-to-end support for businesses in the agriculture, legal and pharmaceutical fields.",
  },
];

const benefitItems = [
  {
    icon: Building2,
    title: "Industry-Specific Expertise",
    description:
      "With a background in varied sectors like finance, healthcare, retail and additional areas, we are able to understand the nuances of your sector. Our team receives regular training to keep up with industry trends, delivering relevant and high-quality support customized for your business.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "Our call center software smoothly connects with your CRM and communication systems and supplies real-time data for personalized customer interactions. This lowers call handling time and improves customer satisfaction and benefits fields like IT and telecommunications.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: (
      <>
        We provide 24/7{" "}
        <span className="font-semibold text-foreground">inbound call center services</span> to serve global
        clients and ensure timely assistance for businesses with global reach such as logistics and
        hospitality.
      </>
    ),
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Every client receives a dedicated account manager who delivers consistent updates and comprehensive reports through tools like Trello and Jira. This supports cooperation and ensures that your goals are met in fields like education and manufacturing.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Our focus is on safeguarding your data with strict confidentiality policies and robust protective measures to ensure that the industry standard are in compliance. This is essential for fields like finance, healthcare and the legal sector.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Scalability",
    description:
      "Partnering with Book Virtual Assistant removes the need for costly internal infrastructure, thus reducing the expenses by as much as 60%. Our flexible solutions adjust to your business needs by supporting seasonal demands and market growth in sectors like retail and e-Commerce.",
  },
];

const industryItems = [
  { icon: Wheat, title: "Agriculture" },
  { icon: Car, title: "Automotive" },
  { icon: PackageCheck, title: "Customs Brokerage" },
  { icon: Shield, title: "Defense" },
  { icon: GraduationCap, title: "Education" },
  { icon: Clapperboard, title: "Entertainment" },
  { icon: Landmark, title: "Finance" },
  { icon: UtensilsCrossed, title: "Food" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Hotel, title: "Hospitality" },
  { icon: Cpu, title: "Information Technology" },
  { icon: Truck, title: "Logistics" },
  { icon: Scale, title: "Legal" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Building, title: "Public Sector" },
  { icon: Pill, title: "Pharmaceutical" },
  { icon: ShoppingBag, title: "Retail & e-Commerce" },
  { icon: Home, title: "Real Estate" },
  { icon: Radio, title: "Telecommunications" },
];

const introParagraphs = [
  <>
    The success of your company depends on outstanding customer engagement. Our strong{" "}
    <span className="font-semibold text-foreground">call center services</span> deliver quick inquiry
    resolution, customised assistance and efficient processes, enhancing customer satisfaction and
    retention.
  </>,
  <>
    Our services are available 24/7, serving globally and reducing costs by up to 60% compared to internal
    teams. This cost-efficient method allows resources for strategic growth, with our trained specialist
    aligned with your brand&apos;s quality standards.
  </>,
];

const drivingSuccessParagraphs = [
  <>
    Book Virtual Assistant offers more than just starting phase support. We will ensure business operations
    with post-launch maintenance, updates and technical support. Our team employs tools like Google
    Analytics to monitor performance data and provide you with insights to improve customer engagement. In
    addition to this, we also provide SEO and Digital Marketing assistance to elevate your brand&apos;s reach
    and attract clients from various sectors. This complete strategy will ensure that your business remains
    competitive and consistent with your long-term goals.
  </>,
  <>
    We maintain consistent and high-quality services through strict quality control which includes call
    monitoring and staff training to ensure reliable and high standard service delivery. In industries like
    retail and finance, our sales team increases conversions through skilled communications and lead
    cultivation to unlock maximum revenue potential.
  </>,
];


export default function CallCenterServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "Call Center",
              title: "Call Center Services",
              description: (
                <>
                  Book Virtual Assistant enables your company with high-quality{" "}
                  <span className="font-semibold text-primary">call center services</span> customised to boost
                  customer satisfaction and simplify processes. With 14+ years of experience, our personalized
                  services employ innovative technology to handle inquiries, bookings & support and drive
                  customer satisfaction & platform expansion. Our complete approach helps your business flourish
                  in the fast-paced virtual assistant industry.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "Why Choose Book Virtual Assistant for Call Center Outsourcing Services?",
              paragraphs: introParagraphs,
              image: "/images/services/seo-expert-bg.webp",
              imageAlt: "Call center outsourcing team supporting customers",
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "call-center-service",
            },
            services: {
              badge: "Our Solutions",
              title: "Comprehensive Call Center Solutions",
              description: (
                <>
                  We understand that each industry has its own requirements. Book Virtual Assistant creates
                  customized solutions by evaluating your business objectives, target market and operational
                  requirements. Our <span className="font-semibold text-foreground">inbound call center services</span> include:
                </>
              ),
              columns: 3,
              items: serviceItems,
            },
            reasons: {
              badge: "Benefits",
              title: "Benefits of Partnering with Book Virtual Assistant",
              columns: 3,
              items: benefitItems,
            },
            industries: {
              badge: "Industries",
              title: "Industries We Serve",
              description: "Our call center services cater to a wide range of sectors, including:",
              items: industryItems,
              footer:
                "Our broad proficiency ensures we create solutions customized to your sector's needs and evaluate customer support and operational effectiveness.",
            },
            introSecondary: {
              title: "Driving Long-Term Success",
              paragraphs: drivingSuccessParagraphs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
