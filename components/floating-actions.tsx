"use client"

import { Phone, MessageCircle } from "lucide-react"
import { site, waLink } from "@/lib/site"

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
      <a
        href={`tel:${site.phone}`}
        aria-label="Call Nazri Fuad"
        className="flex size-12 items-center justify-center rounded-full bg-charcoal text-charcoal-foreground shadow-lg transition hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={waLink(`Hi ${site.name}, I'd like to enquire about a property.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Nazri Fuad"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="size-5" />
        <span className="hidden text-sm sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
