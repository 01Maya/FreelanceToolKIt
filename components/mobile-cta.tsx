import { Button } from "@/components/ui/button"

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-40">
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
        Start Free Trial
      </Button>
    </div>
  )
}
