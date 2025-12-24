"use client"

import { useEffect, useRef } from "react"

interface Shape {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  type: "circle" | "triangle" | "square" | "hexagon"
  connections: number[]
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<Shape[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize shapes
    const shapeCount = 15
    const shapes: Shape[] = []
    const types: Shape["type"][] = ["circle", "triangle", "square", "hexagon"]

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 40 + 30,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: types[Math.floor(Math.random() * types.length)],
        connections: [],
      })
    }

    shapesRef.current = shapes

    const drawShape = (shape: Shape, alpha = 0.15) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`
      ctx.fillStyle = `rgba(100, 200, 255, ${alpha * 0.3})`
      ctx.lineWidth = 2

      ctx.beginPath()
      switch (shape.type) {
        case "circle":
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          break
        case "triangle":
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.closePath()
          break
        case "square":
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
        case "hexagon":
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const x = (shape.size / 2) * Math.cos(angle)
            const y = (shape.size / 2) * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          break
      }
      ctx.stroke()
      ctx.fill()
      ctx.restore()
    }

    const drawConnection = (shape1: Shape, shape2: Shape, distance: number, maxDistance: number) => {
      const alpha = (1 - distance / maxDistance) * 0.3
      ctx.strokeStyle = `rgba(150, 100, 255, ${alpha})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(shape1.x, shape1.y)
      ctx.lineTo(shape2.x, shape2.y)
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const maxConnectionDistance = 200

      // Update and draw shapes
      shapes.forEach((shape, i) => {
        // Update position
        shape.x += shape.vx
        shape.y += shape.vy

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1

        // Keep within bounds
        shape.x = Math.max(0, Math.min(canvas.width, shape.x))
        shape.y = Math.max(0, Math.min(canvas.height, shape.y))

        // Update rotation
        shape.rotation += shape.rotationSpeed

        // Find connections
        shape.connections = []
        shapes.forEach((otherShape, j) => {
          if (i === j) return
          const dx = shape.x - otherShape.x
          const dy = shape.y - otherShape.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxConnectionDistance) {
            shape.connections.push(j)
            if (i < j) {
              drawConnection(shape, otherShape, distance, maxConnectionDistance)
            }
          }
        })

        // Draw shape
        drawShape(shape)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60" />
}
