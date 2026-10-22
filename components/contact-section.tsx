"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, CalendarCheck, User } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

const intents = ["Buy", "Sell", "Invest", "Rent"]

export function ContactSection() {
  const [name, setName] = useState("")
  const [intent, setIntent] = useState("Buy")
  const [propertyArea, setPropertyArea] = useState("")
  const [message, setMessage] = useState("")

  const buildMessage = () =>
    `Hi ${site.name}, I'm ${name || "a prospective client"}. I'd like to ${intent.toLowerCase()} a property` +
    (propertyArea ? ` in ${propertyArea}` : "") +
    (message ? `. ${message}` : ".")

  const details = [
    { icon: User, label: "Name", value: site.name },
    { icon: MapPin, label: "Area", value: site.area },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: waLink() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ]

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s discuss your property goals
          </h2>
          <p className="mt-3 text-muted-foreground">
            Whether you&apos;re buying, selling, investing, or renting, I&apos;m ready to help.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Get a Free Property Valuation
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in a few details and continue the conversation on WhatsApp.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer")
              }}
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmad"
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-medium text-foreground">I want to</span>
                <div className="grid grid-cols-4 gap-2">
                  {intents.map((it) => (
                    <button
                      key={it}
                      type="button"
                      onClick={() => setIntent(it)}
                      className={`h-10 rounded-xl border text-sm font-semibold transition ${
                        intent === it
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      {it}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-foreground">
                  Area / Property
                </label>
                <input
                  id="area"
                  value={propertyArea}
                  onChange={(e) => setPropertyArea(e.target.value)}
                  placeholder="e.g. Seri Alam, double-storey terrace"
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="msg" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message (optional)
                </label>
                <textarea
                  id="msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Tell me a little about what you're looking for..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white transition hover:bg-[#1ebe5b]"
              >
                <MessageCircle className="size-5" />
                WhatsApp Me Now
              </button>
            </form>
          </div>

          {/* Details + map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <ul className="space-y-4">
                {details.map((d) => {
                  const content = (
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                        <d.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {d.label}
                        </p>
                        <p className="font-medium text-foreground">{d.value}</p>
                      </div>
                    </div>
                  )
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block rounded-xl transition hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>

              <CtaButton
                href={waLink(`Hi ${site.name}, I'd like to schedule a consultation.`)}
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                className="mt-6 w-full"
              >
                <CalendarCheck />
                Schedule a Consultation
              </CtaButton>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Map of Johor Bahru"
                src="https://www.google.com/maps?q=Johor%20Bahru%2C%20Malaysia&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
