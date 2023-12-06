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
        </>
    )
}