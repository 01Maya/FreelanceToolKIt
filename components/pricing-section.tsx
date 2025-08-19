"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState({})
  const [counters, setCounters] = useState({ users: 0, invoices: 0, hours: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      observer.observe(pricingSection)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 20)
    }

    if (isVisible["pricing"]) {
      animateCounter(5000, "users")
      animateCounter(50000, "invoices")
      animateCounter(100000, "hours")
    }
  }, [isVisible])

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8" data-animate>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Simple, transparent pricing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold font-serif text-xl mb-2">Free</h3>
                <div className="text-3xl font-bold mb-4">
                  $0<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />5 invoices/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Basic time tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />1 client
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover pulse-glow gold-border relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
              Best Value
            </Badge>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold font-serif text-xl mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-4">
                  ${isVisible["pricing"] ? "12" : "0"}
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Unlimited invoices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Advanced time tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Unlimited clients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    AI proposal writer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Contract templates
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Start Free Trial</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold font-serif text-xl mb-2">Team</h3>
                <div className="text-3xl font-bold mb-4">
                  $29<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 gold-accent mr-2" />
                    Priority support
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 text-center">
          <div>
            <div className="text-3xl font-bold gold-accent">{counters.users.toLocaleString()}+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold gold-accent">{counters.invoices.toLocaleString()}+</div>
            <div className="text-muted-foreground">Invoices Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold gold-accent">{counters.hours.toLocaleString()}+</div>
            <div className="text-muted-foreground">Hours Tracked</div>
          </div>
        </div>
      </div>
    </section>
  )
}
