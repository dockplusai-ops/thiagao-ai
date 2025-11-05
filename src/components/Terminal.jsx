import { useState, useEffect } from 'react'

function Terminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const lines = [
    '$ analyzing business processes...',
    '$ deploying automation solutions...',
    '$ integrating enterprise systems...',
    '$ ready for deployment',
  ]

  // Typing effect
  useEffect(() => {
    const currentLine = lines[currentLineIndex]
    if (displayedText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1))
      }, 50) // Slow, professional typing pace

      return () => clearTimeout(timer)
    } else {
      // Wait before moving to next line or restarting
      const timer = setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1)
          setDisplayedText('')
        } else {
          // Loop back to start
          setTimeout(() => {
            setCurrentLineIndex(0)
            setDisplayedText('')
          }, 2000)
        }
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [displayedText, currentLineIndex, lines])

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-sm p-4 terminal-font text-sm text-white max-w-md w-full">
      <div className="h-32 flex flex-col justify-end">
        <div className="flex items-center">
          <span className="text-slate-300">{displayedText}</span>
          {showCursor && <span className="text-white">▊</span>}
        </div>
      </div>
    </div>
  )
}

export default Terminal

