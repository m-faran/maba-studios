const STEPS = [
  {
    step: "1",
    title: "Choose your platform",
    description:
      "Pick BAMA AI or BAMA Link on Android, Virtual HDD on Windows, or grab BAMA Upscaler's open-source GLSL shader directly for mobile graphics.",
    meta: "Android · Windows · GLSL",
  },
  {
    step: "2",
    title: "Install directly—no account required",
    description:
      "Download straight from Google Play, Windows releases, or GitHub. Zero sign-ups, zero credit cards, and zero API key configuration.",
    meta: "No Login · No Paywalls",
  },
  {
    step: "3",
    title: "Run 100% locally on your hardware",
    description:
      "Keep Wi-Fi off if you like. Models run on your device, LM Studio stays on your home LAN, and your files stay under your own control.",
    meta: "Air-Gapped · Zero Cloud Calls",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="w-full border-b border-[var(--hairline)] bg-[var(--bg-surface)]"
    >
      <div className="border-b border-[var(--hairline)] px-6 py-16 sm:px-10 lg:px-12 lg:py-20 xl:px-16">
        <div className="max-w-[44rem]">
          <h2
            id="how-heading"
            className="font-editorial text-3xl font-medium uppercase leading-[1.08] text-[var(--ink-primary)] sm:text-5xl"
          >
            From Download to Local Execution in Three Steps.
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-[1.65] text-[var(--ink-secondary)]">
            No onboarding maze, no billing setup, and no remote server pairing.
          </p>
        </div>
      </div>

      <ol className="grid grid-cols-1 divide-y divide-[var(--hairline)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="flex flex-col justify-between bg-[var(--bg-void)] px-6 py-11 sm:px-10 lg:px-12 lg:py-14"
          >
            <div>
              <span className="inline-flex h-9 w-9 items-center justify-center border border-[var(--hairline-strong)] font-mono tabular-nums text-sm text-[var(--accent-cobalt)]">
                {item.step}
              </span>

              <h3 className="mt-6 font-editorial text-2xl font-medium leading-[1.18] text-[var(--ink-primary)]">
                {item.title}
              </h3>

              <p className="mt-3.5 text-[0.95rem] leading-[1.65] text-[var(--ink-secondary)]">
                {item.description}
              </p>
            </div>

            <p className="mt-8 border-t border-[var(--hairline)] pt-4 font-mono text-xs uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              {item.meta}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
