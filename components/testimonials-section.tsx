"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Aisyah R.",
    role: "First-time Buyer · Seri Alam",
    initials: "AR",
    rating: 5,
    quote:
      "Nazri made buying my first home stress-free. He patiently explained every step and found a house that fit my budget perfectly. Highly recommended!",
  },
  {
    name: "Tan W.K.",
    role: "Seller · Permas Jaya",
    initials: "TK",
    rating: 5,
    quote:
      "He sold my property faster than I expected and negotiated a price above my asking. Professional marketing and constant updates throughout.",
  },
  {
    name: "Rajesh M.",
    role: "Investor · Tebrau",
    initials: "RM",
    rating: 5,
    quote:
      "Nazri's market insight helped me pick a high-yield investment unit. His advice was honest and data-driven. I'll definitely work with him again.",
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const t = testimonials[index]

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total)

  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            What my clients say
          </h2>
        </div>

        <div className="relative mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <Quote className="size-10 text-primary/20" />
          <div className="mt-1 flex gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent font-heading font-bold text-primary">
                {t.initials}
              </span>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
