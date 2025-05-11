import { create } from 'zustand'
import type { CasualGameStore } from './types'
import { generateCasualGameQuestions } from '@/lib/helpers'

const useCasualGameStore = create<CasualGameStore>((set, get) => ({
  state: 'idle',
  difficulty: null,
  questions: [],
  answer: null,
  timeUsed: 0,
  actions: {
    setState: (state) => set({ state }),
    setDifficulty: (difficulty) => set({ difficulty }),
    setQuestions: (questions) => set({ questions }),
    setAnswer: (answer) => set({ answer }),
    setTimeUsed: (timeUsed) => set({ timeUsed }),
    init: (difficulty) => {
      if (difficulty === null) throw Error('Difficulty must not be null')
      console.log('initing', difficulty)
      const questions = generateCasualGameQuestions(difficulty)
      const answer = questions.reduce((prev, curr) => prev + curr, 0)
      set({ difficulty, questions, answer, state: 'idle', timeUsed: 0 })
    },
    playAgain: () => {
      get().actions.init(get().difficulty)
    },
    reset: () => {
      set({
        answer: null,
        difficulty: null,
        state: 'idle',
        questions: [],
        timeUsed: 0,
      })
    },
  },
}))

export const useActions = () => useCasualGameStore((state) => state.actions)

export const useGameState = () => useCasualGameStore((state) => state.state)
export const useQuestions = () => useCasualGameStore((state) => state.questions)
export const useTimeUsed = () => useCasualGameStore((state) => state.timeUsed)
export const useDifficulty = () =>
  useCasualGameStore((state) => state.difficulty!)
export const useAnswer = () => useCasualGameStore((state) => state.answer!)
