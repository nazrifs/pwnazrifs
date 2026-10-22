export const site = {
  name: "Nazri Fuad",
  role: "Real Estate Negotiator",
  area: "Johor Bahru & Pasir Gudang",
  phoneDisplay: "+60 14-610 5661",
  // digits only, international format, used for tel + wa.me links
  phone: "60146105561",
  whatsapp: "60146105561",
  email: "pwnazrifs@gmail.com",
  mapsQuery: "Johor Bahru, Malaysia",
}

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Listings", href: "#listings" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]
