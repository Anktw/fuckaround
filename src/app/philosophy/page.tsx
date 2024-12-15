"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Coffee, Footprints, Lightbulb, Compass, Zap, Glasses } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const philosophies = [
  {
    icon: AlertCircle,
    title: "The First Law of Accidental Discovery",
    description: "The probability of making a groundbreaking discovery is inversely proportional to how hard you're trying.",
    explanation: "This law suggests that the harder you try to force a discovery, the less likely you are to stumble upon something truly revolutionary. It's the universe's way of saying, 'Relax, and let the discoveries come to you!'"
  },
  {
    icon: Footprints,
    title: "The Wanderer's Paradox",
    description: "To truly find yourself, you must first get completely and utterly lost.",
    explanation: "This paradox embraces the idea that personal growth and self-discovery often come from stepping out of your comfort zone and into the unknown. It's only when we're lost that we're forced to find new paths and perspectives."
  },
  {
    icon: Coffee,
    title: "The Caffeinated Corollary",
    description: "The number of accidental discoveries increases exponentially with coffee consumption.",
    explanation: "This corollary recognizes the vital role of caffeine in the scientific process. It posits that as coffee intake increases, so does the likelihood of stumbling upon brilliant ideas. Warning: Excessive application may result in jittery hands and the ability to see through time."
  },
  {
    icon: Lightbulb,
    title: "The Eureka Effect",
    description: "The best ideas always strike when you're in the shower, far from any writing implements.",
    explanation: "This effect highlights the frustrating tendency of brilliant ideas to appear at the most inconvenient times. It serves as a reminder that inspiration doesn't follow a schedule, and that maybe we should all invest in waterproof notepads."
  },
  {
    icon: Compass,
    title: "The Principle of Serendipitous Navigation",
    description: "The most interesting destinations are found when you take a wrong turn.",
    explanation: "This principle celebrates the beauty of getting lost and the unexpected discoveries that come from deviating from the planned path. It encourages us to embrace detours and see them as opportunities for adventure rather than mistakes."
  },
  {
    icon: Zap,
    title: "The Law of Inverse Preparation",
    description: "The level of unpreparedness is directly proportional to the magnitude of the discovery.",
    explanation: "This law suggests that the less prepared you are, the more likely you are to make a significant discovery. It's the universe's way of rewarding those who jump in headfirst and figure things out as they go along."
  },
  {
    icon: Glasses,
    title: "The Observer's Conundrum",
    description: "The act of looking for something changes what you find.",
    explanation: "This conundrum is inspired by the observer effect in physics. It reminds us that our expectations and the very act of searching can influence what we discover, often leading us to find things we weren't initially looking for."
  }
]

export default function PhilosophyPage() {
    const [activePhilosophy, setActivePhilosophy] = useState<(typeof philosophies)[0] | null>(null)

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">The Profound Philosophy of "Going Around ∝ Find Out"</h1>
      <p className="text-center text-xl">Prepare for enlightenment... or confusion. Possibly both.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {philosophies.map((philosophy, index) => (
          <Alert key={index} className="cursor-pointer" onClick={() => setActivePhilosophy(philosophy)}>
            <philosophy.icon className="h-4 w-4" />
            <AlertTitle>{philosophy.title}</AlertTitle>
            <AlertDescription>{philosophy.description}</AlertDescription>
          </Alert>
        ))}
      </div>

      {activePhilosophy && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <activePhilosophy.icon className="h-6 w-6 mr-2" />
              {activePhilosophy.title}
            </CardTitle>
            <CardDescription>{activePhilosophy.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{activePhilosophy.explanation}</p>
          </CardContent>
        </Card>
      )}

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">The Grand Unified Theory of Accidental Discovery</h2>
        <div className="text-xl font-bold">
          (Curiosity × Chaos) + (Luck ÷ Common Sense) = Breakthrough
        </div>
        <p className="mt-4 text-sm italic">
          Warning: Applying this formula may result in unexpected insights, paradigm shifts, and occasional bouts of maniacal laughter.
        </p>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">The Accidental Discovery Meditation</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Find a comfortable position (preferably somewhere you shouldn't be).</li>
          <li>Close your eyes and breathe deeply (unless you're underwater, then please don't).</li>
          <li>Empty your mind of all thoughts (this should be easy for most of us).</li>
          <li>Visualize yourself getting hopelessly lost in a labyrinth of ideas.</li>
          <li>Embrace the confusion and let it guide you to enlightenment.</li>
          <li>Open your eyes and write down the first ridiculous idea that comes to mind.</li>
          <li>Congratulate yourself on your newfound genius (even if it's just you who thinks so).</li>
        </ol>
        <p className="mt-4 text-center text-sm italic">
          Remember: The journey to accidental discovery is paved with good intentions, bad directions, and a healthy dose of humor.
        </p>
      </div>

      <Button className="w-full mt-8" variant="outline" onClick={() => window.scrollTo(0, 0)}>
        Scroll to Top (Because even philosophers need to go back to the beginning sometimes)
      </Button>
    </div>
  )
}

