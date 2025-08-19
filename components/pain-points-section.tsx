import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export default function PainPointsSection() {
  const painPoints = [
    {
      title: "Messy Spreadsheets",
      description: "Stop losing track of payments in endless Excel files",
      icon: "📊",
    },
    {
      title: "Late Payments",
      description: "No more chasing clients for overdue invoices",
      icon: "💸",
    },
    {
      title: "Time Lost",
      description: "Quit wasting hours on admin work",
      icon: "⏰",
    },
    {
      title: "Scattered Contracts",
      description: "End the chaos of lost agreements and terms",
      icon: "📄",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Why waste hours on admin when you could be working?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="flip-card card-hover cursor-pointer">
              <div className="flip-card-inner relative h-48">
                <CardContent className="flip-card-front absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="font-semibold font-serif mb-2">{point.title}</h3>
                </CardContent>
                <CardContent className="flip-card-back absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-primary text-primary-foreground">
                  <X className="h-8 w-8 mb-4 gold-accent" />
                  <p className="text-sm">{point.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
