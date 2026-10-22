import Image from "next/image"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { site, waLink } from "@/lib/site"

const properties = [
  {
    img: "/images/property-1.png",
    title: "Modern 2-Storey Terrace",
    price: "RM 580,000",
    location: "Seri Alam, Masai",
    beds: 4,
    baths: 3,
    size: "1,540 sqft",
    tag: "For Sale",
  },
  {
    img: "/images/property-2.png",
    title: "Luxury Semi-Detached Home",
    price: "RM 1,250,000",
    location: "Bandar Dato Onn",
    beds: 5,
    baths: 5,
    size: "3,200 sqft",
    tag: "For Sale",
  },
  {
    img: "/images/property-3.png",
    title: "City-View Condominium",
    price: "RM 620,000",
    location: "Johor Bahru City",
    beds: 3,
    baths: 2,
    size: "1,100 sqft",
    tag: "For Sale",
  },
  {
    img: "/images/property-4.png",
    title: "Contemporary Pool Bungalow",
    price: "RM 1,850,000",
    location: "Permas Jaya",
    beds: 6,
    baths: 6,
    size: "4,500 sqft",
    tag: "For Sale",
  },
  {
    img: "/images/property-5.png",
    title: "Cozy Single-Storey Terrace",
    price: "RM 398,000",
    location: "Kota Masai",
    beds: 3,
    baths: 2,
    size: "1,200 sqft",
    tag: "For Sale",
  },
  {
    img: "/images/property-6.png",
    title: "Ground-Floor Shop Office",
    price: "RM 980,000",
    location: "Tebrau",
    beds: 0,
    baths: 2,
    size: "1,650 sqft",
    tag: "Commercial",
  },
]

export function FeaturedProperties() {
  return (
    <section id="listings" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Listings
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Latest property listings
            </h2>
          </div>
          <CtaButton
            href={waLink(`Hi ${site.name}, please send me your latest listings.`)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Request Full List
          </CtaButton>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-heading text-xl font-extrabold text-primary">{p.price}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {p.location}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-sm text-foreground">
                  {p.beds > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Bed className="size-4 text-muted-foreground" />
                      {p.beds} Beds
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Bath className="size-4 text-muted-foreground" />
                    {p.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="size-4 text-muted-foreground" />
                    {p.size}
                  </span>
                </div>

                <CtaButton
                  href={waLink(`Hi ${site.name}, I'd like to view: ${p.title} (${p.price}) in ${p.location}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  className="mt-5 w-full"
                >
                  View Details
                </CtaButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
