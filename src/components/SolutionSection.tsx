"use client";

import { useState } from "react";
import { SITE_LINKS } from "@/lib/links";
import { ArrowUpRightIcon, CheckIcon } from "./Icons";

function AirGappedMonitorVisual() {
  const [airplaneMode, setAirplaneMode] = useState(true);

  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
        <div className="flex items-center gap-2.5">
          <span
            className="h-2 w-2 rounded-full bg-[var(--signal-local)]"
            aria-hidden="true"
          />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
            MABA AI Runtime
          </span>
        </div>

        <button
          type="button"
          onClick={() => setAirplaneMode((prev) => !prev)}
          aria-pressed={airplaneMode}
          className={`inline-flex items-center gap-2 rounded-[2px] border px-3 py-1.5 font-mono text-xs transition-colors ${
            airplaneMode
              ? "border-[var(--accent-cobalt)] bg-[var(--accent-cobalt-tint)] text-[var(--ink-primary)]"
              : "border-[var(--hairline-strong)] bg-transparent text-[var(--ink-secondary)] hover:border-[var(--ink-muted)]"
          }`}
        >
          <span>Airplane Mode: {airplaneMode ? "ON" : "OFF"}</span>
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            On-Device Engine
          </p>
          <p className="mt-2 font-mono text-sm font-medium text-[var(--signal-local)]">
            ACTIVE · LOCAL RAM
          </p>
          <p className="mt-1 text-xs text-[var(--ink-secondary)]">
            {airplaneMode
              ? "Radios disabled. Inference continues uninterrupted."
              : "Radios enabled. Still executes 100% locally."}
          </p>
        </div>

        <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            Outbound Cloud Socket
          </p>
          <p className="mt-2 font-mono tabular-nums text-sm font-medium text-[var(--ink-primary)]">
            0 PACKETS SENT
          </p>
          <p className="mt-1 text-xs text-[var(--ink-secondary)]">
            No remote endpoint, telemetry host, or login check.
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--hairline)] pt-4 font-mono text-xs text-[var(--ink-muted)]">
        <span>TRANSPORT: ON-DEVICE</span>
        <span className="text-[var(--ink-secondary)]">GOOGLE PLAY · FREE</span>
      </div>
    </div>
  );
}

function QuantizationBudgetVisual() {
  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4 font-mono text-xs text-[var(--ink-muted)]">
        <span className="uppercase tracking-[0.08em] text-[var(--ink-primary)]">
          Memory Allocation Profile
        </span>
        <span>BUDGET &amp; MID-RANGE</span>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[var(--ink-secondary)]">
              Typical Unquantized Cloud-Era Model
            </span>
            <span className="text-[var(--signal-blocked)]">EXCEEDS DEVICE RAM</span>
          </div>
          <div className="mt-2 h-2.5 w-full bg-[var(--bg-void)] ring-1 ring-[var(--hairline)]">
            <div className="h-full w-[94%] bg-[var(--hairline-strong)]" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-[var(--ink-primary)]">
              MABA Quantization-Native Engine
            </span>
            <span className="text-[var(--accent-cobalt)]">FITS WITH OS HEADROOM</span>
          </div>
          <div className="mt-2 flex h-2.5 w-full bg-[var(--bg-void)] ring-1 ring-[var(--hairline)]">
            <div className="h-full w-[38%] bg-[var(--accent-cobalt)]" />
            <div className="h-full w-[22%] border-l border-[var(--bg-void)] bg-[var(--hairline-strong)]/60" />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-[var(--ink-muted)]">
            <span>Quantized Weights + KV Cache</span>
            <span>Free System Headroom</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-[var(--hairline)] border border-[var(--hairline)] bg-[var(--bg-void)] text-center font-mono text-xs">
        <div className="py-3">
          <p className="text-[var(--ink-primary)]">CPU / Mobile</p>
          <p className="mt-0.5 text-[11px] text-[var(--ink-muted)]">Primary Target</p>
        </div>
        <div className="py-3">
          <p className="text-[var(--ink-primary)]">No Flagship Lock</p>
          <p className="mt-0.5 text-[11px] text-[var(--ink-muted)]">Everyday RAM</p>
        </div>
        <div className="py-3">
          <p className="text-[var(--ink-primary)]">Cold Start</p>
          <p className="mt-0.5 text-[11px] text-[var(--ink-muted)]">Local Storage</p>
        </div>
      </div>
    </div>
  );
}

