import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

/**
 * Hand-drawn inline SVG set. One stroke weight (1.5) across the whole site so
 * icons sit at the same optical weight as the text beside them.
 */

type P = SVGProps<SVGSVGElement>;

function Svg({ children, ...rest }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* Sector icons ----------------------------------------------------- */

const Health = (p: P) => (
  <Svg {...p}>
    <path d="M3 12h3.5l1.8-4.5 3 9 2-4.5H21" />
    <path d="M20.5 8.6A4.6 4.6 0 0 0 12 6.2a4.6 4.6 0 0 0-8.5 2.4" />
    <path d="M4.6 14c1.5 3 4.6 5.3 7.4 7 2.8-1.7 5.9-4 7.4-7" />
  </Svg>
);

const Education = (p: P) => (
  <Svg {...p}>
    <path d="M12 4 2.5 8.6 12 13.2l9.5-4.6L12 4Z" />
    <path d="M6.5 10.8V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-5.2" />
    <path d="M21.5 8.6v5.6" />
  </Svg>
);

const Economy = (p: P) => (
  <Svg {...p}>
    <path d="M3 3v16.5A1.5 1.5 0 0 0 4.5 21H21" />
    <path d="M7 15.5l3.8-4.4 3 2.6L21 6.5" />
    <path d="M21 10.6V6.5h-4.1" />
  </Svg>
);

const Security = (p: P) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v6c0 4.2 3 7.6 7.5 9 4.5-1.4 7.5-4.8 7.5-9V6L12 3Z" />
    <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
  </Svg>
);

const Infrastructure = (p: P) => (
  <Svg {...p}>
    <path d="M7.5 3 4 21M16.5 3 20 21" />
    <path d="M12 4v2.5M12 10.8v2.5M12 17.5V20" />
  </Svg>
);

const Governance = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5v17M6.5 20.5h11" />
    <path d="M4 7.5h16M7 7.5 4 13.5h6L7 7.5ZM17 7.5l-3 6h6l-3-6Z" />
  </Svg>
);

const Investment = (p: P) => (
  <Svg {...p}>
    <path d="M3 20.5h18" />
    <path d="M5.5 20.5V10l6.5-4.5L18.5 10v10.5" />
    <path d="M9.5 20.5v-5h5v5" />
    <path d="M9.5 11.5h1.5M13 11.5h1.5" />
  </Svg>
);

const Welfare = (p: P) => (
  <Svg {...p}>
    <path d="M12 20.5S4 16.2 4 10.6A4.1 4.1 0 0 1 12 8.9a4.1 4.1 0 0 1 8 1.7c0 5.6-8 9.9-8 9.9Z" />
  </Svg>
);

export const sectorIcons: Record<IconName, (p: P) => React.ReactElement> = {
  health: Health,
  education: Education,
  economy: Economy,
  security: Security,
  infrastructure: Infrastructure,
  governance: Governance,
  investment: Investment,
  welfare: Welfare,
};

/* Interface icons -------------------------------------------------- */

export const ChevronDown = (p: P) => (
  <Svg {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const Check = (p: P) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

export const Alert = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.2M12 16.3h.01" />
  </Svg>
);

export const Info = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-5.2M12 7.8h.01" />
  </Svg>
);

export const Minus = (p: P) => (
  <Svg {...p}>
    <path d="M6 12h12" />
  </Svg>
);

export const Link = (p: P) => (
  <Svg {...p}>
    <path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.5 1.5" />
    <path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.5-1.5" />
  </Svg>
);

export const Copy = (p: P) => (
  <Svg {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4H6.5A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
  </Svg>
);

export const ArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
);

/* Brand marks are filled, not stroked, so they read correctly at 16px. */

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.23 8.23 0 0 1 8.24 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.3-.02-.46-.02s-.43.06-.66.31c-.22.24-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const XMark = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.53 3h3.06l-6.69 7.64L21.75 21h-6.16l-4.83-6.3L5.24 21H2.18l7.15-8.17L2.25 3h6.32l4.36 5.77L17.53 3Zm-1.07 16.17h1.7L7.62 4.74H5.8l10.66 14.43Z" />
  </svg>
);
