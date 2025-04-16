import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import Logo from '@/logo.svg'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              animationName: 'float',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <div className="relative z-10 pt-6 pl-6">
        <Button
          variant="ghost"
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={18} />
          <span>Back to home</span>
        </Button>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-12">
        {/* Header with logo */}
        <header className="w-full max-w-md mb-8">
          <div className="flex justify-center">
            <img src={Logo} className="h-16 w-16" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mathlify
          </h1>
        </header>

        {/* Auth form container */}
        <main className="w-full max-w-md">
          <Outlet />
        </main>

        {/* Footer links */}
        <footer className="w-full max-w-md mt-8 text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </footer>
      </div>

      {/* Floating animation styles */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(5%, 15%) rotate(5deg);
          }
          50% {
            transform: translate(-10%, 5%) rotate(-5deg);
          }
          75% {
            transform: translate(8%, -10%) rotate(3deg);
          }
        }
      `}</style>
    </div>
  )
}
