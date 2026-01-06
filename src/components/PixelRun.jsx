import { useState, useEffect, useRef, useCallback } from 'react'

const PixelRun = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isJumping, setIsJumping] = useState(false)
    const [obstaclesPassed, setObstaclesPassed] = useState(0)
    const [obstacles, setObstacles] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)

    const containerRef = useRef()
    const requestRef = useRef()
    const lastTimeRef = useRef()
    const velocityRef = useRef(0)
    const playerYRef = useRef(120)
    const isVisible = useRef(true)

    const [renderPlayerY, setRenderPlayerY] = useState(120)

    const GRAVITY = 0.4
    const JUMP_FORCE = -10
    const GROUND_Y = 120
    const PLAYER_X = 50
    const BASE_SPEED = 3

    const currentSpeed = BASE_SPEED + Math.floor(obstaclesPassed / 5) * 0.5

    const handleJump = useCallback(() => {
        if (gameOver || gameWon) {
            resetGame()
            return
        }
        if (!isPlaying) {
            setIsPlaying(true)
            return
        }
        if (!isJumping) {
            setIsJumping(true)
            velocityRef.current = JUMP_FORCE
        }
    }, [gameOver, gameWon, isPlaying, isJumping, resetGame])

    const resetGame = useCallback(() => {
        setGameOver(false)
        setGameWon(false)
        setIsPlaying(true)
        setObstaclesPassed(0)
        setObstacles([])
        velocityRef.current = 0
        playerYRef.current = GROUND_Y
        setRenderPlayerY(GROUND_Y)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault()
                handleJump()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleJump])

    // Touch support for mobile
    useEffect(() => {
        const handleTouchStart = (e) => {
            e.preventDefault()
            handleJump()
        }
        
        const container = containerRef.current
        if (container) {
            container.addEventListener('touchstart', handleTouchStart, { passive: false })
        }
        
        return () => {
            if (container) {
                container.removeEventListener('touchstart', handleTouchStart)
            }
        }
    }, [handleJump])

    const gameLoop = (time) => {
        if (!isVisible.current) {
            lastTimeRef.current = undefined
            return // Stop the loop when not visible
        }
        
        if (!isPlaying && !gameOver && !gameWon) {
            lastTimeRef.current = time
            requestRef.current = requestAnimationFrame(gameLoop)
            return
        }

        if (lastTimeRef.current !== undefined) {
            if (isPlaying && !gameOver && !gameWon) {
                velocityRef.current += GRAVITY
                playerYRef.current += velocityRef.current

                if (playerYRef.current >= GROUND_Y) {
                    playerYRef.current = GROUND_Y
                    velocityRef.current = 0
                    setIsJumping(false)
                }
                setRenderPlayerY(playerYRef.current)

                setObstacles((prev) => {
                    const next = prev.map((obs) => ({ ...obs, x: obs.x - currentSpeed }))

                    const filtered = next.filter((obs) => {
                        if (obs.x <= PLAYER_X - 20 && !obs.passed) {
                            obs.passed = true
                            setObstaclesPassed(p => {
                                const newVal = p + 1
                                if (newVal >= 100) {
                                    setGameWon(true)
                                    setIsPlaying(false)
                                }
                                return newVal
                            })
                        }
                        return obs.x > -50
                    })

                    const spawnInterval = Math.max(250, 500 - (obstaclesPassed * 3))
                    if (filtered.length === 0 || (filtered[filtered.length - 1].x < spawnInterval && Math.random() < 0.05)) {
                        if (obstaclesPassed + filtered.length < 100) {
                            filtered.push({ x: 900, id: Date.now(), passed: false })
                        }
                    }

                    const playerHitbox = {
                        x: PLAYER_X + 15,
                        y: playerYRef.current + 10,
                        w: 10,
                        h: 25
                    }

                    const collided = filtered.some((obs) => {
                        const obsHitbox = { x: obs.x + 8, y: GROUND_Y + 12, w: 14, h: 14 }
                        return (
                            playerHitbox.x < obsHitbox.x + obsHitbox.w &&
                            playerHitbox.x + playerHitbox.w > obsHitbox.x &&
                            playerHitbox.y < obsHitbox.y + obsHitbox.h &&
                            playerHitbox.y + playerHitbox.h > obsHitbox.y
                        )
                    })

                    if (collided) {
                        setGameOver(true)
                        setIsPlaying(false)
                        velocityRef.current = 0
                    }

                    return filtered
                })
            }
        }
        lastTimeRef.current = time
        requestRef.current = requestAnimationFrame(gameLoop)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible.current = entry.isIntersecting
                if (entry.isIntersecting && !requestRef.current) {
                    requestRef.current = requestAnimationFrame(gameLoop)
                }
            },
            { threshold: 0.1 }
        )
        
        if (containerRef.current) {
            observer.observe(containerRef.current)
            requestRef.current = requestAnimationFrame(gameLoop)
        }
        
        return () => {
            observer.disconnect()
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current)
                requestRef.current = null
            }
        }
    }, [isPlaying, gameOver, gameWon, obstaclesPassed])

    return (
        <div
            ref={containerRef}
            className="w-full bg-slate-900/50 border-y border-blue-500/20 py-8 relative overflow-hidden group cursor-pointer select-none touch-none"
            onMouseDown={(e) => { e.preventDefault(); handleJump(); }}
            onTouchStart={(e) => { e.preventDefault(); handleJump(); }}
            style={{ contain: 'layout paint', WebkitTouchCallout: 'none', userSelect: 'none' }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative h-40">
                <div className="absolute top-0 left-4 md:left-6 z-20">
                    <div className="font-pixel text-[6px] md:text-[8px] text-blue-500/50 mb-1">PROTO_RUNNER_V2.1</div>
                    <div className="font-pixel text-sm md:text-xl text-blue-400">
                        {obstaclesPassed}/100 | SPD: {currentSpeed.toFixed(1)}
                    </div>
                </div>

                {!isPlaying && !gameOver && !gameWon && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-sm">
                        <div className="text-center px-4">
                            <div className="font-pixel text-lg md:text-2xl text-white mb-4 animate-pulse">CLICK_OR_SPACE_TO_START</div>
                            <div className="font-terminal text-blue-500 text-xs md:text-sm opacity-60">MISSION: REACH 100 OBSTACLES</div>
                        </div>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-red-950/60 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4 uppercase">System Failed</div>
                            <div className="font-pixel text-sm text-red-400 mb-6 uppercase">Obstacles: {obstaclesPassed}</div>
                            <div className="font-pixel text-[10px] text-white animate-pulse">CLICK_TO_REBOOT</div>
                        </div>
                    </div>
                )}

                {gameWon && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-blue-950/60 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4 uppercase">Protocol Complete</div>
                            <div className="font-pixel text-sm text-blue-400 mb-6 uppercase">100 Obstacles Cleared</div>
                            <div className="font-pixel text-[10px] text-white animate-pulse">CHAMPION_OF_CODE</div>
                        </div>
                    </div>
                )}

                <div className="relative h-full w-full border-b border-blue-500/30">
                    <div className="absolute bottom-0 w-full h-px bg-blue-500/20"></div>

                    <div
                        style={{
                            transform: `translate3d(${PLAYER_X}px, ${renderPlayerY}px, 0)`,
                            willChange: 'transform'
                        }}
                        className="absolute"
                    >
                        <div className={`relative ${isPlaying && !isJumping ? 'animate-bounce-short' : ''}`}>
                            <svg width="40" height="44" viewBox="0 0 40 44" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                                <rect x="12" y="8" width="16" height="16" fill="#d2b48c" />
                                <rect x="12" y="2" width="16" height="6" fill="#4b3621" />
                                <rect x="14" y="14" width="4" height="2" fill="white" />
                                <rect x="22" y="14" width="4" height="2" fill="white" />
                                <rect x="16" y="20" width="8" height="2" fill="#4b3621" opacity="0.6" />
                                <rect x="8" y="24" width="24" height="12" fill="#1a1a1a" />
                                <rect x="10" y="36" width="6" height="8" fill="#222" />
                                <rect x="24" y="36" width="6" height="8" fill="#222" />
                            </svg>
                        </div>
                    </div>

                    {obstacles.map((obs) => (
                        <div
                            key={obs.id}
                            style={{
                                transform: `translate3d(${obs.x}px, ${GROUND_Y + 10}px, 0)`,
                                willChange: 'transform'
                            }}
                            className="absolute"
                        >
                            <div className="w-8 h-8 bg-red-900/40 border border-red-500 flex items-center justify-center rotate-45">
                                <span className="font-pixel text-[10px] text-red-500 -rotate-45 font-bold">!</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PixelRun
