import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@tanstack/react-router'

export type AuthFormProps = {
  type: 'signup' | 'login'
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading] = useState(false)

  const isSignup = type === 'signup'

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">
          {isSignup ? 'Create your account' : 'Welcome back'}
        </h2>
        <p className="text-muted-foreground">
          {isSignup
            ? 'Join Mathlify to sharpen your skills'
            : 'Continue your mental math journey'}
        </p>
      </div>

      <form className="space-y-4">
        {isSignup && (
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <div className="relative">
              <Input
                id="username"
                placeholder="mathwizard"
                className="pl-10 bg-background/80 backdrop-blur-sm"
                disabled={isLoading}
              />
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="pl-10 bg-background/80 backdrop-blur-sm"
              disabled={isLoading}
            />
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder={isSignup ? 'At least 8 characters' : '••••••••'}
              type={showPassword ? 'text' : 'password'}
              className="pl-10 pr-10 bg-background/80 backdrop-blur-sm"
              disabled={isLoading}
              minLength={isSignup ? 8 : undefined}
            />
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <button
              type="button"
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-primary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {isSignup && (
            <p className="px-1 text-xs text-muted-foreground">
              Use at least 8 characters with numbers and symbols
            </p>
          )}
        </div>

        {!isSignup && (
          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>
        )}

        <Button type="submit" className="w-full mt-2" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-primary" />
              {isSignup ? 'Creating account...' : 'Signing in...'}
            </div>
          ) : isSignup ? (
            'Get Started'
          ) : (
            'Continue'
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        {isSignup ? (
          <>
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <Link
              to="/auth/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </>
        )}
      </p>
    </div>
  )
}

export default AuthForm
