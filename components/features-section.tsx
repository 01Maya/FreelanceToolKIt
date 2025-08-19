"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Timer, PenTool, Send } from "lucide-react"

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState({})

  const features = [
    {
      icon: FileText,
      title: "Invoice Generator",
      description: "Professional invoices in seconds",
      animation: "slide-in",
    },
    {
      icon: Timer,
      title: "Time Tracking",
      description: "Accurate time logs with one click",
      animation: "tick",
    },
    {
      icon: PenTool,
      title: "Contract Templates",
      description: "Legal-ready contracts instantly",
      animation: "signature",
    },
    {
      icon: Send,
      title: "AI Proposal Writer",
      description: "Win more clients with AI-powered proposals",
      animation: "launch",
    },
  ]

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

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Everything you need, in one clean dashboard
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`card-hover fade-in-up ${isVisible[`feature-${index}`] ? "visible" : ""}`}
              data-animate
              id={`feature-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <feature.icon className="h-8 w-8 gold-accent" />
                </div>
                <h3 className="font-semibold font-serif mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
