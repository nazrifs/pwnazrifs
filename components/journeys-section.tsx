import { Phone, Home, FileText, KeyRound, ClipboardCheck, Megaphone, Users, Gavel, BadgeCheck } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

const buyerSteps = [
  { icon: Phone, title: "Consultation", desc: "We discuss your needs, budget and goals." },
  { icon: Home, title: "Property Selection", desc: "I shortlist and arrange viewings for you." },
  { icon: FileText, title: "Loan & Documentation", desc: "Guidance on financing and paperwork." },
  { icon: KeyRound, title: "Key Handover", desc: "Smooth completion and your new keys." },
]

const sellerSteps = [
  { icon: ClipboardCheck, title: "Property Evaluation" },
  { icon: Megaphone, title: "Marketing Campaign" },
  { icon: Users, title: "Buyer Screening" },
  { icon: Gavel, title: "Negotiation" },
  { icon: BadgeCheck, title: "Successful Sale" },
]

export function JourneysSection() {
  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Buyer journey */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Buyer Journey
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Buying your home is easier than you think
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buyerSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <step.icon className="size-6" />
                </span>
                <span className="font-heading text-4xl font-extrabold text-border">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                Step {i + 1}: {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>

        {/* Seller journey */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-charcoal p-8 text-charcoal-foreground sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Seller Journey
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to sell your property?
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal-foreground/70">
                A proven, transparent process designed to get you the best price
                with the least hassle.
              </p>
              <CtaButton
                href={waLink(`Hi ${site.name}, I'd like a free property valuation.`)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="mt-7"
              >
                Get Free Property Valuation
              </CtaButton>
            </div>

            <ol className="relative space-y-4 border-l border-white/15 pl-8">
              {sellerSteps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[2.6rem] flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <step.icon className="size-5 text-primary" />
                    <span className="font-heading font-semibold">{step.title}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
