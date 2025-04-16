import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Brain,
  Home,
  Sword,
  User,
  Activity,
  MessagesSquare,
  UserPlus,
  ChevronRight,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/logo.svg'

export const Route = createFileRoute('/app/')({
  component: AppDashboard,
})

function AppDashboard() {
  // Mock data
  const stats = {
    casualElo: 1250,
    speedElo: 1420,
  }

  const friends = [
    { name: 'MathWizard42', online: true, status: 'In Competition' },
    { name: 'NumberNinja', online: true, status: 'Practicing' },
    { name: 'CalcQueen', online: false },
    { name: 'ArithMaster', online: true, status: 'Online' },
  ]

  const recentActivity = [
    { type: 'match', opponent: 'PrimeHunter', result: 'Won', eloChange: +15 },
    { type: 'match', opponent: 'FractionKing', result: 'Lost', eloChange: -8 },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} className="size-10" alt="Mathlify Logo" />
            <span className="text-xl font-bold text-primary">Mathlify</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4">
        {/* ELO Rankings */}
        <section className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Your Rankings</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Casual Mode</p>
                  <p className="text-2xl font-bold">{stats.casualElo}</p>
                </div>
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Speed Solve</p>
                  <p className="text-2xl font-bold">{stats.speedElo}</p>
                </div>
                <Zap className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            <Button className="h-16 flex flex-col items-center justify-center gap-1 bg-primary/10 hover:bg-primary/20">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-sm">Practice</span>
            </Button>
            <Button className="h-16 flex flex-col items-center justify-center gap-1 bg-secondary/10 hover:bg-secondary/20">
              <Sword className="w-5 h-5 text-secondary" />
              <span className="text-sm">Competition</span>
            </Button>
            <Button className="h-16 flex flex-col items-center justify-center gap-1 bg-accent/10 hover:bg-accent/20">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">Online</span>
            </Button>
          </div>
        </section>

        {/* Friends List */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Friends</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <UserPlus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            {friends.slice(0, 3).map((friend, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${friend.online ? 'bg-green-500' : 'bg-gray-500'}`}
                  />
                  <span className="font-medium">{friend.name}</span>
                  {friend.status && (
                    <span className="text-xs text-muted-foreground">
                      {friend.status}
                    </span>
                  )}
                </div>
                <Button variant="ghost" size="sm" className="p-2">
                  <MessagesSquare className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivity.map((item, index) => (
              <div
                key={index}
                className="p-3 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sword className="w-4 h-4 text-muted-foreground" />
                    <span>
                      Match vs{' '}
                      <span className="font-medium">{item.opponent}</span>
                    </span>
                  </div>
                  <span
                    className={`font-medium ${item.eloChange > 0 ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {item.eloChange > 0 ? '+' : ''}
                    {item.eloChange} ELO
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="sticky bottom-0 z-10 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="flex justify-around items-center h-16">
          <Button variant="ghost" className="flex flex-col items-center h-full">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-full">
            <Sword className="w-5 h-5" />
            <span className="text-xs mt-1">Competition</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-full">
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">Online</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-full">
            <Activity className="w-5 h-5" />
            <span className="text-xs mt-1">Practice</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-full">
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}
