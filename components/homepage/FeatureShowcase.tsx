import Image from "next/image";

const searchFeatures = [
  {
    title: "Find jobs that actually fit",
    body: "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
  },
  {
    title: "Know the Company Before You Apply",
    body: "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    title: "Keep track of every application",
    body: "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const confidenceFeatures = [
  {
    title: "Understand your match score",
    body: "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
  },
  {
    title: "AI-Powered Job Matching",
    body: "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
  },
  {
    title: "Focus on the right roles",
    body: "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

export function FeatureShowcase() {
  return (
    <section className="mx-auto max-w-[1280px] border-x border-border bg-surface">
      <div className="grid border-b border-border md:grid-cols-2">
        <div className="flex min-h-[500px] flex-col justify-center">
          <h2 className="px-12 pb-14 text-[36px] font-bold leading-tight text-text-slate md:px-16 md:text-[44px]">
            Manage Your Job
            <br />
            Search With Ease
          </h2>
          <div className="border-t border-border">
            {searchFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`border-b border-border px-12 py-8 md:px-16 ${
                  index === 0 ? "border-l-4 border-l-accent" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-text-slate">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[470px] text-sm font-medium leading-6 text-text-secondary">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-surface-muted px-8 py-16 md:px-12">
          <Image
            src="/images/jobs-lists.png"
            alt="Matched jobs table"
            width={2364}
            height={1778}
            className="h-auto w-full max-w-[580px]"
          />
        </div>
      </div>
      <div className="stripe-band h-20 border-b border-border" />
      <div className="grid border-b border-border md:grid-cols-2">
        <div className="flex items-center justify-center bg-surface-muted px-8 py-16 md:px-12">
          <Image
            src="/images/agnet-log.png"
            alt="JobPilot agent activity log"
            width={2144}
            height={1656}
            className="h-auto w-full max-w-[540px]"
          />
        </div>
        <div className="flex min-h-[500px] flex-col justify-center">
          <h2 className="px-12 pb-14 text-[36px] font-bold leading-tight text-text-slate md:px-16 md:text-[44px]">
            Apply With More
            <br />
            Confidence, Every Time
          </h2>
          <div className="border-t border-border">
            {confidenceFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`border-b border-border px-12 py-8 md:px-16 ${
                  index === 1 ? "border-l-4 border-l-success" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-text-slate">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-[470px] text-sm font-medium leading-6 text-text-secondary">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="stripe-band h-20 border-b border-border" />
    </section>
  );
}
