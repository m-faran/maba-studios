/**
 * Central distribution & navigation links for MABA Studios.
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
  mabaAiPlay: {
    label: "Get MABA AI",
    platform: "Google Play · Android",
    href: "#maba-ai",
    external: false,
    live: false,
    statusNote: "Drop your Google Play listing URL into src/lib/links.ts",
  },
  mabaLink: {
    label: "Get MABA Link",
    platform: "Android · Local Wi-Fi",
    href: "#maba-link",
    external: false,
    live: false,
    statusNote: "Drop your MABA Link Android URL into src/lib/links.ts",
  },
  virtualHdd: {
    label: "Get Virtual HDD",
    platform: "Windows Installer",
    href: "#virtual-hdd",
    external: false,
    live: false,
    statusNote: "Drop your Windows release URL into src/lib/links.ts",
  },
  mabaUpscaler: {
    label: "View GLSL Source",
    platform: "GitHub · Open Source",
    href: "#maba-upscaler",
    external: false,
    live: false,
    statusNote: "Drop your GitHub repository URL into src/lib/links.ts",
  },
  githubOrg: {
    label: "GitHub",
    platform: "Open Source",
    href: "#maba-upscaler",
    external: false,
    live: false,
    statusNote: "Drop your MABA Studios GitHub org URL into src/lib/links.ts",
  },
} satisfies Record<string, DistributionLink>;
