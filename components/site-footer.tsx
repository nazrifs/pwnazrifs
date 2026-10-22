import type { SVGProps } from "react"
import { navLinks, site, waLink } from "@/lib/site"
import Image from "next/image";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.14 0-3.51.01-4.75.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.2-1.39-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.12-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.48-1.24a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-2.9v11.67a2.43 2.43 0 1 1-1.73-2.33V9.36a5.34 5.34 0 1 0 4.63 5.29V9.01a7.12 7.12 0 0 0 4.16 1.33V7.4a4.28 4.28 0 0 1-3.1-1.58Z" />
    </svg>
  )
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.4.52A3 3 0 0 0 .5 6.5 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.12c1.9.52 9.4.52 9.4.52s7.5 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: TikTokIcon, label: "TikTok", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex size-12 items-center justify-center rounded-lg text-primary-foreground">
                <Image
                  src="/icon.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="size-8"
                />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                {site.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-foreground/70">
              {site.role} specialising in residential and investment properties
              across Johor Bahru, Pasir Gudang and surrounding areas.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-charcoal-foreground/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-charcoal-foreground/70 transition hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/70">
              <li>{site.area}</li>
              <li>
                <a href={`tel:${site.phone}`} className="transition hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary transition hover:underline"
                >
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-charcoal-foreground/60">
          © 2026 Nazri Fuad Property Consultant. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
