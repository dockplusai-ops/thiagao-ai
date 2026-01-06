import { useState, useEffect, useRef } from 'react'

const PixelRun = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isJumping, setIsJumping] = useState(false)
    const [score, setScore] = useState(0)
    const [obstaclesPassed, setObstaclesPassed] = useState(0)
    const [obstacles, setObstacles] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)

    const requestRef = useRef()
    const lastTimeRef = useRef()

    const GRAVITY = 0.5
    const JUMP_FORCE = -10
    const GROUND_Y = 120
    const PLAYER_X = 50
    const BASE_SPEED = 5

    const [playerY, setPlayerY] = useState(GROUND_Y)
    const [playerVelocity, setPlayerVelocity] = useState(0)

    // Calculate speed based on obstacles passed: increase every 5
    const currentSpeed = BASE_SPEED + Math.floor(obstaclesPassed / 5) * 0.8

    const handleJump = () => {
        if (gameOver || gameWon) {
            setGameOver(false)
            setGameWon(false)
            setIsPlaying(true)
            setScore(0)
            setObstaclesPassed(0)
            setObstacles([])
            setPlayerY(GROUND_Y)
            return
        }
        if (!isPlaying) {
            setIsPlaying(true)
            setScore(0)
            setObstaclesPassed(0)
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
    }, [isPlaying, isJumping, gameOver, gameWon])

    const gameLoop = (time) => {
        if (lastTimeRef.current !== undefined) {
            if (isPlaying && !gameOver && !gameWon) {
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
                        .map((obs) => ({ ...obs, x: obs.x - currentSpeed }))

                    // Count passed obstacles
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

                    // Spawn new obstacle
                    const spawnInterval = Math.max(200, 400 - (obstaclesPassed * 2))
                    if (filtered.length === 0 || (filtered[filtered.length - 1].x < spawnInterval && Math.random() < 0.05)) {
                        if (obstaclesPassed + filtered.length < 100) {
                            filtered.push({ x: 900, id: Date.now(), passed: false })
                        }
                    }

                    // Collision Detection - Refined for better jumping
                    // Character is roughly 30x40. Obstacle is 20x20.
                    // When jumping, playerY decreases. 
                    const playerBox = { x: PLAYER_X + 10, y: playerY, w: 20, h: 40 }
                    const collided = filtered.some((obs) => {
                        const obsBox = { x: obs.x + 5, y: GROUND_Y + 10, w: 20, h: 20 }
                        return (
                            playerBox.x < obsBox.x + obsBox.w &&
                            playerBox.x + playerBox.w > obsBox.x &&
                            playerBox.y + playerBox.h > obsBox.y &&
                            playerBox.y < obsBox.y + obsBox.h
                        )
                    })

                    if (collided) {
                        setGameOver(true)
                        setIsPlaying(false)
                    }

                    return filtered
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
    }, [isPlaying, playerVelocity, playerY, gameOver, gameWon, obstaclesPassed])

    return (
        <div
            className="w-full bg-slate-900/50 border-y border-blue-500/20 py-8 relative overflow-hidden group cursor-pointer"
            onClick={handleJump}
        >
            <div className="max-w-7xl mx-auto px-6 relative h-40">
                {/* Game Title/UI */}
                <div className="absolute top-0 left-6 z-20">
                    <div className="font-pixel text-[8px] text-blue-500/50 mb-1">PROTO_RUNNER_V2.0</div>
                    <div className="font-pixel text-xl text-blue-400">
                        {obstaclesPassed}/100 | SPEED: {currentSpeed.toFixed(1)}
                    </div>
                </div>

                {!isPlaying && !gameOver && !gameWon && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4 animate-pulse">PRESS_SPACE_TO_START</div>
                            <div className="font-terminal text-blue-500 text-sm opacity-60">MISSION: REACH 100 OBSTACLES</div>
                        </div>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-red-950/60 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4">SYSTEM_FAILURE</div>
                            <div className="font-pixel text-sm text-red-400 mb-6">SCORE: {obstaclesPassed}</div>
                            <div className="font-pixel text-xs text-white animate-pulse">CLICK_TO_RETRY</div>
                        </div>
                    </div>
                )}

                {gameWon && (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-blue-950/60 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="font-pixel text-2xl text-white mb-4">PROTOCOL_COMPLETE</div>
                            <div className="font-pixel text-sm text-blue-400 mb-6">100/100 OBSTACLES CLEARED</div>
                            <div className="font-pixel text-xs text-white animate-pulse">CHAMPION_OF_CODE</div>
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

                    {/* Obstacles */}
                    {obstacles.map((obs) => (
                        <div
                            key={obs.id}
                            style={{ transform: `translate3d(${obs.x}px, ${GROUND_Y + 10}px, 0)` }}
                            className="absolute"
                        >
                            <div className="w-8 h-8 bg-red-900/40 border border-red-500 flex items-center justify-center rotate-45">
                                <span className="font-pixel text-[8px] text-red-500 -rotate-45">!</span>
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
