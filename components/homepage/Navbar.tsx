import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="JobPilot" width={112} height={36} priority />
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-text-dark md:flex">
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          <Link href="/find-jobs" className="hover:text-accent">
            Find Jobs
          </Link>
          <Link href="/profile" className="hover:text-accent">
            Profile
          </Link>
        </nav>
        <Link
          href="/login"
          className="rounded-md bg-text-slate px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-overlay"
        >
          Start for free
        </Link>
      </div>
    </header>
  );
}
