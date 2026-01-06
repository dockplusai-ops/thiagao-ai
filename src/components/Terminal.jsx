import { useState, useEffect } from 'react'

const Terminal = () => {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const lines = [
    'root@thiagao-ai:~$ loading_modules...',
    '[OK] Neural_Engines_v4.2',
    '[OK] Automation_Protocols_active',
    '[OK] 3D_Graphics_initialized',
    'root@thiagao-ai:~$ ready_to_build',
  ]

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + lines[lineIndex][charIndex])
          setCharIndex(charIndex + 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setText(prev => prev + '\n')
          setLineIndex(lineIndex + 1)
          setCharIndex(0)
        }, 500)
        return () => clearTimeout(timeout)
      }
    }
  }, [lineIndex, charIndex])

  return (
    <div className="pixel-border bg-black/90 p-4 font-terminal text-[#00ff41] text-sm overflow-hidden min-h-[140px] opacity-90 backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-3 border-b border-[#00ff41]/20 pb-2">
        <div className="w-2 h-2 bg-[#ff5f56] rounded-full"></div>
        <div className="w-2 h-2 bg-[#ffbd2e] rounded-full"></div>
        <div className="w-2 h-2 bg-[#27c93f] rounded-full"></div>
        <span className="text-[10px] text-[#00ff41]/50 ml-2 font-pixel">CMD_LOG</span>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
    </div>
  )
}

export default Terminal
