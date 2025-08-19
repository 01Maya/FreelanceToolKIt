"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTASection() {
  useEffect(() => {
    const interval = setInterval(() => {
      const cta = document.getElementById("final-cta")
      if (cta) {
        cta.classList.add("shake-animation")
        setTimeout(() => cta.classList.remove("shake-animation"), 500)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
          Stop stressing. Start freelancing smarter.
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of freelancers who've already simplified their workflow.
        </p>
        <Button
          id="final-cta"
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 ripple-effect font-semibold"
        >
          Get Started Free Today
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
        <p className="text-sm text-white/70 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
