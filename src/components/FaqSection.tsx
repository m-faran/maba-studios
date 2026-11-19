"use client";

import { useState } from "react";
import { PlusIcon } from "./Icons";

const FAQS = [
  {
    question: "Does MABA AI really work completely offline with zero internet?",
    answer:
      "Yes. Once installed on your Android device, MABA AI runs quantization-native models 100% on-device. You can enable airplane mode and continue using it with zero cloud calls and zero remote servers involved.",
  },
  {
    question: "Will MABA Studios apps run on budget or mid-range Android phones?",
    answer:
      "That is our core engineering target. Rather than assuming flagship silicon, MABA AI's quantization-native models and MABA Upscaler's single-pass GLSL shader are built specifically around budget and mid-range memory and GPU constraints.",
  },
  {
    question: "Are there any subscriptions, accounts, API keys, or token limits?",
    answer:
      "No. MABA AI is available free on Google Play with no paywalls, no account registration, no external API key setup, and no metered token ceilings. Your local compute is yours to use freely.",
  },
  {
    question: "How does MABA Link connect my Android phone to LM Studio?",
    answer:
      "MABA Link bridges your Android phone directly to an LM Studio instance running on your PC over your local Wi-Fi network. Traffic stays inside your local network so you can run heavier desktop models from your phone without cloud relays.",
  },
  {
    question: "How does Virtual HDD unify Google Drive, TeraBox, and local storage?",
    answer:
      "Virtual HDD mounts Google Drive, TeraBox, and a local cache as a single native Windows drive letter. Its smart read-through cache keeps frequently accessed data fast on local disk while presenting one unified filesystem in Windows.",
  },
  {
    question: "Where can I inspect and use MABA Upscaler?",
    answer:
      "MABA Upscaler is an open-source single-pass spatial upscaler written in GLSL for low-end mobile GPUs. Its shader source lives on GitHub so graphics developers and tinkerers can audit, benchmark, and integrate it directly.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="grid w-full grid-cols-1 border-b border-[var(--hairline)] lg:grid-cols-12"
    >
      <div className="border-b border-[var(--hairline)] px-6 py-16 sm:px-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:px-12 lg:py-24 xl:px-16">
        <div className="lg:sticky lg:top-28">
          <h2
            id="faq-heading"
            className="font-editorial text-3xl font-medium uppercase leading-[1.08] text-[var(--ink-primary)] sm:text-5xl"
          >
            Questions, Answered Directly.
          </h2>
          <p className="mt-5 max-w-[44ch] text-base leading-[1.65] text-[var(--ink-secondary)]">
            Clear technical answers on offline operation, everyday hardware
            support, local Wi-Fi bridging, and Windows storage pooling.
          </p>
        </div>
      </div>

      <div className="divide-y divide-[var(--hairline)] lg:col-span-7">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left transition-colors hover:bg-[var(--bg-surface)]/70 sm:px-10 lg:px-12"
                >
                  <span className="text-base font-medium leading-[1.45] text-[var(--ink-primary)] sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--hairline-strong)] text-[var(--ink-secondary)] transition-transform duration-200 ${
                      isOpen ? "rotate-45 border-[var(--accent-cobalt)] text-[var(--ink-primary)]" : ""
                    }`}
                  >
                    <PlusIcon className="h-3.5 w-3.5" />
                  </span>
                </button>
              </h3>

              {isOpen && (
                <div
                  id={panelId}
                  className="px-6 pb-8 pt-0 sm:px-10 lg:px-12"
                >
                  <p className="max-w-[60ch] text-[0.95rem] leading-[1.7] text-[var(--ink-secondary)]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
