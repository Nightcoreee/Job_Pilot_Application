import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] border-x border-border bg-surface">
      <div className="flex flex-col gap-8 px-10 py-12 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="JobPilot" width={112} height={36} />
        </Link>
        <nav className="flex flex-wrap gap-8 text-sm font-medium text-text-secondary">
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          <Link href="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent">
            Terms &amp; Condition
          </Link>
        </nav>
      </div>
    </footer>
  );
}
