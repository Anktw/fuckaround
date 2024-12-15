"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Image from "next/image"

const books = [
  {
    title: "Gravity's Revenge: The Apple Strikes Back",
    author: "Sir Isaac Newt-on",
    description: "One scientist's journey of fucking around with falling objects and finding out about universal gravitation.",
    genre: "Physics Folly",
    pages: 234,
    fuckAroundLevel: 8,
    findOutLevel: 10,
    review: "I came for the apples, stayed for the existential crisis. 10/10 would question reality again.",
    image: "/images/image copy 6.png"
  },
  {
    title: "The Hitchhiker's Guide to Fucking Around",
    author: "Douglas Adamsapple",
    description: "A cosmic journey of fucking around with the fabric of reality and finding out the true meaning of 42.",
    genre: "Sci-Fi Silliness",
    pages: 420,
    fuckAroundLevel: 42,
    findOutLevel: 42,
    review: "I fucked around with this book and found out that the universe is a joke. Hilarious!",
    image: "/images/image copy 7.png"
  },
  {
    title: "Around the World in 80 Fuckups",
    author: "Jules Verne-acular",
    description: "A globetrotting adventure of fucking around with different cultures and finding out about the universality of human stupidity.",
    genre: "Travel Travesty",
    pages: 312,
    fuckAroundLevel: 80,
    findOutLevel: 80,
    review: "I laughed, I cried, I accidentally started three international incidents. A must-read!",
    image: "/images/image copy 8.png"
  },
  {
    title: "The Da Vinci Fuck Up",
    author: "Dan Brown-nose",
    description: "One art restorer's journey of fucking around with priceless artifacts and finding out about secret societies.",
    genre: "Historical Hijinks",
    pages: 489,
    fuckAroundLevel: 7,
    findOutLevel: 9,
    review: "I'll never look at a paint can the same way again. Accidentally brilliant!",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Pride and Prejudice and Fucking Around",
    author: "Jane Austen-tatious",
    description: "Elizabeth Bennet's tale of fucking around with societal norms and finding out about love and scientific breakthroughs.",
    genre: "Regency Ridiculousness",
    pages: 367,
    fuckAroundLevel: 5,
    findOutLevel: 8,
    review: "It is a truth universally acknowledged that fucking around leads to unexpected romance and accidental inventions.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

const bookStats = [
  { name: "Gravity's Revenge", fuckAroundLevel: 8, findOutLevel: 10 },
  { name: "Hitchhiker's Guide", fuckAroundLevel: 42, findOutLevel: 42 },
  { name: "80 Fuckups", fuckAroundLevel: 80, findOutLevel: 80 },
  { name: "Da Vinci Fuck Up", fuckAroundLevel: 7, findOutLevel: 9 },
  { name: "Pride & Fucking Around", fuckAroundLevel: 5, findOutLevel: 8 }
];

export default function BooksPage() {
  const [activeBook, setActiveBook] = useState<(typeof books)[0] | null>(null)

  return (
    <div className="space-y-8 p-6 bg-gradient-to-b from-background to-muted">
      <h1 className="text-4xl font-bold text-center">The Fuck Around and Find Out Library</h1>
      <p className="text-center text-xl">Warning: Reading these books may lead to unintended consequences and accidental wisdom!</p>
      
      <Tabs defaultValue="books" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="books">Book List</TabsTrigger>
          <TabsTrigger value="stats">Fuck Around vs Find Out Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
              
                <CardHeader>
                  <CardTitle>{book.title}</CardTitle>
                  <CardDescription>by {book.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-2">{book.description}</p>
                  <div className="flex justify-between mt-4">
                    <Badge variant="secondary">Fuck Around: {book.fuckAroundLevel}/10</Badge>
                    <Badge variant="secondary">Find Out: {book.findOutLevel}/10</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveBook(book)}>Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Fuck Around vs Find Out Levels</CardTitle>
              <CardDescription>Because every action has an equal and opposite reaction... usually hilarious!</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  fuckAroundLevel: {
                    label: "Fuck Around Level",
                    color: "hsl(var(--chart-1))",
                  },
                  findOutLevel: {
                    label: "Find Out Level",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bookStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="fuckAroundLevel" fill="var(--color-fuckAroundLevel)" />
                    <Bar dataKey="findOutLevel" fill="var(--color-findOutLevel)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {activeBook && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{activeBook.title}</CardTitle>
            <CardDescription>by {activeBook.author}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={activeBook.image}
              alt={activeBook.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="mb-4">{activeBook.description}</p>
            <p className="mb-2"><strong>Genre:</strong> {activeBook.genre}</p>
            <p className="mb-2"><strong>Pages:</strong> {activeBook.pages}</p>
            <p className="mb-2"><strong>Fuck Around Level:</strong> {activeBook.fuckAroundLevel}/10</p>
            <p className="mb-2"><strong>Find Out Level:</strong> {activeBook.findOutLevel}/10</p>
            <p className="mt-4"><strong>Review:</strong> {activeBook.review}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => setActiveBook(null)}>Close</Button>
          </CardFooter>
        </Card>
      )}

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">The Fuck Around and Find Out Oath</h2>
        <p className="text-center italic">
          "I solemnly swear that I am up to no good... I mean, that I will embrace the chaos of fucking around,
          laugh in the face of consequences, and always keep a towel handy for wiping up the mess. May my reading adventures be filled
          with unexpected insights, hilarious mishaps, and the occasional world-changing epiphany. So help me, Serendipity!"
        </p>
      </div>
    </div>
  )
}

