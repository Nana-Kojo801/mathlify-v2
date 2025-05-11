import { Button } from '@/components/ui/button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Play, Plus, Trash2 } from 'lucide-react'
import { getPresetsQueryOptions } from './queries'
import { useUser } from '@/hooks/user'
import { Skeleton } from '@/components/ui/skeleton'
import type { CasualGameDifficulty, GameType, Preset } from '@/types'
import { useEffect, useMemo, useState } from 'react'
import Spinner from '@/components/spinner'
import { useConvexMutation } from '@convex-dev/react-query'
import { api } from '@convex/_generated/api'
import { toast } from 'sonner'
import { useActions as useCasualGameActions } from '@/components/casual-game/casual-game-store'
import { useActions as useSpeedSolveGameActions } from '@/components/speed-solve/speed-solve-game-store'
import { useNavigate } from '@tanstack/react-router'

const SkeletonSavedPresets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-card/60 backdrop-blur-sm rounded-md border border-border/50 p-3 flex items-center justify-between"
        >
          <Skeleton className="h-5 w-32" />
          <Skeleton className="size-6 rounded-md" />
        </div>
      ))}
    </div>
  )
}

const Preset = ({
  preset,
  selectedPreset,
  setSelectedPreset,
}: {
  preset: Preset
  selectedPreset: Preset | null
  setSelectedPreset: React.Dispatch<React.SetStateAction<Preset | null>>
}) => {
  const { mutate: deletePreset, isPending: deletingPreset } = useMutation({
    mutationFn: useConvexMutation(api.presets.deletePreset),
    onError: () => {
      toast.error('Unable to delete preset')
    },
  })

  const isSelected = useMemo(
    () =>
      !selectedPreset
        ? false
        : selectedPreset._id === preset._id
          ? true
          : false,
    [selectedPreset],
  )

  return (
    <div
      className={`bg-card/60 backdrop-blur-sm rounded-md border ${isSelected ? 'border-primary' : 'border-border/50'} p-3 flex items-center justify-between`}
      onClick={() => setSelectedPreset(preset)}
    >
      <span className="font-medium cursor-pointer">{preset.name}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 p-0"
        disabled={deletingPreset}
        onClick={() => deletePreset({ id: preset._id })}
        title="Delete preset"
      >
        {deletingPreset ? (
          <Spinner className="border-t-destructive" />
        ) : (
          <Trash2 className="h-4 w-4 text-destructive" />
        )}
      </Button>
    </div>
  )
}

type SavedPresetsType = {
  setShowCreateCasualDialog: React.Dispatch<React.SetStateAction<boolean>>
  setShowCreateSpeedSolveDialog: React.Dispatch<React.SetStateAction<boolean>>
  gameMode: GameType
}

const SavedPresets = ({
  setShowCreateCasualDialog,
  setShowCreateSpeedSolveDialog,
  gameMode,
}: SavedPresetsType) => {
  const user = useUser()
  const {
    data: presets,
    isPending: loadingPresets,
    isError,
  } = useQuery(getPresetsQueryOptions(user._id))

  const filteredPresets = useMemo(
    () => presets.filter((preset) => preset.type === gameMode),
    [gameMode, presets],
  )

  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null)
  const { init: initCasualGame } = useCasualGameActions()
  const { init: initSpeedSolveGame } = useSpeedSolveGameActions()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) toast.error('Error loading presets')
  }, [isError])

  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold">Saved Presets</h2>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 h-8"
          onClick={() => {
            if (gameMode === 'casual') setShowCreateCasualDialog(true)
            else setShowCreateSpeedSolveDialog(true)
          }}
        >
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      {loadingPresets ? (
        <SkeletonSavedPresets />
      ) : (
        <div className="grid grid-cols-1 gap-2 mb-4">
          {filteredPresets.map((preset) => (
            <Preset
              selectedPreset={selectedPreset}
              setSelectedPreset={setSelectedPreset}
              key={preset._id}
              preset={preset}
            />
          ))}
          {filteredPresets.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No saved presets for this mode.
            </p>
          )}
        </div>
      )}
      {!loadingPresets && filteredPresets.length > 0 && (
        <Button onClick={() => {
          if (gameMode === 'casual') {
            initCasualGame(selectedPreset!.settings! as CasualGameDifficulty)
            navigate({ to: '/app/practice/casual' })
          } else {
            const { timeInterval, ...rest} = selectedPreset!.settings
            initSpeedSolveGame(rest)
            navigate({ to: '/app/practice/speed-solve' })
          }
        }} className="w-full">
          <Play /> Start
        </Button>
      )}
    </section>
  )
}

export default SavedPresets
