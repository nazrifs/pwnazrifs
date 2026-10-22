import Image from "next/image"
import { MessageCircle, ArrowRight, MapPin, BadgeCheck, Building2 } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

const trust = [
  { icon: MapPin, label: "Local Area Specialist" },
  { icon: Building2, label: "Residential & Investment" },
  { icon: BadgeCheck, label: "Professional Consultation" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-16">
      {/* soft accent backdrop */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[640px] w-[640px] translate-x-1/3 -translate-y-1/4 rounded-full bg-accent blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <span className="size-2 rounded-full bg-primary" />
            {site.area}
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Trusted Property Advisor in{" "}
            <span className="text-primary">Johor Bahru</span> & Pasir Gudang
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Helping homeowners sell faster, buyers find the right property, and
            investors make smarter property decisions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href={waLink(`Hi ${site.name}, I'd like to enquire about a property.`)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle />
              WhatsApp Nazri Now
            </CtaButton>
            <CtaButton href="#listings" variant="outline" size="lg">
              View Latest Listings
              <ArrowRight />
            </CtaButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <t.icon className="size-4 text-primary" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-[2rem] bg-charcoal" />
            <Image
              src="/images/P2.jpg"
              alt="Nazri Fuad, real estate negotiator in Johor Bahru"
              width={720}
              height={840}  
              priority
              className="relative mx-auto aspect-[6/7] w-full rounded-[2rem] object-cover object-top shadow-xl"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-border bg-background px-5 py-3 shadow-lg">
              <div className="text-center">
                <p className="font-heading text-xl font-extrabold text-foreground">100+</p>
                <p className="text-xs text-muted-foreground">Transactions</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-xl font-extrabold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Viewings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
