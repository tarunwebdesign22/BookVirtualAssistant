export const caseStudyCategories = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    studies: [
      {
        title: "Consult for PPP",
        description:
          "The biggest challenge for us is – the business niche is complete new for us and first we need to understand...",
        image: "/assets/img/business-people-working-together_155003-16002.jpg",
        pdf: "/case-study/case-study-consult-for-ppp-converted.pdf",
      },
      {
        title: "Social Media Marketing",
        description:
          "This Social Media Marketing Case Study featured an Indian-based customer who has a “Home Furnishing” business, named: SASSOON FAB...",
        image:
          "/assets/img/woman-holding-instagram-like-icon-with-his-friends-showing-thumbup-sign_23-2147847475.jpg",
        pdf: "/case-study/case-study-social-media-marketing.pdf",
      },
      {
        title: "Guest Posting & Blog Writing",
        description:
          "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
        image: "/assets/img/business-partners-meet-with-people_482257-79716.jpg",
        pdf: "/case-study/case-study-of-guest-posting-services.pdf",
      },
      {
        title: "Social Media Marketing",
        description:
          "The Social Media Marketing Case Study features a customer US based Software Company, asked us to build traffic and nurture a Facebook and Twitter...",
        image: "/assets/img/teamwork-making-online-blog_53876-94868.jpg",
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
          "In order to develop one of the trusted online payment gateway solutions for companies andpeople which helps to smoothly done online payments across the globe...",
        image:
          "/assets/img/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg",
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
        image: "/assets/img/woman-live-streaming-online-shopping-campaign_53876-96209.jpg",
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
          "To edit more than 4, 00,000 images and carrying out image enhancement within a really short timeframe was a real challenge...",
        image: "/assets/img/photographer-looking-negatives_23-2148019147.jpg",
        pdf: "/case-study/case-study-of-image-processing.pdf",
      },
      {
        title: "Image Editing",
        description:
          "The smart and scalable services to get thousands of Real Estate images edited with superior quality and fast! Our Real Estate Photo Editing Services...",
        image:
          "/assets/img/video-editor-content-creator-filming-tutorial-about-professionally-editing-footage_482257-82231.jpg",
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
  caseStudyCategories[0].studies[3],
];
