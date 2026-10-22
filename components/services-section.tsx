import { Home, Tag, TrendingUp, KeyRound } from "lucide-react"
import { site, waLink } from "@/lib/site"

const services = [
  {
    icon: Home,
    title: "Buy Property",
    desc: "Helping buyers find the right home based on budget, location, and lifestyle.",
  },
  {
    icon: Tag,
    title: "Sell Property",
    desc: "Professional marketing strategies to maximize exposure and secure the best price.",
  },
  {
    icon: TrendingUp,
    title: "Investment Consultation",
    desc: "Guidance on high-potential property investments and market opportunities.",
  },
  {
    icon: KeyRound,
    title: "Rental Services",
    desc: "Assistance with tenant sourcing and rental property management.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How I Can Help You
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.title}
              href={waLink(`Hi ${site.name}, I'm interested in ${s.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-4 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Enquire now →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
