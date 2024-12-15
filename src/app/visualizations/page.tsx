"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const initialData = [
  { day: 1, exploration: 10, discovery: 5 },
  { day: 2, exploration: 20, discovery: 15 },
  { day: 3, exploration: 30, discovery: 25 },
  { day: 4, exploration: 40, discovery: 30 },
  { day: 5, exploration: 50, discovery: 45 },
]

export default function VisualizationsPage() {
  const [exploration, setExploration] = useState(0)
  const [discovery, setDiscovery] = useState(0)
  const [luck, setLuck] = useState(50)
  const [data, setData] = useState(initialData)

  const explore = () => {
    const randomFactor = Math.random() * (luck / 50)
    const newExploration = Math.min(exploration + 10, 100)
    setExploration(newExploration)
    const newDiscovery = Math.min(discovery + (10 * randomFactor), 100)
    setDiscovery(newDiscovery)

    const newDataPoint = {
      day: data.length + 1,
      exploration: newExploration,
      discovery: newDiscovery
    }
    setData([...data, newDataPoint])
  }

  const reset = () => {
    setExploration(0)
    setDiscovery(0)
    setData(initialData)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">The Great Exploration-Discovery-O-Meter</h1>
      <p className="text-center text-xl">Watch as your aimless wandering magically turns into groundbreaking discoveries!</p>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Exploration Level</h2>
          <Progress value={exploration} className="w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Discovery Level</h2>
          <Progress value={discovery} className="w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Luck Factor</h2>
          <Slider
            value={[luck]}
            onValueChange={(value) => setLuck(value[0])}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground mt-1">Current Luck: {luck}%</p>
        </div>
        <Button onClick={explore} className="w-full">Go Around Aimlessly</Button>
        <Button onClick={reset} variant="outline" className="w-full">Reset Adventure</Button>
      </div>

      {discovery === 100 && (
        <div className="text-center text-2xl font-bold animate-bounce">
          Congratulations! You've discovered... the end of this progress bar!
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Your Exploration-Discovery Journey</h2>
        <ChartContainer
          config={{
            exploration: {
              label: "Exploration",
              color: "hsl(var(--chart-1))",
            },
            discovery: {
              label: "Discovery",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line type="monotone" dataKey="exploration" stroke="var(--color-exploration)" />
              <Line type="monotone" dataKey="discovery" stroke="var(--color-discovery)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <p className="text-center mt-4 text-sm italic">
          Watch as your exploration magically transforms into discoveries!
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">The Serendipity Equation</h2>
        <div className="text-2xl font-bold">
          Discoveries = (Exploration × Luck) + Caffeine<sup>2</sup>
        </div>
        <p className="mt-4 text-sm italic">
          * Warning: Excessive use of this equation may result in unexpected breakthroughs and/or sleep deprivation.
        </p>
      </div>
    </div>
  )
}

