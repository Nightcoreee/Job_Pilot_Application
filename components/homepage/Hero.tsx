import Image from "next/image";
import { CtaButtons } from "@/components/homepage/CtaButtons";

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 pt-14">
        <div className="soft-gradient border border-border px-6 py-16 text-center md:px-12 md:py-20">
          <h1 className="mx-auto max-w-[720px] text-[42px] font-bold leading-[1.08] text-text-black md:text-[58px]">
            Job hunting is hard.
            <br />
            Your tools shouldn&apos;t be.
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-base font-medium leading-7 text-text-secondary">
            Stop applying blind. JobPilot finds the jobs, researches the
            companies, and gives you everything you need to stand out.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
        <div className="border-x border-border bg-surface-tertiary px-6 py-12 md:px-16">
          <Image
            src="/images/dashboard-demo.png"
            alt="JobPilot dashboard preview"
            width={4788}
            height={2416}
            priority
            className="mx-auto h-auto w-full max-w-[1100px]"
          />
        </div>
      </div>
    </section>
  );
}
