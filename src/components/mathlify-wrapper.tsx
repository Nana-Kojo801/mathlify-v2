import type { PropsWithChildren } from 'react'
import LoadingScreen from '@/routes/-components/loading-screen'
import AuthProvider, { useAuth } from './auth-provider'
import InitializationProvider from './initialization-provider'
import { useInitStore } from '@/stores/init-store'
import { Transition } from '@headlessui/react'

function AppLoadingWrapper({ children }: PropsWithChildren) {
  const { loading: authLoading } = useAuth()
  const { isInitializing } = useInitStore()
  
  return (
    <div className="relative w-full h-full">
      <Transition
        show={authLoading || isInitializing}
        as="div"
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute inset-0 z-50"
      >
        <LoadingScreen />
      </Transition>
      
      <Transition
        show={!authLoading && !isInitializing}
        as="div"
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="h-full"
      >
        {children}
      </Transition>
    </div>
  )
}

export default function MathlifyWrapper({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <InitializationProvider>
        <AppLoadingWrapper>
          {children}
        </AppLoadingWrapper>
      </InitializationProvider>
    </AuthProvider>
  )
}
