'use client'

import { useEffect, useRef, useState } from 'react'

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const ringPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Animate ring with trailing effect
      if (ringRef.current) {
        ringPosition.current.x += (e.clientX - ringPosition.current.x) * 0.15
        ringPosition.current.y += (e.clientY - ringPosition.current.y) * 0.15

        ringRef.current.style.left = `${ringPosition.current.x}px`
        ringRef.current.style.top = `${ringPosition.current.y}px`
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease-out',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
      />
    </>
  )
}
