"use client"

import { useEffect, useState } from "react"
import { X, Gift, MessageCircle } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    let shown = false

    const trigger = () => {
      if (!shown) {
        shown = true
        setOpen(true)
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }
    // desktop: leaving viewport from the top. mobile fallback: after 25s
    const timer = window.setTimeout(trigger, 25000)
    document.addEventListener("mouseout", onMouseOut)

    return () => {
      document.removeEventListener("mouseout", onMouseOut)
      window.clearTimeout(timer)
    }
  }, [dismissed])

  const close = () => {
    setOpen(false)
    setDismissed(true)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted"
        >
          <X className="size-5" />
        </button>

        <div className="bg-charcoal px-8 pb-10 pt-9 text-center text-charcoal-foreground">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Gift className="size-7" />
          </span>
          <h3 id="exit-title" className="mt-4 font-heading text-2xl font-extrabold">
            Wait — get a FREE valuation
          </h3>
          <p className="mt-2 text-sm text-charcoal-foreground/70">
            Before you go, let me prepare a no-obligation valuation or property
            shortlist tailored to your goals.
          </p>
        </div>

        <div className="p-6">
          <CtaButton
            href={waLink(`Hi ${site.name}, I'd like to claim my free property valuation.`)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            className="w-full"
            onClick={close}
          >
            <MessageCircle />
            Claim Free Valuation
          </CtaButton>
          <button
            type="button"
            onClick={close}
            className="mt-3 w-full text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
