/**
 * Central distribution & navigation links for BAMA Studios.
 * Replace `href` values with live Google Play, Windows release, and GitHub URLs
 * whenever ready—no UI or image changes required.
 */

export interface DistributionLink {
  label: string;
  platform: string;
  href: string;
  external: boolean;
  /** Set to true once the live external URL is populated */
  live: boolean;
  statusNote: string;
}

export const SITE_LINKS = {
  bamaAiPlay: {
    label: "Get BAMA AI",
    platform: "Google Play · Android",
    href: "#bama-ai",
    external: false,
    live: false,
    statusNote: "Drop your Google Play listing URL into src/lib/links.ts",
  },
  bamaLink: {
    label: "Get BAMA Link",
    platform: "Android · Local Wi-Fi",
    href: "#bama-link",
    external: false,
    live: false,
    statusNote: "Drop your BAMA Link Android URL into src/lib/links.ts",
  },
  virtualHdd: {
    label: "Get Virtual HDD",
    platform: "Windows Installer",
    href: "#virtual-hdd",
    external: false,
    live: false,
    statusNote: "Drop your Windows release URL into src/lib/links.ts",
  },
  bamaUpscaler: {
    label: "View GLSL Source",
    platform: "GitHub · Open Source",
    href: "#bama-upscaler",
    external: false,
    live: false,
    statusNote: "Drop your GitHub repository URL into src/lib/links.ts",
  },
  githubOrg: {
    label: "GitHub",
    platform: "Open Source",
    href: "#bama-upscaler",
    external: false,
    live: false,
    statusNote: "Drop your BAMA Studios GitHub org URL into src/lib/links.ts",
  },
} satisfies Record<string, DistributionLink>;
