"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Freelancer Needs"

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 luxury-gradient min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-serif text-white leading-tight">
              <span className="typewriter">
                The All-in-One Toolkit Every
                <br />
                <span className="inline-block min-h-[1.2em]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Create invoices, track time, and manage clients — all in one simple tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground ripple-effect font-semibold w-full sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="float-animation w-full max-w-sm lg:max-w-md">
              <Card className="bg-card/95 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold font-serif text-sm sm:text-base">Dashboard Overview</h3>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                        Live
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                        <div className="text-xl sm:text-2xl font-bold text-primary">$12,450</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">This Month</div>
                      </div>
                      <div className="bg-accent/10 p-2 sm:p-3 rounded-lg">
                        <div className="text-xl sm:text-2xl font-bold gold-accent">127h</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Tracked</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span>Active Projects</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
