import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS, FOOTER_LEGAL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/brand/logo";
import { Wordmark } from "@/components/brand/wordmark";

export function Footer() {
  return (
    <footer className="border-gold-500/20 bg-dark-900/95 relative border-t backdrop-blur-xl">
      <div className="from-dark-900/0 via-dark-900/50 to-dark-900/80 absolute inset-0 bg-gradient-to-b" />
      <Container className="relative grid gap-16 py-20 md:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-8">
          <Link href="/" className="group text-gold-400 flex items-center gap-4">
            <Logo className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" />
            <Wordmark className="text-sm tracking-[0.5em] transition-opacity duration-300 group-hover:opacity-80" />
          </Link>
          <p className="text-gold-300/80 max-w-xl text-sm leading-relaxed">{copy.brand.ethos}</p>
          <div className="text-gold-400/70 flex flex-wrap items-center gap-6 text-xs tracking-[0.24em] uppercase">
            <span>{copy.brand.promise[0]}</span>
            <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 h-px w-12 bg-gradient-to-r" />
            <span>{copy.brand.promise[1]}</span>
          </div>
        </div>
        <div className="grid gap-16 sm:grid-cols-2">
          <div className="space-y-6">
            <h4 className="text-gold-400/90 text-xs font-semibold tracking-[0.24em] uppercase">
              Explore
            </h4>
            <ul className="text-gold-300/80 space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group hover:text-gold-200 relative inline-block transition-colors"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-gold-400/90 text-xs font-semibold tracking-[0.24em] uppercase">
              Connect
            </h4>
            <ul className="text-gold-300/80 space-y-4 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group hover:text-gold-200 relative inline-block transition-colors"
                  >
                    <span className="relative z-10">
                      {link.label}
                      {link.handle ? (
                        <span className="text-gold-400/50 group-hover:text-gold-400/70 ml-2 transition-colors">
                          {link.handle}
                        </span>
                      ) : null}
                    </span>
                    <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group hover:text-gold-200 relative inline-block transition-colors"
                >
                  <span className="relative z-10">{CONTACT_EMAIL}</span>
                  <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-gold-500/10 bg-dark-900/98 relative border-t">
        <div className="from-dark-900/0 to-dark-900/50 absolute inset-0 bg-gradient-to-b" />
        <Container className="text-gold-400/70 relative flex flex-col gap-8 py-8 text-xs md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl">{copy.footer.statement}</p>
          <div className="flex flex-wrap items-center gap-6">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group hover:text-gold-300 relative inline-block transition-colors"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <div className="border-gold-500/5 bg-dark-900 relative border-t">
        <div className="from-dark-900/0 to-dark-900/30 absolute inset-0 bg-gradient-to-b" />
        <Container className="text-gold-400/50 relative flex flex-col items-center justify-between gap-4 py-6 text-[0.65rem] tracking-[0.26em] uppercase md:flex-row">
          <span className="text-center md:text-left">{copy.footer.copyright}</span>
          <span className="text-center md:text-right">{SITE_NAME} • Operate with integrity</span>
        </Container>
      </div>
    </footer>
  );
}
