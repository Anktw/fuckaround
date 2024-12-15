"use client"

import { useEffect, useRef, useState } from 'react'

export default function ChaosTheoryVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) {
      setError("Canvas or container not found")
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setError("Unable to get 2D context")
      return
    }

    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const width = container.clientWidth
      const height = container.clientHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let x = 0.1
    let y = 0
    let z = 0

    const σ = 10
    const ρ = 28
    const β = 8 / 3

    const dt = 0.01
    const scale = 7

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 0.5
    ctx.beginPath()

    let animationFrameId: number

    function draw() {
      for (let i = 0; i < 100; i++) {
        const dx = σ * (y - x) * dt
        const dy = (x * (ρ - z) - y) * dt
        const dz = (x * y - β * z) * dt

        x += dx
        y += dy
        z += dz

        ctx.lineTo(
          x * scale + canvas.width / (2 * window.devicePixelRatio), 
          y * scale + canvas.height / (2 * window.devicePixelRatio)
        )
      }

      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(
        x * scale + canvas.width / (2 * window.devicePixelRatio), 
        y * scale + canvas.height / (2 * window.devicePixelRatio)
      )

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div ref={containerRef} className="w-full h-64 md:h-96 relative">
      <canvas ref={canvasRef} className="w-full h-full bg-gray-900 rounded-lg shadow-lg" />
    </div>
  )
}