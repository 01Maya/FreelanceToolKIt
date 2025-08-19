"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      content: "This toolkit saved me 10+ hours per week. The invoice generator alone pays for itself!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      content: "Finally, one tool that does everything. No more juggling between 5 different apps.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Content Writer",
      content: "The AI proposal writer helped me land 3 new clients this month. Game changer!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Trusted by 5,000+ freelancers worldwide</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-hover">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 gold-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-xl mb-6 font-medium">"{testimonials[currentTestimonial].content}"</blockquote>
              <div>
                <div className="font-semibold font-serif">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center items-center space-x-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl mb-2">🎨</div>
            <div className="text-sm">Designers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💻</div>
            <div className="text-sm">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">✍️</div>
            <div className="text-sm">Writers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
