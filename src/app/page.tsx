import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import MathematicalModelChart from "@/components/mathematical-model-chart";
import ChaosTheoryVisualization from "@/components/chaos-theory-visualization";
import EntropyGraph from "@/components/entropy-graph";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl md:text-4xl font-bold">
        Fuck Around ∝ Find Out
      </h1>

      <AnimatedSection>
        <h2 className="mb-4 text-xl md:text-2xl font-semibold">Cool Stories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>The Voyagers</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/AdobeStock_450645664.jpg"
                alt="Historical Explorations"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                The voyages of Ferdinand Magellan exemplify how fucking around
                leads to unexpected shit discoveries. while fucking around on a
                western route to the Spice Islands, resulted in the first
                circumnavigation of the Earth, providing empirical evidence of
                the planet's spherical nature and vastly expanding European
                geographical knowledge.
              </p>
              <p className="mt-2 text-sm md:text-base">
                In space exploration, the Voyager missions, launched in 1977,
                continue to yield surprising data. Initially designed to study
                the outer planets, these probes have now entered interstellar
                space, providing unprecedented data about the heliosphere and
                the nature of interstellar medium.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Scientific Breakthroughs</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image.png"
                alt="Scientific Breakthroughs"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                The discovery of penicillin by Alexander Fleming in 1928
                perfectly illustrates how fucking around can lead to
                groundbreaking findings. Fleming's accidental observation of
                antibiotic mold growth in his petri dishes led to the
                development of life-saving antibiotics.
              </p>
              <p className="mt-2 text-sm md:text-base">
                Similarly, the invention of the World Wide Web by Tim
                Berners-Lee at CERN was an unintended consequence of exploring
                ways to share information between scientists. This exploration
                in information management has transformed global communication
                and commerce.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Cultural Examples</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image copy.jpg"
                alt="Cultural Examples"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                In Greek mythology, the tale of Icarus embodies the double-edged
                nature of exploration. Icarus' flight, enabled by his father's
                ingenious wax wings, led to both the exhilaration of flight and
                the peril of hubris, as he flew too close to the sun.
              </p>
              <p className="mt-2 text-sm md:text-base">
                The Japanese concept of "kaizen" or continuous improvement,
                central to their industrial philosophy, reflects the idea that
                ongoing exploration and refinement lead to ever-increasing
                quality and efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="my-4 text-xl md:text-2xl font-semibold">
          Mathematical and Scientific Frameworks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>The Linear Relationship</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <MathematicalModelChart />
              <p className="mt-4 text-sm md:text-base">
                The equation y=kx, representing the direct proportionality
                between exploration (fuck around) and find out (𝑦), holds deep
                significance in mathematics and science. It embodies the
                fundamental principle that consistent effort in exploration
                translates into predictable outcomes, making it a cornerstone
                for modeling growth in various pile shits of domain.
              </p>
              <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner my-2 text-center text-sm md:text-base">
                y = kx
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Chaos Theory and the Butterfly Effect</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-6">
              <ChaosTheoryVisualization />
              <div className="space-y-4 text-sm md:text-base">
                <p>
                  Chaos theory illustrates how small fucking changes in initial
                  conditions can lead to vastly different garbage outcomes. The
                  Lorenz equations, a foundational model in chaos theory, are
                  given by:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                  <p className="my-2 text-center font-mono">dx/dt = σ(y - x)</p>
                  <p className="my-2 text-center font-mono">
                    dy/dt = x(ρ - z) - y
                  </p>
                  <p className="my-2 text-center font-mono">dz/dt = xy - βz</p>
                </div>
                <p>
                  Where σ, ρ, and β are system parameters. These equations
                  demonstrate how complex, chaotic behavior can arise from
                  simple deterministic systems, embodying the essence of "the
                  more you fuck around, the more you gonna find out".
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Entropy and Information Theory</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <EntropyGraph />
              <p className="mt-4 text-sm md:text-base">
                In information theory, entropy quantifies the amount of
                uncertainty or randomness in a system. The entropy of a discrete
                random variable X is given by:
              </p>
              <p className="my-2 text-center text-sm md:text-base">
                H(X) = -Σ p(x) log₂ p(x)
              </p>
              <p className="text-sm md:text-base">
                Where p(x) is the probability of each possible value of X. As we
                fuck around and gather more information, we reduce entropy, but
                we also uncover new complexities, leading to a dynamic interplay
                between knowledge and uncertainty.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="my-4 text-xl md:text-2xl font-semibold">
          Visualizations and Graphs
        </h2>
        <p className="text-sm md:text-base">
          Interactive graphs and visualizations demonstrating the principles of
          Fucking around and finding out.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="mb-4 text-xl md:text-2xl font-semibold">
          Real-Life Examples
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Exploratory Algorithms</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image copy 2.png"
                alt="Exploratory Algorithms"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                Introduction to algorithms like genetic algorithms or simulated
                annealing that mimic fucking around and optimization processes
                found in nature.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Technology and Innovation</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image copy 3.png"
                alt="Technology and Innovation"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                Examples of unintended discoveries in technology, such as the
                accidental invention of the microwave oven or the discovery of
                cosmic microwave background radiation.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="my-4 text-xl md:text-2xl font-semibold">
          Philosophical and Metaphysical Angles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Theories of Curiosity</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image copy 4.png"
                alt="Theories of Curiosity"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                Discussion on curiosity as a driving force in evolution and
                human progress, exploring its role in scientific advancement and
                personal growth.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Existential Risks and Rewards</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src="/images/image copy 5.png"
                alt="Existential Risks and Rewards"
                width={300}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <p className="text-sm md:text-base">
                Exploration of the balance between the dangers and benefits of
                pushing boundaries in various fields, from scientific research
                to space exploration.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="my-4 text-xl md:text-2xl font-semibold">
          Created by Ankit Tiwari
        </h2>
        Visit <a href="https://unkit.vercel.app">unkit.vercel.app</a>
      </AnimatedSection>
    </main>
  );
}
