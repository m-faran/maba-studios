import { SITE_LINKS } from "@/lib/links";
import { ArrowUpRightIcon } from "./Icons";

interface WatermarkPlaceholderProps {
  slotLabel: string;
}

/** Architectural Logoipsum-style media watermark for pending product imagery. */
function WatermarkPlaceholder({ slotLabel }: WatermarkPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${slotLabel} — product image placeholder`}
      className="relative flex aspect-[16/10] w-full select-none flex-col items-center justify-center overflow-hidden border border-[var(--hairline)] bg-[var(--bg-inset)] p-8"
    >
      {/* Subtle architectural corner registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t border-l border-[var(--hairline-strong)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t border-r border-[var(--hairline-strong)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b border-l border-[var(--hairline-strong)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 bottom-3.5 h-3 w-3 border-r border-b border-[var(--hairline-strong)]"
      />

      {/* Minimalist Logoipsum-style geometric watermark emblem */}
      <div className="flex flex-col items-center gap-3.5 text-center">
        <svg
          viewBox="0 0 120 44"
          fill="none"
          aria-hidden="true"
          className="h-11 w-auto text-[var(--hairline-strong)]"
        >
          {/* Left geometric media mark */}
          <rect
            x="1"
            y="6"
            width="32"
            height="32"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M1 32l9.5-10 7 6.5 6-7.5 9.5 11"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <circle
            cx="11"
            cy="15"
            r="2.25"
            stroke="var(--accent-cobalt)"
            strokeOpacity="0.55"
            strokeWidth="1.25"
          />

          {/* Right abstract geometric B monogram + bars (logoipsum-style mark) */}
          <path
            d="M47 12h11a5 5 0 0 1 0 10H47V12Zm0 10h12a5 5 0 0 1 0 10H47V22Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path
            d="M76 16h26M76 22h18M76 28h22"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
          <rect
            x="108"
            y="14"
            width="8"
            height="16"
            stroke="var(--accent-cobalt)"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
        </svg>

        <div className="space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            {slotLabel}
          </p>
          <p className="font-mono text-[11px] text-[var(--ink-muted)]">
            Visual asset pending
          </p>
        </div>
      </div>
    </div>
  );
}

const SOLUTION_BLOCKS = [
  {
    id: "bama-ai",
    platform: "Android · Flagship App",
    title: "BAMA AI — Completely Offline Assistant",
    feature:
      "A standalone Android AI assistant engineered around quantization-native language models, available free on Google Play.",
    benefit:
      "Draft, brainstorm, and reason anywhere—even with Wi-Fi and mobile data switched off—with total air-gapped privacy.",
    action: SITE_LINKS.bamaAiPlay,
    slotLabel: "BAMA AI · Product Placeholder",
  },
  {
    id: "quantization-native",
    platform: "Core Engineering",
    title: "Quantization-Native Models for Everyday Hardware",
    feature:
      "Built from the ground up for constrained memory and mobile compute rather than stripping down cloud-scale models after release.",
    benefit:
      "Run capable local models smoothly on budget and mid-range phones without buying flagship hardware.",
    action: null,
    slotLabel: "Quantization Engine · Visual Placeholder",
  },
  {
    id: "bama-link",
    platform: "Android · Local Network",
    title: "BAMA Link — Phone to PC LM Studio Bridge",
    feature:
      "Connects your Android device directly to LM Studio running on your PC over your local Wi-Fi network.",
    benefit:
      "Tap into larger desktop language models from your phone without exposing prompts or traffic to external cloud servers.",
    action: SITE_LINKS.bamaLink,
    slotLabel: "BAMA Link · Product Placeholder",
  },
  {
    id: "virtual-hdd",
    platform: "Windows · Storage Utility",
    title: "Virtual HDD — Unified Mounted Drive",
    feature:
      "Pools Google Drive, TeraBox, and a local disk cache into a single native Windows drive letter using smart read-through caching.",
    benefit:
      "Work across all your storage directly inside Windows File Explorer with local-feeling reads and zero manual tab juggling.",
    action: SITE_LINKS.virtualHdd,
    slotLabel: "Virtual HDD · Product Placeholder",
  },
  {
    id: "bama-upscaler",
    platform: "Open Source · GLSL",
    title: "BAMA Upscaler — Single-Pass Mobile Spatial Shader",
    feature:
      "An open-source, single-pass spatial upscaler written in GLSL specifically for low-end mobile GPUs.",
    benefit:
      "Deliver sharper visuals in one shader pass while avoiding the multi-pass memory bandwidth bottleneck that stalls budget graphics chips.",
    action: SITE_LINKS.bamaUpscaler,
    slotLabel: "BAMA Upscaler · Product Placeholder",
  },
  {
    id: "local-ownership",
    platform: "Lab Standard",
    title: "Zero Paywalls, API Keys, or Token Limits",
    feature:
      "Every BAMA Studios tool skips account creation, billing gates, API key setup, and remote usage metering.",
    benefit:
      "Install once and own your workflow outright—no monthly rent and no server sitting between you and your tools.",
    action: null,
    slotLabel: "BAMA Suite · Visual Placeholder",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="w-full border-b border-[var(--hairline)]"
    >
      {/* Section Lead */}
      <div className="border-b border-[var(--hairline)] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              id="solutions-heading"
              className="font-editorial text-3xl font-medium uppercase leading-[1.06] text-[var(--ink-primary)] sm:text-5xl xl:text-[3.4rem]"
            >
              Software Engineered To Live On Your Hardware.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-[52ch] text-base leading-[1.65] text-[var(--ink-secondary)]">
              BAMA Studios replaces cloud-dependent subscriptions with four
              focused, local-first releases—led by BAMA AI on Android and backed
              by quantization-native engineering built for real-world devices.
            </p>
          </div>
        </div>
      </div>

      {/* 6 Feature + Benefit + Supporting Visual rows */}
      <div className="divide-y divide-[var(--hairline)]">
        {SOLUTION_BLOCKS.map((block, index) => {
          const reverseOnDesktop = index % 2 === 1;

          return (
            <article
              key={block.id}
              id={block.id}
              className="grid scroll-mt-24 grid-cols-1 lg:grid-cols-12"
            >
              {/* Editorial Feature + Benefit Column */}
              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-5 lg:px-12 lg:py-16 xl:px-16 ${
                  reverseOnDesktop
                    ? "lg:order-2 lg:border-l lg:border-[var(--hairline)]"
                    : "lg:order-1 lg:border-r lg:border-[var(--hairline)]"
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--accent-cobalt)]">
                  {block.platform}
                </span>

                <h3 className="mt-3 font-editorial text-2xl font-medium leading-[1.15] text-[var(--ink-primary)] sm:text-[1.85rem]">
                  {block.title}
                </h3>

                <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-[1.65] text-[var(--ink-secondary)]">
                  {block.feature}
                </p>

                <p className="mt-4 border-t border-[var(--hairline)] pt-4 max-w-[48ch] text-[0.95rem] leading-[1.65] text-[var(--ink-primary)]/90">
                  {block.benefit}
                </p>

                {block.action && (
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={block.action.href}
                      {...(block.action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex h-10 items-center gap-2 rounded-[2px] border border-[var(--hairline-strong)] bg-[var(--bg-surface)] px-4 text-sm font-medium text-[var(--ink-primary)] transition-colors hover:border-[var(--accent-cobalt)] hover:bg-[var(--accent-cobalt)] hover:text-white"
                    >
                      <span>{block.action.label}</span>
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                    <span className="font-mono text-xs text-[var(--ink-muted)]">
                      {block.action.platform}
                    </span>
                  </div>
                )}
              </div>

              {/* Supporting Visual Column */}
              <div
                className={`flex items-center bg-[var(--bg-surface)]/45 px-6 py-10 sm:px-10 lg:col-span-7 lg:px-12 lg:py-16 xl:px-16 ${
                  reverseOnDesktop
                    ? "border-t border-[var(--hairline)] lg:order-1 lg:border-t-0"
                    : "border-t border-[var(--hairline)] lg:order-2 lg:border-t-0"
                }`}
              >
                <div className="w-full">
                  <WatermarkPlaceholder slotLabel={block.slotLabel} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