function LocalWifiBridgeVisual() {
  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4 font-mono text-xs">
        <span className="uppercase tracking-[0.08em] text-[var(--ink-primary)]">
          Local Wi-Fi Topology
        </span>
        <span className="text-[var(--signal-local)]">LAN ONLY</span>
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <div className="border border-[var(--hairline-strong)] bg-[var(--bg-void)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            Android Phone
          </p>
          <p className="mt-1.5 text-sm font-medium text-[var(--ink-primary)]">
            MABA Link
          </p>
          <p className="mt-1 font-mono text-xs text-[var(--ink-secondary)]">
            Prompt &amp; stream client
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-1 text-center font-mono text-[11px]">
          <span className="text-[var(--accent-cobalt)]">Local Wi-Fi</span>
          <span className="my-1 block h-[1px] w-16 bg-[var(--accent-cobalt)]" />
          <span className="tabular-nums text-[var(--ink-muted)]">192.168.x.x</span>
        </div>

        <div className="border border-[var(--hairline-strong)] bg-[var(--bg-void)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            Desktop PC
          </p>
          <p className="mt-1.5 text-sm font-medium text-[var(--ink-primary)]">
            LM Studio Server
          </p>
          <p className="mt-1 font-mono text-xs text-[var(--ink-secondary)]">
            Full desktop models
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border border-dashed border-[var(--hairline-strong)] bg-[var(--bg-void)] px-4 py-3 font-mono text-xs">
        <span className="text-[var(--ink-muted)]">PUBLIC INTERNET / CLOUD RELAY</span>
        <span className="text-[var(--ink-secondary)]">NOT USED</span>
      </div>
    </div>
  );
}

function VirtualHddVisual() {
  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4 font-mono text-xs">
        <span className="uppercase tracking-[0.08em] text-[var(--ink-primary)]">
          Windows Storage Pool
        </span>
        <span className="text-[var(--ink-secondary)]">READ-THROUGH CACHE</span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { name: "Google Drive", role: "Remote Pool" },
          { name: "TeraBox", role: "Remote Pool" },
          { name: "Local Cache", role: "Hot Read Layer" },
        ].map((source) => (
          <div
            key={source.name}
            className="border border-[var(--hairline)] bg-[var(--bg-void)] p-3.5"
          >
            <p className="text-sm font-medium text-[var(--ink-primary)]">
              {source.name}
            </p>
            <p className="mt-1 font-mono text-[11px] text-[var(--ink-muted)]">
              {source.role}
            </p>
          </div>
        ))}
      </div>

      <div className="my-3 flex items-center justify-center">
        <span className="h-5 w-[1px] bg-[var(--accent-cobalt)]" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border border-[var(--accent-cobalt)] bg-[var(--accent-cobalt-tint)] px-4 py-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
            Mounted Windows Drive Letter
          </p>
          <p className="mt-1 text-sm text-[var(--ink-secondary)]">
            One unified drive inside File Explorer and native apps.
          </p>
        </div>
        <span className="border border-[var(--accent-cobalt)] bg-[var(--bg-void)] px-3 py-1.5 font-mono text-sm font-medium text-[var(--ink-primary)]">
          M:\
        </span>
      </div>
    </div>
  );
}

function SinglePassGlslVisual() {
  const [singlePass, setSinglePass] = useState(true);

  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--hairline)] pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-primary)]">
          Mobile GPU Shader Pipeline
        </span>

        <div className="inline-flex border border-[var(--hairline-strong)] bg-[var(--bg-void)] font-mono text-xs">
          <button
            type="button"
            onClick={() => setSinglePass(true)}
            aria-pressed={singlePass}
            className={`px-3 py-1.5 transition-colors ${
              singlePass
                ? "bg-[var(--accent-cobalt)] text-white"
                : "text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
            }`}
          >
            MABA 1-Pass
          </button>
          <button
            type="button"
            onClick={() => setSinglePass(false)}
            aria-pressed={!singlePass}
            className={`px-3 py-1.5 transition-colors ${
              !singlePass
                ? "bg-[var(--hairline-strong)] text-white"
                : "text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
            }`}
          >
            Multi-Pass
          </button>
        </div>
      </div>

      <div className="mt-5">
        {singlePass ? (
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-4">
              <p className="font-mono text-[11px] text-[var(--ink-muted)]">INPUT</p>
              <p className="mt-1 text-sm text-[var(--ink-primary)]">
                Low-Res Framebuffer
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--accent-cobalt)]">
              1 PASS →
            </span>
            <div className="border border-[var(--accent-cobalt)] bg-[var(--accent-cobalt-tint)] p-4">
              <p className="font-mono text-[11px] text-[var(--ink-primary)]">
                GLSL OUTPUT
              </p>
              <p className="mt-1 text-sm text-[var(--ink-primary)]">
                Spatial Edge Reconstruction
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-3 text-[var(--ink-secondary)]">
              Pass 1: Luma Extract
            </div>
            <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-3 text-[var(--ink-secondary)]">
              Pass 2: Gradient Buffer
            </div>
            <div className="border border-[var(--hairline)] bg-[var(--bg-void)] p-3 text-[var(--ink-secondary)]">
              Pass 3: Composite Write
            </div>
          </div>
        )}
      </div>

      <pre className="mt-5 overflow-x-auto border border-[var(--hairline)] bg-[var(--bg-void)] p-3.5 font-mono text-xs leading-[1.6] text-[var(--ink-secondary)]">
        <code>
          {singlePass
            ? "// MABA Upscaler · Open Source GLSL\nvec4 spatialUpscale(sampler2D tex, vec2 uv); // single pass, low-end mobile GPU"
            : "// Multi-pass chains write intermediate render targets\n// Extra memory bandwidth stalls low-end mobile GPUs"}
        </code>
      </pre>
    </div>
  );
}

