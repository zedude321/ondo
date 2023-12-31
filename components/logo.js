import { useRouter } from "next/router"

export default function Logo () {
    const router = useRouter();

    return (
        <a className="cursor-pointer" onClick={() => router.push('/')}>
            <div className="text-dark-content dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="20" viewBox="0 0 96 22">
                    <path fill="#FF0099" d="M92.045 1.868l-.104.052c-1.408.625-2.06 2.264-1.46 3.669l.052.104A2.827 2.827 0 0094.21 7.15l.104-.052c1.408-.625 2.06-2.264 1.46-3.669l-.052-.104a2.766 2.766 0 00-3.677-1.457z"></path>
                    <path fill="currentColor" d="M10.848.41h-.47C4.641.41 0 5.041 0 10.765v.469c0 5.724 4.641 10.355 10.378 10.355h.47c5.736 0 10.378-4.631 10.378-10.355v-.469C21.226 5.041 16.584.41 10.848.41zm5.606 10.72a5.73 5.73 0 01-5.737 5.724h-.26c-3.156 0-5.737-2.55-5.737-5.724v-.26a5.73 5.73 0 015.736-5.725h.261c3.155 0 5.737 2.55 5.737 5.725v.26zM78.414.41h-.47c-5.736 0-10.378 4.631-10.378 10.355v.469c0 5.724 4.642 10.355 10.379 10.355h.469c5.736 0 10.378-4.631 10.378-10.355v-.469C88.792 5.041 84.15.41 78.414.41zm-.104 16.418h-.261.26zM42.528.853v20.294h-4.72l-8.97-10.824v10.824H23.18V.853h4.745l8.97 10.823V.853h5.633z"></path>
                    <path fill="currentColor" d="M44.613.853h9.622c2.217 0 4.198.416 5.92 1.248 1.72.833 3.05 2.004 4.015 3.539.939 1.535 1.434 3.304 1.434 5.36 0 2.055-.47 3.824-1.434 5.36-.939 1.535-2.295 2.705-4.016 3.538-1.72.832-3.702 1.249-5.919 1.249h-9.622V.853zm9.388 15.714c1.747 0 3.155-.494 4.198-1.482 1.043-.99 1.59-2.342 1.59-4.085 0-1.744-.521-3.097-1.59-4.085-1.07-.989-2.451-1.483-4.198-1.483h-3.625v11.135h3.625z"></path>
                </svg>
            </div>
        </a>
    )
}