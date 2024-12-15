"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const stories = [
  {
    title: "The Accidental Pizza Inventor",
    description: "How a clumsy chef's mistake led to the discovery of the world's favorite food.",
    tag: "Culinary Catastrophe",
    fullStory: "It was a typical day in Naples, 1889. Chef Raffaele Esposito was preparing a feast for the visiting King and Queen. In his haste, he accidentally dropped a glob of tomato sauce on a piece of flatbread. Panicking, he quickly added some mozzarella and basil to cover his mistake. Little did he know, this 'error' would become the world-famous Margherita pizza!"
  },
  {
    title: "The Procrastinator's Guide to Time Travel",
    description: "Putting off your work until tomorrow? Why not try yesterday instead!",
    tag: "Temporal Tomfoolery",
    fullStory: "Meet Dave, the world's most accomplished procrastinator. One day, while avoiding his taxes, he discovered a wormhole under his couch cushions. Instead of cleaning it, he decided to use it to travel back in time and do yesterday's work 'tomorrow.' Now, Dave lives in a constant loop of productive procrastination, always one day behind but never missing a deadline!"
  },
  {
    title: "Lost in IKEA: A 72-Hour Survival Story",
    description: "One man's harrowing journey through the maze of affordable Swedish furniture.",
    tag: "Furniture Fiasco",
    fullStory: "John entered IKEA on a Tuesday, determined to buy a simple bookshelf. Three days later, he emerged with a new appreciation for Swedish meatballs, 17 BILLY bookcases, and the ability to pronounce 'FJÄLLBO.' His tale of survival includes building a fort out of POÄNG chairs and using FRAKTA bags as emergency sleeping bags. IKEA has since added 'You Are Here' stickers to their human-sized hamster maze... I mean, store layout."
  },
  {
    title: "The Serendipitous Spill that Spawned Silly Putty",
    description: "How a wartime accident led to hours of stretchy, bouncy fun.",
    tag: "Chemical Chaos",
    fullStory: "During World War II, James Wright was trying to create a rubber substitute for the US War Production Board. After accidentally dropping boric acid into silicone oil, he created a gooey, bouncy substance that could stretch farther than rubber, but couldn't replace it. Disappointed, he set it aside. Years later, a toy store owner saw its potential, and Silly Putty was born. Now, millions of eggs filled with the stuff have been sold, proving that sometimes, the best inventions are the ones you weren't trying to make!"
  },
  {
    title: "The Microwave Meltdown Miracle",
    description: "How a melted chocolate bar in a physicist's pocket revolutionized cooking.",
    tag: "Delicious Discovery",
    fullStory: "Percy Spencer was working on magnetrons for radar sets when he noticed the chocolate bar in his pocket had melted. Intrigued, he decided to experiment further. He tried popcorn next, and voila! The kernels popped. This accidental discovery led to the development of the microwave oven. Now, millions of people can enjoy the convenience of unevenly heated leftovers and the thrill of watching popcorn bags expand. Remember to thank Percy every time you're too lazy to use a real oven!"
  }
]

const accidentalDiscoveryData = [
  { name: 'Intentional Research', value: 30 },
  { name: 'Pure Luck', value: 25 },
  { name: 'Mistakes', value: 20 },
  { name: 'Procrastination', value: 15 },
  { name: 'Naps', value: 10 },
]

export default function StoriesPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">Hilarious Tales of Accidental Discoveries</h1>
      <p className="text-center text-xl">Because sometimes, the best finds are the ones you weren't looking for!</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
              <CardDescription>
                <Badge variant="secondary">{story.tag}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{story.description}</p>
              <details>
                <summary className="cursor-pointer text-primary">Read full story</summary>
                <p className="mt-2 text-sm">{story.fullStory}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">The Science of Accidental Discoveries</h2>
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
            <BarChart data={accidentalDiscoveryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="value" fill="var(--color-value)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <p className="text-center mt-4 text-sm italic">
          * Based on a highly scientific study conducted by our team of professional procrastinators
        </p>
      </div>
    </div>
  )
}

