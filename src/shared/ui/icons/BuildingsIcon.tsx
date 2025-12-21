import type { SVGProps } from "react";

export const BuildingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      d="M10.833 18.333H4.167q-2.5 0-2.5-2.5V9.167q0-2.5 2.5-2.5h4.166v9.166q0 2.5 2.5 2.5m-2.408-15c-.067.25-.092.525-.092.834v2.5H4.167V5c0-.917.75-1.667 1.666-1.667zm3.242 3.334v4.166M15 6.667v4.166m-.833 3.334H12.5a.836.836 0 0 0-.833.833v3.333H15V15a.836.836 0 0 0-.833-.833M5 10.833v3.334"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.333 15.833V4.167q0-2.5 2.5-2.5h5q2.5 0 2.5 2.5v11.666q0 2.5-2.5 2.5h-5q-2.5 0-2.5-2.5"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
