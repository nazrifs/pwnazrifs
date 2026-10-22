import { Handshake, Zap, Gavel, Megaphone, LifeBuoy } from "lucide-react"

const stats = [
  { value: "100+", label: "Successful Transactions" },
  { value: "500+", label: "Property Viewings Conducted" },
  { value: "8+", label: "Areas Covered Locally" },
  { value: "24/7", label: "Dedicated Client Support" },
]

const benefits = [
  { icon: Handshake, title: "Honest Advice", desc: "Straightforward guidance with your best interest first." },
  { icon: Zap, title: "Fast Response", desc: "Quick replies so you never miss an opportunity." },
  { icon: Gavel, title: "Strong Negotiation", desc: "Securing the best possible price and terms for you." },
  { icon: Megaphone, title: "Pro Marketing", desc: "Strategies that maximise your property's exposure." },
  { icon: LifeBuoy, title: "End-to-End Support", desc: "With you from first call to key handover." },
]

export function WhySection() {
  return (
    <section className="bg-charcoal py-20 text-charcoal-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Work With Me
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why clients choose Nazri Fuad
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="font-heading text-4xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-charcoal-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <b.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-foreground/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
