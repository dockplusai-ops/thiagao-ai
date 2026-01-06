import { useState, useEffect, useRef } from 'react'

const Terminal = () => {
  const [history, setHistory] = useState([
    'root@thiagao-ai:~$ system_init...',
    '[OK] Neural_Engines_v4.2',
    '[OK] Automation_Protocols_active',
    'root@thiagao-ai:~$ type "help" for commands'
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      let response = ''

      switch (cmd) {
        case 'help':
          response = 'AVAILABLE_COMMANDS: [HELP, CLEAR, WHOIS, CONTACT, RUN_GAME, MATRIX]'
          break
        case 'clear':
          setHistory([])
          setInput('')
          return
        case 'whois':
          response = 'THIAGAO_AI: LEAD DEVELOPER & AI ARCHITECT. CAPE COD, MA.'
          break
        case 'contact':
          response = 'REDIRECTING_TO_COMMS_ARRAY...'
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          break
        case 'run_game':
          response = 'INITIALIZING_PROTO_RUNNER...'
          document.activeElement.blur()
          setTimeout(() => {
            document.querySelector('.group.cursor-pointer')?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
          break
        case 'matrix':
          response = 'DECODING_REALITY...'
          document.body.classList.toggle('matrix-mode')
          break
        case '':
          break
        default:
          response = `COMMAND_NOT_FOUND: ${cmd}`
      }

      setHistory([...history, `root@thiagao-ai:~$ ${input}`, response].filter(Boolean))
      setInput('')
    }
  }

  return (
    <div className="pixel-border bg-black/90 p-4 font-terminal text-[#00ff41] text-sm opacity-95 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.1)]">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-3 border-b border-[#00ff41]/20 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#ff5f56] rounded-full"></div>
          <div className="w-2 h-2 bg-[#ffbd2e] rounded-full"></div>
          <div className="w-2 h-2 bg-[#27c93f] rounded-full"></div>
        </div>
        <span className="text-[8px] text-[#00ff41]/50 font-pixel">THIAGAO_v4.2_OS</span>
      </div>

      {/* Output Area */}
      <div
        ref={scrollRef}
        className="h-40 overflow-y-auto mb-2 custom-scrollbar"
      >
        {history.map((line, i) => (
          <div key={i} className="mb-1 leading-relaxed">
            {line.startsWith('root') ? (
              <span className="text-[#00ff41]">{line}</span>
            ) : (
              <span className="text-white/80">{line}</span>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-[#00ff41]">
          <span className="mr-2">root@thiagao-ai:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none flex-1 font-terminal text-[#00ff41]"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal
