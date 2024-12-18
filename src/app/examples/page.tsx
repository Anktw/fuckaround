"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const examples = [
  {
    title: "The Couch Potato's Guide to Space Exploration",
    description: "How binge-watching sci-fi shows accidentally led to the discovery of a new galaxy.",
    tag: "Astronomical Accident",
    fullStory: "Meet Mike, a dedicated couch potato with a passion for sci-fi. During a 72-hour binge-watch marathon of 'Star Trek,' he noticed an unusual pattern in the star backgrounds. Turns out, his TV had a dead pixel that perfectly aligned with a previously undiscovered galaxy. NASA now calls it 'Mike's Munchies Nebula.'"
  },
  {
    title: "The Misplaced Glasses Theorem",
    description: "Proving that the probability of finding your glasses increases exponentially with the number of times you circle the room.",
    tag: "Optical Odyssey",
    fullStory: "Dr. Squint, a nearsighted mathematician, developed this groundbreaking theorem after losing his glasses for the 17th time. He discovered that each lap around the room increased his chances of finding them by 3.14%. On his 42nd circuit, he not only found his glasses but also solved the Riemann Hypothesis... unfortunately, he forgot the solution by the time he put his glasses on."
  },
  {
    title: "The Social Media Scroll Singularity",
    description: "One person's journey to the center of the internet, and the memes they discovered along the way.",
    tag: "Digital Dive",
    fullStory: "Sarah started scrolling through her social media feed on a Tuesday evening. 48 hours later, she emerged with bloodshot eyes, a comprehensive understanding of quantum mechanics (as explained by cat memes), and the ability to predict trending hashtags with 99% accuracy. Scientists are still studying the phenomenon, which they've dubbed 'The Infinite Scroll Enlightenment.'"
  },
  {
    title: "The Accidental Yoga Pose Inventor",
    description: "How a clumsy fall led to the creation of the most relaxing yoga pose ever.",
    tag: "Flexible Fluke",
    fullStory: "Yoga instructor Grace was demonstrating a complex balance pose when she tripped over her mat. The resulting tangle of limbs, while initially embarrassing, turned out to be the most relaxing position her students had ever experienced. 'The Graceful Tumble' is now the hottest trend in yoga studios worldwide."
  },
  {
    title: "The Autocorrect Algorithm that Predicted the Future",
    description: "When your phone knows what you're going to say before you do... and it's right.",
    tag: "Prophetic Typing",
    fullStory: "Software engineer Tom was frustrated with his phone's autocorrect always guessing the wrong words. In a fit of rage, he randomly smashed his keyboard to create a new algorithm. To his surprise, the new autocorrect started predicting events before they happened. Tom's phone is now consulted for everything from weather forecasts to stock market predictions."
  }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const accidentalDiscoveryData = [
  { name: 'Laziness', value: 30 },
  { name: 'Clumsiness', value: 25 },
  { name: 'Procrastination', value: 20 },
  { name: 'Daydreaming', value: 15 },
  { name: 'Actual Research', value: 10 },
]

export default function ExamplesPage() {
    const [activeExample, setActiveExample] = useState<(typeof examples)[0] | null>(null)

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Cool Examples</h1>
      <p className="text-center text-xl">Real* stories of people who went around and found out!</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{example.title}</CardTitle>
              <CardDescription>
                <Badge variant="secondary">{example.tag}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{example.description}</p>
              <Button onClick={() => setActiveExample(example)} variant="outline">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {activeExample && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{activeExample.title}</CardTitle>
            <CardDescription>{activeExample.tag}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{activeExample.fullStory}</p>
          </CardContent>
        </Card>
      )}

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">The Anatomy of Accidental Discoveries</h2>
        <ChartContainer
          config={{
            value: {
              label: "Percentage",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={accidentalDiscoveryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {accidentalDiscoveryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <p className="text-center mt-4 text-sm italic">
          * Based on a rigorous study conducted by our team of professional procrastinators and daydreamers
        </p>
      </div>

      <p className="text-center text-sm italic">* Disclaimer: "Real" is a relative term in the realm of accidental discoveries. Side effects may include uncontrollable laughter, increased curiosity, and a tendency to see potential discoveries everywhere.</p>
      
    </div>
  )
}

