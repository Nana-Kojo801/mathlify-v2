import { createFileRoute } from '@tanstack/react-router'
import {
  Trophy,
  Clock,
  Zap,
  Brain,
  BarChart2,
  History,
  Award,
  TrendingUp,
  Users,
  Medal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/app/competition/')({
  component: CompetitionPage,
})

function CompetitionPage() {
  // Mock data
  const competitionData = {
    timeRemaining: '2d 14h 23m',
    casualLeaderboard: [
      {
        rank: 1,
        name: 'MathWizard42',
        bestScore: 2450,
        highestRound: 18,
        avgTime: '1.8s',
      },
      {
        rank: 2,
        name: 'NumberNinja',
        bestScore: 2310,
        highestRound: 16,
        avgTime: '2.1s',
      },
      {
        rank: 3,
        name: 'CalcQueen',
        bestScore: 2250,
        highestRound: 15,
        avgTime: '2.3s',
      },
      {
        rank: 4,
        name: 'ArithMaster',
        bestScore: 2180,
        highestRound: 14,
        avgTime: '2.5s',
      },
      {
        rank: 5,
        name: 'PrimeHunter',
        bestScore: 2100,
        highestRound: 13,
        avgTime: '2.7s',
      },
      {
        rank: 6,
        name: 'EqSolver',
        bestScore: 2050,
        highestRound: 12,
        avgTime: '2.9s',
      },
      {
        rank: 7,
        name: 'AlgebraKing',
        bestScore: 1980,
        highestRound: 12,
        avgTime: '3.1s',
      },
      {
        rank: 8,
        name: 'LogicWhiz',
        bestScore: 1940,
        highestRound: 11,
        avgTime: '3.3s',
      },
      {
        rank: 9,
        name: 'MathGenius',
        bestScore: 1920,
        highestRound: 11,
        avgTime: '3.5s',
      },
      {
        rank: 10,
        name: 'StatisticsPro',
        bestScore: 1880,
        highestRound: 10,
        avgTime: '3.7s',
      },
    ],
    speedLeaderboard: [
      {
        rank: 1,
        name: 'SpeedDemon',
        solved: 187,
        bestScore: 945,
        avgTime: '1.2s',
      },
      {
        rank: 2,
        name: 'QuickCalc',
        solved: 175,
        bestScore: 875,
        avgTime: '1.4s',
      },
      {
        rank: 3,
        name: 'FastFractions',
        solved: 168,
        bestScore: 840,
        avgTime: '1.5s',
      },
      {
        rank: 4,
        name: 'LightningMath',
        solved: 155,
        bestScore: 775,
        avgTime: '1.7s',
      },
      {
        rank: 5,
        name: 'TurboNumbers',
        solved: 142,
        bestScore: 710,
        avgTime: '1.9s',
      },
      {
        rank: 6,
        name: 'SwiftSolver',
        solved: 138,
        bestScore: 690,
        avgTime: '2.0s',
      },
      {
        rank: 7,
        name: 'RapidMath',
        solved: 135,
        bestScore: 675,
        avgTime: '2.1s',
      },
      {
        rank: 8,
        name: 'QuickMind',
        solved: 133,
        bestScore: 665,
        avgTime: '2.2s',
      },
      {
        rank: 9,
        name: 'ExpressMath',
        solved: 130,
        bestScore: 650,
        avgTime: '2.3s',
      },
      {
        rank: 10,
        name: 'FlashCalc',
        solved: 128,
        bestScore: 640,
        avgTime: '2.4s',
      },
    ],
    userStats: {
      casual: { rank: 12, bestScore: 1950, highestRound: 12, avgTime: '3.2s' },
      speed: { rank: 8, solved: 132, bestScore: 660, avgTime: '2.1s' },
    },
  }

  // Helper function to get initials
  const getInitials = (name: string) => {
    return name
      .split(/(?=[A-Z])|[\s]/)
      .filter((word) => word)
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  // Get color for player based on rank
  const getPlayerColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500'
      case 2:
        return 'text-slate-400'
      case 3:
        return 'text-amber-700'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Competition</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="h-7 gap-1.5 px-3">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-sm font-medium">
                Resets in: {competitionData.timeRemaining}
              </span>
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 w-full">
        {/* Competition Tabs */}
        <Tabs defaultValue="casual" className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2 mb-6 h-11">
            <TabsTrigger value="casual" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Brain className="w-4 h-4" />
              <span>Casual Mode</span>
            </TabsTrigger>
            <TabsTrigger value="speed" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Zap className="w-4 h-4" />
              <span>Speed Solve</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="casual">
            {/* Performance Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 w-full">
              <StatCard
                icon={<Award className="w-5 h-5" />}
                title="Current Rank"
                value={`#${competitionData.userStats.casual.rank}`}
                description="Global ranking"
              />
              <StatCard
                icon={<BarChart2 className="w-5 h-5" />}
                title="Highest Round"
                value={competitionData.userStats.casual.highestRound}
                description="Furthest round reached"
              />
              <StatCard
                icon={<Clock className="w-5 h-5" />}
                title="Avg Time"
                value={competitionData.userStats.casual.avgTime}
                description="Per round average"
              />
              <StatCard
                icon={<TrendingUp className="w-5 h-5" />}
                title="Best Score"
                value={competitionData.userStats.casual.bestScore}
                description="Highest achieved score"
              />
            </div>

            {/* Enhanced Leaderboard */}
            <Card className="mb-6 backdrop-blur-sm shadow-sm border-border bg-card/60 w-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span>Weekly Leaderboard</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <History className="w-4 h-4" />
                    <span className="hidden sm:inline">View History</span>
                  </Button>
                </div>
                <CardDescription>
                  Top players by score in Casual Mode
                </CardDescription>
              </CardHeader>

              {/* New Leaderboard Design */}
              <CardContent className="p-0">
                {/* Column headers for clarity - visible on all screens */}
                <div className="px-4 py-2 bg-muted/40 border-b border-border/60 text-xs font-medium text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div>Player Rankings</div>
                    <div className="flex gap-4 sm:gap-8">
                      <div className="text-right w-14 sm:w-20">Score</div>
                      <div className="text-right w-12 sm:w-16">Round</div>
                      <div className="text-right w-12 sm:w-16 hidden xs:block">
                        Avg Time
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top 3 Players - New Medal Style */}
                <div className="px-4 py-4 border-b border-border/40">
                  {/* Legend for scores */}
                  <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                      <span>
                        Score: Points earned based on difficulty and speed
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-secondary/70"></div>
                      <span>Round: Highest level reached</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent/70"></div>
                      <span>Time: Average seconds per round</span>
                    </div>
                  </div>

                  {/* New medal-style top 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {competitionData.casualLeaderboard
                      .slice(0, 3)
                      .map((player) => (
                        <div
                          key={player.rank}
                          className="relative flex items-center gap-3 rounded-lg border border-border/60 p-3 bg-background/50 hover:bg-muted/20 transition-colors"
                        >
                          <div className="absolute top-0 left-3 -translate-y-1/2 flex items-center justify-center rounded-full bg-background shadow-sm border border-border w-6 h-6">
                            {player.rank === 1 ? (
                              <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                            ) : player.rank === 2 ? (
                              <Medal className="h-3.5 w-3.5 text-slate-400" />
                            ) : (
                              <Medal className="h-3.5 w-3.5 text-amber-700" />
                            )}
                          </div>
                          <Avatar className="h-12 w-12 border border-border/40">
                            <AvatarFallback
                              className={`${getPlayerColor(player.rank)}`}
                            >
                              {getInitials(player.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <div
                                className={`font-medium truncate ${getPlayerColor(player.rank)}`}
                              >
                                {player.name}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Score:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.bestScore}
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Round:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.highestRound}
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Time:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.avgTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Rest of Players - Desktop */}
                <div className="hidden sm:block">
                  <div className="grid grid-cols-12 gap-4 p-3 bg-card/40 font-medium text-sm text-muted-foreground">
                    <div className="col-span-1 pl-4">Rank</div>
                    <div className="col-span-5">Player</div>
                    <div className="col-span-2 text-right pr-4">Score</div>
                    <div className="col-span-2 text-right pr-4">Round</div>
                    <div className="col-span-2 text-right pr-4">Avg Time</div>
                  </div>
                  {competitionData.casualLeaderboard.slice(3).map((player) => (
                    <div
                      key={player.rank}
                      className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/20 border-b border-border/20 last:border-0"
                    >
                      <div className="col-span-1 pl-4 font-medium">
                        {player.rank}
                      </div>
                      <div className="col-span-5 truncate flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {getInitials(player.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <div className="col-span-2 text-right pr-4 font-medium">
                        {player.bestScore}
                      </div>
                      <div className="col-span-2 text-right pr-4">
                        {player.highestRound}
                      </div>
                      <div className="col-span-2 text-right pr-4 text-muted-foreground">
                        {player.avgTime}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rest of Players - Mobile */}
                <div className="sm:hidden divide-y divide-border/30">
                  {competitionData.casualLeaderboard.slice(3).map((player) => (
                    <div
                      key={player.rank}
                      className="relative px-4 py-3 hover:bg-muted/20"
                    >
                      <div className="flex items-center mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center text-sm font-medium mr-3">
                          {player.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">
                            {player.name}
                          </div>
                        </div>
                      </div>
                      <div className="ml-10 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Score:{' '}
                          </span>
                          <span className="font-medium">
                            {player.bestScore}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Round:{' '}
                          </span>
                          <span className="font-medium">
                            {player.highestRound}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Time:{' '}
                          </span>
                          <span className="font-medium">{player.avgTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-3 pb-4 px-4">
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  <span>See Full Leaderboard</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Competition CTA */}
            <Card className="bg-card/60 backdrop-blur-sm shadow-sm w-full">
              <CardHeader>
                <CardTitle>Casual Marathon</CardTitle>
                <CardDescription>
                  Advance through increasingly difficult rounds. Your best score
                  combines rounds completed and speed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Join Marathon
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="speed">
            {/* Performance Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 w-full">
              <StatCard
                icon={<Award className="w-5 h-5" />}
                title="Current Rank"
                value={`#${competitionData.userStats.speed.rank}`}
                description="Global ranking"
              />
              <StatCard
                icon={<TrendingUp className="w-5 h-5" />}
                title="Problems Solved"
                value={competitionData.userStats.speed.solved}
                description="Total correct answers"
              />
              <StatCard
                icon={<Clock className="w-5 h-5" />}
                title="Avg Time"
                value={competitionData.userStats.speed.avgTime}
                description="Per question average"
              />
              <StatCard
                icon={<BarChart2 className="w-5 h-5" />}
                title="Best Score"
                value={competitionData.userStats.speed.bestScore}
                description="Score from solved × time"
              />
            </div>

            {/* Enhanced Leaderboard */}
            <Card className="mb-6 backdrop-blur-sm shadow-sm border-border bg-card/60 w-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span>Weekly Leaderboard</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <History className="w-4 h-4" />
                    <span className="hidden sm:inline">View History</span>
                  </Button>
                </div>
                <CardDescription>
                  Top players by score in Speed Mode
                </CardDescription>
              </CardHeader>

              {/* New Leaderboard Design */}
              <CardContent className="p-0">
                {/* Column headers for clarity - visible on all screens */}
                <div className="px-4 py-2 bg-muted/40 border-b border-border/60 text-xs font-medium text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div>Player Rankings</div>
                    <div className="flex gap-4 sm:gap-8">
                      <div className="text-right w-14 sm:w-20">Solved</div>
                      <div className="text-right w-12 sm:w-16 hidden xs:block">
                        Time
                      </div>
                      <div className="text-right w-12 sm:w-16">Score</div>
                    </div>
                  </div>
                </div>

                {/* Top 3 Players - New Medal Style */}
                <div className="px-4 py-4 border-b border-border/40">
                  {/* Legend for scores */}
                  <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                      <span>Score: (solved × 5) - (time in seconds)</span>
                    </div>
                    <div className="flex items-center gap-1.5 mx-4">
                      <div className="w-3 h-3 rounded-full bg-secondary/70"></div>
                      <span>Solved: Total problems correct</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent/70"></div>
                      <span>Time: Average seconds per problem</span>
                    </div>
                  </div>

                  {/* New medal-style top 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {competitionData.speedLeaderboard
                      .slice(0, 3)
                      .map((player) => (
                        <div
                          key={player.rank}
                          className="relative flex items-center gap-3 rounded-lg border border-border/60 p-3 bg-background/50 hover:bg-muted/20 transition-colors"
                        >
                          <div className="absolute top-0 left-3 -translate-y-1/2 flex items-center justify-center rounded-full bg-background shadow-sm border border-border w-6 h-6">
                            {player.rank === 1 ? (
                              <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                            ) : player.rank === 2 ? (
                              <Medal className="h-3.5 w-3.5 text-slate-400" />
                            ) : (
                              <Medal className="h-3.5 w-3.5 text-amber-700" />
                            )}
                          </div>
                          <Avatar className="h-12 w-12 border border-border/40">
                            <AvatarFallback
                              className={`${getPlayerColor(player.rank)}`}
                            >
                              {getInitials(player.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <div
                                className={`font-medium truncate ${getPlayerColor(player.rank)}`}
                              >
                                {player.name}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Solved:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.solved}
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Time:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.avgTime}
                                </span>
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">
                                  Score:{' '}
                                </span>
                                <span className="font-medium">
                                  {player.bestScore}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Rest of Players - Desktop */}
                <div className="hidden sm:block">
                  <div className="grid grid-cols-12 gap-4 p-3 bg-card/40 font-medium text-sm text-muted-foreground">
                    <div className="col-span-1 pl-4">Rank</div>
                    <div className="col-span-5">Player</div>
                    <div className="col-span-2 text-right">Solved</div>
                    <div className="col-span-2 text-right">Avg Time</div>
                    <div className="col-span-2 text-right pr-4">Score</div>
                  </div>
                  {competitionData.speedLeaderboard.slice(3).map((player) => (
                    <div
                      key={player.rank}
                      className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/20 border-b border-border/20 last:border-0"
                    >
                      <div className="col-span-1 pl-4 font-medium">
                        {player.rank}
                      </div>
                      <div className="col-span-5 truncate flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {getInitials(player.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <div className="col-span-2 text-right font-medium">
                        {player.solved}
                      </div>
                      <div className="col-span-2 text-right text-muted-foreground">
                        {player.avgTime}
                      </div>
                      <div className="col-span-2 text-right pr-4 font-medium">
                        {player.bestScore}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rest of Players - Mobile */}
                <div className="sm:hidden divide-y divide-border/30">
                  {competitionData.speedLeaderboard.slice(3).map((player) => (
                    <div
                      key={player.rank}
                      className="relative px-4 py-3 hover:bg-muted/20"
                    >
                      <div className="flex items-center mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center text-sm font-medium mr-3">
                          {player.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">
                            {player.name}
                          </div>
                        </div>
                      </div>
                      <div className="ml-10 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Solved:{' '}
                          </span>
                          <span className="font-medium">{player.solved}</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Time:{' '}
                          </span>
                          <span className="font-medium">{player.avgTime}</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">
                            Score:{' '}
                          </span>
                          <span className="font-medium">
                            {player.bestScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-3 pb-4 px-4">
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  <span>See Full Leaderboard</span>
                </Button>
              </CardFooter>
            </Card>

            {/* Competition CTA */}
            <Card className="bg-card/60 backdrop-blur-sm shadow-sm w-full">
              <CardHeader>
                <CardTitle>Speed Challenge</CardTitle>
                <CardDescription>
                  Solve problems quickly and accurately. Score is calculated by
                  (solved × 5) - (total time in seconds).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// Reusable stat card component
function StatCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode
  title: string
  value: string | number
  description: string
}) {
  return (
    <Card className="bg-card/60 backdrop-blur-sm shadow-sm">
      <CardContent className="pt-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-1 rounded-md bg-primary/10">{icon}</div>
          <h4 className="font-medium">{title}</h4>
        </div>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
