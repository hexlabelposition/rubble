import type { SVGProps } from "react";

export const CalendarDaysIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M6.667 1.667v2.5m6.666-2.5v2.5M2.917 7.575h14.166m.417-.492v7.084c0 2.5-1.25 4.166-4.167 4.166H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.079 11.417h.007m-.007 2.5h.007m-3.09-2.5h.008m-.008 2.5h.008m-3.092-2.5h.007m-.007 2.5h.007"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
