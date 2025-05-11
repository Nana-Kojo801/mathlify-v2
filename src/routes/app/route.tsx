import { useAuth } from '@/components/auth-provider'
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'
import FooterNavigation from './-components/footer-navigation'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  const { loading, authenticated } = useAuth()
  if (!loading && !authenticated) return <Navigate to="/" />
  return (
    <div className="w-full h-full flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterNavigation />
    </div>
  )
}
