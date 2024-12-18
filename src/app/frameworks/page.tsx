"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, RotateCcw, Search } from "lucide-react";


interface Framework {
    name: string;
    description: string;
    steps: string[];
  }
const frameworks = [
  {
    name: "The Serendipity Spiral",
    description: "A revolutionary approach to finding things you didn't know you were looking for. Warning: May cause dizziness.",
    steps: [
      "Start in the center of a room",
      "Spin around three times",
      "Walk in the direction you're facing when you stop",
      "Pick up the first object you bump into",
      "Contemplate how it could solve all your problems",
    ],
  },
  {
    name: "The Procrastinator's Paradox",
    description: "Discover more by doing less! The ultimate guide to productive laziness.",
    steps: [
      "Set an important deadline",
      "Actively avoid working on the important task",
      "Start a completely unrelated project",
      "Have a breakthrough idea for the original task while procrastinating",
      "Panic and complete both projects in a caffeine-fueled frenzy",
    ],
  },
  {
    name: "The Curiosity Catapult",
    description: "Launch yourself into the unknown! (Helmet and safety waiver required)",
    steps: [
      "Ask a random question",
      "Follow the first answer you find",
      "Question that answer",
      "Repeat steps 2-3 until you've gone down a rabbit hole so deep you forget the original question",
      "Marvel at all the useless knowledge you've acquired",
    ],
  },
  {
    name: "The Wanderlust Wormhole",
    description: "Travel far and wide without leaving your couch. Side effects may include sudden cravings for exotic cuisines.",
    steps: [
      "Close your eyes and point to a random spot on a map",
      "Google that location",
      "Click on the 'I'm Feeling Lucky' button for every search result",
      "Book a trip to the most interesting place you stumbled upon",
      "Cancel the trip because you spent all your money on takeout food from that country",
    ],
  },
];

export default function FrameworksPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentFramework, setCurrentFramework] = useState<Framework | null>(null);
  

    const startFramework = (framework: Framework) => {
        setCurrentFramework(framework);
        setCurrentStep(0);
      };

  const nextStep = () => {
    if (currentFramework && currentStep < currentFramework.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetFramework = () => {
    setCurrentFramework(null);
    setCurrentStep(0);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Ridiculous Frameworks
      </h1>
      <p className="text-center text-xl">
        Because who needs a plan when you can have a laugh?
      </p>

      <Accordion type="single" collapsible className="w-full">
        {frameworks.map((framework, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{framework.name}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{framework.description}</p>
              <Button onClick={() => startFramework(framework)}>
                Try This Framework
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {currentFramework && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{currentFramework.name}</CardTitle>
            <CardDescription>
              Follow these steps to accidental discovery!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside" aria-live="polite">
              {currentFramework.steps.map((step, index) => (
                <li
                  key={index}
                  className={
                    index === currentStep
                      ? "font-bold"
                      : "text-muted-foreground"
                  }
                >
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={resetFramework} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
            <Button
              onClick={nextStep}
              disabled={currentStep === currentFramework.steps.length - 1}
            >
              Next Step <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          The Universal Formula for Accidental Discoveries
        </h2>
        <div className="flex items-center justify-center text-4xl font-bold">
          <span className="mr-4">Curiosity</span>
          <span className="text-6xl">×</span>
          <span className="mx-4">Chaos</span>
          <span className="text-6xl">÷</span>
          <span className="ml-4">Common Sense</span>
          <Search className="ml-4 h-12 w-12" />
        </div>
        <p className="mt-4 text-sm italic">
          * Results may vary. Side effects include uncontrollable laughter,
          increased knowledge, and occasional "Eureka!" moments.
        </p>
      </div>
    </div>
  );
}
