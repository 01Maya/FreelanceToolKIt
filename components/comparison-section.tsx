"use client"

import { CheckCircle, X, ArrowRight, Clock, Users, FileText, Zap } from "lucide-react"
import { useState } from "react"

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"cost" | "time" | "features">("features")

  const comparisonData = {
    features: {
      title: "Feature Comparison",
      oldWay: [
        { icon: FileText, text: "QuickBooks for invoicing", cost: "$30/mo" },
        { icon: Clock, text: "Toggl for time tracking", cost: "$18/mo" },
        { icon: FileText, text: "Google Docs for contracts", cost: "$12/mo" },
        { icon: Users, text: "Excel for client management", cost: "$7/mo" },
        { icon: FileText, text: "Email for proposals", cost: "$15/mo" },
      ],
      newWay: [
        { icon: FileText, text: "Professional invoicing", highlight: "AI-powered" },
        { icon: Clock, text: "Automatic time tracking", highlight: "Smart detection" },
        { icon: FileText, text: "Legal contract templates", highlight: "Lawyer-approved" },
        { icon: Users, text: "Smart client management", highlight: "CRM built-in" },
        { icon: Zap, text: "AI-powered proposals", highlight: "Win rate +40%" },
      ],
    },
    cost: {
      title: "Cost Analysis",
      oldWay: [
        { text: "Monthly subscriptions", amount: "$82/month" },
        { text: "Setup & integration time", amount: "20+ hours" },
        { text: "Learning curve", amount: "Weeks" },
        { text: "Data sync issues", amount: "Constant" },
        { text: "Support tickets", amount: "Multiple vendors" },
      ],
      newWay: [
        { text: "All-in-one solution", amount: "$29/month" },
        { text: "Quick setup", amount: "5 minutes" },
        { text: "Intuitive interface", amount: "Same day" },
        { text: "Seamless integration", amount: "Built-in" },
        { text: "Unified support", amount: "One team" },
      ],
    },
    time: {
      title: "Time Savings",
      oldWay: [
        { text: "Switching between apps", amount: "2 hours/day" },
        { text: "Manual data entry", amount: "1 hour/day" },
        { text: "Reconciling data", amount: "3 hours/week" },
        { text: "Learning updates", amount: "5 hours/month" },
        { text: "Troubleshooting", amount: "2 hours/week" },
      ],
      newWay: [
        { text: "Single dashboard", amount: "0 minutes" },
        { text: "Auto-sync everything", amount: "0 minutes" },
        { text: "Real-time accuracy", amount: "0 minutes" },
        { text: "Consistent interface", amount: "0 minutes" },
        { text: "Reliable platform", amount: "0 minutes" },
      ],
    },
  }

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Ditch 5 apps. Use just 1.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop juggling multiple tools and subscriptions. See how Freelancer Toolkit replaces your entire workflow.
          </p>

          {/* Interactive tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(comparisonData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "cost" | "time" | "features")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A0F1C] shadow-lg transform scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-start">
          {/* Old Way */}
          <div className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-serif text-muted-foreground">The Old Way</h3>
                <div className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium">
                  Multiple Apps
                </div>
              </div>

              <div className="space-y-3">
                {comparisonData[activeTab].oldWay.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-background/50 rounded-lg border border-destructive/10"
                  >
                    <div className="flex items-center space-x-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                    {(item as any).cost && (
                      <span className="text-xs text-destructive font-medium">{(item as any).cost}</span>
                    )}
                    {(item as any).amount && (
                      <span className="text-xs text-destructive font-medium">{(item as any).amount}</span>
                    )}
                  </div>
                ))}
              </div>

              {activeTab === "cost" && (
                <div className="mt-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-destructive">$82/month</div>
                    <div className="text-sm text-muted-foreground">+ setup time & frustration</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* VS Arrow */}
          <div className="flex items-center justify-center lg:py-12">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] p-3 rounded-full shadow-lg">
              <ArrowRight className="h-6 w-6 text-[#0A0F1C]" />
            </div>
          </div>

          {/* New Way */}
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F4D03F]/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-serif gold-accent">The New Way</h3>
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A0F1C] px-3 py-1 rounded-full text-sm font-medium">
                  One Platform
                </div>
              </div>

              <div className="space-y-3">
                {comparisonData[activeTab].newWay.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-background/50 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 gold-accent flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                    {(item as any).highlight && (
                      <span className="text-xs gold-accent font-medium bg-[#D4AF37]/10 px-2 py-1 rounded">
                        {(item as any).highlight}
                      </span>
                    )}
                    {(item as any).amount && (
                      <span className="text-xs gold-accent font-medium">{(item as any).amount}</span>
                    )}
                  </div>
                ))}
              </div>

              {activeTab === "cost" && (
                <div className="mt-4 p-3 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4D03F]/10 rounded-lg border border-[#D4AF37]/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold gold-accent">$29/month</div>
                    <div className="text-sm text-muted-foreground">Everything included</div>
                    <div className="text-xs gold-accent mt-1">Save $636/year</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4D03F]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold font-serif mb-3">Your Savings Summary</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gold-accent">$636</div>
                <div className="text-sm text-muted-foreground">Saved per year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gold-accent">15+</div>
                <div className="text-sm text-muted-foreground">Hours saved weekly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gold-accent">5</div>
                <div className="text-sm text-muted-foreground">Apps replaced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
