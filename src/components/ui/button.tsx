import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-semibold ring-offset-background transition-[background-color,border-color,color,box-shadow,transform,filter] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary-deep hover:shadow-md",
        hero:
          "bg-gradient-brand text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-[1.07] hover:shadow-lg active:translate-y-0",
        gold: "bg-gradient-gold text-accent-foreground shadow-xs hover:brightness-[1.06] hover:shadow-md",
        onInk:
          "border border-ink-foreground/30 bg-transparent text-ink-foreground hover:border-ink-foreground/65 hover:bg-ink-foreground/[0.07] focus-visible:ring-accent focus-visible:ring-offset-ink-900",
        onInkGhost:
          "bg-transparent text-ink-foreground hover:bg-ink-foreground/[0.08] focus-visible:ring-accent focus-visible:ring-offset-ink-900",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent text-foreground hover:border-primary/45 hover:bg-primary/[0.06] hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost: "text-foreground hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-10 rounded-sm px-4 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-[60px] px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
