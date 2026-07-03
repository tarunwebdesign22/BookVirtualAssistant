export const caseStudyCategories = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    studies: [
      {
        title: "Consult for PPP",
        description:
          "The biggest challenge for us is – the business niche is complete new for us and first we need to understand...",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-consult-for-ppp-converted.pdf",
      },
      {
        title: "Social Media Marketing",
        description:
          "This Social Media Marketing Case Study featured an Indian-based customer who has a “Home Furnishing” business, named: SASSOON FAB...",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-social-media-marketing.pdf",
      },
      {
        title: "Guest Posting & Blog Writing",
        description:
          "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-of-guest-posting-services.pdf",
      },
      {
        title: "Social Media Marketing",
        description:
          "The Social Media Marketing Case Study features a customer US based Software Company, asked us to build traffic and nurture a Facebook and Twitter...",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-of-social-media-marketing.pdf",
      },
    ],
  },
  {
    id: "software-development",
    label: "Software Development",
    studies: [
      {
        title: "NopCommerce Development",
        description:
          "In order to develop one of the trusted online payment gateway solutions for companies and people which helps to smoothly done online payments across the globe...",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-of-nopcommerce-development-paytab.pdf",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    studies: [
      {
        title: "Product Visibility & Drive Sales",
        description:
          "The client has been in the lighting business since 2011, specializing in unique lighting for commercial...",
        image:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-sales-increase-in-different-categories-converted.pdf",
      },
    ],
  },
  {
    id: "graphic-designing",
    label: "Graphic Designing",
    studies: [
      {
        title: "Image Processing",
        description:
          "To edit more than 4,00,000 images and carrying out image enhancement within a really short timeframe was a real challenge...",
        image:
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-of-image-processing.pdf",
      },
      {
        title: "Image Editing",
        description:
          "The smart and scalable services to get thousands of Real Estate images edited with superior quality and fast! Our Real Estate Photo Editing Services...",
        image:
          "https://images.unsplash.com/photo-1598488035139-bdcb86d5c3f2?auto=format&fit=crop&w=1200&q=80",
        pdf: "/case-study/case-study-of-image-editing.pdf",
      },
    ],
  },
];

export const caseStudies = caseStudyCategories.flatMap((category) =>
  category.studies.map((study) => ({
    title: study.title,
    description: study.description,
    image: study.image,
    pdf: study.pdf,
  }))
);

export const homepageCaseStudies = [
  caseStudyCategories[0].studies[0],
  caseStudyCategories[0].studies[1],
  caseStudyCategories[0].studies[2],
  {
    title: "Back Office Operations",
    description:
      "See how a distributed ops pod streamlined recurring tasks and allowed core teams to focus on high-impact strategic goals.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];
