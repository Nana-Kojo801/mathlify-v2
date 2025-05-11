import Game from '@/components/casual-game'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/practice/casual/')({
  component: PlayCasual,
})

function PlayCasual() {
  return (
    <Game.CasualGameLayout className="flex flex-col justify-center items-center">
      <Game.CasualGame quitTo={{ to: '/app/practice' }} />
    </Game.CasualGameLayout>
  )
}
