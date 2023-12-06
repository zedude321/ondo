export default function SmallLogo({className}) {
    return (
        <>
            <svg className={"dark:text-white text-black " + className} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none" viewBox="0 0 48 48">
                <path fill="#FF0099" d="M41.338 8.359l-.176.088c-2.374 1.052-3.473 3.816-2.462 6.185l.088.175c1.055 2.369 3.825 3.466 6.199 2.457l.175-.088c2.374-1.053 3.474-3.816 2.462-6.185l-.088-.176c-1.01-2.412-3.78-3.509-6.198-2.456z"></path>
                <path fill="currentColor" d="M18.346 5.902h-.79C7.882 5.902.057 13.71.057 23.361v.79c0 9.65 7.825 17.458 17.497 17.458h.791c9.672 0 17.497-7.808 17.497-17.459v-.79c0-9.65-7.825-17.458-17.497-17.458zm-.175 27.68h-.44.44z"></path>
            </svg>
        </>
    )
}