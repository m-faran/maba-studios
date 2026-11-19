const PROBLEM_COSTS = [
  {
    title: "Dead the second your signal drops",
    cost: "Step onto a flight, ride through a tunnel, or travel on spotty mobile data and cloud-hosted AI immediately stalls behind spinner screens.",
  },
  {
    title: "Subscription fatigue and API key walls",
    cost: "Monthly paywalls, credit-card sign-ups, rate-limit throttling, and metered token caps turn everyday local computing into a permanent rent bill.",
  },
  {
    title: "Your private prompts leave your device",
    cost: "Drafts, personal notes, and technical work are transmitted to remote third-party servers before you ever receive an answer.",
  },
  {
    title: "Built only for flagship hardware",
    cost: "Bloated inference wrappers and heavy multi-pass graphics pipelines assume top-tier silicon—leaving budget and mid-range phones and everyday PCs behind.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="grid w-full grid-cols-1 border-b border-[var(--hairline)] lg:grid-cols-12"
    >
      <div className="flex flex-col justify-between border-b border-[var(--hairline)] px-6 py-16 sm:px-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:px-12 lg:py-24 xl:px-16">
        <div>
          <h2
            id="problem-heading"
            className="font-editorial text-3xl font-medium uppercase leading-[1.08] text-[var(--ink-primary)] sm:text-4xl xl:text-[2.85rem]"
          >
            Cloud AI Taxes Your Privacy, Your Wallet, and Your Hardware.
          </h2>
          <p className="mt-6 max-w-[46ch] text-base leading-[1.65] text-[var(--ink-secondary)]">
            Most modern AI tools treat your own phone or PC like a dumb terminal.
            You pay every month for software that stops working offline, ships
            your inputs off-device, and demands flagship specs just to run
            locally.
          </p>
        </div>

        <p className="mt-10 border-t border-[var(--hairline)] pt-6 text-sm text-[var(--ink-muted)]">
          Software you depend on every day shouldn&apos;t require someone
          else&apos;s server to turn on.
        </p>
      </div>

      <div className="divide-y divide-[var(--hairline)] lg:col-span-7">
        {PROBLEM_COSTS.map((item) => (
          <div
            key={item.title}
            className="px-6 py-9 transition-colors hover:bg-[var(--bg-surface)]/70 sm:px-10 lg:px-12 lg:py-11 xl:px-16"
          >
            <h3 className="text-lg font-medium tracking-[-0.01em] text-[var(--ink-primary)] sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-2.5 max-w-[58ch] text-[0.95rem] leading-[1.65] text-[var(--ink-secondary)]">
              {item.cost}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
