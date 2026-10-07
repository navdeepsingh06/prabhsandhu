import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-primary px-4 pt-20 text-center text-primary-foreground">
      <div className="max-w-md">
        <p className="font-serif text-7xl font-semibold text-accent">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold">This page has moved on</h1>
        <p className="mt-3 text-primary-foreground/80">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="accent" size="lg">
            Back to home
          </Button>
          <Button href="/listings" variant="light" size="lg">
            Browse listings
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          Or <Link href="/contact" className="text-accent underline underline-offset-4">get in touch</Link> — I&apos;m happy to help.
        </p>
      </div>
    </section>
  );
}
