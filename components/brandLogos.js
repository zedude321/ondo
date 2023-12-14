export default function BrandLogos ({brand, className}) {
    return (
        <>
            {brand == "facebook" &&
                <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="component-iconify MuiBox-root css-yi2g96 iconify iconify--eva" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"></path>
                </svg>
            }
            {brand == "instagram" &&
                <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="component-iconify MuiBox-root css-yi2g96 iconify iconify--ant-design" width="1em" height="1em" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                </svg>
            }
            {brand == "linkedin" &&
                <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="component-iconify MuiBox-root css-yi2g96 iconify iconify--eva" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82Z"></path>
                    <rect width="4.5" height="11.7" x="3" y="9.3" fill="currentColor" rx=".9" ry=".9"></rect>
                    <circle cx="5.25" cy="5.25" r="2.25" fill="currentColor"></circle>
                </svg>
            }
            {brand == "apple" &&
                <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="256" height="315" preserveAspectRatio="xMidYMid" viewBox="0 0 256 315" >   
                    <path fill="currentColor" d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262"></path>
                </svg>
            }
            {brand == "playstore" &&
                <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" >
                    <g fill="currentColor" strokeMiterlimit="10" strokeWidth="1">
                        <path
                            d="M48.003 40.57l12.62-12.62L13.472 1.165C11.31-.072 9.32-.277 7.777.344L48.003 40.57zM4.646 5.7c-.011.202-.041.385-.041.596v77.381c0 .097.007.187.01.282L43.76 44.814 4.646 5.7zM48.003 49.057L7.498 89.562c1.578.749 3.681.569 5.974-.712l47.376-26.948-12.845-12.845zM81.721 39.931L66.04 31.02 52.246 44.814 66.26 58.828l15.461-8.786c4.899-2.8 4.899-7.35 0-10.111z"
                            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                        ></path>
                    </g>
                </svg>
            }
        </>
    )
}