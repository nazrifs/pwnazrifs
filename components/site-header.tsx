"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle, Home } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { navLinks, site, waLink } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image";

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-12 items-center justify-center rounded-lg text-primary-foreground">
            <Image
              src="/icon.svg"
              alt="Logo"
              width={32}
              height={32}
              className="size-8"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
              {site.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {site.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaButton
            href={waLink(`Hi ${site.name}, I'd like to enquire about a property.`)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            <MessageCircle className="size-4" />
            WhatsApp Now
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <CtaButton
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="mt-3"
            >
              <MessageCircle className="size-4" />
              WhatsApp Now
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
