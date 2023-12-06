import React from "react";

function Newspaper() {
  return (
    <svg className="dark:text-white text-black" xmlns="http://www.w3.org/2000/svg"width="24"height="24"fill="none"viewBox="0 0 24 24">
      <g clipPath="url(#clip0_304_23717)">
        <mask id="mask0_304_23717" style={{ maskType: "alpha" }} width="19" height="19" x="3" y="3" maskUnits="userSpaceOnUse">
          <path fill="currentColor" fillRule="evenodd" d="M22 3H3v19h19V3zm-1.5 7h-5v8a2.5 2.5 0 005 0v-8z" clipRule="evenodd"></path>
        </mask>
        <g mask="url(#mask0_304_23717)">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 20.5H6.5A2.5 2.5 0 014 18V4h11.5v6L18 20.5z" ></path>
        </g>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 10h5v8a2.5 2.5 0 01-5 0v-8zM12.5 7H7v3.5h5.5V7zM7 13.5h5.5M7 16.56h5.5" ></path>
      </g>
    </svg>
  );
}

export default Newspaper;
