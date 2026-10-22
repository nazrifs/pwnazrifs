"use client"

import { useMemo, useState } from "react"
import { Calculator, MessageCircle } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

function rm(n: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)))
}

export function LoanChecker() {
  const [income, setIncome] = useState(3000)
  const [commitments, setCommitments] = useState(800)
  const [rate, setRate] = useState(4)
  const [years, setYears] = useState(35)

  const { maxInstalment, maxLoan, maxPrice } = useMemo(() => {
    // assume max debt service ratio of 60%
    const maxInstalment = income * 0.6 - commitments
    const r = rate / 100 / 12
    const n = years * 12
    // present value of annuity
    const factor = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r
    const maxLoan = maxInstalment > 0 ? maxInstalment * factor : 0
    // assume 90% margin of finance
    const maxPrice = maxLoan / 0.9
    return { maxInstalment, maxLoan, maxPrice }
  }, [income, commitments, rate, years])

  const fields = [
    { label: "Monthly Income (RM)", value: income, set: setIncome, min: 1500, max: 50000, step: 500 },
    { label: "Monthly Commitments (RM)", value: commitments, set: setCommitments, min: 0, max: 20000, step: 100 },
    { label: "Interest Rate (%)", value: rate, set: setRate, min: 2, max: 8, step: 0.1 },
    { label: "Loan Tenure (Years)", value: years, set: setYears, min: 5, max: 35, step: 1 },
  ]

  return (
    <section id="loan-checker" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Loan Eligibility Checker
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            See how much you can borrow
          </h2>
          <p className="mt-3 text-muted-foreground">
            A quick estimate to help you plan. For an accurate assessment, let&apos;s chat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-2">
          <div className="space-y-6 p-8">
            {fields.map((f) => (
              <div key={f.label}>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">{f.label}</label>
                  <span className="font-heading text-sm font-bold text-primary">
                    {f.label.includes("%")
                      ? `${f.value}%`
                      : f.label.includes("Years")
                        ? `${f.value} yrs`
                        : rm(f.value)}
                  </span>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={f.value}
                  onChange={(e) => f.set(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary)]"
                  aria-label={f.label}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center bg-charcoal p-8 text-charcoal-foreground">
            <Calculator className="size-8 text-primary" />
            <p className="mt-4 text-sm text-charcoal-foreground/70">Estimated affordable property price</p>
            <p className="font-heading text-4xl font-extrabold text-primary">{rm(maxPrice)}</p>

            <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-charcoal-foreground/70">Max loan amount</dt>
                <dd className="font-bold">{rm(maxLoan)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-charcoal-foreground/70">Est. monthly instalment</dt>
                <dd className="font-bold">{rm(maxInstalment)}</dd>
              </div>
            </dl>

            <CtaButton
              href={waLink(`Hi ${site.name}, based on the calculator I can afford around ${rm(maxPrice)}. Can you help me find a property?`)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="mt-7 w-full"
            >
              <MessageCircle />
              Check My Eligibility
            </CtaButton>
            <p className="mt-3 text-xs text-charcoal-foreground/50">
              Estimates only and not a guarantee of loan approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
