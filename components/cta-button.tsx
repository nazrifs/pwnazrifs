import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        dark: "bg-charcoal text-charcoal-foreground hover:bg-charcoal/90",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        outlineLight: "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe5b] shadow-sm hover:shadow-md",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

type CtaButtonProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof ctaVariants>

export function CtaButton({ className, variant, size, ...props }: CtaButtonProps) {
  return <a className={cn(ctaVariants({ variant, size, className }))} {...props} />
}
