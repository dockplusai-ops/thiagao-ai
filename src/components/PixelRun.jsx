import { useState, useEffect, useRef } from 'react'

const PixelRun = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isJumping, setIsJumping] = useState(false)
    const [score, setScore] = useState(0)
    const [obstacles, setObstacles] = useState([])
    const gameRef = useRef(null)
    const requestRef = useRef()
    const lastTimeRef = useRef()

    const GRAVITY = 0.6
    const JUMP_FORCE = -12
    const GROUND_Y = 120
    const PLAYER_X = 50

    const [playerY, setPlayerY] = useState(GROUND_Y)
    const [playerVelocity, setPlayerVelocity] = useState(0)

    const handleJump = () => {
        if (!isPlaying) {
            setIsPlaying(true)
            setScore(0)
            setObstacles([])
            setPlayerY(GROUND_Y)
            return
        }
        if (!isJumping) {
            setIsJumping(true)
            setPlayerVelocity(JUMP_FORCE)
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault()
                handleJump()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying, isJumping])

    const gameLoop = (time) => {
        if (lastTimeRef.current !== undefined) {
            const deltaTime = time - lastTimeRef.current

            if (isPlaying) {
                // Update Player
                setPlayerY((prevY) => {
                    const nextY = prevY + playerVelocity
                    if (nextY >= GROUND_Y) {
                        setIsJumping(false)
                        setPlayerVelocity(0)
                        return GROUND_Y
                    }
                    setPlayerVelocity((v) => v + GRAVITY)
                    return nextY
                })

                // Update Obstacles
                setObstacles((prev) => {
                    const next = prev
                        .map((obs) => ({ ...obs, x: obs.x - 5 }))
                        .filter((obs) => obs.x > -50)

                    // Spawn new obstacle
                    if (next.length === 0 || (next[next.length - 1].x < 400 && Math.random() < 0.02)) {
                        next.push({ x: 800, id: Date.now(), type: Math.random() > 0.5 ? 'AI' : 'CODE' })
                    }

                    // Collision Detection
                    const playerRect = { x: PLAYER_X, y: playerY, w: 30, h: 40 }
                    const collided = next.some((obs) => {
                        const obsRect = { x: obs.x, y: GROUND_Y, w: 20, h: 20 }
                        return (
                            playerRect.x < obsRect.x + obsRect.w &&
                            playerRect.x + playerRect.w > obsRect.x &&
                            playerRect.y < obsRect.y + obsRect.h &&
                            playerRect.y + playerRect.h > obsRect.y
                        )
                    })

                    if (collided) {
                        setIsPlaying(false)
                    }

                    return next
                })

                setScore((prev) => prev + 1)
            }
        }
        lastTimeRef.current = time
        requestRef.current = requestAnimationFrame(gameLoop)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(gameLoop)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isPlaying, playerVelocity, playerY])

    return (
        <div
            className="w-full bg-slate-900/50 border-y border-blue-500/20 py-8 relative overflow-hidden group cursor-pointer"
            onClick={handleJump}
        >
            <div className="max-w-7xl mx-auto px-6 relative h-40">
                {/* Game Title/UI */}
                <div className="absolute top-0 left-6 z-20">
                    <div className="font-pixel text-[8px] text-blue-500/50 mb-1">PROTO_RUNNER_V1.0</div>
                    <div className="font-pixel text-xl text-blue-400">SCORE: {Math.floor(score / 10)}</div>
                </div>

                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4 animate-pulse">PRESS_SPACE_TO_RUN</div>
                            <div className="font-terminal text-blue-500 text-sm opacity-60">THIAGAO_AI_ADVENTURE</div>
                        </div>
                    </div>
                )}

                {/* Game Area */}
                <div className="relative h-full w-full border-b border-blue-500/30">
                    {/* Ground Lines */}
                    <div className="absolute bottom-0 w-full h-px bg-blue-500/20"></div>

                    {/* Character */}
                    <div
                        style={{
                            transform: `translate3d(${PLAYER_X}px, ${playerY}px, 0)`,
                        }}
                        className="absolute transition-transform duration-75"
                    >
                        <div className={`relative ${isPlaying && !isJumping ? 'animate-bounce-short' : ''}`}>
                            <svg width="40" height="44" viewBox="0 0 40 44" className="fill-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                                {/* 8-bit Style Thiagao */}
                                <rect x="12" y="8" width="16" height="16" fill="#d2b48c" /> {/* Head/Skin */}
                                <rect x="12" y="2" width="16" height="6" fill="#4b3621" /> {/* Hair */}
                                <rect x="14" y="14" width="4" height="2" fill="white" /> {/* Eye L */}
                                <rect x="22" y="14" width="4" height="2" fill="white" /> {/* Eye R */}
                                <rect x="16" y="20" width="8" height="2" fill="#4b3621" opacity="0.6" /> {/* Beard */}
                                <rect x="8" y="24" width="24" height="12" fill="#1a1a1a" /> {/* Shirt */}
                                <rect x="10" y="36" width="6" height="8" fill="#222" /> {/* Leg L */}
                                <rect x="24" y="36" width="6" height="8" fill="#222" /> {/* Leg R */}
                            </svg>
                        </div>
                    </div>

                    {/* Obstacles */}
                    {obstacles.map((obs) => (
                        <div
                            key={obs.id}
                            style={{ transform: `translate3d(${obs.x}px, ${GROUND_Y + 10}px, 0)` }}
                            className="absolute"
                        >
                            <div className="w-8 h-8 bg-red-900/30 border border-red-500 flex items-center justify-center rotate-45 animate-pulse">
                                <span className="font-pixel text-[8px] text-red-500 -rotate-45">ERR</span>
                            </div>
                        </div>
                    ))}

                    {/* Decorative Background Elements */}
                    <div className="absolute top-4 right-20 w-12 h-1 px-4 bg-blue-900/20"></div>
                    <div className="absolute top-10 right-40 w-8 h-1 px-4 bg-blue-900/20"></div>
                </div>
            </div>
        </div>
    )
}

export default PixelRun