function OwnershipAuditVisual() {
  const rows = [
    { item: "Account / Login", cloud: "Required", maba: "None" },
    { item: "Monthly Subscription", cloud: "Paywalled", maba: "None" },
    { item: "API Keys & Token Caps", cloud: "Metered", maba: "Unlimited Local" },
    { item: "Outbound Cloud Calls", cloud: "Every Prompt", maba: "0 Calls" },
  ];

  return (
    <div className="border border-[var(--hairline)] bg-[var(--bg-inset)] p-6 sm:p-7">
      <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-[var(--hairline)] pb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        <span>Requirement</span>
        <span>Cloud AI</span>
        <span className="text-[var(--ink-primary)]">MABA Studios</span>
      </div>

      <div className="divide-y divide-[var(--hairline)]">
        {rows.map((row) => (
          <div
            key={row.item}
            className="grid grid-cols-[1.3fr_1fr_1fr] items-center py-3.5 text-sm"
          >
            <span className="text-[var(--ink-primary)]">{row.item}</span>
            <span className="font-mono text-xs text-[var(--ink-muted)]">
              {row.cloud}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--signal-local)]">
              <CheckIcon className="h-3.5 w-3.5 shrink-0" />
              <span>{row.maba}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SOLUTION_BLOCKS = [
  {
    id: "maba-ai",
    platform: "Android · Flagship App",
    title: "MABA AI — Completely Offline Assistant",
    feature:
      "A standalone Android AI assistant engineered around quantization-native language models, available free on Google Play.",
    benefit:
      "Draft, brainstorm, and reason anywhere—even with Wi-Fi and mobile data switched off—with total air-gapped privacy.",
    action: SITE_LINKS.mabaAiPlay,
    visual: <AirGappedMonitorVisual />,
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
    visual: <QuantizationBudgetVisual />,
  },
  {
    id: "maba-link",
    platform: "Android · Local Network",
    title: "MABA Link — Phone to PC LM Studio Bridge",
    feature:
      "Connects your Android device directly to LM Studio running on your PC over your local Wi-Fi network.",
    benefit:
      "Tap into larger desktop language models from your phone without exposing prompts or traffic to external cloud servers.",
    action: SITE_LINKS.mabaLink,
    visual: <LocalWifiBridgeVisual />,
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
    visual: <VirtualHddVisual />,
  },
  {
    id: "maba-upscaler",
    platform: "Open Source · GLSL",
    title: "MABA Upscaler — Single-Pass Mobile Spatial Shader",
    feature:
      "An open-source, single-pass spatial upscaler written in GLSL specifically for low-end mobile GPUs.",
    benefit:
      "Deliver sharper visuals in one shader pass while avoiding the multi-pass memory bandwidth bottleneck that stalls budget graphics chips.",
    action: SITE_LINKS.mabaUpscaler,
    visual: <SinglePassGlslVisual />,
  },
  {
    id: "local-ownership",
    platform: "Lab Standard",
    title: "Zero Paywalls, API Keys, or Token Limits",
    feature:
      "Every MABA Studios tool skips account creation, billing gates, API key setup, and remote usage metering.",
    benefit:
      "Install once and own your workflow outright—no monthly rent and no server sitting between you and your tools.",
    action: null,
    visual: <OwnershipAuditVisual />,
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
              MABA Studios replaces cloud-dependent subscriptions with four
              focused, local-first releases—led by MABA AI on Android and backed
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
                <div className="w-full">{block.visual}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
