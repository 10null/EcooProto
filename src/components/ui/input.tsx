import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md font-sans text-base ring-offset-background transition-[border-color,box-shadow,background-color] duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-destructive aria-[invalid=true]:shadow-[0_0_0_3px_hsl(var(--destructive)/0.14)]",
  {
    variants: {
      tone: {
        default:
          "h-[52px] border border-input bg-card px-4 text-foreground hover:border-primary/45 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.18)]",
        onInk:
          "h-[52px] border border-ink-strong bg-ink-700 px-4 text-ink-foreground placeholder:text-ink-muted/70 hover:border-primary-bright/50 focus-visible:border-primary-bright focus-visible:shadow-[0_0_0_3px_hsl(var(--accent)/0.22)]",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tone, type = "text", ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(inputVariants({ tone }), className)}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
