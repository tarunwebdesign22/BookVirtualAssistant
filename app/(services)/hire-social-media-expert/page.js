"use client";

import {
  Share2,
  Camera,
  Briefcase,
  PlayCircle,
  Bookmark,
  MessageCircle,
  Crosshair,
  UserPlus,
  Star,
  Clock,
  BadgeCheck,
  BadgeDollarSign,
  SlidersHorizontal,
  Users,
  Target,
  BarChart3,
  Globe,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ServicePage from "../../../components/servicepage/ServicePage";

const serviceItems = [
  {
    icon: Share2,
    title: "Facebook Marketing",
    description:
      "Facebook assists you in connecting with the appropriate target market. To reach the micro audience for your brand and business, our social media marketing experts upload and promote photographs, videos, slideshows, product collections, deals, and event promotions.",
  },
  {
    icon: Camera,
    title: "Instagram Marketing",
    description:
      "Instagram can be used for visual marketing effectively; we can also support you in advertising on this platform and reaching your target audience with photos, videos, carousels and story highlights.",
  },
  {
    icon: Briefcase,
    title: "Marketing on LinkedIn",
    description:
      "LinkedIn supports various ad types and bidding tactics. To boost your brand's visibility and generate leads and sales, work with our social media marketing (SMM) professionals. We can help you choose the right advertisements to use (video, images, text, sponsored content, follow company, sponsored InMail, etc.) and target B2B audiences.",
  },
  {
    icon: PlayCircle,
    title: "YouTube Marketing",
    description:
      "Visitors can easily consume and share original content through YouTube marketing. Hire a social media advertising expert to work on paid card ads, display ads, overlays, skippable and non-skippable videos, and remarketing to get more people to know about your products or services.",
  },
  {
    icon: Bookmark,
    title: "Pinterest Marketing",
    description:
      "You can get ideas and inspiration on Pinterest, but it's also a fantastic way to sell your business. Along with helping to bring visitors straight to your website, our SMM professionals highlight your blog entries on Pinterest.",
  },
  {
    icon: MessageCircle,
    title: "Twitter Marketing",
    description:
      "Expanding brand recognition and loyalty requires you to build your follower base. Employ social media professionals to highlight tweets, profiles, and trends. Boost followers, awareness, video views, online traffic, and app installs, and create more leads.",
  },
  {
    icon: Crosshair,
    title: "Social Media Targeting",
    description:
      "Using demographics, age, professional experience, and similar other criteria, customize your social media post to directly target the audience you want to reach.",
  },
  {
    icon: UserPlus,
    title: "Generation Lead",
    description:
      "Get professionals in social media marketing to create leads across several social media platforms and develop winning plans. This allows you to boost the online presence of your business and revenue.",
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description:
      "Employ trained social media marketing professionals from BVA to explore, find, and interact with influencers capable of significantly affecting the audience of your brand, products, and services.",
  },
];

const highlightItems = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Let us handle your social media so you may focus on other business matters.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Results",
    description: "Use experts who know the newest trends and algorithms.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective Solutions",
    description: "A social media professional is cheaper than an in-house staff.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Options",
    description: "Hire part-time, full-time, or project-based to fit your requirements and budget.",
  },
];

const reasonItems = [
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "Our team consists of professional employees who have been working in the sphere of social media management for quite a while, managing successful campaigns in different fields.",
  },
  {
    icon: Target,
    title: "Custom Strategies",
    description:
      "We know that a single solution would not be suitable in every case. With all our strategies, we take time to understand your business needs and objectives.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "We strive to provide our clients with clear progress updates and extensive reporting on weighted averages.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We cater to businesses worldwide, offering insights that resonate with diverse audiences.",
  },
];

