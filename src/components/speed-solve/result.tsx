import {
  Trophy,
  XCircle,
  RotateCw,
  Power,
  Star,
  Award,
  Timer,
} from 'lucide-react'
import { Button } from '../ui/button'
import { useDifficulty, useScore, useWrongs } from './speed-solve-game-store'

type ResultsProps = {
  playAgain: () => void
  quit: () => void
}

const Results = ({ playAgain, quit }: ResultsProps) => {
  const score = useScore()
  const wrongs = useWrongs()
  const difficulty = useDifficulty()!
  const totalQuestions = score + wrongs
  const accuracy = Math.round((score / (totalQuestions || 1)) * 100)
  const averageTime =
    totalQuestions === 0
      ? 0
      : parseInt((difficulty.duration / totalQuestions).toFixed(1))

  return (
    <div className="w-full h-screen bg-background px-4 sm:px-6 md:px-8 py-6 overflow-y-auto">
      <div className="max-w-xl w-full mx-auto flex flex-col items-center pb-10">
        <div className="relative mb-4">
          <div className="flex items-center justify-center bg-card p-4 rounded-full border-2 border-border">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
          </div>
        </div>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
          Game Results
        </h1>

        {/* Accuracy Card */}
        <div className="w-full mb-6">
          <div className="bg-card rounded-xl p-4 border border-border hover:border-green-500 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                <svg
                  className="w-full h-full rotate-[-90deg]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-border"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="green"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${accuracy * 2.51}, 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground">
                  {accuracy}%
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-muted">
                    <Award className="text-green-500 w-4 h-4" />
                  </div>
                  <span className="text-md text-muted-foreground font-medium">
                    Your Accuracy
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {accuracy}%
                </div>
                <div className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full mt-1 inline-block">
                  {accuracy > 80
                    ? 'Outstanding performance!'
                    : accuracy > 60
                      ? 'Good progress!'
                      : 'Keep improving!'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-xl p-4 border border-border hover:border-sky-500 transition-colors w-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-muted">
                <Star className="text-yellow-400 w-4 h-4" />
              </div>
              <span className="text-md text-muted-foreground font-medium">
                Correct
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-foreground">{score}</div>
              <div className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {score > 5 ? 'Excellent!' : 'Good job!'}
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 border border-border hover:border-red-500 transition-colors w-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-muted">
                <XCircle className="text-red-400 w-4 h-4" />
              </div>
              <span className="text-md text-muted-foreground font-medium">
                Wrong
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-foreground">{wrongs}</div>
              <div className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {wrongs < 3 ? 'Few mistakes!' : 'Keep practicing!'}
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 border border-border hover:border-purple-500 transition-colors w-full sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-muted">
                <Timer className="text-purple-400 w-4 h-4" />
              </div>
              <span className="text-md text-muted-foreground font-medium">
                Avg Time / Q
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-foreground">
                {averageTime}s
              </div>
              <div className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {averageTime < 3
                  ? 'Fast!'
                  : averageTime < 6
                    ? 'Steady'
                    : 'Take your time'}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Button
            onClick={playAgain}
            className="flex-1 text-md font-semibold p-3 rounded-xl transition-all duration-300 hover:opacity-90"
          >
            <RotateCw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
          <Button
            onClick={quit}
            variant="destructive"
            className="flex-1 text-md font-semibold p-3 rounded-xl transition-colors"
          >
            <Power className="w-4 h-4 mr-2" />
            Quit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Results
