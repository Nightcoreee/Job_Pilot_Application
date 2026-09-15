import { CtaButtons } from "@/components/homepage/CtaButtons";

export function BottomCta() {
  return (
    <section className="mx-auto max-w-[1280px] border-x border-b border-border bg-surface">
      <div className="stripe-band h-20 border-b border-border" />
      <div className="soft-gradient px-6 py-20 text-center md:py-24">
        <h2 className="mx-auto max-w-[760px] text-[38px] font-bold leading-tight text-text-black md:text-[52px]">
          Your next job search can feel a<br className="hidden md:block" /> lot
          less overwhelming
        </h2>
        <p className="mx-auto mt-7 max-w-[680px] text-base font-medium leading-7 text-text-secondary">
          Set up your profile, upload your resume, and start finding matches in
          minutes.
        </p>
        <div className="mt-8">
          <CtaButtons />
        </div>
      </div>
      <div className="stripe-band h-20 border-t border-border" />
    </section>
  );
}
