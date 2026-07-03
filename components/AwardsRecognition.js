import Image from "next/image";
import PageHeader from "./PageHeader";

const awards = [
  {
    title: "Certified Payoneer Service Provider",
    image: "/images/awards/payoneer.jpg",
  },
  {
    title: "Certified Nopcommerce Solution Partner",
    image: "/images/awards/nopcommerce.jpg",
  },
  {
    title: "Certified Amazon Seller Service Provider",
    image: "/images/awards/amazone-seller.jpg",
  },
  {
    title: "Certified Flipkart Ads Seller Service Provider",
    image: "/images/awards/flipkart-ads.jpg",
  },
  {
    title: "Certified Amazon SPN Service Provider",
    image: "/images/awards/amazonspn.jpg",
  },
  {
    title: "Certified Shopify Service Provider",
    image: "/images/awards/shopify.jpg",
  },
  {
    title: "Certified Ebay Service Provider",
    image: "/images/awards/ebay.jpg",
  },
  {
    title: "Certified Clutch Service Provider",
    image: "/images/awards/clutch.jpg",
  },
  {
    title: "Certified Amazon Sponsored Product Service Provider",
    image: "/images/awards/amazonsponsored.jpg",
  },
  {
    title: "Certified India 5000 Best Msme Awards",
    image: "/images/awards/msme.jpg",
  },
  {
    title: "Certified Meta Business Partner Service Provider",
    image: "/images/awards/Meta.png",
  },
  {
    title: "Certified Google Ads Service Provider",
    image: "/images/awards/Google-Ads.png",
  },
];

export default function AwardsRecognition() {
  return (
    <>
      <PageHeader badge="Recognition" title="Awards and Recognition" />

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Associations Ascription
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            Book Virtual Assistant – The name stands for &ldquo;deliver technology to globe&rdquo;. We
            has a long standing commitment towards standard or quality management, flow-less progressive
            initiatives and we adopt of cutting-edge technologies to accomplish our client&apos;s goals
            for cost, schedule, functionality and quality. Book Virtual Assistant has been rewarded with
            international accepted certifications to confirm our commitment to delivering excellence.
            Check our Awards &amp; Accolades below.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            Awards &amp; Accolades
          </h2>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6" role="list">
            {awards.map((award) => (
              <li
                key={award.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-slate-50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex flex-1 flex-col items-center p-4 sm:p-7">
                  <div className="flex h-32 w-full items-center justify-center rounded-xl border border-slate-200/60 bg-white px-3 py-4 sm:h-40 sm:px-5 sm:py-6">
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={220}
                      height={140}
                      className="max-h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-36"
                    />
                  </div>
                  <div className="mt-4 w-full border-t border-slate-200/80 pt-4 text-center sm:mt-5 sm:pt-5">
                    <span className="text-xs font-medium leading-snug text-foreground sm:text-[0.95rem]">
                      {award.title}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
