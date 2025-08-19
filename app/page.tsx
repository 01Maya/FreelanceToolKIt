import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import PainPointsSection from "@/components/pain-points-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import ComparisonSection from "@/components/comparison-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import MobileCTA from "@/components/mobile-cta"

export default function FreelancerToolkitLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <PainPointsSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="comparison">
        <ComparisonSection />
      </section>
      <section id="contact">
        <FinalCTASection />
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}
