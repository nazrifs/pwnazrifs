import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AreasSection } from "@/components/areas-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { WhySection } from "@/components/why-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { JourneysSection } from "@/components/journeys-section"
import { LoanChecker } from "@/components/loan-checker"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import { ExitIntent } from "@/components/exit-intent"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AreasSection />
        <FeaturedProperties />
        <WhySection />
        <TestimonialsSection />
        <JourneysSection />
        <LoanChecker />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
      <ExitIntent />
    </>
  )
}
