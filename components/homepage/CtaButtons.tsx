import Link from "next/link";

export function CtaButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Link
        href="/login"
        className="rounded-md bg-text-slate px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-overlay"
      >
        Get Started &gt;
      </Link>
      <Link
        href="/find-jobs"
        className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary shadow-sm hover:bg-surface-secondary"
      >
        Find Your First Match
      </Link>
    </div>
  );
}
