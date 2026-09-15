import Image from "next/image";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-[1280px] border-x border-b border-border bg-surface px-6 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
        Success Stories
      </p>
      <blockquote className="mx-auto mt-8 max-w-[800px] text-[26px] font-semibold leading-10 text-text-slate md:text-[32px] md:leading-[1.35]">
        &quot;I used to spend my evenings copy-pasting resumes. Now I open my
        dashboard to see interviews waiting. It feels like cheating. Had 3
        offers on the table simultaneously.&quot;
      </blockquote>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Image
          src="/images/user-icon.png"
          alt="Tom Wilson"
          width={44}
          height={44}
          className="rounded-md"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-text-primary">Tom Wilson</p>
          <p className="text-xs font-medium text-text-secondary">
            Junior Developer
          </p>
        </div>
      </div>
    </section>
  );
}
