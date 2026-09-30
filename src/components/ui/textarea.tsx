import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex w-full resize-y rounded-md font-sans text-base ring-offset-background transition-[border-color,box-shadow,background-color] duration-150 ease-out placeholder:text-muted-foreground/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-destructive aria-[invalid=true]:shadow-[0_0_0_3px_hsl(var(--destructive)/0.14)]",
  {
    variants: {
      tone: {
        default:
          "min-h-[160px] border border-input bg-card px-4 py-3.5 text-foreground hover:border-primary/45 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.18)]",
        onInk:
          "min-h-[160px] border border-ink-strong bg-ink-700 px-4 py-3.5 text-ink-foreground placeholder:text-ink-muted/70 hover:border-primary-bright/50 focus-visible:border-primary-bright focus-visible:shadow-[0_0_0_3px_hsl(var(--accent)/0.22)]",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, tone, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ tone }), className)}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"

export { Textarea }
