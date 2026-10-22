"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How much is my property worth?",
    a: "I provide a free, no-obligation property valuation based on recent transactions, location, condition and current market demand. Just send me your property details on WhatsApp and I'll prepare an estimate for you.",
  },
  {
    q: "Can I buy a property with a low down payment?",
    a: "Yes. Depending on your eligibility, there are schemes and financing options that allow low or even zero down payment for first-time buyers. I'll help assess your options and connect you with the right bankers.",
  },
  {
    q: "What documents are needed to sell a house?",
    a: "Typically you'll need your IC, the Sale & Purchase Agreement or title, the latest quit rent and assessment receipts, and your loan redemption statement if applicable. I'll guide you through gathering everything.",
  },
  {
    q: "How long does the selling process take?",
    a: "From listing to completion usually takes around 3 to 6 months, depending on financing and legal processing. With strong marketing and pricing, securing a buyer can happen within weeks.",
  },
  {
    q: "Which areas are best for investment?",
    a: "Growth corridors like Masai, Tebrau, and Bandar Dato Onn offer strong rental demand and capital appreciation. I can recommend specific projects based on your budget and goals.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-bold text-foreground sm:text-lg">
                    {f.q}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
