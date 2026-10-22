import Image from "next/image"
import { Check } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

const strengths = [
  "Deep understanding of the Johor Bahru market",
  "Strong local network of buyers and sellers",
  "Transparent, honest communication",
  "Personalized property recommendations",
  "End-to-end transaction support",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <Image
            src="/images/nazri-01.jpeg"
            alt="Nazri Fuad property consultant portrait"
            width={680}
            height={760}
            className="aspect-[4/5] w-full rounded-3xl object-cover object-bottom shadow-lg"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
            <p className="font-heading text-lg font-bold leading-tight">Nazri Fuad</p>
            <p className="text-sm opacity-90">{site.role}</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Meet Nazri Fuad
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Guiding you through the JB property market with confidence
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            I help property owners, buyers, and investors navigate the Johor
            Bahru property market with confidence. Whether you&apos;re purchasing
            your first home, upgrading, investing, or selling your property, I
            provide professional guidance throughout the entire process.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm font-medium text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="size-3.5" />
                </span>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton
              href={waLink(`Hi ${site.name}, I'd like a free consultation.`)}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Get a Free Consultation
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
