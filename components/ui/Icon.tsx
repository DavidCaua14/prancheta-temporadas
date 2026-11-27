/**
 * Ícones do jogo em SVG (nada de emoji): traço grosso e arredondado, no mesmo
 * estilo cartoon da interface.
 *
 * - <Icon>: ícones de interface, herdam a cor do texto (currentColor).
 * - <EventIcon>: ícones coloridos dos lances da partida (gol, cartão…).
 */
import type { ReactNode, SVGProps } from "react";


export type IconName =
  | "back"
  | "forward"
  | "chevron-left"
  | "chevron-right"
  | "play"
  | "pause"
  | "skip"
  | "restart"
  | "clipboard"
  | "swap"
  | "check"
  | "copy"
  | "share"
  | "close"
  | "dice"
  | "bolt"
  | "warning"
  | "trophy"
  | "dot"
  | "clock"
  | "whistle"
  | "star"
  | "arrow-right"
  | "home"
  | "cards"
  | "tv"
  | "gavel"
  | "shield";

const PATHS: Record<IconName, ReactNode> = {
  back: <path d="M15 5l-7 7 7 7M8 12h12" />,
  forward: <path d="M9 5l7 7-7 7M16 12H4" />,
  "arrow-right": <path d="M5 12h13M13 6l6 6-6 6" />,
  "chevron-left": <path d="M15 5l-7 7 7 7" />,
  "chevron-right": <path d="M9 5l7 7-7 7" />,
  play: <path d="M7 4.5v15l12-7.5z" fill="currentColor" />,
  pause: (
    <>
      <rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
    </>
  ),
  skip: (
    <>
      <path d="M4 5.5v13l8-6.5z" fill="currentColor" />
      <path d="M12 5.5v13l8-6.5z" fill="currentColor" />
      <path d="M20.5 5v14" />
    </>
  ),
  restart: <path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5" />,
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="M8.5 10.5l2 2m0-2l-2 2M14 15.5a1.5 1.5 0 1 0 .01 0M9.5 16.5q2-3 5.5-5" />
    </>
  ),
  swap: <path d="M7 4L3.5 7.5 7 11M3.5 7.5H17M17 13l3.5 3.5L17 20M20.5 16.5H7" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
    </>
  ),
  share: (
    <>
      <circle cx="17.5" cy="5.5" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
      <path d="M8.7 10.8l6.6-4M8.7 13.2l6.6 4" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  dice: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <circle cx="9" cy="9" r="1.3" fill="currentColor" />
      <circle cx="15" cy="15" r="1.3" fill="currentColor" />
      <circle cx="15" cy="9" r="1.3" fill="currentColor" />
      <circle cx="9" cy="15" r="1.3" fill="currentColor" />
    </>
  ),
  bolt: <path d="M13.5 2.5L5 13.5h6l-1 8 8.5-11h-6z" fill="currentColor" />,
  warning: (
    <>
      <path d="M12 3.5L21.5 20h-19z" />
      <path d="M12 10v4.5M12 17.4v.1" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v3.5M8 20.5h8M9.5 17.5h5v3h-5z" />
    </>
  ),
  dot: <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  whistle: (
    <>
      <path d="M3.5 10.5h10.5a5 5 0 1 1-5 5H5.5a2 2 0 0 1-2-2z" />
      <path d="M14 10.5h6.5v3H18" />
      <circle cx="14" cy="15.5" r="1.4" fill="currentColor" />
    </>
  ),
  star: <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.5 19.7l1.2-6.1L3.2 9.4l6.1-.8z" fill="currentColor" />,
  home: <path d="M4 11l8-7 8 7M6.5 9.5V20h11V9.5M10 20v-5h4v5" />,
  cards: (
    <>
      <rect x="3.5" y="6" width="9" height="13" rx="2" transform="rotate(-10 8 12.5)" />
      <rect x="11" y="5" width="9" height="13" rx="2" transform="rotate(8 15.5 11.5)" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="7" width="18" height="12.5" rx="2.5" />
      <path d="M8.5 3l3.5 4 3.5-4M12 9.5v7.5M7 13.25h10" />
    </>
  ),
  gavel: <path d="M13.5 4.5l6 6M11 7l6 6M12.5 5.5l-3.5 3.5 6 6 3.5-3.5M12 12l-7.5 7.5M3.5 21h9" />,
  shield: <path d="M12 3l8 3v5.5c0 4.7-3.4 8.4-8 9.5-4.6-1.1-8-4.8-8-9.5V6z" />,
};

export function Icon({ name, className = "h-5 w-5", ...rest }: { name: IconName; className?: string } & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
