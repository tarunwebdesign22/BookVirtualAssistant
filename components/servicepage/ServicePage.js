"use client";

import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceFeaturesGrid from "./ServiceFeaturesGrid";
import ServiceHighlightCards from "./ServiceHighlightCards";
import ServiceProcessSteps from "./ServiceProcessSteps";
import ServiceHowToHire from "./ServiceHowToHire";
import ServiceIndustriesGrid from "./ServiceIndustriesGrid";
import ServiceClosing from "./ServiceClosing";
import ServiceStatsGrid from "./ServiceStatsGrid";
import ServiceImagePerksGrid from "./ServiceImagePerksGrid";
import ServicePricingPlans from "./ServicePricingPlans";
import ServiceTestimonials from "./ServiceTestimonials";
import ServiceFaq from "./ServiceFaq";

export default function ServicePage({ data }) {
  const {
    hero,
    intro,
    introSecondary,
    contactForm,
    stats,
    services,
    perks,
    highlights,
    highlightsBeforeServices,
    reasons,
    reasonsAfterTestimonials,
    process,
    pricing,
    howToHire,
    howToHireBeforePricing,
    industries,
    closing,
    testimonials,
    faqs,
  } = data;

  const showReasonsEarly = reasons && !reasonsAfterTestimonials;
  const showReasonsLate = reasons && reasonsAfterTestimonials;

  return (
    <>
      {hero && <ServiceHero {...hero} form={contactForm} />}
      {stats && <ServiceStatsGrid {...stats} titleId="service-stats-heading" />}
      {intro && <ServiceIntro {...intro} />}
      {highlightsBeforeServices && highlights && (
        <ServiceHighlightCards {...highlights} titleId="service-highlights-heading" />
      )}
      {services && (
        <ServiceFeaturesGrid
          {...services}
          titleId="service-offerings-heading"
          columns={services.columns ?? 3}
        />
      )}
      {introSecondary && <ServiceIntro {...introSecondary} />}
      {perks && <ServiceImagePerksGrid {...perks} titleId="service-perks-heading" />}
      {!highlightsBeforeServices && highlights && (
        <ServiceHighlightCards {...highlights} titleId="service-highlights-heading" />
      )}
      {showReasonsEarly && (
        <ServiceFeaturesGrid
          {...reasons}
          titleId="service-reasons-heading"
          columns={reasons.columns ?? 3}
          variant="compact"
          background="subtle"
        />
      )}
      {process && <ServiceProcessSteps {...process} titleId="service-process-heading" />}
      {howToHireBeforePricing && howToHire && (
        <ServiceHowToHire {...howToHire} titleId="service-hire-heading" />
      )}
      {pricing && <ServicePricingPlans {...pricing} titleId="service-pricing-heading" />}
      {!howToHireBeforePricing && howToHire && (
        <ServiceHowToHire {...howToHire} titleId="service-hire-heading" />
      )}
      {industries && <ServiceIndustriesGrid {...industries} titleId="service-industries-heading" />}
      {closing && <ServiceClosing {...closing} />}
      {testimonials && (
        <ServiceTestimonials {...testimonials} titleId="service-testimonials-heading" />
      )}
      {showReasonsLate && (
        <ServiceFeaturesGrid
          {...reasons}
          titleId="service-reasons-heading"
          columns={reasons.columns ?? 3}
          variant="compact"
          background="subtle"
        />
      )}
      {faqs && <ServiceFaq {...faqs} titleId="service-faq-heading" />}
    </>
  );
}