const processSteps = [
  {
    title: "Consultation",
    description: "Share with us your social media requirements, corporate goals, and difficulties.",
  },
  {
    title: "Customized Plan",
    description:
      "We develop a customized plan based on your input that details the projected results and extent of effort.",
  },
  {
    title: "Expert Selection",
    description: "We find you a social media specialist whose qualifications meet your needs.",
  },
  {
    title: "Plan Implementation",
    description:
      "Once you accept, your expert starts to work applying techniques and regularly updating.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our staff is always ready to answer questions and guarantee the seamless running of your campaigns.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    location: "Los Angeles",
    quote:
      "Hiring a social media expert from Book Virtual Assistant was the best decision for our business. Our engagement rates have skyrocketed!",
    rating: 5,
  },
  {
    name: "Mark Andrews",
    role: "CEO",
    location: "New York",
    quote:
      "Their strategic approach and consistent communication made a huge difference. Highly recommend their services!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Which platforms do Social Media Experts specialize in?",
    answer:
      "All the significant aspects of social media marketing, also referred to as the primary digital communication channels like, Facebook, Instagram, LinkedIn, Twitter and TikTok and Pinterest are areas of specialization of our team.",
  },
  {
    question: "How can the content complement my brand?",
    answer:
      "We invest time in learning about your brand identity, target audience, and goals so that all of the content speaks to your beliefs and voice.",
  },
  {
    question: "Are you able to oversee marketing campaigns too?",
    answer:
      "Indeed, our social media consultants are adept at designing, running, and maximizing social media marketing campaigns for the greatest return on investment.",
  },
  {
    question: "When could I start to experience changes?",
    answer:
      "Organic development takes time, but our professionals aim to produce quantifiable results within the first few weeks—especially for sponsored promotions.",
  },
];

const introParagraphs = [
  <>
    The role of social media for your brand can go as far and deep as the growth of your brand and even
    creating leads and sales. The need gets emphasized as other marketing campaigns shift to the online
    space; you require to{" "}
    <span className="font-semibold text-foreground">hire a social media marketing expert</span> who drives
    brand creation. However, it may be costly, particularly for small and medium-sized businesses, to have a
    staff of social media marketing specialists.
  </>,
  <>
    Book Virtual Assistant can help you save a ton of money on your internet marketing by offering a robust
    social media marketing strategy. With timely tweets, visually appealing Instagram photos, educational
    LinkedIn articles, and much more, we at BVA also make sure that your brand remains relevant in the eyes
    of your current audience.
  </>,
];

export default function HireSocialMediaExpertPage() {
  return (
    <>
      <Header />
      <main>
        <ServicePage
          data={{
            hero: {
              badge: "Social Media Marketing",
              title: "Hire The Best Social Media Growth Experts",
              description: (
                <>
                  Keeping a strong social media presence is not optional in the fast-paced digital
                  environment of today; it is rather necessary. When you choose to{" "}
                  <span className="font-semibold text-primary">hire a social media marketing expert</span>,
                  you gain tailored strategies and solutions specific to your company&apos;s needs, whether
                  your goals are increasing brand awareness, interacting with your audience, or generating
                  sales. At Book Virtual Assistant, we have committed social media professionals with
                  experience developing and implementing plans catered to your particular objectives.
                </>
              ),
              ctaLabel: "Share Your Requirement",
            },
            intro: {
              title: "How Our Social Media Experts Help You",
              paragraphs: introParagraphs,
            },
            contactForm: {
              title: "Share Your Requirement",
              idPrefix: "social-media-service",
            },
            services: {
              badge: "Our Services",
              title: "Tell Your Brand's Story with Our Social Media Services",
              columns: 3,
              items: serviceItems,
            },
            highlights: {
              badge: "Advantages",
              title: "Advantages of Hiring a Social Media Expert",
              description:
                "When you hire Social Media Marketing Freelancers & Consultants from us, you are guaranteed to get more than just basic work. Additional perks for opting for BVA's social media services include:",
              items: highlightItems,
            },
            reasons: {
              badge: "Why India",
              title: "Why Companies Choose Indian SMM Experts",
              description:
                "Book Virtual Assistant is unique among providers of virtual assistants in terms of quality and outcomes, as it is a reputable one. Hire the best social media growth experts to rely on strategy and creativity. Make that digital presence reach the right audience!",
              columns: 2,
              items: reasonItems,
            },
            process: {
              badge: "Our Process",
              title: "Hiring a Social Media Expert : How to Do It",
              steps: processSteps,
            },
            testimonials: {
              badge: "Testimonials",
              title: "Client Testimonials",
              items: testimonials,
            },
            faqs: {
              badge: "FAQ",
              title: "FAQs About Employing a Social Media Expert",
              items: faqs,
            },
          }}
        />
      </main>
      <Footer />
    </>
  );
}
