import PageHeader from "./PageHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Alisa",
    location: "Thailand",
    quote:
      "These guys deliver on what they promise, although a little later than expected by both parties. They handle scope creep well and continue working until you are a satisfied client. As long as you define clearly your expectations and delivery timeline then you will be well served by these guys. I recommend them.",
  },
  {
    name: "Mowgli Montier",
    location: "Germany",
    quote:
      "When we decided to relocate our data entry service outside of Germany, we wanted to find the best partner in term of ongoing communication and ethic. It became quickly evident that Book Virtual Assistant would be our partner of choice, what we didn't expect was to receive such a high quality of service days after days. Thanks to Book Virtual Assistant we have reduced our data entry service levels by 10 time and freed up in-house resources to handle real-time customers queries.",
  },
  {
    name: "Chris Horsnell",
    role: "E-Commerce Manager at Specialist Crafts",
    quote:
      "Tech2Globe Web Solutions has helped us reach our ROAS goals and boost our ad revenue. When there are problems or requests, the crew responds quickly and efficiently. In addition, they are very informed, helpful, and finish assignments on time. (Source: DesignRush)",
  },
  {
    name: "Richard Foster Test",
    role: "Sales & Marketing",
    quote:
      "Quality work from a team that know what they are doing. We wrestled with Google Products for weeks before Tech2globe got involved. They solved in the issues in just a few hours. Looking forward to working together again.",
  },
  {
    name: "The Woodenstreet Furnitures Pvt. Ltd",
    role: "Head of Partner Manager",
    quote:
      "This is the first time we availed services from Book Virtual Assistant for our Amazon Business i.e. Wooden Street. We are really happy and impressed with the team or services provided by them, We have started taking services from 07 March 2022, Team response is amazing and very energetic, We are really happy to work with them. Will surely recommend everyone who wants this type of service for the growth of their business.",
  },
  {
    name: "Javier Morales",
    role: "Head of Partner Manager",
    quote:
      "Excellent service Quality by Ritu & Chavy.. Quick to revert on any queries or issues. Delivery time to be bettered or improved a bit though.",
  },
  {
    name: "Luca Romano",
    role: "Director of Partner Management",
    quote:
      "Hardworking team with the main target of growing your business. We have just started working and the team is warm and instantly available for all confusions and help in establishing your Amazon business.",
  },
  {
    name: "Alex",
    location: "London",
    quote:
      "Book Virtual Assistant is a great company that provides high-quality services. They work very closely with our management and are on continuous communication and collaboration with our team. They have helped us increase our sales and optimize our processes. The overall experience has been amazing so far.",
  },
  {
    name: "Marco Moretti",
    role: "Owner",
    quote:
      "I have received the photos back from many jobs and they are always great! The editing service was cost-effective, and Book Virtual Assistant Web Solutions was friendly to work with.",
  },
  {
    name: "Bobby",
    location: "USA",
    quote:
      "We commend your quick actions to our requests and appreciate your eagerness to learn our processes and standards. It is almost more than 6 Months we are engaged with Book Virtual Assistant and from first week we have been receiving numerous compliments on our website. Our company is really happy to hire Full Time Equivalent (FTE) professionals at Book Virtual Assistant.",
  },
  {
    name: "Jan Kowalski",
    role: "Sales & Marketing",
    quote:
      "I m very much satisfied with the Book Virtual Assistant team they assigned me. All the team members are very knowledgeable about everything and their quality of work is very impressive.",
  },
  {
    name: "Lars Pedersen",
    role: "Sales & Marketing",
    quote:
      "This is my very first time I availed of service from Book Virtual Assistant and amazed by the quality of service they have provided. I have been running my Amazon business for over a year now and have worked with many service providers before. For the very first time, I realized that I have invested with a proper vendor with 100% worth of my money. I am definitely a returning customer for all my Amazon service needs and I highly recommend Book Virtual Assistant.",
  },
  {
    name: "William Newsome",
    role: "Project Manager",
    quote:
      "I was extremely satisfied with the infographics created for my company! They were very timely and communications were excellent! We even spoke by phone on occasion. I would highly recommend this company and I plan to use them again for future projects e.g. listing creation, optimization, etc. Thank you, Anurag!",
  },
  {
    name: "Michael Burns Offshore",
    role: "IT Consultant based in USA",
    quote:
      "I have been outsourcing IT work for a couple of years to offshore locations and have worked with many solutions companies, but by far I have found Book Virtual Assistant to be the best. Their product development strategies were incredible and far exceeded my expectations. We are very happy to have done business with them and look forward to a longer business relationship. In conclusion, Book Virtual Assistant is a true professional and if you have development needs then Book Virtual Assistant is your solutions partner to work with from India.",
  },
  {
    name: "Mads Nielsen",
    role: "Delivery Manager (IT Solutions Company)",
    quote:
      "Book Virtual Assistant possesses strong knowledge of how to outsource and offshore business process and IT services and make the initiative successful. Together, we were able to build effective service offering that has facilitated fast and transparent interactions between Book Virtual Assistant, us and our end client. Book Virtual Assistant has proved to be a valuable partner in our initiative to serve our clients cost effectively and efficiently during the challenging times.",
  },
  {
    name: "Giovanni Rossi",
    role: "Ashley Blake Photography",
    quote:
      "I have received the photos back from many jobs and they are always great! (Source: Clutch)",
  },
  {
    name: "Erik Johansson",
    role: "Head of Partner Manager",
    quote:
      "I have been associated with Book Virtual Assistant for almost about 2 years now and really like their professionalism. It is rare to come across companies these days that focus on quality work and put in the effort to understand their client's vision. If someone is looking to work with a similar team then Book Virtual Assistant is highly recommended!! Look no further",
  },
  {
    name: "William Thompson",
    role: "Cataloguing Services",
    quote:
      "I Would highly recommend them to everyone who is looking for some assistance with their Amazon seller account and related services.",
  },
];

export default function TestimonialPage() {
  return (
    <>
      <PageHeader
        badge="Clients"
        title="Testimonial"
        subtitle="Your input is important to us. Please provide your valuable feedback."
        description="Here are some testimonials from our clients"
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={`${item.name}-${item.role || item.location}`} testimonial={item} bordered />
          ))}
        </div>
      </section>
    </>
  );
}
