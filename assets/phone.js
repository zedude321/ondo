import React from "react";

function Phone({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_304_23681)">
        <path
          stroke={color == "white" ? 'white' : 'black'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20.25 14.93v3.3c0 1.23-1.09 2.17-2.31 2C10.6 19.21 4.79 13.4 3.77 6.06c-.17-1.22.77-2.31 2-2.31h3.3a1 1 0 01.99.83l.39 2.19c.14.77-.18 1.55-.82 2l-.89.63c1.43 2.41 3.46 4.42 5.88 5.84l.61-.87c.45-.64 1.23-.96 2-.82l2.19.39c.48.09.83.5.83.99v0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_304_23681">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Phone;
