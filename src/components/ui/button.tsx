import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:text-sm tw:font-medium tw:transition-all tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:[&_svg]:pointer-events-none tw:[&_svg:not([class*=size-])]:size-4 tw:shrink-0 tw:[&_svg]:shrink-0 tw:outline-none tw:focus-visible:border-ring tw:focus-visible:ring-ring/50 tw:focus-visible:ring-[3px] tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/40 tw:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "tw:bg-primary tw:text-primary-foreground tw:shadow tw:hover:bg-primary/90",
        destructive:
          "tw:bg-destructive tw:text-destructive-foreground tw:shadow-sm tw:hover:bg-destructive/90",
        success:
          "tw:bg-success tw:text-success-foreground tw:shadow-sm tw:hover:bg-success/90",
        warning:
          "tw:bg-warning tw:text-warning-foreground tw:shadow-sm tw:hover:bg-warning/90",
        info:
          "tw:bg-info tw:text-info-foreground tw:shadow-sm tw:hover:bg-info/90",
        outline:
          "tw:border tw:border-input tw:bg-background tw:shadow-sm tw:hover:bg-accent tw:hover:text-accent-foreground",
        "outline-destructive":
          "tw:border tw:border-destructive! tw:bg-background tw:text-destructive tw:shadow-sm tw:hover:bg-destructive tw:hover:text-destructive-foreground",
        "outline-success":
          "tw:border tw:border-success! tw:bg-background tw:text-success tw:shadow-sm tw:hover:bg-success tw:hover:text-success-foreground",
        "outline-warning":
          "tw:border tw:border-warning! tw:bg-background tw:text-warning tw:shadow-sm tw:hover:bg-warning tw:hover:text-warning-foreground",
        "outline-info":
          "tw:border tw:border-info! tw:bg-background tw:text-info tw:shadow-sm tw:hover:bg-info tw:hover:text-info-foreground",
        secondary:
          "tw:bg-secondary tw:text-secondary-foreground tw:shadow-sm tw:hover:bg-secondary/80",
        ghost: "tw:hover:bg-accent tw:hover:text-accent-foreground",
        "ghost-destructive":
          "tw:text-destructive tw:hover:bg-destructive tw:hover:text-destructive-foreground",
        "ghost-success":
          "tw:text-success tw:hover:bg-success tw:hover:text-success-foreground",
        "ghost-warning":
          "tw:text-warning tw:hover:bg-warning tw:hover:text-warning-foreground",
        "ghost-info":
          "tw:text-info tw:hover:bg-info tw:hover:text-info-foreground",
        link: "tw:text-primary tw:underline-offset-4 tw:hover:underline",
      },
      size: {
        default: "tw:h-9 tw:px-4 tw:py-2 tw:has-[>svg]:px-3",
        sm: "tw:h-8 tw:rounded-md tw:gap-1.5 tw:px-3 tw:has-[>svg]:px-2.5",
        lg: "tw:h-10 tw:rounded-md tw:px-6 tw:has-[>svg]:px-4",
        icon: "tw:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
