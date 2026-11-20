"use client";

import { useState } from "react";
import { SITE_LINKS } from "@/lib/links";
import { CloseIcon, MenuIcon } from "./Icons";

const NAV_ITEMS = [
  { label: "Products", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: SITE_LINKS.githubOrg.href },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--hairline)] bg-[var(--bg-void)]/92 backdrop-blur-md">
      <div className="flex h-20 w-full items-center justify-between gap-3 px-5 sm:px-10 lg:px-12">
        <a
          href="#top"
          className="font-editorial whitespace-nowrap text-[1.15rem] font-medium tracking-[0.04em] text-[var(--ink-primary)] transition-opacity hover:opacity-85 sm:text-[1.45rem]"
        >
          BAMA STUDIOS
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <a
            href={SITE_LINKS.bamaAiPlay.href}
            {...(SITE_LINKS.bamaAiPlay.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-[2px] bg-[var(--accent-cobalt)] px-3.5 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-cobalt-hover)] sm:h-10 sm:px-5 sm:text-sm"
          >
            {SITE_LINKS.bamaAiPlay.label}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-[var(--hairline-strong)] text-[var(--ink-primary)] transition-colors hover:border-[var(--ink-muted)] md:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-[var(--hairline)] bg-[var(--bg-void)] px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-[var(--hairline)]">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-sm text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink-primary)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
