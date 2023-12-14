import React from "react";

function Logos({logo, className}) {
  return (
    <>
        {logo == 'account' && 
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                <g clipPath="url(#clip0_305_31840)">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.25a9.25 9.25 0 100-18.5 9.25 9.25 0 000 18.5z" ></path>
                <path fill="currentColor" d="M6.58 13.23a.75.75 0 010-1.06l2.584-2.584A2 2 0 0110.58 9h2.843a2 2 0 011.414.586l2.583 2.583a.75.75 0 01-1.06 1.061l-1.682-1.682a.25.25 0 00-.427.177v6.525a.75.75 0 01-1.5 0v-4a.75.75 0 00-1.5 0v4a.75.75 0 01-1.5 0v-6.525a.25.25 0 00-.427-.177L7.641 13.23a.75.75 0 01-1.06 0z" ></path>
                <rect width="2.5" height="3" x="10.75" y="5" fill="currentColor" rx="1.25" ></rect>
                </g>
            </svg>
        }
        {logo == 'menu' && 
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                <path fill="currentColor" d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z"></path>
            </svg>
        }
        {logo == 'newspaper' && 
            <svg className={"dark:text-white text-black" + className} xmlns="http://www.w3.org/2000/svg"width="24"height="24"fill="none"viewBox="0 0 24 24">
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
        }
        {logo == 'phone' && 
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_304_23681)">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 14.93v3.3c0 1.23-1.09 2.17-2.31 2C10.6 19.21 4.79 13.4 3.77 6.06c-.17-1.22.77-2.31 2-2.31h3.3a1 1 0 01.99.83l.39 2.19c.14.77-.18 1.55-.82 2l-.89.63c1.43 2.41 3.46 4.42 5.88 5.84l.61-.87c.45-.64 1.23-.96 2-.82l2.19.39c.48.09.83.5.83.99v0z" ></path>
                </g>
                <defs>
                <clipPath id="clip0_304_23681">
                    <path fill="#fff" d="M0 0H24V24H0z"></path>
                </clipPath>
                </defs>
            </svg>
        }
        {logo == 'share' && 
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#clip0_113_1383)" >
                    <path d="M15.04 7.73l-6.08 3.04M15.03 16.29l-6.08-3.04M6.5 14.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM17.5 9.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zM17.5 20.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"></path>
                </g>
                <defs>
                    <clipPath id="clip0_113_1383">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'card' &&
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" clipPath="url(#clip0_113_1457)" >
                    <path strokeLinejoin="round" d="M21.75 8.75H3.25v3.5h18.5v-3.5z"></path>
                    <path strokeMiterlimit="10" d="M6.25 16.25h4.5"></path>
                    <path strokeLinejoin="round" d="M21.75 18.25V5.75a1 1 0 00-1-1H4.25a1 1 0 00-1 1v12.5a1 1 0 001 1h16.5a1 1 0 001-1z"></path>
                </g>
                <defs>
                    <clipPath id="clip0_113_1457">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'file' &&
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#clip0_113_1481)" >
                    <path d="M19.75 9.25v11c0 .55-.45 1-1 1H6.25c-.55 0-1-.45-1-1V3.75c0-.55.45-1 1-1h7"></path>
                    <path d="M13.25 9.25h6.5l-6.5-6.5v6.5zM9.25 13.75h6.5M9.25 17.25h6.5"></path>
                </g>
                <defs>
                    <clipPath id="clip0_113_1481">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'add' &&
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" clipPath="url(#clip0_113_1461)" >
                    <path strokeLinejoin="round" d="M9.75 13.75h-4.5a1 1 0 00-1 1v4.5a1 1 0 001 1h4.5a1 1 0 001-1v-4.5a1 1 0 00-1-1zM9.75 3.75h-4.5a1 1 0 00-1 1v4.5a1 1 0 001 1h4.5a1 1 0 001-1v-4.5a1 1 0 00-1-1zM19.75 3.75h-4.5a1 1 0 00-1 1v4.5a1 1 0 001 1h4.5a1 1 0 001-1v-4.5a1 1 0 00-1-1z"></path>
                    <path strokeMiterlimit="10" d="M17.5 13.75v6.5M20.75 17h-6.5"></path>
                </g>
                <defs>
                    <clipPath id="clip0_113_1461">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'chat' &&
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g clipPath="url(#clip0_301_77)">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.25 4.75h6.5c3.31 0 6 2.69 6 6v2.5c0 3.31-2.69 6-6 6H3.25v-8.5c0-3.31 2.69-6 6-6z" ></path>
                    <circle cx="8.5" cy="12" r="1" fill="currentColor"></circle>
                    <path fill="currentColor" d="M13.5 12a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    <circle cx="16.5" cy="12" r="1" fill="currentColor"></circle>
                </g>
                <defs>
                    <clipPath id="clip0_301_77">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'heart' &&
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24" >
                <g clipPath="url(#clip0_113_1477)">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 20.25s-5.808-6.013-7.493-7.727c-1.685-1.715-1.674-4.772.021-6.476a4.369 4.369 0 016.168-.022l.042.043c.445.447.774.98.975 1.544.202.49.286.65.286.65s.085-.149.276-.65a4.642 4.642 0 011.007-1.576 4.366 4.366 0 016.188 0c1.707 1.715 1.64 4.85 0 6.497-1.638 1.647-7.47 7.717-7.47 7.717z" ></path>
                </g>
                <defs>
                    <clipPath id="clip0_113_1477">
                        <path fill="currentColor" d="M0 0H24V24H0z" transform="translate(.5)"></path>
                    </clipPath>
                </defs>
            </svg>
        }
        {logo == 'mail' &&
            <svg  className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M11.5 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" ></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.248 20.219a9.25 9.25 0 114.659-5.714c-.312 1.112-1.413 1.745-2.568 1.745v0a3.09 3.09 0 01-3.089-3.09V8.225" ></path>
            </svg>
        }
    </>
  );
}

export default Logos;
