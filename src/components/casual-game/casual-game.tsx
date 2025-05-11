import type React from 'react'
import Answer from './answer'
import { useActions, useGameState } from './casual-game-store'
import Countdown from './countdown'
import Idle from './idle'
import Questions from './questions'
import { Correct, Timeout, Wrong } from './result'
import { useNavigate, type NavigateOptions } from '@tanstack/react-router'
import { useCallback } from 'react'
import { cn } from '@/lib/utils'

export const CasualGameLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('fixed inset-0 z-20 bg-background', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="relative w-full h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

type CasualGameProps = {
  children?: React.ReactNode
  custom?: string[]
  quitTo: NavigateOptions
}

const CasualGame = ({ children, custom = [], quitTo }: CasualGameProps) => {
  const gameState = useGameState()
  const { reset } = useActions()
  const navigate = useNavigate()

  const quit = useCallback(() => {
    reset()
    navigate(quitTo)
  }, [navigate])

  return (
    <>
      {gameState === 'idle' && !custom.includes('idle') && <Idle />}
      {gameState === 'countdown' && !custom.includes('countdown') && (
        <Countdown />
      )}
      {gameState === 'questions' && !custom.includes('questions') && (
        <Questions />
      )}
      {gameState === 'answer' && !custom.includes('answer') && <Answer />}
      {gameState === 'correct' && !custom.includes('correct') && (
        <Correct quit={quit} />
      )}
      {gameState === 'wrong' && !custom.includes('wrong') && (
        <Wrong quit={quit} />
      )}
      {gameState === 'timeout' && !custom.includes('timeout') && (
        <Timeout quit={quit} />
      )}
      {children && children}
    </>
  )
}

export default CasualGame
