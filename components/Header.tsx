"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

// Routes that render a full-bleed dark hero behind the header, so the header
// can start transparent and turn solid on scroll.
const TRANSPARENT_ROUTES = new Set(["/"]);

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const transparentCapable = TRANSPARENT_ROUTES.has(pathname);
  const solid = scrolled || !transparentCapable || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and lock scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.agent.name}, ${site.brokerage.name} — home`}
        >
          <Image
            src={site.brokerage.logo}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 lg:h-10 lg:w-10"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-serif text-lg font-semibold tracking-tight lg:text-xl",
                solid ? "text-primary" : "text-white"
              )}
            >
              {site.agent.name}
            </span>
            <span
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.16em]",
                solid ? "text-muted-foreground" : "text-white/70"
              )}
            >
              {site.agent.title} · {site.brokerage.name}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  solid
                    ? active
                      ? "text-accent-strong"
                      : "text-foreground/80 hover:text-primary"
                    : active
                      ? "text-accent"
                      : "text-white/85 hover:text-white"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            href={site.contact.mobileHref}
            variant={solid ? "accent" : "light"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{site.contact.mobile}</span>
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              solid ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              className="container-px flex flex-col gap-1 border-t border-border bg-background pb-6 pt-2"
              aria-label="Mobile"
            >
              {site.nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium",
                      active
                        ? "bg-primary/5 text-accent-strong"
                        : "text-foreground/85 hover:bg-primary/5"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button href={site.contact.mobileHref} variant="accent" size="sm">
                  <Phone className="h-4 w-4" aria-hidden /> Call
                </Button>
                <Button href="/contact" variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
