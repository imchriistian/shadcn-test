import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "tw:inline-flex tw:items-center tw:justify-center tw:rounded-md tw:border tw:px-2 tw:py-0.5 tw:text-xs tw:font-medium tw:w-fit tw:whitespace-nowrap tw:shrink-0 tw:[&>svg]:size-3 tw:gap-1 tw:[&>svg]:pointer-events-none tw:focus-visible:border-ring tw:focus-visible:ring-ring/50 tw:focus-visible:ring-[3px] tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/40 tw:aria-invalid:border-destructive tw:transition-[color,box-shadow] tw:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "tw:border-transparent tw:bg-primary tw:text-primary-foreground tw:shadow tw:hover:bg-primary/80",
        secondary:
          "tw:border-transparent tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-secondary/80",
        destructive:
          "tw:border-transparent tw:bg-destructive tw:text-destructive-foreground tw:shadow tw:hover:bg-destructive/80",
        success:
          "tw:border-transparent tw:bg-success tw:text-success-foreground tw:shadow tw:hover:bg-success/80",
        warning:
          "tw:border-transparent tw:bg-warning tw:text-warning-foreground tw:shadow tw:hover:bg-warning/80",
        info:
          "tw:border-transparent tw:bg-info tw:text-info-foreground tw:shadow tw:hover:bg-info/80",
        outline: "tw:text-foreground",
        "outline-destructive":
          "tw:border-destructive tw:text-destructive tw:hover:bg-destructive tw:hover:text-destructive-foreground",
        "outline-success":
          "tw:border-success tw:text-success tw:hover:bg-success tw:hover:text-success-foreground",
        "outline-warning":
          "tw:border-warning tw:text-warning tw:hover:bg-warning tw:hover:text-warning-foreground",
        "outline-info":
          "tw:border-info tw:text-info tw:hover:bg-info tw:hover:text-info-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
