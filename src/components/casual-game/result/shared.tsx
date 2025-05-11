import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

export const ResultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
      {children}
    </div>
  )
}

export const ActionLayout = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return <div className={cn('flex gap-4 mt-8', className)}>{children}</div>
}

export const ActionButton = ({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
  return (
    <Button
      className={cn(
        'py-6 w-[150px] text-lg',
        buttonVariants({ variant, size, className }),
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
