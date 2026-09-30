import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const selectVariants = cva(
  "w-full appearance-none rounded-md font-sans text-base ring-offset-background transition-[border-color,box-shadow,background-color] duration-150 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-destructive aria-[invalid=true]:shadow-[0_0_0_3px_hsl(var(--destructive)/0.14)]",
  {
    variants: {
      tone: {
        default:
          "h-[52px] border border-input bg-card pl-4 pr-11 text-foreground hover:border-primary/45 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.18)]",
        onInk:
          "h-[52px] border border-ink-strong bg-ink-700 pl-4 pr-11 text-ink-foreground hover:border-primary-bright/50 focus-visible:border-primary-bright focus-visible:shadow-[0_0_0_3px_hsl(var(--accent)/0.22)]",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
)

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
  VariantProps<typeof selectVariants> { }

/** Native select styled with the design-system field recipe. */
const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, tone, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(selectVariants({ tone }), className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2",
          tone === "onInk" ? "text-ink-muted" : "text-muted-foreground"
        )}
      />
    </div>
  )
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
