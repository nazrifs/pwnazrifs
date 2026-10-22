import Image from "next/image"
import { MapPin } from "lucide-react"

const areas = [
  {
    name: "Pasir Gudang",
    img: "/images/area-pasir-gudang.png",
    desc: "Industrial hub with strong rental demand and affordable family homes.",
    range: "RM 350k – RM 750k",
  },
  {
    name: "Seri Alam",
    img: "/images/area-seri-alam.png",
    desc: "Established township popular with families and first-time buyers.",
    range: "RM 400k – RM 850k",
  },
  {
    name: "Masai",
    img: "/images/area-masai.png",
    desc: "Fast-growing area with new launches and great value entry points.",
    range: "RM 300k – RM 700k",
  },
  {
    name: "Permas Jaya",
    img: "/images/area-permas-jaya.png",
    desc: "Mature waterfront township with amenities and commercial lots.",
    range: "RM 500k – RM 1.2M",
  },
  {
    name: "Kota Masai",
    img: "/images/area-kota-masai.png",
    desc: "Dense residential neighbourhood with steady tenant demand.",
    range: "RM 300k – RM 650k",
  },
  {
    name: "Bandar Dato Onn",
    img: "/images/area-bandar-dato-onn.png",
    desc: "Premium master-planned township with modern gated communities.",
    range: "RM 700k – RM 1.8M",
  },
  {
    name: "Tebrau",
    img: "/images/area-tebrau.png",
    desc: "Commercial and lifestyle district close to malls and highways.",
    range: "RM 450k – RM 1.1M",
  },
  {
    name: "Johor Bahru City",
    img: "/images/area-jb-city.png",
    desc: "City-centre living with high-rise condos and investment upside.",
    range: "RM 400k – RM 1.5M",
  },
]

export function AreasSection() {
  return (
    <section id="areas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Areas of Expertise
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Serving Johor Bahru&apos;s fastest growing areas
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <article
              key={a.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.img || "/placeholder.svg"}
                  alt={`${a.name} area in Johor Bahru`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  <MapPin className="size-3 text-primary" />
                  {a.name}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Avg. range
                  </span>
                  <span className="text-sm font-bold text-primary">{a.range}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
