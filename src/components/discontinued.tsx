'use client'

import { useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function DiscontinuationAlert() {
  useEffect(() => {
    const alertElement = document.getElementById('discontinuation-alert')
    if (alertElement) {
      alertElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <Alert variant="default" id="discontinuation-alert" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Project Discontinued</AlertTitle>
        <AlertDescription>
        This project was created as a part of training process to a LLM Model to create some Next.js projects. For more info, contact me at <a href="https://unkit.vercel.app">unkit.vercel.app</a>.
        </AlertDescription>
      </Alert>
    </div>
  )
}